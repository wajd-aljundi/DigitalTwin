package gui;

import factorydigitaltwin.Signal;
import factorydigitaltwin.Station;
import jsweet.lang.Replace;
import umlp.jsweet.extension.annotation.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

// controller for SignalOverview interface. It manages display of signals, filtering per station and requests for csv export


@Component(tsImports = {})
public class SignalOverview extends SignalOverviewTOP {


    @Override
    public void init() {
        super.init();
        if (this.getSelectedStationName() == null && this.getStations() != null && !this.getStations().isEmpty()) {
            this.setSelectedStationName(this.getStations().get(0).getName());
        }
    }


    public Consumer<Void> openExportDialog(){
        return res -> this.setExportDialogOpen(true);
    }
    public Consumer<Void> closeExportDialog(){
        return res -> this.setExportDialogOpen(false);
    }
    public Consumer<Void> exportCsv(){
        // Creates the callback that performs the csv download.
        // the optional time window input is converted into query parameters and appended to the signal export endpoint
        // The download is opened in a new tab then the export is UI is closed
        return res -> {
            String url = "/umlp/api/export/signals" + buildQuery();
            navigateToDownload(url);
            this.setExportDialogOpen(false);
        };
    }


    @Replace("window.open(url, '_blank')")
    private void navigateToDownload(String url) {
        //navigates the user to CSV download
        //jsweet replaces this method with the specified expression in the @Replace
    }


    private String buildQuery() {
        // builds the query string that holds the parameters for the csv export request
        // the result is either an empty string if no time window was inputted or a string
        // containing either one or both dates. Example: ?from=2026-01-01T00:00&to=2026-01-31T23:59
        String from = this.getExportFrom();
        String to = this.getExportTo();
        StringBuilder sb = new StringBuilder();
        if(from!=null && !from.isEmpty()){
            sb.append(sb.length()==0?"?":"&").append("from=").append(from);
        }
        if(to!=null && !to.isEmpty()){
            sb.append(sb.length()==0?"?":"&").append("to=").append(to);
        }
        return sb.toString();
    }

    public List<String> getStationNames(List<Station> stations){
        List<String> names = new ArrayList<>();
        if(stations==null) return names;
        for (Station s : stations){
            names.add(s.getName());
        }
        return names;
    }

    public Consumer<Void> selectStationFilter(String name){
        return res -> this.setSelectedStationName(name);
    }

    public Boolean matchesStationFilter(Signal signal, String selectedStationName){
        // filters the signals according to the filter selected in the interface
        if (signal == null) return false;
        Station station = signal.getStation();
        if(station == null) return false;
        if(selectedStationName!=null && !selectedStationName.isEmpty() && !selectedStationName.equalsIgnoreCase(station.getName())){
            return false;
        }
        return true;
    }

    public Consumer<Void> selectAllSignals(){
        return res -> this.setSelectedStationName(null);
    }

    public String getSignalKindText(Signal signal){
        return signal.getSignalKind() != null ? signal.getSignalKind().toString() : "-";
    }
    public String getSignalCategoryText(Signal signal){
        return signal.getCategory() != null ? signal.getCategory().toString() : "-";
    }
    public String getSignalTimestampText(Signal signal){
        return signal.getLastUpdated() != null ? signal.getLastUpdated().toString() : "-";
    }

}
