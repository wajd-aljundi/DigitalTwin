package gui;

import factorydigitaltwin.*;
import umlp.jsweet.extension.annotation.Component;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

//Controller for the main dashboard. It provides functions for station selection, performance indicators, alarm summary and fetching station state
@Component
public class Start extends StartTOP {

    @Override
    public void init() {
        super.init();
    }

    public String getStationCount() {
        List<Station> s = this.getStations();
        return s == null ? "0" : String.valueOf(s.size());
    }

    public Boolean isSelectedStation(Station station){
        Integer id = this.getSelectedStationId();
        if(id==null||station==null) return false;
        return station.getGemId() == id.longValue();
    }

    public String getSignalCount() {
        List<Signal> allSignals = this.getSignals();
        return allSignals == null ? "0" : String.valueOf(allSignals.size());
    }

    public String getSystemHealth() {
        List<Station> stations = this.getStations();
        if (stations == null || stations.isEmpty()) return "N/A";
        double total = 0; int count = 0;
        for (Station s : stations) {
            Prognosis prog = s.getPrognosis();
            if (prog != null) {
                total += prog.getHealth();
                count++;
            }
        }
        return count == 0 ? "N/A" : Math.round(total / count) + "%";
    }

    public String getTotalAlarmCount() {
        List<Station> stations = this.getStations();
        if (stations == null) return "0";
        int count = 0;
        for (Station s : stations) {
            count += s.getAlarmCount();
        }
        return String.valueOf(count);
    }

    public String getStationStateText(Station station) {
        // returns the station state as a text
        if (station == null) return "-";
        StationState st = station.getState();
        if (st == null) return "-";
        switch (st) {
            case ACTIVE: return "Active";
            case POWER_ON_IDLE: return "Power On Idle";
            case READY_IDLE: return "Ready Idle";
            case ERROR: return "Error";
            case OVERHEATED: return "Overheated";
            default: return st.toString();
        }
    }


    public String getSelectedStationHealth(Station station) {
        if (station == null) return "-";
        double h = station.getCurrentHealth();
        if(h<=0) return "-";
        return Math.round(h) + "%";
    }

    public Consumer<Void> selectStation(Station station) {
        return res -> {
            this.setSelectedStationId((int) station.getGemId());
            this.setDetailOpen(true);
        };
    }

    public Consumer<Void> closeDetail() {
        // close the station details panel in the dashboard
        return res -> this.setDetailOpen(false);
    }


    public String getSelectedStationName(Station s) {
        return s != null ? s.getName() : "-";
    }


    public String getStationExecutingText(Station s){
        // return the station's execution state as a text for display
        if (s == null) return "-";
        return s.isIsExecuting() ? "Yes" : "No";
    }

    public Boolean isNotExecuting(Station station) {
        if (station == null) return true;
        return !station.isIsExecuting();
    }

    public String getSelectedTemp(Station s) {
        if (s == null) return "-";
        double temp = s.getCurrentTempCelsius();
        return Math.round(temp) + "C";
    }

    private ThermalSettings getThermalSettings(){
        // fetches the configurable thermal thresholds overheatThreshold and overheatClearThreshold
        List<ThermalSettings> list = FactoryDigitalTwinManager.getThermalSettingsList();
        return (list != null && !list.isEmpty()) ? list.get(0) : null;
    }

    public String getSelectedThermalStatus(Station s){
        // compares the temperature of the selected station object to the threshold in thermalSettings.
        // It returns the thermal state of a station based on the results of the comparisons
        if (s==null) return "-";
        ThermalSettings settings = getThermalSettings();
        double clearThreshold = settings != null ? settings.getOverheatClearThreshold() : 75.0;
        double overheatThreshold = settings != null ? settings.getOverheatThreshold() : 90.0;
        double temp = s.getCurrentTempCelsius();
        if(temp<clearThreshold) return "Cool";
        if(temp<overheatThreshold) return "Medium";
        return "Overheating";
    }

    public String getSelectedCurrentPower(Station s){return s!= null ? Math.round(s.getCurrentPowerWatt())+"W" : "-";}

    public String getSelectedEnergyConsumed(Station s){
        if(s==null) return "-";
        double total = s.getTotalEnergyConsumedWh();
        double rounded = Math.round(total * 100.0) / 100.0;
        return rounded + " Wh";
    }

    public String getSelectedWearIndex(Station s) {
        if (s == null) return "-";
        double wi = s.getCurrentWearIndex();
        return wi +"";
    }

    public String getSelectedNextMaintenance(Station s){
        if(s==null) return "-";
        Prognosis prog = s.getPrognosis();
        if (prog == null) return "-";
        LocalDateTime dt = prog.getNextMaintenance();
        return dt != null ? dt.toLocalDate().toString() : "-";
    }

    public String getSelectedMaintenanceSummary(Station s) {
        if(s==null) return "-";
        Prognosis prog = s.getPrognosis();
        if(prog == null) return "no available prognosis";
        String summary = prog.getMaintenanceSummary();
        return summary != null ? summary : "-";
    }

    public String getLatestAlarmKind(Station s){
        // returns the latest alarm of the selected station object
        if (s==null) return "No alarms";
        String kind = s.getLatestAlarmKind();
        return (kind == null || kind.isEmpty()) ? "No alarms" : kind;
    }

    public String getLatestAlarmMessage(Station s){
        if (s==null) return "";
        String msg = s.getLatestAlarmMessage();
        return (msg == null || msg.isEmpty()) ? "no recent alarms" : msg;
    }

    public String getLatestAlarmTime(Station s){
        if (s==null) return "";
        List<Alarm> alarms = s.getAlarmsList();
        if(alarms == null || alarms.isEmpty()) return "";
        return alarms.get(alarms.size() - 1).getTimeStamp() + "";
    }

    public Boolean isComponentActive(String line) {
        if (line.isEmpty()) return false;
        String val = getComponentValue(line).trim().toLowerCase();
        return !(val.equals("no") || val.equals("off") || val.equals("closed"));
    }

    public Boolean isComponentInactive(String line){
        return !isComponentActive(line);
    }

    public String getComponentLabel(String line){
        if(line.isEmpty()) return "-";
        return line.split(":")[0];
    }
    public String getComponentValue(String line){
        if(line.isEmpty()) return "-";
        return line.split(":")[1];
    }

    public List<String> getComponentLines(Station station) {
        // returns the stations components and values as strings for display in the details panel
        List<String> lines = new ArrayList<>();
        if(station==null) return lines;
        if(station instanceof VacuumGripper){
            VacuumGripper v = (VacuumGripper) station;
            lines.add("Vertical Position: " + v.getCurrentVerticalCounter());
            lines.add("Rotation Position: " + v.getCurrentRotationCounter());
            lines.add("Arm Position: " + v.getCurrentArmCounter());
            lines.add("Vertical End: " + (v.isVerticalEnd() ? "Yes" : "No"));
            lines.add("Rotation End: " + (v.isRotationEnd() ? "Yes" : "No"));
            lines.add("Arm End: " + (v.isArmEnd() ? "Yes" : "No"));
            lines.add("Act Vertical Up: " + (v.isActVerticalUp() ? "Yes" : "No"));
            lines.add("Act Vertical Down: " + (v.isActVerticalDown() ? "Yes" : "No"));
            lines.add("Act Rotation Left: " + (v.isActRotationLeft() ? "Yes" : "No"));
            lines.add("Act Rotation Right: " + (v.isActRotationRight() ? "Yes" : "No"));
            lines.add("Act Arm In: " + (v.isActArmIn() ? "Yes" : "No"));
            lines.add("Act Arm Out: " + (v.isActArmOut() ? "Yes" : "No"));
            lines.add("Valve: " + (v.isActValve() ? "Open" : "Closed"));
            lines.add("Compressor: " + (v.isActCompressorOn() ? "On" : "Off"));
        } else if (station instanceof  HighBay) {
            HighBay h = (HighBay) station;
            lines.add("Vertical Position: " + h.getPositionVertical());
            lines.add("Horizontal Position: " + h.getPositionHorizontal());
            lines.add("Vertical Sensor: " + (h.isSensVertical() ? "Yes" : "No"));
            lines.add("Horizontal Sensor: " + (h.isSensHorizontal() ? "Yes" : "No"));
            lines.add("Sensor Inside: " + (h.isSensInside() ? "Yes" : "No"));
            lines.add("Sensor Outside: " + (h.isSensOutside() ? "Yes" : "No"));
            lines.add("Cantilever Front: " + (h.isSensCantileverFront() ? "Yes" : "No"));
            lines.add("CantiLever Back: " + (h.isSensCantileverBack() ? "Yes" : "No"));
            lines.add("Move Up: " + (h.isActUp() ? "On" : "Off"));
            lines.add("Move Down: " + (h.isActDown() ? "On" : "Off"));
            lines.add("Actor Horizontal To Conveyor: " + (h.isActHorizontalToConveyor() ? "On" : "Off"));
            lines.add("Actor Horizontal To Rack: " + (h.isActHorizontalToRack() ? "On" : "Off"));
            lines.add("Cantilever Forward: " + (h.isActCantileverForward() ? "On" : "Off"));
            lines.add("Cantilever Backward: " + (h.isActCantileverBackward() ? "On" : "Off"));
        }else if (station instanceof  MultiProcessing) {
            MultiProcessing m = (MultiProcessing) station;
            lines.add("Oven Sensor: " + (m.isSensOven() ? "Yes" : "No"));
            lines.add("Oven Feeder In: " + (m.isSensOvenFeederIn() ? "Yes" : "No"));
            lines.add("Oven Feeder Out: " + (m.isSensOvenFeederOut() ? "Yes" : "No"));
            lines.add("Turntable Saw: " + (m.isSensTurntablePosSaw() ? "Yes" : "No"));
            lines.add("Turntable Belt: " + (m.isSensTurntablePosBelt() ? "Yes" : "No"));
            lines.add("Turntable Vacuum: " + (m.isSensTurntablePosVacuum() ? "Yes" : "No"));
            lines.add("At Oven Vacuum Gripper: " + (m.isSensVacuumGripperAtOven() ? "On" : "Off"));
            lines.add("At Turntable Vacuum Gripper: " + (m.isSensVacuumGripperAtTurntable() ? "On" : "Off"));
            lines.add("Conveyor Forward: " + (m.isActConveyorForward() ? "On" : "Off"));
            lines.add("Actor Gripper to Oven: " + (m.isActGripperToOven() ? "On" : "Off"));
            lines.add("Actor Gripper to Turntable: " + (m.isActGripperToTurnTable() ? "On" : "Off"));
            lines.add("Lower Valve: " + (m.isActLowerValve() ? "On" : "Off"));
            lines.add("Oven Inward: " + (m.isActOvenInward() ? "On" : "Off"));
            lines.add("Oven Outward: " + (m.isActOvenOutward() ? "On" : "Off"));
            lines.add("Rot Clockwise: " + (m.isActRotClockwise() ? "On" : "Off"));
            lines.add("Rot Counterclockwise: " + (m.isActRotCounterClockwise() ? "On" : "Off"));
            lines.add("Saw: " + (m.isActSaw() ? "On" : "Off"));
            lines.add("Compressor: " + (m.isActCompressor() ? "On" : "Off"));
            lines.add("Oven Light: " + (m.isActOvenLight() ? "On" : "Off"));
            lines.add("Valve Feeder: " + (m.isValveFeeder() ? "On" : "Off"));
            lines.add("Valve OvenDoor: " + (m.isValveOvenDoor() ? "On" : "Off"));
            lines.add("Valve Vacuum: " + (m.isValveVacuum() ? "On" : "Off"));
        }else if (station instanceof  SortingLine) {
            SortingLine s = (SortingLine) station;
            lines.add("Input Light Barrier: " + (s.isSensInputLightBarrier() ? "On" : "Off"));
            lines.add("Impulse Counter: " + (s.isSensImpulseCounterRaw() ? "On" : "Off"));
            lines.add("Middle Light Barrier: " + (s.isSensMiddleLightBarrier() ? "On" : "Off"));
            lines.add("Blue Light Barrier: " + (s.isSensBlueLightBarrier() ? "On" : "Off"));
            lines.add("Red Light Barrier: " + (s.isSensRedLightBarrier() ? "On" : "Off"));
            lines.add("White Light Barrier: " + (s.isSensWhiteLightBarrier() ? "On" : "Off"));
            lines.add("Blue Ejector: " + (s.isActBlueEjector() ? "On" : "Off"));
            lines.add("Red Ejector: " + (s.isActRedEjector() ? "On" : "Off"));
            lines.add("White Ejector: " + (s.isActWhiteEjector() ? "On" : "Off"));
            lines.add("Compressor: " + (s.isActCompressorOn() ? "On" : "Off"));
            lines.add("Motor Conveyor: " + (s.isActMotorConveyor() ? "On" : "Off"));
        }else if (station instanceof  ConveyorBelt) {
            ConveyorBelt c = (ConveyorBelt) station;
            lines.add("Sens Feed: " + (c.isSensFeed()?"Yes":"No"));
            lines.add("Sens Impulse: " + (c.isSensImpulse() ? "Yes" : "No"));
            lines.add("Sens Swap: " + (c.isSensSwap() ? "Yes" : "No"));
            lines.add("Backward: " + (c.isActBackward() ? "On" : "Off"));
            lines.add("Forward: " + (c.isActForward() ? "On" : "Off"));
        }else if (station instanceof  PunchingMachine) {
            PunchingMachine p = (PunchingMachine) station;
            lines.add("Sen Down: " + (p.isSensDown()?"On":"Off"));
            lines.add("Sen Up: " + (p.isSensUp() ? "On" : "Off"));
            lines.add("Sen Goods: " + (p.isSensGoods() ? "On" : "Off"));
            lines.add("Sens Machine: " + (p.isSensMachine() ? "Yes" : "No"));
            lines.add("Conveyor Backward: " + (p.isActConveyorBackward() ? "On" : "Off"));
            lines.add("Conveyor Forward: " + (p.isActConveyorForward() ? "On" : "Off"));
            lines.add("Down: " + (p.isActDown() ? "On" : "Off"));
            lines.add("Up: " + (p.isActUp() ? "On" : "Off"));
        }
        return lines;
    }

    public Boolean hasActiveAlarm(Station station){
        return station.getAlarmCount()>0;
    }

}


