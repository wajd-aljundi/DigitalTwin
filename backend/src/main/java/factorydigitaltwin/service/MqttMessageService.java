package factorydigitaltwin.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import factorydigitaltwin.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

import static java.lang.Double.parseDouble;
import static java.lang.Integer.parseInt;

@Service
public class MqttMessageService {



    private static final String TOPIC_PREFIX  = "DigitalTwin/Island 1/";
    private static final String ISLAND_EVENTS = "events/received/message";
    private final TotalEnergyCalcService totalEnergyCalcService;
    private final LogService logService;
    private final StationRegistry registry;
    private final AlarmService alarmService;
    private final PrognosisService prognosisService;
    private final LiveSyncUpdateManager liveSyncUpdateManager;
    private final ObjectMapper     mapper;


    public MqttMessageService(TotalEnergyCalcService totalEnergyCalcService, LogService logService, StationRegistry registry, AlarmService alarmService, PrognosisService prognosisService, LiveSyncUpdateManager liveSyncUpdateManager) {
        this.totalEnergyCalcService = totalEnergyCalcService;
        this.logService = logService;
        this.registry = registry;
        this.alarmService = alarmService;
        this.prognosisService = prognosisService;
        this.liveSyncUpdateManager = liveSyncUpdateManager;
        this.mapper   = new ObjectMapper();
    }

    public void handleMessage(String topic, String payload) {
        // entry point for incoming MQTT messages. messages are then process in process()
        try {
            process(topic, payload);
        } catch (Exception e) {
            System.err.println("\n######Topic error: " + topic + ": " + e.getMessage() + "\n\n");
        }
    }

    private void process(String topic, String payload){
        // routes MQTT messages with the expected prefix to the appropriate processing method
        try {
            if (!topic.startsWith(TOPIC_PREFIX)) return;
            String event = topic.substring(TOPIC_PREFIX.length());
            if (event.equals(ISLAND_EVENTS)){
                return;
            }
            String[] parts = event.split("/");
            if(parts.length<3) return;
            String stationName = parts[1];
            Station station = registry.getStationByName(stationName);
            if (station == null){
                return;
            }
            if("events".equalsIgnoreCase(parts[2])){
                handleStationEvent(station, parts, payload, topic);
            }else {
                handleSignal(station, parts, payload, topic);
            }
        } catch (Exception e) {
            System.out.println("Error while processing topic: " + topic);
            return;
        }

    }

    private void handleSignal(Station station, String[] parts, String payload, String topic) {
        // processes ordinary signals.
        // The corresponding signal object is returned by resolveSignal().
        // It extracts the signal value and timestamp and then queues the update for the signal object
        // in LiveSyncUpdateManager.
        // It logs the incoming measurement and then updates the corresponding field using updateStationFields()
        try {
             JsonNode root = mapper.readTree(payload);
             String value = extractValue(root);
             LocalDateTime ts = extractTimeStamp(root);
             Signal signal = resolveSignal(station, parts, topic);
             try {
                 String key = station.getGemId() + "|signal|" + signal.getGemId();
                 liveSyncUpdateManager.queue(key, () -> {
                     if(!value.equalsIgnoreCase(signal.getCurrentValue())){
                        signal.setCurrentValue(value);
                        signal.setLastUpdated(LocalDateTime.now());
                    }
                 });
             } catch (Exception e) {
                 System.out.println("SET CURRENT VALUE FAILED");
                 e.printStackTrace();
             }

             logService.logMeasurement(station.getName(), signal.getName(), signal.getCategory().toString(), signal.getSignalKind().toString(), topic, value, ts);
             updateStationFields(station, signal.getName(), value);
         } catch (Exception e){
             System.out.println("handling signal error, topic: " +topic);
             return;
         }
    }

    private Signal resolveSignal(Station station, String[] parts, String topic) {
        // finds the signal object corresponding to a topic
        // if none is found, a new messages is created in SignalFactory
        for (int i= 0; i<station.sizeSignalss(); i++) {
            Signal s = station.getSignals(i);
            if (topic.equals(s.getTagPath())) return s;
        }
        return SignalFactory.build(parts, topic, station);
    }


    private void updateStationFields(Station station, String signalName, String value) {
        // updates station specific properties based on signal names
        // the updates are queued using LiveSyncUpdateManager
        if(signalName == null) return;
        boolean bVal = "true".equalsIgnoreCase(value);
        if("currentTempCelsius".equalsIgnoreCase(signalName)){
            double dValTemp = parseDouble(value);
            String key = station.getGemId() + "|temp";
            liveSyncUpdateManager.queue(key, () ->{
                if(dValTemp != station.getCurrentTempCelsius()){
                    station.setCurrentTempCelsius(dValTemp);
                }
            });
            alarmService.evalTemps(station, dValTemp);
            return;
        }
        if ("currentPowerInWatt".equalsIgnoreCase(signalName)){
            double dValPower = parseDouble(value);
            String key = station.getGemId() + "|power";
            liveSyncUpdateManager.queue(key, () ->{
                if(dValPower!=station.getCurrentPowerWatt()){
                    station.setCurrentPowerWatt(dValPower);
                    if(station.isIsExecuting()){
                        station.setActivePowerInWatt(dValPower);
                    }else {
                        station.setIdlePowerWatt(dValPower);
                    }
                }
                totalEnergyCalcService.calcTotalPowerInput(station, dValPower);
            });
            return;
        }
        if("isExecuting".equalsIgnoreCase(signalName)) {
            String key = station.getGemId() + "|isExecuting";
            liveSyncUpdateManager.queue(key, ()->{
                if(station.isIsExecuting() != bVal){
                    station.setIsExecuting(bVal);
                }
            });
            return;
        }
        if(station instanceof VacuumGripper v) {
            String key;
            switch (signalName) {
                case "vacuumSensVerticalEncoderCounter":
                    key = station.getGemId() + "|vacuumSensVerticalEncoderCounter";
                    liveSyncUpdateManager.queue(key, () ->{
                        if(v.getCurrentVerticalCounter()!=parseInt(value)){
                            v.setCurrentVerticalCounter(parseInt(value));
                        }
                    });
                    break;
                case "vacuumSensRotEncoderCounter":
                    key = station.getGemId() + "|vacuumSensRotEncoderCounter";
                    liveSyncUpdateManager.queue(key, () ->{
                        if(v.getCurrentRotationCounter() != parseInt(value)){
                            v.setCurrentRotationCounter(parseInt(value));
                        }
                    });
                    break;
                case "vacuumSensArmEncoderCounter":
                    key = station.getGemId() + "|vacuumSensArmEncoderCounter";
                    liveSyncUpdateManager.queue(key, () ->{
                        if(v.getCurrentArmCounter() != parseInt(value)){
                            v.setCurrentArmCounter(parseInt(value));
                        }
                    });
                    break;
                case "vacuumSensVerticalEndUp":
                    key = station.getGemId() + "|vacuumSensVerticalEndUp";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(v.isVerticalEnd() != bVal) {
                            v.setVerticalEnd(bVal);
                        }
                    });
                    break;
                case "vacuumSensRotEnd":
                    key = station.getGemId() + "|vacuumSensRotEnd";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(v.isRotationEnd() != bVal){
                            v.setRotationEnd(bVal);
                        }
                    });
                    break;
                case "vacuumSensArmEndIn":
                    key = station.getGemId() + "|vacuumSensArmEndIn";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(v.isArmEnd() != bVal){
                                v.setArmEnd(bVal);
                        }
                    });
                    break;
                case "vacuumActVerticalUp":
                    key = station.getGemId() + "|vacuumActVerticalUp";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(v.isActVerticalUp()!=bVal){
                            v.setActVerticalUp(bVal);
                        }
                    });
                    break;
                case "vacuumActVerticalDown":
                    key = station.getGemId() + "|vacuumActVerticalDown";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(v.isActVerticalDown()!=bVal){
                            v.setActVerticalDown(bVal);
                        }
                    });
                    break;
                case "vacuumActRotLeft":
                    key = station.getGemId() + "|vacuumActRotLeft";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(v.isActRotationLeft()!=bVal){
                            v.setActRotationLeft(bVal);
                        }
                    });
                    break;
                case "vacuumActRotRight":
                    key = station.getGemId() + "|vacuumActRotRight";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(v.isActRotationRight()!=bVal){
                            v.setActRotationRight(bVal);
                        }
                    });
                    break;
                case "vacuumActArmIn":
                    key = station.getGemId() + "|vacuumActArmIn";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(v.isActArmIn()!=bVal){
                            v.setActArmIn(bVal);
                        }
                    });
                    break;
                case "vacuumActArmOut":
                    key = station.getGemId() + "|vacuumActArmOut";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(v.isActArmOut()!=bVal){
                            v.setActArmOut(bVal);
                        }
                    });
                    break;
                case "vacuumActValve":
                    key = station.getGemId() + "|vacuumActValve";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(v.isActValve() != bVal){
                            v.setActValve(bVal);
                        }
                    });
                    break;
                case "vacuumActCompressorOn":
                    key = station.getGemId() + "|vacuumActCompressorOn";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(v.isActCompressorOn()!=bVal){
                        v.setActCompressorOn(bVal);
                    }
                    });
                    break;
            }
            return;
        }

        if(station instanceof HighBay h) {
            String key;
            switch (signalName) {
                case "highbaySensHorizontalEncoderCounter":
                    key = station.getGemId() + "|highbaySensHorizontalEncoderCounter";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.getPositionHorizontal() != parseInt(value)) {
                            h.setPositionHorizontal(parseInt(value));
                        }
                    });
                    break;
                case "highbaySensVerticalEncoderCounter":
                    key = station.getGemId() + "|highbaySensVerticalEncoderCounter";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.getPositionVertical() != parseInt(value)){
                            h.setPositionVertical(parseInt(value));
                        }
                    });
                    break;
                case "highbaySensHorizontal":
                    key = station.getGemId() + "|highbaySensHorizontal";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isSensHorizontal()!=bVal){
                            h.setSensHorizontal(bVal);
                        }
                    });
                    break;
                case "highbaySensVertical":
                    key = station.getGemId() + "|highbaySensVertical";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isSensVertical() != bVal){
                            h.setSensVertical(bVal);
                        }
                    });
                    break;
                case "highbaySensCantileverFront":
                    key = station.getGemId() + "|highbaySensCantileverFront";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isSensCantileverFront()!=bVal){
                            h.setSensCantileverFront(bVal);
                        }
                    });
                    break;
                case "highbaySensCantileverBack":
                    key = station.getGemId() + "|highbaySensCantileverBack";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isSensCantileverBack() != bVal){
                            h.setSensCantileverBack(bVal);
                        }
                    });
                    break;
                case "highbaySensInside":
                    key = station.getGemId() + "|highbaySensInside";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isSensInside() != bVal){
                            h.setSensInside(bVal);
                        }
                    });
                    break;
                case "highbaySensOutside":
                    key = station.getGemId() + "|highbaySensOutside";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isSensOutside()!=bVal){
                            h.setSensOutside(bVal);
                        }
                    });
                    break;
                case "highbayActUp":
                    key = station.getGemId() + "|highbayActUp";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isActUp()!=bVal){
                            h.setActUp(bVal);
                        }
                    });
                    break;
                case "highbayActDown":
                    key = station.getGemId() + "|highbayActDown";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isActDown()!=bVal){
                            h.setActDown(bVal);
                        }
                    });
                    break;
                case "highbayActHorizontalToConveyor":
                    key = station.getGemId() + "|highbayActHorizontalToConveyor";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isActHorizontalToConveyor()!=bVal){
                            h.setActHorizontalToConveyor(bVal);
                        }
                    });
                    break;
                case "highbayActHorizontalToRack":
                    key = station.getGemId() + "|highbayActHorizontalToRack";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isActHorizontalToRack()!=bVal){
                            h.setActHorizontalToRack(bVal);
                        }
                    });
                    break;
                case "highbayActCantileverForward":
                    key = station.getGemId() + "|highbayActCantileverForward";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isActCantileverForward()!=bVal){
                            h.setActCantileverForward(bVal);
                        }
                    });
                    break;
                case "highbayActCantileverBackward":
                    key = station.getGemId() + "|highbayActCantileverBackward";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isActCantileverBackward()!=bVal){
                            h.setActCantileverBackward(bVal);
                        }
                    });
                    break;
                case "highbayActConveyorForward":
                    key = station.getGemId() + "|highbayActConveyorForward";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isActConveyorForward()!=bVal){
                            h.setActConveyorForward(bVal);
                        }
                    });
                    break;
                case "highbayActConveyorBackward":
                    key = station.getGemId() + "|highbayActConveyorBackward";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(h.isActConveyorBackward()!=bVal){
                            h.setActConveyorBackward(bVal);
                        }
                    });
                    break;
            }
            return;
        }
        if(station instanceof MultiProcessing m) {
            String key;
            switch (signalName) {
                case "multiProcessingSensOven":
                    key = station.getGemId() + "|multiProcessingSensOven";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isSensOven()!=bVal){
                            m.setSensOven(bVal);
                        }
                    });
                    break;
                case "multiProcessingSensOvenFeederIn":
                    key = station.getGemId() + "|multiProcessingSensOvenFeederIn";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isSensOvenFeederIn()!=bVal){
                            m.setSensOvenFeederIn(bVal);
                        }
                    });
                    break;
                case "multiProcessingSensOvenFeederOut":
                    key = station.getGemId() + "|multiProcessingSensOvenFeederOut";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isSensOvenFeederOut()!=bVal){
                            m.setSensOvenFeederOut(bVal);
                        }
                    });
                    break;
                case "multiProcessingSensTurntablePosBelt":
                    key = station.getGemId() + "|multiProcessingSensTurntablePosBelt";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isSensTurntablePosBelt()!=bVal){
                            m.setSensTurntablePosBelt(bVal);
                        }
                    });
                    break;
                case "multiProcessingSensTurntablePosSaw":
                    key = station.getGemId() + "|multiProcessingSensTurntablePosSaw";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isSensTurntablePosSaw()!=bVal){
                            m.setSensTurntablePosSaw(bVal);
                        }
                    });
                    break;
                case "multiProcessingSensTurntablePosVacuum":
                    key = station.getGemId() + "|multiProcessingSensTurntablePosVacuum";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isSensTurntablePosVacuum()!=bVal){
                            m.setSensTurntablePosVacuum(bVal);
                        }
                    });
                    break;
                case "multiProcessingSensVacuumGripperAtOven":
                    key = station.getGemId() + "|multiProcessingSensVacuumGripperAtOven";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isSensVacuumGripperAtOven()!=bVal){
                            m.setSensVacuumGripperAtOven(bVal);
                        }
                    });
                    break;
                case "multiProcessingSensVacuumGripperAtTurntable":
                    key = station.getGemId() + "|multiProcessingSensVacuumGripperAtTurntable";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isSensVacuumGripperAtTurntable()!=bVal){
                            m.setSensVacuumGripperAtTurntable(bVal);
                        }
                    });
                    break;
                case "multiProcessingSensEndConveyor":
                    key = station.getGemId() + "|multiProcessingSensEndConveyor";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isSensEndConveyor()!=bVal){
                            m.setSensEndConveyor(bVal);
                        }
                    });
                    break;
                case "multiProcessingActSaw":
                    key = station.getGemId() + "|multiProcessingActSaw";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isActSaw()!=bVal){
                            m.setActSaw(bVal);
                        }
                    });
                    break;
                case "multiProcessingActRotClockwise":
                    key = station.getGemId() + "|multiProcessingActRotClockwise";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isActRotClockwise()!=bVal){
                            m.setActRotClockwise(bVal);
                        }
                    });
                    break;
                case "multiProcessingActRotCounterclockwise":
                    key = station.getGemId() + "|multiProcessingActRotCounterclockwise";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isActRotCounterClockwise()!=bVal){
                            m.setActRotCounterClockwise(bVal);
                        }
                    });
                    break;
                case "multiProcessingActOvenInward":
                    key = station.getGemId() + "|multiProcessingActOvenInward";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isActOvenInward()!=bVal){
                            m.setActOvenInward(bVal);
                        }
                    });
                    break;
                case "multiProcessingActOvenOutward":
                    key = station.getGemId() + "|multiProcessingActOvenOutward";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isActOvenOutward()!=bVal){
                            m.setActOvenOutward(bVal);
                        }
                    });
                    break;
                case "multiProcessingOvenLight":
                    key = station.getGemId() + "|multiProcessingOvenLight";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isActOvenLight()!=bVal){
                            m.setActOvenLight(bVal);
                        }
                    });
                    break;
                case "multiProcessingActGripperToOven":
                    key = station.getGemId() + "|multiProcessingActGripperToOven";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isActGripperToOven()!=bVal){
                            m.setActGripperToOven(bVal);
                        }
                    });
                    break;
                case "multiProcessingActGripperToTurntable":
                    key = station.getGemId() + "|multiProcessingActGripperToTurntable";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isActGripperToTurnTable()!=bVal){
                            m.setActGripperToTurnTable(bVal);
                        }
                    });
                    break;
                case "multiProcessingActConveyorForward":
                    key = station.getGemId() + "|multiProcessingActConveyorForward";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isActConveyorForward()!=bVal){
                            m.setActConveyorForward(bVal);
                        }
                    });
                    break;
                case "multiProcessingActLowerValve":
                    key = station.getGemId() + "|multiProcessingActLowerValve";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isActLowerValve()!=bVal){
                            m.setActLowerValve(bVal);
                        }
                    });
                    break;
                case "multiProcessingCompressor":
                    key = station.getGemId() + "|multiProcessingCompressor";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isActCompressor()!=bVal){
                            m.setActCompressor(bVal);
                        }
                    });
                    break;
                case "multiProcessingValveFeeder":
                    key = station.getGemId() + "|multiProcessingValveFeeder";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isValveFeeder()!=bVal){
                            m.setValveFeeder(bVal);
                        }
                    });
                    break;
                case "multiProcessingValveOvenDoor":
                    key = station.getGemId() + "|multiProcessingValveOvenDoor";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isValveOvenDoor()!=bVal){
                            m.setValveOvenDoor(bVal);
                        }
                    });
                    break;
                case "multiProcessingValveVacuum":
                    key = station.getGemId() + "|multiProcessingValveVacuum";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(m.isValveVacuum()!=bVal){
                            m.setValveVacuum(bVal);
                        }
                    });
                    break;
            }
            return;
        }
        if(station instanceof SortingLine sl) {
            String key;
            switch (signalName) {
                case "sortingLineSensInputLightBarrier":
                    key = station.getGemId() + "|sortingLineSensInputLightBarrier";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(sl.isSensInputLightBarrier()!=bVal){
                            sl.setSensInputLightBarrier(bVal);
                        }
                    });
                    break;
                case "sortingLineSensMiddleLightBarrier":
                    key = station.getGemId() + "|sortingLineSensMiddleLightBarrier";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(sl.isSensMiddleLightBarrier()!=bVal){
                            sl.setSensMiddleLightBarrier(bVal);
                        }
                    });
                    break;
                case "sortingLineSensRedLightBarrier":
                    key = station.getGemId() + "|sortingLineSensRedLightBarrier";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(sl.isSensRedLightBarrier()!=bVal){
                            sl.setSensRedLightBarrier(bVal);
                        }
                    });
                    break;
                case "sortingLineSensBlueLightBarrier":
                    key = station.getGemId() + "|sortingLineSensBlueLightBarrier";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(sl.isSensBlueLightBarrier()!=bVal){
                            sl.setSensBlueLightBarrier(bVal);
                        }
                    });
                    break;
                case "sortingLineSensWhiteLightBarrier":
                    key = station.getGemId() + "|sortingLineSensWhiteLightBarrier";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(sl.isSensWhiteLightBarrier()!=bVal){
                            sl.setSensWhiteLightBarrier(bVal);
                        }
                    });
                    break;
                case "sortingLineSensImpulseCounterRaw":
                    key = station.getGemId() + "|sortingLineSensImpulseCounterRaw";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(sl.isSensImpulseCounterRaw()!=bVal){
                            sl.setSensImpulseCounterRaw(bVal);
                        }
                    });
                    break;
                case "sortingLineActRedEjector":
                    key = station.getGemId() + "|sortingLineActRedEjector";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(sl.isActRedEjector()!=bVal){
                            sl.setActRedEjector(bVal);
                        }
                    });
                    break;
                case "sortingLineActBlueEjector":
                    key = station.getGemId() + "|sortingLineActBlueEjector";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(sl.isActBlueEjector()!=bVal){
                            sl.setActBlueEjector(bVal);
                        }
                    });
                    break;
                case "sortingLineActWhiteEjector":
                    key = station.getGemId() + "|sortingLineActWhiteEjector";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(sl.isActWhiteEjector()!=bVal){
                            sl.setActWhiteEjector(bVal);
                        }
                    });
                    break;
                case "sortingLineActMotorConveyor":
                    key = station.getGemId() + "|sortingLineActMotorConveyor";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(sl.isActMotorConveyor()!=bVal){
                            sl.setActMotorConveyor(bVal);
                        }
                    });
                    break;
                case "sortingLineActCompressorOn":
                    key = station.getGemId() + "|sortingLineActCompressorOn";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(sl.isActCompressorOn()!=bVal){
                            sl.setActCompressorOn(bVal);
                        }
                    });
                    break;
            }
            return;
        }
        if(station instanceof ConveyorBelt cb) {
            String key;
            switch (signalName) {
                case "conveyorSensFeed":
                    key = station.getGemId() + "|conveyorSensFeed";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(cb.isSensFeed()!=bVal){
                            cb.setSensFeed(bVal);
                        }
                    });
                    break;
                case "conveyorSensImpulse":
                    key = station.getGemId() + "|conveyorSensImpulse";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(cb.isSensImpulse()!=bVal){
                            cb.setSensImpulse(bVal);
                        }
                    });
                    break;
                case "conveyorSensSwap":
                    key = station.getGemId() + "|conveyorSensSwap";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(cb.isSensSwap()!=bVal){
                            cb.setSensSwap(bVal);
                        }
                    });
                    break;
                case "conveyorActForward":
                    key = station.getGemId() + "|conveyorActForward";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(cb.isActForward()!=bVal){
                            cb.setActForward(bVal);
                        }
                    });
                    break;
                case "conveyorActBackward":
                    key = station.getGemId() + "|conveyorActBackward";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(cb.isActBackward()!=bVal){
                            cb.setActBackward(bVal);
                        }
                    });
                    break;
            }
            return;
        }
        if(station instanceof PunchingMachine pm) {
            String key;
            switch (signalName) {
                case "punchingMachineSensGoods":
                    key = station.getGemId() + "|punchingMachineSensGoods";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(pm.isSensGoods()!=bVal){
                            pm.setSensGoods(bVal);
                        }
                    });
                    break;
                case "punchingMachineSensMachine":
                    key = station.getGemId() + "|punchingMachineSensMachine";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(pm.isSensMachine()!=bVal){
                            pm.setSensMachine(bVal);
                        }
                    });
                    break;
                case "punchingMachineSensUp":
                    key = station.getGemId() + "|punchingMachineSensUp";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(pm.isSensUp()!=bVal){
                            pm.setSensUp(bVal);
                        }
                    });
                    break;
                case "punchingMachineSensDown":
                    key = station.getGemId() + "|punchingMachineSensDown";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(pm.isSensDown()!=bVal){
                            pm.setSensDown(bVal);
                        }
                    });
                    break;
                case "punchingMachineActUp":
                    key = station.getGemId() + "|punchingMachineActUp";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(pm.isActUp()!=bVal){
                            pm.setActUp(bVal);
                        }
                    });
                    break;
                case "punchingMachineActDown":
                    key = station.getGemId() + "|punchingMachineActDown";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(pm.isActDown()!=bVal){
                            pm.setActDown(bVal);
                        }
                    });
                    break;
                case "punchingMachineActConveyorForward":
                        key = station.getGemId() + "|punchingMachineActConveyorForward";
                        liveSyncUpdateManager.queue(key, () -> {
                            if(pm.isActConveyorForward()!=bVal){
                                pm.setActConveyorForward(bVal);
                            }
                        });
                    break;
                case "punchingMachineActConveyorBackward":
                    key = station.getGemId() + "|punchingMachineActConveyorBackward";
                    liveSyncUpdateManager.queue(key, () -> {
                        if(pm.isActConveyorBackward()!=bVal){
                            pm.setActConveyorBackward(bVal);
                        }
                    });
                    break;
            }
        }
    }


    private LocalDateTime extractTimeStamp(JsonNode root) {
        // extracts the timestamp from a JSON payload
        // if parsing fails or timestamp does not exist, it returns the current UTC time
        JsonNode ts = root.get("timestamp");
        if (ts == null) return LocalDateTime.now();
        try {
            return OffsetDateTime.parse(ts.asText()).toLocalDateTime();
        } catch (Exception e) {
            return LocalDateTime.now();
        }
    }

    private String extractValue(JsonNode root) {
        // extracts the value from a JSON payload
        JsonNode jnode = root.get("value");
        return jnode != null ? jnode.asText() : root.asText();
    }

    private String extractField(JsonNode root, String field, String s) {
        // extracts a named field from a JSON object
        JsonNode jnode = root.get(field);
        return (jnode!=null && !jnode.isNull()) ? jnode.asText() : s;
    }

    private JsonNode decodeEventValue(JsonNode outerRoot) {
        // decodes the value of an event payload
        // event values can either be a JSON or a JSON String
        // Textual values are parsed again, return the original node on parsing failure
        JsonNode valueNode = outerRoot.get("value");
        if(valueNode == null || valueNode.isNull()){
            return mapper.nullNode();
        }
        if(!valueNode.isTextual()){
            return valueNode;
        }
        String encodedValue = valueNode.asText();
        try {
            return mapper.readTree(encodedValue);
        }catch (JsonProcessingException exception){
            return valueNode;
        }
    }

    private void handleStationEvent(Station station, String[] parts, String payload, String topic) {
        // Processes event messages according to its content
        // Station events can represent commands, command feedback, or machine feedback
        if (parts.length < 5) return;
        String direction = parts[3];
        String eventType = parts[4];
        try {

            JsonNode outerRoot = mapper.readTree(payload);
            JsonNode value = decodeEventValue(outerRoot);
            LocalDateTime ts = extractTimeStamp(outerRoot);

            if ("received".equalsIgnoreCase(direction) && "command".equalsIgnoreCase(eventType)) {
                String commandText = value.asText();
                String[] commandParts = commandText.split("\\s+", 5);

                if (commandParts.length < 4 || !"COMMAND".equalsIgnoreCase(commandParts[0])) {
                    return;
                }

                String commandId = commandParts[2];
                String commandName = commandParts[3];

                String parameters = commandParts.length == 5 ? commandParts[4] : "";
                logService.logCommandEvent(station.getName(), commandId, commandName, parameters, ts);
            } else if ("emitted".equalsIgnoreCase(direction)) {
                if ("command_feedback".equalsIgnoreCase(eventType)) {
                    handleCommandFeedback(station, value, ts);
                    return;
                }
                if ("machine_feedback".equalsIgnoreCase(eventType)) {
                    handleMachineFeedback(station, value, ts);
                }
            }

        } catch (Exception e){
            System.out.println("handleStationEvent Error for topic: " +topic);
        }

    }

    private void handleMachineFeedback(Station station, JsonNode root, LocalDateTime ts) {
        // updates the Station state using the state parsed by parseMachineState()
        // if the state is not set to ERROR or OVERHEATED by Alarms, then the state update is queued
        // it then logs the Station state
        String stateText = extractField(root, "status", extractValue(root));
        StationState newState = parseMachineState(stateText);
        String key = station.getGemId() + "|state";
        liveSyncUpdateManager.queue(key, ()->{
            if(station.getState() != StationState.OVERHEATED && station.getState() != StationState.ERROR){
                station.setState(newState);
            }
        });
        logService.logStatus(station.getName(), station.getState().toString(), stateText, ts);

    }


    private StationState parseMachineState(String stateText) {
        // Given a string containing the station state, it returns a StationState accordingly
        if (stateText == null) return StationState.POWER_ON_IDLE;
        String upper = stateText.toUpperCase();
        boolean initialized = upper.startsWith("INITIALIZED");
        if (upper.contains("ACTIVE")) return StationState.ACTIVE;
        if(upper.contains("IDLE")) return initialized ? StationState.READY_IDLE : StationState.POWER_ON_IDLE;
        return StationState.POWER_ON_IDLE;
    }

    private void handleCommandFeedback(Station station, JsonNode root, LocalDateTime ts) {
        // processes feedback for a previously issued command
        // the command is converted into a MachineCommandStatus
        // DONE stands for a completed command
        // ERROR currently a missed case. Implemented for future development and custom commands. It stands for a failure at command completion
        // IN_PROCESS stands for a command still being executed
        // it then logs the command feedback
        // if the status is DONE, it increases cycle count of the corresponding station.
        // Then calls calcWear to update the wearIndex
        // Eventually it queues the updating the cycle count
        String statusText = extractField(root, "status", "IN_PROCESS");
        MachineCommandStatus status;
        switch (statusText.toUpperCase()){
            case "DONE":
                status=MachineCommandStatus.DONE;
                break;
            case "ERROR":
                status=MachineCommandStatus.ERROR;
                break;
            default:
                status=MachineCommandStatus.IN_PROCESS;
                break;
        }
        logService.logCommandFeedback(station.getName(), extractField(root, "commandId", ""), status.toString(), ts);
        if (status == MachineCommandStatus.DONE) {
            String key = station.getGemId() + "|cycle";
            prognosisService.calcWearIndex(station, station.getCycleCount()+1);
            liveSyncUpdateManager.queue(key, ()-> {
                station.setCycleCount(station.getCycleCount() + 1);
            });
        }
    }
}
