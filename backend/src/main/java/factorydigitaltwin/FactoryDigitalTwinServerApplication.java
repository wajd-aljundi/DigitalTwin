package factorydigitaltwin;

import factorydigitaltwin.service.SettingsService;
import factorydigitaltwin.service.StationRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.io.IOException;
import java.time.LocalDateTime;



// Main entry point for the application. It starts the Spring Boot application and
// initializes the station with the initial values from the simple_process.csv
// and registers them into stationRegistry

@EnableScheduling
public class FactoryDigitalTwinServerApplication extends FactoryDigitalTwinServerApplicationTOP  {
    // base path used by the modeled stations
    protected final String basePath = "DigitalTwin/Island 1/";
    @Autowired
    private StationRegistry stationRegistry;
    @Autowired
    private SettingsService settingsService;

    public static void main(String[] args) {
        try {
            SpringApplication.run(
                    FactoryDigitalTwinServerApplication.class,
                    args
            );
        } catch (Throwable throwable) {
            System.err.println("\n========== APPLICATION STARTUP FAILED ==========");
            throwable.printStackTrace(System.err);
            System.err.println("================================================\n");
            System.exit(1);
        }
    }

    @Override
    public void init() throws IOException {
        super.init();
        initEntities();
        settingsService.initDefaults();
    }

    private void initEntities() {
        // initializes  all stations that belong to the production line
        initVG(1000L, "VacuumGripper01", "VG01", -15, 1770, 0, 2690,-3, 2017);
        initVG(1001L, "VacuumGripper02", "VG02", 0, 1663, -1, 2284,-1, 1865);
        initSortingLine(1002L, "SortingLine01", "SL01");
        initHighBay(1003L, "HighBay01", "HB01", -4, 1558, 1706, -4);
        initMultiProcessing(1004L, "MultiProcessing01", "MP01");
        initConveyorBelt(1005L,"ConveyorBelt01", "CB01");
        initPunchingMachine(1006L, "PunchingMachine01", "PM01");
    }

    // Initializes a prognosis object, one for each station is attached to the station at initialization
    private void initDefaultPrognosis(Station station) {
        new PrognosisBuilder(FactoryDigitalTwinManager.getFreeGemId())
                .station(station)
                .wearIndex(0.0)
                .health(100.0)
                .timeStamp(LocalDateTime.now())
                .nextMaintenance(LocalDateTime.now().plusDays(30))
                .maintenanceSummary("No cycles completed yet")
                .build()
                .orElseThrow(() -> new RuntimeException("initial prognosis failed: " + station.getName()));
    }

    private void initVG(long id, String name, String machineId, int vertMin, int vertMax, int rotMin, int rotMax, int armMin, int armMax) {


        VacuumGripper vg = new VacuumGripperBuilder(id)
                .name(name)
                .machineId(machineId)
                .opcUaBasePath(basePath + "VacuumGripper/" + name)
                .state(StationState.POWER_ON_IDLE)
                .isExecuting(false)
                .cycleCount(0)
                .maintenanceIntervalCycles(1000)
                .lastMaintenanceTimestamp(LocalDateTime.now())
                .activePowerInWatt(2000.0)
                .idlePowerWatt(500.0)
                .verticalEncoderMax(vertMax)
                .verticalEncoderMin(vertMin)
                .rotationEncoderMin(rotMin)
                .rotationEncoderMax(rotMax)
                .armEncoderMax(armMax)
                .armEncoderMin(armMin)
                .movUnitPerTickArm(1.0)
                .movUnitPerTickRotation(1.0)
                .movUnitPerTickVertical(1.0)
                .currentVerticalCounter(vertMax)
                .currentRotationCounter(rotMax)
                .currentArmCounter(909)
                .verticalEnd(false)
                .rotationEnd(false)
                .armEnd(false)
                .actArmIn(false)
                .actArmOut(false)
                .actVerticalUp(false)
                .actVerticalDown(false)
                .actRotationLeft(false)
                .actRotationRight(false)
                .actValve(false)
                .actCompressorOn(false)
                .currentTempCelsius(20.0)
                .currentPowerWatt(500.0)
                .totalEnergyConsumedWh(0.0)
                .latestAlarmKind("NONE")
                .latestAlarmMessage("No active alarm")
                .alarmCount(0)
                .currentWearIndex(0.0)
                .currentHealth(100.0)
                .build()
                .orElseThrow(()->new RuntimeException("station creation failed: "+name));
        stationRegistry.register(name, vg);
        initDefaultPrognosis(vg);
    }

    private void initSortingLine(long id, String name, String machineId){

        SortingLine sl = new SortingLineBuilder(id)
                .name(name)
                .machineId(machineId)
                .opcUaBasePath(basePath + "SortingLine/" + name)
                .state(StationState.POWER_ON_IDLE)
                .isExecuting(false)
                .cycleCount(0)
                .maintenanceIntervalCycles(1000)
                .lastMaintenanceTimestamp(LocalDateTime.now())
                .activePowerInWatt(2000.0)
                .idlePowerWatt(500.0)
                .sensInputLightBarrier(true)
                .sensMiddleLightBarrier(true)
                .sensBlueLightBarrier(true)
                .sensWhiteLightBarrier(true)
                .sensRedLightBarrier(false)
                .sensImpulseCounterRaw(false)
                .actBlueEjector(false)
                .actRedEjector(false)
                .actWhiteEjector(false)
                .actMotorConveyor(false)
                .actCompressorOn(false)
                .currentTempCelsius(20.0)
                .currentPowerWatt(500.0)
                .totalEnergyConsumedWh(0.0)
                .latestAlarmKind("NONE")
                .latestAlarmMessage("No active alarm")
                .alarmCount(0)
                .currentWearIndex(0.0)
                .currentHealth(100.0)
                .build()
                .orElseThrow(()->new RuntimeException("failed to create" + name));
        stationRegistry.register(name, sl);
        initDefaultPrognosis(sl);

    }
    private void initHighBay(long id, String name, String machineId, int hEncMin, int hEncMax, int verEncMax, int verEncMin){

        HighBay hb = new HighBayBuilder(id)
                .name(name)
                .machineId(machineId)
                .opcUaBasePath(basePath + "HighBay/" + name)
                .state(StationState.POWER_ON_IDLE)
                .isExecuting(false)
                .cycleCount(0)
                .maintenanceIntervalCycles(1000)
                .lastMaintenanceTimestamp(LocalDateTime.now())
                .activePowerInWatt(2000.0)
                .idlePowerWatt(500.0)
                .horizontalEncoderMax(hEncMax)
                .horizontalEncoderMin(hEncMin)
                .verticalEncoderMin(verEncMin)
                .verticalEncoderMax(verEncMax)
                .movUnitPerTickVertical(1.0)
                .movUnitPerTickHorizontal(1.0)
                .positionHorizontal(hEncMax)
                .positionVertical(verEncMax)
                .sensHorizontal(true)
                .sensVertical(true)
                .sensCantileverFront(false)
                .sensCantileverBack(true)
                .sensInside(true)
                .sensOutside(true)
                .actUp(false)
                .actDown(false)
                .actHorizontalToConveyor(false)
                .actHorizontalToRack(false)
                .actCantileverBackward(false)
                .actCantileverForward(false)
                .actConveyorBackward(false)
                .actConveyorForward(false)
                .currentTempCelsius(20.0)
                .currentPowerWatt(500.0)
                .totalEnergyConsumedWh(0.0)
                .latestAlarmKind("NONE")
                .latestAlarmMessage("No active alarm")
                .alarmCount(0)
                .currentWearIndex(0.0)
                .currentHealth(100.0)
                .build()
                .orElseThrow(()->new RuntimeException("failed to create" + name));
        stationRegistry.register(name, hb);
        initDefaultPrognosis(hb);

    }
    private void initMultiProcessing(long id, String name, String machineId){

        MultiProcessing mp = new MultiProcessingBuilder(id)
                .name(name)
                .machineId(machineId)
                .opcUaBasePath(basePath + "MultiProcessing/" + name)
                .state(StationState.POWER_ON_IDLE)
                .isExecuting(false)
                .cycleCount(0)
                .maintenanceIntervalCycles(1000)
                .lastMaintenanceTimestamp(LocalDateTime.now())
                .activePowerInWatt(2000.0)
                .idlePowerWatt(500.0)
                .sensOven(true)
                .sensOvenFeederIn(false)
                .sensOvenFeederOut(true)
                .sensTurntablePosBelt(false)
                .sensTurntablePosSaw(false)
                .sensTurntablePosVacuum(true)
                .sensVacuumGripperAtOven(false)
                .sensVacuumGripperAtTurntable(true)
                .sensEndConveyor(true)
                .actSaw(false)
                .actRotClockwise(false)
                .actRotCounterClockwise(false)
                .actOvenInward(false)
                .actOvenOutward(false)
                .actOvenLight(false)
                .actGripperToOven(false)
                .actGripperToTurnTable(false)
                .actConveyorForward(false)
                .actLowerValve(false)
                .actCompressor(false)
                .valveFeeder(false)
                .valveOvenDoor(false)
                .valveVacuum(false)
                .currentTempCelsius(20.0)
                .currentPowerWatt(500.0)
                .totalEnergyConsumedWh(0.0)
                .latestAlarmKind("NONE")
                .latestAlarmMessage("No active alarm")
                .alarmCount(0)
                .currentWearIndex(0.0)
                .currentHealth(100.0)
                .build()
                .orElseThrow(() -> new RuntimeException("failed to create " + name));
        stationRegistry.register(name, mp);
        initDefaultPrognosis(mp);
    }
    private void initConveyorBelt(long id, String name, String machineId){

        ConveyorBelt cb = new ConveyorBeltBuilder(id)
                .name(name)
                .machineId(machineId)
                .opcUaBasePath(basePath + "ConveyorBelt/" + name)
                .state(StationState.POWER_ON_IDLE)
                .isExecuting(false)
                .cycleCount(0)
                .maintenanceIntervalCycles(1000)
                .lastMaintenanceTimestamp(LocalDateTime.now())
                .activePowerInWatt(2000.0)
                .idlePowerWatt(500.0)
                .sensFeed(true)
                .sensImpulse(true)
                .sensSwap(true)
                .actBackward(false)
                .actForward(false)
                .currentTempCelsius(20.0)
                .currentPowerWatt(500.0)
                .totalEnergyConsumedWh(0.0)
                .latestAlarmKind("NONE")
                .latestAlarmMessage("No active alarm")
                .alarmCount(0)
                .currentWearIndex(0.0)
                .currentHealth(100.0)
                .build()
                .orElseThrow(() -> new RuntimeException("failed to create " + name));
        stationRegistry.register(name, cb);
        initDefaultPrognosis(cb);
    }
    private void initPunchingMachine(long id, String name, String machineId){

        PunchingMachine pm = new PunchingMachineBuilder(id)
                .name(name)
                .machineId(machineId)
                .opcUaBasePath(basePath + "PunchingMachine/" + name)
                .state(StationState.POWER_ON_IDLE)
                .isExecuting(false)
                .cycleCount(0)
                .maintenanceIntervalCycles(1000)
                .lastMaintenanceTimestamp(LocalDateTime.now())
                .activePowerInWatt(2000.0)
                .idlePowerWatt(500.0)
                .sensGoods(false)
                .sensMachine(false)
                .sensUp(false)
                .sensDown(false)
                .actUp(false)
                .actDown(false)
                .actConveyorForward(false)
                .actConveyorBackward(false)
                .currentTempCelsius(20.0)
                .currentPowerWatt(500.0)
                .totalEnergyConsumedWh(0.0)
                .latestAlarmKind("NONE")
                .latestAlarmMessage("No active alarm")
                .alarmCount(0)
                .currentWearIndex(0.0)
                .currentHealth(100.0)
                .build()
                .orElseThrow(() -> new RuntimeException("failed to create " + name));
        stationRegistry.register(name, pm);
        initDefaultPrognosis(pm);
    }


}