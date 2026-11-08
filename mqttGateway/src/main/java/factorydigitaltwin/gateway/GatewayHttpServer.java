package factorydigitaltwin.gateway;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;

public class GatewayHttpServer {
    private static final ObjectMapper mapper = new ObjectMapper();
    private static final String ALLOWED_ORIGIN = System.getenv().getOrDefault("ALLOWED_ORIGIN", "http://localhost:4200");

    public static void start(int port, EnergyThermalSensorPublisher energyThermalSensorPublisher) throws IOException {
        HttpServer httpServer = HttpServer.create(new InetSocketAddress(port), 0);
        httpServer.createContext("/config/thermal", exchange->handleThermal(exchange, energyThermalSensorPublisher));
        httpServer.createContext("/config/power/", exchange -> handlePower(exchange, energyThermalSensorPublisher));
        httpServer.start();
    }

    private static void handlePower(HttpExchange exchange, EnergyThermalSensorPublisher energyThermalSensorPublisher) throws IOException {
        if(!prepareCors(exchange)) {
            return;
        }
        try{
            String path = exchange.getRequestURI().getPath();
            String stationName = path.substring("/config/power/".length());
            JsonNode body = mapper.readTree(exchange.getRequestBody());
            energyThermalSensorPublisher.updateStationPower(stationName, body.get("activePowerWatt").asDouble(), body.get("idlePowerWatt").asDouble());
            respond(exchange, 200, "{\"status\":\"ok\"}");
        }catch (Exception e){
            respond(exchange, 400, "{\"error\":\"" + e.getMessage() + "\"}");
        }
    }

    private static void handleThermal(HttpExchange exchange, EnergyThermalSensorPublisher energyThermalSensorPublisher) throws IOException {
        if(!prepareCors(exchange)) return;
        try{
            JsonNode body = mapper.readTree(exchange.getRequestBody());
            energyThermalSensorPublisher.updateThermalConfig(
                    body.get("minTempCelsius").asDouble(),
                    body.get("maxTempCelsius").asDouble(),
                    body.get("heatingRatePerTick").asDouble(),
                    body.get("coolingRatePerTick").asDouble()
            );
            energyThermalSensorPublisher.resetRuntimeState();
            respond(exchange, 200, "{\"status\":\"ok\"}");
        }catch (Exception e){
            respond(exchange, 400, "{\"error\":\"" + e.getMessage() + "\"}");
        }
    }
    private static boolean prepareCors(HttpExchange exchange) throws IOException {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "POST, OPTIONS");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");
        if("OPTIONS".equals(exchange.getRequestMethod())){
            exchange.sendResponseHeaders(204, -1);
            exchange.close();
            return false;
        }
        if(!"POST".equalsIgnoreCase(exchange.getRequestMethod())){
            respond(exchange, 405, "{\"error\":\"method not allowed\"}");
            return false;
        }
        return true;
    }

    private static void respond(HttpExchange exchange, int statusCode, String body) throws IOException {
        byte[] bytes = body.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().add("Content-Type", "application/json");
        exchange.sendResponseHeaders(statusCode, bytes.length);
        try (OutputStream os = exchange.getResponseBody()){
            os.write(bytes);
        }
        exchange.close();
    }
}
