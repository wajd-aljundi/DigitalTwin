package factorydigitaltwin.service;



import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.jspecify.annotations.NonNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.integration.channel.DirectChannel;
import org.springframework.integration.core.MessageProducer;
import org.springframework.integration.mqtt.core.DefaultMqttPahoClientFactory;
import org.springframework.integration.mqtt.core.MqttPahoClientFactory;
import org.springframework.integration.mqtt.inbound.MqttPahoMessageDrivenChannelAdapter;
import org.springframework.integration.mqtt.support.DefaultPahoMessageConverter;
import org.springframework.messaging.MessageChannel;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.integration.mqtt.support.MqttHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHandler;
import org.springframework.messaging.MessagingException;


@Configuration
public class MqttConfig {
    @Value("${mqtt.broker.url:tcp://localhost:1883}")
    private String BROKER_URL;
    private static final String CLIENT_ID = "factory-digital-twin";
    private static final String TOPIC = "DigitalTwin/Island 1/#";

    @Bean
    public MqttPahoClientFactory mqttClientFactory(){
        DefaultMqttPahoClientFactory factory = new DefaultMqttPahoClientFactory();
        MqttConnectOptions options = new MqttConnectOptions();

        options.setServerURIs(new String[] {BROKER_URL});
        options.setCleanSession(true);
        options.setAutomaticReconnect(true);
        options.setConnectionTimeout(10);
        options.setKeepAliveInterval(30);
        factory.setConnectionOptions(options);

        return factory;
    }

    @Bean
    public MessageChannel mqttInputChannel(){
        return new DirectChannel();
    }

    @Bean
    public MessageProducer mqttInbound(MqttPahoClientFactory factory, DirectChannel mqttInputChannel){
        MqttPahoMessageDrivenChannelAdapter mqttPahoMessageDrivenChannelAdapter   = new MqttPahoMessageDrivenChannelAdapter(CLIENT_ID, factory, TOPIC);
        mqttPahoMessageDrivenChannelAdapter.setConverter(new DefaultPahoMessageConverter());
        mqttPahoMessageDrivenChannelAdapter.setQos(1);
        mqttPahoMessageDrivenChannelAdapter.setOutputChannel(mqttInputChannel);
        mqttPahoMessageDrivenChannelAdapter.setCompletionTimeout(1000);
        return mqttPahoMessageDrivenChannelAdapter;
    }

    @Bean
    @ServiceActivator(inputChannel = "mqttInputChannel")
    public MessageHandler mqttMessageHandler(MqttMessageService mqttMessageService){
        // creates message handler for incoming MQTT messages
        // extracts the topic and payload and delegates them to MqttMessageService
        // messages without a topic or messages with a empty payload are ignored
        return new MessageHandler() {
            @Override
            public void handleMessage(@NonNull Message<?> message) throws MessagingException {
                Object topic = message.getHeaders().get(MqttHeaders.RECEIVED_TOPIC);
                if (topic==null) return;
                String topicText = topic.toString();
                String payload = (String) message.getPayload();
                if(!payload.isEmpty()){
                    mqttMessageService.handleMessage(topicText, payload);
                }
            }
        };
    }
}
