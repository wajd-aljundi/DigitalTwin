/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { Measurement } from 'factorydigitaltwin/Measurement';
import { Signal } from 'factorydigitaltwin/Signal';
import { Station } from 'factorydigitaltwin/Station';
import { Component } from '@angular/core';
import { SignalOverviewTOP } from './SignalOverviewTOP';
import { StringHelper } from '@umlp/commonj2ts';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import { SignalOverviewComponent, config } from 'gui/SignalOverviewComponent';
import { OnDestroy } from '@angular/core';
import { GemListUtil } from '@umlp/commonj2ts';
import { GemIdentifiable } from '@umlp/commonj2ts';
import ManyKeysMap from 'many-keys-map';
@Component({
    standalone: true,
    imports: [...config.imports],
    selector: config.selector,
    templateUrl: config.templateUrl,
    styles: config.styles,
    styleUrls: [...config.styleUrls]
})
export class SignalOverview extends SignalOverviewComponent implements OnDestroy {
    public ngOnDestroy(): void {
        super.ngOnDestroy();
        ComponentObserverManager.removeObservers("gui.SignalOverview" + this.uniqueIdentifier);
    }

    /**
     * 
     */
    public async init() {
        await super.init();
    }

    public openExportDialog(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return ($) => this.setExportDialogOpen(true);
    }

    public closeExportDialog(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return ($) => this.setExportDialogOpen(false);
    }

    public async exportCsv(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<(p1: void) => void> {
        return async ($) => {
            const csv: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
            /* append */(sb => { sb.str += <any>"Station,Signal,Category,Topic,Value,Timestamp,LatencyMs\n"; return sb; })(csv);
            const stations: Array<Station> = (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
            if (stations == null)return;
            for (let station of stations) {
                __regObsToDomainObj(station);
                {
                    const signals: Array<Signal> = (await GemListUtil.toArraySync(await station.getSignalsList()));
                    if (signals == null)continue;
                    for (let signal of signals) {
                        __regObsToDomainObj(signal);
                        {
                            const measurements: Array<Measurement> = (await GemListUtil.toArraySync(await signal.getMeasurementsList()));
                            if (measurements == null)continue;
                            for (let m of measurements) {
                                __regObsToDomainObj(m);
                                {
                                    /* append */(sb => { sb.str += <any>"\n"; return sb; })(/* append */(sb => { sb.str += <any>m.getLatencyMs(); return sb; })(/* append */(sb => { sb.str += <any>","; return sb; })(/* append */(sb => { sb.str += <any>this.escape(m.getTimestampText(), __regObsToDomainObj, __regObsToStateVar); return sb; })(/* append */(sb => { sb.str += <any>","; return sb; })(/* append */(sb => { sb.str += <any>this.escape(m.getStringValue(), __regObsToDomainObj, __regObsToStateVar); return sb; })(/* append */(sb => { sb.str += <any>","; return sb; })(/* append */(sb => { sb.str += <any>this.escape(signal.getTopic(), __regObsToDomainObj, __regObsToStateVar); return sb; })(/* append */(sb => { sb.str += <any>","; return sb; })(/* append */(sb => { sb.str += <any>this.escape(signal.getCategoryText(), __regObsToDomainObj, __regObsToStateVar); return sb; })(/* append */(sb => { sb.str += <any>","; return sb; })(/* append */(sb => { sb.str += <any>this.escape(signal.getName(), __regObsToDomainObj, __regObsToStateVar); return sb; })(/* append */(sb => { sb.str += <any>","; return sb; })(/* append */(sb => { sb.str += <any>this.escape(station.getName(), __regObsToDomainObj, __regObsToStateVar); return sb; })(csv))))))))))))));
                                }
                            }
                        }
                    }
                }
            }
            const dataUri: string = "data:text/csv;charset=utf-8," + /* toString */csv.str;
            alert("CSV ready \u2014 " + StringHelper.split(/* toString */csv.str, "\n").length + " rows. Copy from console or implement download link.");
            console.info(/* toString */csv.str);
            this.setExportDialogOpen(false);
        };
    }

    private escape__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public escape__synchronized(val: string): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.escape__SynchronizedResult.get([val]) === undefined) {
            this.escape__SynchronizedResult.set([val], null);
            this.escape__update(val);
        }
        return this.escape__SynchronizedResult.get([val]);
    }

    public escape__update(val: string): void {
        
        Promise.resolve(this.escape(val,
            this.createDomainObserverRegisterFunction('escape__update' + this.computeHash([val]), () => this.escape__update(val)),
            this.createStateVarObserverRegisterFunction('escape__update' + this.computeHash([val]), () => this.escape__update(val))
        )).then(__v => this.escape__SynchronizedResult.set([val], __v === undefined ? null : __v));
    }

    /*private*/ escape(val: string, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (val == null)return "";
        if (/* contains */(val.indexOf(",") != -1) || /* contains */(val.indexOf("\"") != -1) || /* contains */(val.indexOf("\n") != -1)){
            return "\"" + /* replace */val.split("\"").join("\"\"") + "\"";
        }
        return val;
    }

    constructor() {
        super();
    }
}
SignalOverview["__class"] = "gui.SignalOverview";
SignalOverview["__interfaces"] = ["factorydigitaltwin.FactoryDigitalTwinObserver","factorydigitaltwin.SignalObserver","factorydigitaltwin.StationObserver"];




