package factorydigitaltwin.service;



import factorydigitaltwin.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;

//Service responsible for detecting anomalies and triggers alarms accordingly


@Service
public class AlarmService {
    // settingsService is used to fetch the thresholds either as defaults or from the user input
    private final SettingsService settingsService;
    // tracks whether a station has an active overheating alarm, saved as (station GEM id, boolean)
    private static final Map<Long, Boolean> overheatActive = new ConcurrentHashMap<>();
    // tracks whether a station has an active maintenance alarm, saved as (station GEM id, boolean)
    private static final Map<Long, Boolean> maintenanceDueActive = new ConcurrentHashMap<>();

    public AlarmService(SettingsService settingsService){
        this.settingsService=settingsService;
    }

    public void evalTemps(Station station, double temp){
        // compares the current temperature to the threshold inputted by the user
        // if a temperature crosses the overheating threshold an overheatingThreshold is triggered
        // if an overheating threshold is active and a station cools down below the overheatClearThreshold then it releases a clearOverheatAlarm
        ThermalSettings thermalSettings = settingsService.getThermalSettings();
        double overheatThreshold = thermalSettings.getOverheatThreshold();
        double overheatClearThreshold = thermalSettings.getOverheatClearThreshold();
        boolean currentlyActive = overheatActive.getOrDefault(station.getGemId(), false);
        if(!currentlyActive && temp>=overheatThreshold){
            sendOverheatingAlarm(station, temp);
            return;
        }
        if(currentlyActive && temp<=overheatClearThreshold){
            clearOverheatAlarm(station, temp);
        }
    }

    public void evalWear(Station station, double wearIndex, LocalDateTime maintEstimation){
        // releases a maintenance due alarm if the maintenance date is due or if the wearIndex reaches 1.0 and changes maintenanceDueActive accordingly
        if(wearIndex>=1.0 || maintEstimation.isEqual(LocalDateTime.now())) {
            boolean alreadyActive = maintenanceDueActive.getOrDefault(station.getGemId(), false);
            if(!alreadyActive){
                sendMaintenanceDueAlarm(station);
                maintenanceDueActive.put(station.getGemId(), true);
            }
        }else if (wearIndex<0.8){
            maintenanceDueActive.put(station.getGemId(), false);
        }
    }

    private void sendMaintenanceDueAlarm(Station station) {
        // creates a maintenance alarm for a station with the alarm status to active
        // the station state is set to ERROR and the alarm count is increased by one
        AlarmStatus alarmStatus = AlarmStatus.ACTIVE;
        String msg = "Station: " + station.getName() + " needs service";
        station.setLatestAlarmMessage(msg);
        new AlarmBuilder(FactoryDigitalTwinManager.getFreeGemId())
                .timeStamp(LocalDateTime.now())
                .alarmKind("Maintenance Alarm")
                .alarmMessage(msg)
                .status(alarmStatus)
                .station(station)
                .build()
                .orElseThrow(()-> new RuntimeException("send alarm error: " + station.getName()));
        station.setLatestAlarmKind("Maintenance Alarm");
        station.setAlarmCount(station.getAlarmCount()+1);
        station.setState(StationState.ERROR);
    }

    private void clearOverheatAlarm(Station station, double temp) {
        // creates a clearOverheatAlarm for a station with the alarm status to clear
        // the station state is set to either ACTIVE or READY_IDLE, depending on
        // whether the station is executing and if the station is not set to ERROR or OVERHEATED
        // and the alarm count is increased by one
        String msg = "Station: " + station.getName() + " is cooling down with currently at temperature: " +temp;
        station.setLatestAlarmKind("Notification Alarm");
        station.setLatestAlarmMessage(msg);
        new AlarmBuilder(FactoryDigitalTwinManager.getFreeGemId())
                .timeStamp(LocalDateTime.now())
                .alarmKind("Notification Alarm")
                .alarmMessage(msg)
                .status(AlarmStatus.CLEARED)
                .station(station)
                .build()
                .orElseThrow(()-> new RuntimeException("send alarm error: " + station.getName()));
        overheatActive.put(station.getGemId(), false);
        station.setAlarmCount(Math.max(station.getAlarmCount()-1,0));
        if (station.getState()!=StationState.ERROR) station.setState(station.isIsExecuting() ? StationState.ACTIVE : StationState.READY_IDLE);
    }

    private void sendOverheatingAlarm(Station station, double temp) {
        // creates an overheating alarm for a station with the alarm status to active
        // the station state is set to OVERHEATED, if the station is not set to ERROR
        // and the alarm count is increased by one
        String msg = "Station " + station.getName() + " is overheated, currently at " + temp + "°C";
        station.setLatestAlarmKind("Overheating Alarm");
        station.setLatestAlarmMessage(msg);
        new AlarmBuilder(FactoryDigitalTwinManager.getFreeGemId())
                .timeStamp(LocalDateTime.now())
                .alarmKind("Overheating Alarm")
                .alarmMessage(msg)
                .station(station)
                .status(AlarmStatus.ACTIVE)
                .build()
                .orElseThrow(()-> new RuntimeException("send alarm error: " + station.getName()));
        overheatActive.put(station.getGemId(), true);
        station.setAlarmCount(station.getAlarmCount()+1);
        if (station.getState()!=StationState.ERROR) station.setState(StationState.OVERHEATED);
    }
}

