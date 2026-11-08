# Factory Digital Twin

A model based digital twin developed using montigem for a fischertechnik production line. Recorded production data, containing readings from sensors and actuators, is being replayed using an mqtt recorder, sent to a gateway, and then forwarded by the gateway to a spring boot backend. The angualar frontend visualizes the data and together with the backend makes the DT component.

## Prerequisites

- Java 21 JDK
- python 3+ pip
- Eclipse Mosquitto

## First Time Setup
configure nexus access data
under: 
`C:\Users\wajda\.gradle\gradle.properties`

create the following file:
```
mavenUser=your_maven_username
mavenPassword=your_maven_password
useLocalRepo=false
mc_version=7.9.0-SNAPSHOT
```
## Running the Project:

For the commands to work you have to enter the /codebase directory

1. Build the images

`.\gradlew buildAllImages`

2. start the containers:

`docker compose -p digitaltwin up -d`

3. Open the app by going to `http://localhost` (port 80)

#### more docker controls:

Stop the docker compose: `docker compose -p digitaltwin down`

Stop the docker compose and delete the volume: `docker compose -p digitaltwin down -v`

