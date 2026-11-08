package factorydigitaltwin.service;

import factorydigitaltwin.Station;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

// Registery for station objects managed by the DT

@Component
public class StationRegistry {
    // maps a station name to its corresponding station object
    private final HashMap<String, Station> stationRegistryByName = new HashMap<>();

    public void register(String stationName, Station station){
        stationRegistryByName.put(stationName, station);
    }

    public Station getStationByName(String stationName){
        return stationRegistryByName.get(stationName);
    }

    public List<Station> getAll(){
        return new ArrayList<>(stationRegistryByName.values());
    }

}
