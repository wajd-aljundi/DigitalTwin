package factorydigitaltwin.service;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

// REST endpoint for resetting the MQTT-recorder
// it first resets all data via resetService.resetAllStationData()
// and then restarts the MQTT recorder dockerControlService.restartMqttRecorder();


@CrossOrigin(origins = "http://localhost")
@RestController
@RequestMapping("/simulation")
public class RecordingEndpoint {
    private final ResetService resetService;
    private final DockerControlService dockerControlService;

    public RecordingEndpoint(ResetService resetService, DockerControlService dockerControlService) {
        this.resetService = resetService;
        this.dockerControlService = dockerControlService;
    }

    @PostMapping("/restart")
    public void restart() throws IOException {
        resetService.resetAllStationData();
        dockerControlService.restartMqttRecorder();
    }
}
