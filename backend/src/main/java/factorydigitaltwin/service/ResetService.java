package factorydigitaltwin.service;

import factorydigitaltwin.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class ResetService {

    private final StationRegistry stationRegistry;

    public ResetService(StationRegistry stationRegistry) {
        this.stationRegistry = stationRegistry;
    }

    public void resetAllStationData(){
        // resets all stationData
        // sets all existing alarms to archived
        // resets station data
        // resets signal values to a default "-"
        // resets prognosis ad maintenance information
        for (Station station : stationRegistry.getAll()){
            resetSignals(station);
            for(Alarm alarm : station.getAlarmsList()){
                alarm.setIsArchived(true);
            }

            station.setCycleCount(0);
            station.setAlarmCount(0);
            station.setCurrentWearIndex(0.0);
            station.setCurrentHealth(100.0);
            station.setTotalEnergyConsumedWh(0.0);
            station.setLatestAlarmKind("NONE");
            station.setLatestAlarmMessage("No active alarm");
            station.setState(StationState.POWER_ON_IDLE);
            station.setIsExecuting(false);
            Prognosis p = station.getPrognosis();
            if(p!=null){
                p.setWearIndex(0.0);
                p.setHealth(100.0);
                p.setTimeStamp(LocalDateTime.now());
                p.setNextMaintenance(LocalDateTime.now().plusDays(30));
                p.setMaintenanceSummary("No cycles completed yet");
            }
        }
    }



    private void resetSignals(Station station){
        for(Signal signal : station.getSignalsList()){
            signal.setCurrentValue("-");
        }
    }
}
