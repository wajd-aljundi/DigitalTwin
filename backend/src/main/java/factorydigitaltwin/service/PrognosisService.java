package factorydigitaltwin.service;

import factorydigitaltwin.Alarm;
import factorydigitaltwin.Prognosis;
import factorydigitaltwin.Station;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import static java.lang.Math.clamp;

@Service
public class PrognosisService {
    private static final double overHeatPenalty = 0.01;
    private final AlarmService alarmService;
    private final SettingsService settingsService;
    private final LiveSyncUpdateManager liveSyncUpdateManager;
    // keeps track of the date of the very first cycle with the corresponding station GEM id for estimateNextMaintenance()
    private static final Map<Long, LocalDateTime> firstCycleTime = new ConcurrentHashMap<>();

    public PrognosisService(AlarmService alarmService, SettingsService settingsService, LiveSyncUpdateManager liveSyncUpdateManager) {
        this.alarmService = alarmService;
        this.settingsService = settingsService;
        this.liveSyncUpdateManager = liveSyncUpdateManager;
    }

    public void calcWearIndex(Station station, int cycleCount){
        // calculates and updates the wear index and health of a station
        // the wear index is calculated as (completed cycles/ configurable maintenance interval in cycles) + thermal penalty
        // the thermal penalty is calculated as an overHeatPenalty * number of overheating alarms
        // it then queues updates in LiveSyncUpdateManager and calls evalWear from AlarmService
        double maintenanceIntervalCycle = settingsService.getMaintenanceIntervalCycles();
        if (cycleCount == 1) firstCycleTime.put(station.getGemId(), LocalDateTime.now());
        int activeAlarmsSinceMaint = 0;
        for (Alarm alarm : station.getAlarmsList()) {
            if (!alarm.isIsArchived()){
                if (alarm.getAlarmKind().equalsIgnoreCase("Overheating Alarm")) {
                    activeAlarmsSinceMaint += 1;
                }
            }
        }
        double thermalPenalty = (activeAlarmsSinceMaint*overHeatPenalty);
        double wearIndexValue = (cycleCount/maintenanceIntervalCycle) + thermalPenalty;
        double wearIndex = Math.round(clamp(wearIndexValue, 0.0, 1.0)*100.0)/100.0;
        double health = Math.round((1 - wearIndex)*10000.0)/100.0;
        final int activeAlarmsSinceMaintFinal = activeAlarmsSinceMaint;
        Prognosis stationPrognosis = station.getPrognosis();
        String key = station.getGemId() + "|prognosis";
        LocalDateTime maintEstimation = estimateNextMaintenance(station, maintenanceIntervalCycle);
        liveSyncUpdateManager.queue(key, ()-> {
            stationPrognosis.setWearIndex(wearIndex);
            stationPrognosis.setHealth(health);
            stationPrognosis.setTimeStamp(LocalDateTime.now());
            stationPrognosis.setMaintenanceSummary(buildSummary(station, wearIndex, activeAlarmsSinceMaintFinal)); //note: activeAlarmsSinceMaint is marked red. hovering over it shows: Variable used in lambda expression should be final or effectively final
            stationPrognosis.setNextMaintenance(maintEstimation);
            station.setCurrentWearIndex(wearIndex);
            station.setCurrentHealth(health);
        });

        alarmService.evalWear(station, wearIndex, maintEstimation);
    }

    private String buildSummary(Station station, double wearIndex, int alarmCount) {
        // returns a string containing maintenance summary based on the wear index
        if (wearIndex>=1.0) return "Maintenance overdue - immediate action required";
        if (wearIndex>=0.8) return  "High wear - maintenance recommended (" + alarmCount + "thermal events)";
        if (wearIndex >= 0.5) return "moderate wear (" + alarmCount + "thermal events)";
        return "Good condition - " + station.getCycleCount()+ "cycles completed";
    }

    private LocalDateTime estimateNextMaintenance(Station station, double maintenanceIntervalCycle) {
        // returns an estimated next maintenance date for a station object
        // It calculates the station's average cycle duration since the
        // first completed cycle and then multiplies it by the number
        // of remaining cycles. This is then added to the current localDateTime
        LocalDateTime now = LocalDateTime.now();
        double remainingCycles = maintenanceIntervalCycle - station.getCycleCount();
        double elapsedSeconds = firstCycleTime.getOrDefault(station.getGemId(), now).until(now, ChronoUnit.SECONDS);
        double avgSecsPerCycle = elapsedSeconds / station.getCycleCount();
        return now.plusSeconds(Math.round(remainingCycles*avgSecsPerCycle));
    }
}
