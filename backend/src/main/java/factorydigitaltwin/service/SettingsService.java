package factorydigitaltwin.service;

import factorydigitaltwin.FactoryDigitalTwinManager;
import factorydigitaltwin.ThermalSettings;
import factorydigitaltwin.ThermalSettingsBuilder;
import org.springframework.stereotype.Service;

@Service
public class SettingsService {
    private static final double DEFAULT_OVERHEAT_THRESHOLD = 90.0;
    private static final double DEFAULT_OVERHEAT_CLEAR_THRESHOLD = 75.0;
    private static final double DEFAULT_MAINTENANCE_INTERVAL_CYCLES = 1000.0;
    private double maintenanceIntercalCycles = DEFAULT_MAINTENANCE_INTERVAL_CYCLES;
    private Long thermalSettingsGemId;

    public void initDefaults(){
        // initializes thermal settings using the pre-defined default values
        ThermalSettings settings = new ThermalSettingsBuilder(FactoryDigitalTwinManager.getFreeGemId())
                .overheatThreshold(DEFAULT_OVERHEAT_THRESHOLD)
                .overheatClearThreshold(DEFAULT_OVERHEAT_CLEAR_THRESHOLD)
                .build()
                .orElseThrow(()->new RuntimeException("Thermal Settings builder failed"));
        thermalSettingsGemId = settings.getGemId();
    }
    public ThermalSettings getThermalSettings(){
        return FactoryDigitalTwinManager.getThermalSettingsSure(thermalSettingsGemId);
    }
    public double getMaintenanceIntervalCycles(){
        return maintenanceIntercalCycles;
    }

    public void updateMaintenanceIntercalCycles(double maintenanceIntercalCycles){
        this.maintenanceIntercalCycles = maintenanceIntercalCycles;
    }

    public void updateThresholds(double overheatThreshold, double overheatClearThreshold){
        ThermalSettings thermalSettings = getThermalSettings();
        thermalSettings.setOverheatThreshold(overheatThreshold);
        thermalSettings.setOverheatClearThreshold(overheatClearThreshold);
    }
}
