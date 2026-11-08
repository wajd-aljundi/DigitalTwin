package factorydigitaltwin.gateway;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.eclipse.paho.client.mqttv3.*;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;


public final class GatewayApplication {

    private static final String BROKER_URL = System.getenv().getOrDefault("MQTT_BROKER_URL", "tcp://localhost:1883");
    private static final String SUBSCRIBE_TOPIC = "PLC/Island 1/#";
    private static final String OLD_TOPIC = "PLC/Island 1/";
    private static final String NEW_PREFIX = "DigitalTwin/";
    private static final int HTTP_PORT = Integer.parseInt(System.getenv().getOrDefault("GATEWAY_HTTP_PORT", "8082"));
    private final static Map<String, Boolean> EXECUTING_STATE = new ConcurrentHashMap<>();
    private static final ObjectMapper mapper = new ObjectMapper();

    public static void main(String[] args) throws Exception{
        MqttClient subscriber = new MqttClient(BROKER_URL, "mqttGatewaySub", new MemoryPersistence());
        MqttConnectOptions subOptions = new MqttConnectOptions();
        subOptions.setCleanSession(true);
        subscriber.connect(subOptions);

        MqttClient publisher = new MqttClient(BROKER_URL, "mqttGatewayPub", new MemoryPersistence());
        MqttConnectOptions pubOptions = new MqttConnectOptions();
        pubOptions.setCleanSession(true);
        publisher.connect(pubOptions);

        EnergyThermalSensorPublisher energyThermalSensorPublisher = new EnergyThermalSensorPublisher(publisher, EXECUTING_STATE);

        subscriber.setCallback(new MqttCallback() {
            @Override
            public void connectionLost(Throwable cause) {
                System.out.println("connectionLost: " + cause.getMessage());
            }

            @Override
            public void messageArrived(String topic, MqttMessage message) throws Exception {
                String messagePayload = new String(message.getPayload());
                updateExecutingState(topic, messagePayload);
                String newTopic = topic.replaceFirst("^PLC/", NEW_PREFIX);
                try {
                    MqttMessage relayed = new MqttMessage(message.getPayload());
                    relayed.setQos(message.getQos());
                    relayed.setRetained(false);
                    publisher.publish(newTopic, relayed);
                } catch (Exception e) {
                    System.out.println("PUBLISH FAILED for " + newTopic + ": " + e);
                }
            }

            @Override
            public void deliveryComplete(IMqttDeliveryToken token) {
                System.out.println("deliveryComplete: " + token.isComplete());
            }
        });

        subscriber.subscribe(SUBSCRIBE_TOPIC);
        GatewayHttpServer.start(HTTP_PORT, energyThermalSensorPublisher);
        ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();
        scheduler.scheduleAtFixedRate(energyThermalSensorPublisher::publishReadings, 2, 2, TimeUnit.SECONDS);
    }
    private static void updateExecutingState(String topic, String payloadJson) throws JsonProcessingException {
        if (!topic.startsWith(OLD_TOPIC)) return;
        String event = topic.substring(OLD_TOPIC.length());
        String[] parts = event.split("/");
        String stationName = parts[1];
        if (parts[parts.length -1].equals("isExecuting")){
            JsonNode root = mapper.readTree(payloadJson);
            boolean stationExecuting = root.get("value").asBoolean();
            EXECUTING_STATE.put(stationName, stationExecuting);
        }
    }

}