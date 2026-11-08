package gui;

import def.dom.XMLHttpRequest;
import jsweet.lang.Replace;
import umlp.jsweet.extension.annotation.Component;
import java.util.function.Consumer;

// controller for settingsOverview. It sends configuration parameters to the gateway and backend services

@Component
public class SettingsOverview extends SettingsOverviewTOP{
    // base url of the gateway service for receiving the configuration parameters
    private static final String GATEWAY_BASE_URL = "http://localhost:8082";

    @Override
    public void init(){
        super.init();
    }

   public Consumer<Void> saveAllAndRestart() {
        // saves all configuration values and restarts the recording by calling restart service
       // the configuration parameters are split between the back-end and the gateway:
       // thermal parameters for generating synthetic data are sent to the thermal configuration endpoint in the gateway
       // power consumption parameters for generating synthetic data are sent per station to the power configuration endpoint in the gateway
       // Alarm  and maintenance thresholds are send to the back-end's settings endpoint
       // the recording is restarted and the page is reloaded after the submission of the parameters
       return res ->{
            postJson(GATEWAY_BASE_URL + "/config/thermal", buildThermalJson());
            postJson(GATEWAY_BASE_URL + "/config/power/VacuumGripper01", buildPowerJson(this.getVg01ActivePowerInput(), this.getVg01IdlePowerInput()));
            postJson(GATEWAY_BASE_URL + "/config/power/VacuumGripper02", buildPowerJson(this.getVg02ActivePowerInput(), this.getVg02IdlePowerInput()));
            postJson(GATEWAY_BASE_URL + "/config/power/SortingLine01", buildPowerJson(this.getSl01ActivePowerInput(), this.getSl01IdlePowerInput()));
            postJson(GATEWAY_BASE_URL + "/config/power/HighBay01", buildPowerJson(this.getHb01ActivePowerInput(), this.getHb01IdlePowerInput()));
            postJson(GATEWAY_BASE_URL + "/config/power/ConveyorBelt01", buildPowerJson(this.getCb01ActivePowerInput(), this.getCb01IdlePowerInput()));
            postJson(GATEWAY_BASE_URL + "/config/power/MultiProcessing01", buildPowerJson(this.getMp01ActivePowerInput(), this.getMp01IdlePowerInput()));
            postJson(GATEWAY_BASE_URL + "/config/power/PunchingMachine01", buildPowerJson(this.getPm01ActivePowerInput(), this.getPm01IdlePowerInput()));
            postForm("/umlp/api/settings/thresholds"
                    + "?overheatThreshold=" + this.getOverheatThresholdInput()
                    + "&overheatClearThreshold=" + this.getOverheatClearThresholdInput()
                    + "&maintenanceIntervalCycles=" + this.getMaintenanceIntervalCycles());
            postForm("/umlp/api/simulation/restart");
            reloadPage();
        };
   }
   @Replace("window.location.reload")
   private void reloadPage(){
        // reloads the page after submitting configuration parameters
       // jsweet replaces this method with the specified expression in the @Replace
   }


   //build the JSON structure expected by the endpoint in the gateway server
   private String buildThermalJson(){

        return "{"
                + "\"minTempCelsius\":" + this.getMinTempInput() + ","
                + "\"maxTempCelsius\":" + this.getMaxTempInput() + ","
                + "\"heatingRatePerTick\":" + this.getHeatingRateInput() + ","
                + "\"coolingRatePerTick\":" + this.getCoolingRateInput() + "}";
   }

   private String buildPowerJson(String activePower, String idlePower) {
        return "{\"activePowerWatt\":" + activePower + ",\"idlePowerWatt\":" +idlePower + "}";
   }

   private void postJson(String url, String jsonBody){
        // creates an HTTP POST request that is then sent to the endpoint at the GatewayHttpServer
        XMLHttpRequest request = new XMLHttpRequest();
        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(jsonBody);
   }

   private void postForm(String url){
        // creates a post request for the back-end services
        XMLHttpRequest request = new XMLHttpRequest();
        request.open("POST", url);
        request.send();
   }



}
