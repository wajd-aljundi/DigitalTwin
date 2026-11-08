import { Component } from '@angular/core';
import { FactoryDigitalTwinManagerClientImpl } from 'factorydigitaltwin/FactoryDigitalTwinManagerClientImpl';
import { FactoryDigitalTwinComponentObserverManager } from 'FactoryDigitalTwinComponentObserverManager';
import { GemLineChartTypesDeSer } from '@umlp/charts'
import { ClientCommandManager, BaseClassObjectMapper, ClientCommandWebsocketCommunication, CommandManager } from '@umlp/commonj2ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    FactoryDigitalTwinManagerClientImpl.init();

    const cmdManager = new ClientCommandManager(new ClientCommandWebsocketCommunication(
      `${document.baseURI.replace(/^http/, 'ws').replace(/\/$/, '')}` + '/umlp/api/command'
    ));

    CommandManager.initMe(cmdManager);
    (<any>window).websocket_connected = true;

    FactoryDigitalTwinComponentObserverManager.init();
    BaseClassObjectMapper.addDeSers(GemLineChartTypesDeSer.getInstance().getDeSerMap())
  }
}
