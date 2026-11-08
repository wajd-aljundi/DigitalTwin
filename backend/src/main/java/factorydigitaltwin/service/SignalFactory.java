package factorydigitaltwin.service;




import factorydigitaltwin.Station;
import factorydigitaltwin.Signal;
import factorydigitaltwin.SignalBuilder;
import factorydigitaltwin.SignalCategory;
import factorydigitaltwin.SignalType;
import factorydigitaltwin.FactoryDigitalTwinManager;


import java.time.LocalDateTime;
import java.time.ZoneOffset;

// Factory for creating signal objects of incoming unique signals


public class SignalFactory {

    private SignalFactory(){}

    public static Signal build(String[] parts, String topic, Station station){
        // creates a signal object based on parts from the topic
        // the method expects a specific format in the topic.
        // a unique GEM id is generated for each new signal
        // parts consist of the topic components
        // topic is the complete signal topic
        // station is the station object to which a signal belongs to
        // returns a signal object

        String category = parts.length > 2 ? parts[2] : "";
        String direction = parts.length > 2 ? parts[3] : "";
        String name = parts.length > 2 ? parts[4] : direction;
        long id = FactoryDigitalTwinManager.getFreeGemId();

        return new SignalBuilder(id)
                .tagPath(topic)
                .name(name)
                .category(resolveCategory(category, direction))
                .signalKind(resolveType(name))
                .station(station)
                .currentValue("-")
                .lastUpdated(LocalDateTime.now())
                .build()
                .orElseThrow(() -> new RuntimeException("signal failed for topic: " + topic));

    }

    public static SignalCategory resolveCategory(String category, String direction){
        // resolves the incoming signal category into either input, output, or internal
        // both received event signals and measurement signals can be input or output depending on the signal
        // anything that does not match these cases is considered internal
        switch (category.toLowerCase()) {
            case "events":
                return "received".equalsIgnoreCase(direction) ? SignalCategory.INPUT : SignalCategory.OUTPUT;
            case "measurements":
                return "input".equalsIgnoreCase(direction) ? SignalCategory.INPUT : SignalCategory.OUTPUT;
            default: return SignalCategory.INTERNAL;
        }
    }

    private static SignalType resolveType(String name){
        // resolves the signal type depending on the content the incoming signal
        // encoder counters are represented as integers
        // null names, commands, command feedback or machine feedback are considered as string
        // temperature values and power readings are considered as doubles
        // any other case is considered a boolean
        if (name == null) return SignalType.STRING;
        String loweredName = name.toLowerCase();
        if (loweredName.contains("encodercounter")) return SignalType.INTEGER;
        if (loweredName.contains("command") || loweredName.contains("feedback") || loweredName.contains("message")) return SignalType.STRING;
        if (loweredName.contains("currentpowerinwatt") || loweredName.contains("currenttempcelsius")) return SignalType.DOUBLE;
        return SignalType.BOOLEAN;
    }
}
