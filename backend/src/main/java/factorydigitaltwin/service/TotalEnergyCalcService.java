package factorydigitaltwin.service;

import factorydigitaltwin.Station;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

// service for calculating the total energy consumption of a station
@Service
public class TotalEnergyCalcService {

    //stores the last power reading of each station of pairs as (GEM station id, timestamp)
    private final Map<Long, LocalDateTime> lastPowerReading = new ConcurrentHashMap<>();

    // calculates the energy consumed by a station since its last reading and adds it to the accumulated sum
    // the result is a Watt per hour measurement
    public void calcTotalPowerInput(Station station, double powerWatt){
        LocalDateTime now = LocalDateTime.now();
        double timeDiffInSecs = lastPowerReading.getOrDefault(station.getGemId(), now).until(now, ChronoUnit.SECONDS);
        double elapsedTimeInSecs = Math.max(timeDiffInSecs, 0.0);
        lastPowerReading.put(station.getGemId(), now);
        double energyInWh = powerWatt*(elapsedTimeInSecs/3600.0);
        station.setTotalEnergyConsumedWh(station.getTotalEnergyConsumedWh()+energyInWh);
    }
}
