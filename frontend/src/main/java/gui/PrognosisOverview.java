package gui;

import factorydigitaltwin.Prognosis;
import factorydigitaltwin.Station;
import umlp.jsweet.extension.annotation.Component;

import java.util.List;

// controller for PrognosisOverview interface. It derives summary information, such as average system health and earliest maintenance date

@Component
public class PrognosisOverview extends PrognosisOverviewTOP {

    @Override
    public void init() {
        super.init();
    }

    public String getSystemHealthAvg() {
        // returns the health of the whole production line by calculating the average of all stations
        List<Station> stations = this.getStations();
        if (stations == null || stations.isEmpty()) return "N/A";
        double total = 0; int count = 0;
        for (Station s : stations) {
            Prognosis prog = s.getPrognosis();
            if (prog != null) {
                total += prog.getHealth();
                count++;
            }
        }
        return count == 0 ? "N/A" : Math.round(total / count) + "%";
    }

    public String getStationCount() {
        List<Station> stations = this.getStations();
        return stations == null ? "0" : String.valueOf(stations.size());
    }

    public String getNextMaintenanceDate() {
        // returns the earliest maintenance date across all stations
        List<Station> stations = this.getStations();
        if (stations == null || stations.isEmpty()) return "N/A";
        String earliest = null;
        for (Station s : stations) {
            Prognosis prog = s.getPrognosis();
            if (prog != null) {
                java.time.LocalDateTime dt = prog.getNextMaintenance();
                String d = dt != null ? dt.toLocalDate().toString() : "N/A";
                if (earliest == null || d.compareTo(earliest) < 0) {
                    earliest = d;
                }
            }
        }
        return earliest != null ? earliest : "N/A";
    }

    public String getNextMaintenanceDateForPrognosis(Station station) {
        // returns the maintenance date from the selected prognosis object belonging to the selected station
        Prognosis prognosis = station.getPrognosis();
        if (prognosis == null || prognosis.getNextMaintenance() == null) return "N/A";
        return prognosis.getNextMaintenance().toString();
    }


}