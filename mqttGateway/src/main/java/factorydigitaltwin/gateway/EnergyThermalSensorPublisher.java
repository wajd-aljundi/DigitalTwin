package factorydigitaltwin.gateway;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;

import java.nio.charset.StandardCharsets;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import static java.lang.Math.max;
import static java.lang.Math.min;


public class EnergyThermalSensorPublisher {

    private static final String PREFIX = "DigitalTwin/Island 1/";
    private static final Map<String, String> STATION_TYPES = Map.of("VacuumGripper01", "VacuumGripper","VacuumGripper02", "VacuumGripper","HighBay01", "HighBay", "MultiProcessing01", "MultiProcessing", "SortingLine01", "SortingLine", "ConveyorBelt01", "ConveyorBelt", "PunchingMachine01", "PunchingMachine");
    private final MqttClient publisher;
    private final Map<String, Boolean> executingState;
    private final Map<String, Double> currentTemps = new HashMap<>();
    private final ObjectMapper mapper = new ObjectMapper();
    private volatile double minTemp = 20.0;
    private volatile double maxTemp = 95.0;
    private volatile double heatingRate = 5.0;
    private volatile double coolingRate = 1.0;
    private final Map<String, Double> activePowerByStation = new ConcurrentHashMap<>();
    private final Map<String, Double> idlePowerByStation = new ConcurrentHashMap<>();
    private static final double DEFAULT_ACTIVE_POWER = 2000.0;
    private static final double DEFAULT_IDLE_POWER = 500.0;

    public EnergyThermalSensorPublisher(MqttClient publisher, Map<String, Boolean> executingState) {
        this.publisher = publisher;
        this.executingState = executingState;
    }

    public void updateThermalConfig(double minTemp, double maxTemp, double heatingRate, double coolingRate){
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.heatingRate = heatingRate;
        this.coolingRate = coolingRate;
    }

    public void updateStationPower(String stationName, double activePower, double idlePower){
        activePowerByStation.put(stationName, activePower);
        idlePowerByStation.put(stationName, idlePower);
    }

    public void resetRuntimeState(){
        currentTemps.clear();
        executingState.clear();
    }

    public void publishReadings(){
        for(String stationName : STATION_TYPES.keySet()){
            try {
                publishForStation(stationName);
            }catch (Exception e){
                System.out.println("EnergyThermalSensorPublisher error for "+stationName+" : "+e.getMessage());
            }
        }
    }

    private void publishForStation(String stationName) throws JsonProcessingException, MqttException {
        String stationType = STATION_TYPES.get(stationName);
        Boolean isExecuting = executingState.getOrDefault(stationName, false);
        Double currentStationTemp = currentTemps.getOrDefault(stationName, minTemp);
        Double currentStationPower;
        if (isExecuting){
            currentStationTemp = min(currentStationTemp+heatingRate, maxTemp);
            currentStationPower = getActivePower(stationName);

        } else{
            currentStationTemp = max(currentStationTemp-coolingRate, minTemp);
            currentStationPower = getIdlePower(stationName);
        }
        currentTemps.put(stationName, currentStationTemp);

        String baseTopic = PREFIX + stationType + "/" + stationName + "/measurements/internal/";
        publishMeasurement(baseTopic + "currentPowerInWatt", currentStationPower);
        publishMeasurement(baseTopic + "currentTempCelsius", currentStationTemp);

    }

    private void publishMeasurement(String topic, Double measurement) throws JsonProcessingException, MqttException {
        String payLoad = buildMqttPayLoad(measurement);
        MqttMessage message = new MqttMessage(payLoad.getBytes(StandardCharsets.UTF_8));
        message.setQos(0);
        message.setRetained(false);
        publisher.publish(topic, message);
    }


    private String buildMqttPayLoad(Double measurement) throws JsonProcessingException {
        Map<String, Object> payload = new HashMap<>();
        payload.put("value", measurement);
        payload.put("timestamp", OffsetDateTime.now().toString());
        return mapper.writeValueAsString(payload);
    }

    private double getActivePower(String stationName) {
        return activePowerByStation.getOrDefault(stationName, DEFAULT_ACTIVE_POWER);
    }

    private double getIdlePower(String stationName) {
        return idlePowerByStation.getOrDefault(stationName, DEFAULT_IDLE_POWER);
    }


}
