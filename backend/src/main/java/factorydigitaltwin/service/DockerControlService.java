package factorydigitaltwin.service;

import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.core.DockerClientImpl;
import com.github.dockerjava.transport.DockerHttpClient;
import com.github.dockerjava.zerodep.ZerodepDockerHttpClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

import com.github.dockerjava.core.DockerClientConfig;
import com.github.dockerjava.core.DefaultDockerClientConfig;


// service responsible for controlling MQTT recorder container through the docker API

@Service
public class DockerControlService {
    @Value("${spring.profiles.active:}")
    private String activeProfile;
    @Value("${MQTT_RECORDER_CONTAINER:factory_mqtt_recorder}")
    private String mqttRecorderContainerName;

    private static final String DOCKER_SOCKET_PATH = "/var/run/docker.sock";

    public void restartMqttRecorder() throws IOException {
        // restarts the MQTT recorder docker container while the application is running
        if(!isDockerMode()){
            System.err.println("[DOCKERCONTROLSERVICE] not running in docker profile, no mqtt restart");
            return;
        }
        if(!new File(DOCKER_SOCKET_PATH).exists()){
            System.err.println("[DOCKERCONTROLSERVICE] socket not found " + DOCKER_SOCKET_PATH);
            return;
        }
        DockerClientConfig config = DefaultDockerClientConfig.createDefaultConfigBuilder()
                .withDockerHost("unix://" + DOCKER_SOCKET_PATH)
                .build();
        DockerHttpClient httpClient = new ZerodepDockerHttpClient.Builder()
                .dockerHost(config.getDockerHost())
                .build();
        try (DockerClient dockerClient = DockerClientImpl.getInstance(config, httpClient)){
            dockerClient.restartContainerCmd("factory_mqtt_recorder").exec();
            System.out.println("[DOCKERCONTROLSERVICE] restarted container " + mqttRecorderContainerName);
        }catch (Exception e){
            System.err.println("[DOCKERCONTROLSERVICE] failed to restart " + mqttRecorderContainerName + ": " + e.getMessage());
            e.printStackTrace();
        }

    }

    private boolean isDockerMode(){
        return activeProfile != null && activeProfile.contains("docker");
    }
}
