package factorydigitaltwin.service;


import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;


// Service responsible for persistent logging of measurements, command events, command feedback, machine feedback and Station statuses
// The logging is done in batches

@Service
public class LogService {

    private final JdbcTemplate jdbcTemplate;
    private final BlockingQueue<Object[]> measurementBuffer = new LinkedBlockingQueue<>();
    private final BlockingQueue<Object[]> commandEventBuffer = new LinkedBlockingQueue<>();
    private final BlockingQueue<Object[]> commandFeedbackBuffer = new LinkedBlockingQueue<>();
    private final BlockingQueue<Object[]> statusBuffer = new LinkedBlockingQueue<>();

    public LogService(JdbcTemplate measurementLogJdbcTemplate){
        // creates log tables
        this.jdbcTemplate = measurementLogJdbcTemplate;
        jdbcTemplate.execute("""
                CREATE TABLE IF NOT EXISTS measurement_log (
                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                    station_name VARCHAR(255),
                    signal_name VARCHAR(255),
                    category VARCHAR(50),
                    kind VARCHAR(50),
                    topic VARCHAR(650),
                    string_value VARCHAR(255),
                    reading_timestamp TIMESTAMP
                )
                """);
        jdbcTemplate.execute(
          "CREATE INDEX IF NOT EXISTS idx_measurement_log_ts ON measurement_log(reading_timestamp)"
        );
        jdbcTemplate.execute("""
                CREATE TABLE IF NOT EXISTS command_event_log (
                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                    station_name VARCHAR(255),
                    command_id VARCHAR(255),
                    command_kind VARCHAR(255),
                    parameters VARCHAR(1000),
                    event_timestamp TIMESTAMP
                )
                """);
        jdbcTemplate.execute(
          "CREATE INDEX IF NOT EXISTS idx_command_event_log_ts ON command_event_log(event_timestamp)"
        );
        jdbcTemplate.execute("""
                CREATE TABLE IF NOT EXISTS command_feedback_log (
                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                    station_name VARCHAR(255),
                    command_id VARCHAR(255),
                    status VARCHAR(50),
                    event_timestamp TIMESTAMP
                )
                """);
        jdbcTemplate.execute(
          "CREATE INDEX IF NOT EXISTS idx_command_feedback_log_ts ON command_feedback_log(event_timestamp)"
        );
        jdbcTemplate.execute("""
                CREATE TABLE IF NOT EXISTS status_log (
                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                    station_name VARCHAR(255),
                    station_status VARCHAR(255),
                    message VARCHAR(50),
                    event_timestamp TIMESTAMP
                )
                """);
        jdbcTemplate.execute(
          "CREATE INDEX IF NOT EXISTS idx_status_log_ts ON status_log(event_timestamp)"
        );

    }
    // Queues the object in a buffer before writing it into the data base
    public void logMeasurement(String stationName, String signalName, String category, String kind, String topic, String value, LocalDateTime timestamp){
        measurementBuffer.add(new Object[]{stationName, signalName, category, kind, topic, value, timestamp});
    }
    public void logCommandEvent(String stationName, String commandId, String commandKind, String parameters, LocalDateTime timestamp){
        commandEventBuffer.add(new Object[]{stationName, commandId, commandKind, parameters, timestamp});
    }
    public void logCommandFeedback(String stationName, String commandId, String status, LocalDateTime timestamp){
        commandFeedbackBuffer.add(new Object[]{stationName, commandId, status, timestamp});
    }
    public void logStatus(String stationName, String stationStatus, String msg, LocalDateTime timestamp){
        statusBuffer.add(new Object[]{stationName, stationStatus, msg, timestamp});
    }

    @Scheduled(fixedRate = 1000)
    public void flush(){
    // persists buffered log entries to the database once per second
        flushBuffer(measurementBuffer,
                "INSERT INTO measurement_log " +
                      "(station_name, signal_name, category, kind, topic, string_value, reading_timestamp) " +
                      "VALUES (?, ?, ?, ?, ?, ?, ?)"
        );
        flushBuffer(commandEventBuffer,
                "INSERT INTO command_event_log " +
                      "(station_name, command_id, command_kind, parameters, event_timestamp) " +
                      "VALUES (?, ?, ?, ?, ?)"
        );
        flushBuffer(commandFeedbackBuffer,
                "INSERT INTO command_feedback_log " +
                      "(station_name, command_id, status, event_timestamp) " +
                      "VALUES (?, ?, ?, ?)"
        );
        flushBuffer(statusBuffer,
                "INSERT INTO status_log " +
                      "(station_name, station_status, message, event_timestamp) " +
                      "VALUES (?, ?, ?, ?)"
        );


    }

    private void flushBuffer(BlockingQueue<Object[]> buffer, String sql){
        // flushes a portion of one log buffer to the database
        if(buffer.isEmpty()) return;
        List<Object[]> batch = new ArrayList<>();
        buffer.drainTo(batch, 2000);
        if(batch.isEmpty()) return;
        jdbcTemplate.batchUpdate(sql, batch);
    }


    // retrieves measurement log entries within the specified time range
    public List<Map<String, Object>> queryMeasurementRange(LocalDateTime from, LocalDateTime to){
        return jdbcTemplate.queryForList(
                "SELECT * FROM measurement_log WHERE reading_timestamp BETWEEN ? AND ? ORDER BY reading_timestamp LIMIT 100000",
                from, to
        );
    }
    public List<Map<String, Object>> queryCommandEventRange(LocalDateTime from, LocalDateTime to){
        return jdbcTemplate.queryForList(
                "SELECT * FROM command_event_log WHERE event_timestamp BETWEEN ? AND ? ORDER BY event_timestamp LIMIT 100000",
                from, to
        );
    }
    public List<Map<String, Object>> queryCommandFeedbackRange(LocalDateTime from, LocalDateTime to){
        return jdbcTemplate.queryForList(
                "SELECT * FROM command_feedback_log WHERE event_timestamp BETWEEN ? AND ? ORDER BY event_timestamp LIMIT 100000",
                from, to
        );
    }
    public List<Map<String, Object>> queryStatusRange(LocalDateTime from, LocalDateTime to){
        return jdbcTemplate.queryForList(
                "SELECT * FROM status_log WHERE event_timestamp BETWEEN ? AND ? ORDER BY event_timestamp LIMIT 100000",
                from, to
        );
    }


}
