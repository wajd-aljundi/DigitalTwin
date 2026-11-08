package factorydigitaltwin.service;


import factorydigitaltwin.Alarm;
import factorydigitaltwin.Station;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;

// REST endpoint for exporting digital twin data as CSV files

@CrossOrigin(origins = "http://localhost")
@RestController
@RequestMapping("/export")
public class CsvExportEndpoint {
    private final LogService logService;
    private final StationRegistry stationRegistry;

    public CsvExportEndpoint(LogService logService, StationRegistry stationRegistry) {
        this.logService = logService;
        this.stationRegistry = stationRegistry;
    }

    @GetMapping("/signals")
    public ResponseEntity<byte[]> exportSignals(@RequestParam(required = false) String from, @RequestParam(required = false) String to){
        // exports recorded signal measurements as a CSV file within an input time frame
        // the measurements are retrieved from the logging database through logService
        // and converted into CSV rows before returning it as a downloadable file
        LocalDateTime[] range = normalizeRange(from, to);
        LocalDateTime fromDt = range[0];
        LocalDateTime toDt = range[1];
        StringBuilder csv = new StringBuilder();
        appendRow(csv, "Station", "Signal", "Category", "Kind", "Topic", "Value", "Timestamp");
        for (Map<String, Object> r : logService.queryMeasurementRange(fromDt, toDt)){
            appendRow(csv,
                    String.valueOf(r.get("station_name")),
                    String.valueOf(r.get("signal_name")),
                    String.valueOf(r.get("category")),
                    String.valueOf(r.get("kind")),
                    String.valueOf(r.get("topic")),
                    String.valueOf(r.get("string_value")),
                    String.valueOf(r.get("reading_timestamp"))
            );
        }
        return csvResponse(csv.toString(), "signals_export.csv");

    }

    @GetMapping("/alarms")
    public ResponseEntity<byte[]> exportAlarms(@RequestParam(required = false) String from, @RequestParam(required = false) String to){
        // exports recorded alarms as a CSV file within an input time frame
        // the alarms are retrieved directly from the in-memory station model
        // and converted into CSV rows before returning it as a downloadable file
        LocalDateTime[] range = normalizeRange(from, to);
        LocalDateTime fromDt = range[0];
        LocalDateTime toDt = range[1];
        StringBuilder csv = new StringBuilder();
        appendRow(csv, "Station", "Alarm Kind", "Status", "Message", "Timestamp");
        for(Station station: stationRegistry.getAll()){
            for(Alarm alarm : station.getAlarmsList()){
                LocalDateTime ts = alarm.getTimeStamp();
                if(ts==null || ts.isBefore(fromDt) ||ts.isAfter(toDt)) continue;
                appendRow(csv, station.getName(), alarm.getAlarmKind(), alarm.getStatus().toString(), alarm.getAlarmMessage(), ts.toString());
            }
        }

        return csvResponse(csv.toString(), "alarms_export.csv");

    }

    private LocalDateTime[] normalizeRange(String from, String to){
        // normalizes the optional time range input and returns it
        // if the "from" input is after the "to" input, they are swapped so the range is chronological
        LocalDateTime fromDt = parse(from, LocalDateTime.MIN);
        LocalDateTime toDt = parse(to, LocalDateTime.MAX);
        if(fromDt.isAfter(toDt)){
            LocalDateTime tmp = fromDt;
            fromDt = toDt;
            toDt = tmp;
        }
        return new LocalDateTime[]{fromDt, toDt};
    }

    private LocalDateTime parse(String val, LocalDateTime fallback) {
        // parses a localdatetime
        // if the input is empty or invalid, it returns a fallback value
        if(val == null || val.isBlank()) return fallback;
        try {
            return LocalDateTime.parse(val);
        }catch (DateTimeParseException e){
            return fallback;
        }
    }

    private ResponseEntity<byte[]> csvResponse(String csv, String filename) {
        // creates an HTTP response containing a downloadable UTF-8 CSV file
        byte[] body = csv.getBytes(StandardCharsets.UTF_8);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+filename+"\"")
                .contentType(MediaType.parseMediaType("text/csv; charset=UTF-8"))
                .body(body);
    }

    private void appendRow(StringBuilder csv, String... fields) {
        // appends one csv row to the supplied stringBuilder csv
        for (int i = 0; i < fields.length; i ++){
            if(i>0) csv.append(",");
            csv.append(escape(fields[i]));
        }
        csv.append("\r\n");
    }
    private String escape(String field){
        // escapes a single CSV field according to standard CSV quoting rules
        if(field == null) return "";
        boolean needsQuoting = field.contains(",") || field.contains("\"") || field.contains("\n");
        String escaped = field.replace("\"", "\"\"");
        return needsQuoting? "\"" + escaped + "\"" : escaped;
    }
}
