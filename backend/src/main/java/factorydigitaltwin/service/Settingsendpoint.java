package factorydigitaltwin.service;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;

// REST controller for updating thermal thresholds and maintenanceIntervalCycles

@CrossOrigin(origins = "http://localhost")
@RestController
@RequestMapping("/settings")
public class Settingsendpoint {
    private final SettingsService settingsService;


    public Settingsendpoint(SettingsService settingsService) {
        this.settingsService = settingsService;
    }

    @PostMapping("/thresholds")
    public void updateThresholds(@RequestParam double overheatThreshold, @RequestParam double overheatClearThreshold, @RequestParam double maintenanceIntervalCycles){
        settingsService.updateThresholds(overheatThreshold, overheatClearThreshold);
        settingsService.updateMaintenanceIntercalCycles(maintenanceIntervalCycles);
    }
}
