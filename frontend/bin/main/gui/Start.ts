/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { Alarm } from 'factorydigitaltwin/Alarm';
import { Prognosis } from 'factorydigitaltwin/Prognosis';
import { Signal } from 'factorydigitaltwin/Signal';
import { Station } from 'factorydigitaltwin/Station';
import { Component } from '@angular/core';
import { StartTOP } from './StartTOP';
import { StringHelper } from '@umlp/commonj2ts';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import { StartComponent, config } from 'gui/StartComponent';
import { OnDestroy } from '@angular/core';
import { GemListUtil } from '@umlp/commonj2ts';
import { GemIdentifiable } from '@umlp/commonj2ts';

@Component({
    standalone: true,
    imports: [...config.imports],
    selector: config.selector,
    templateUrl: config.templateUrl,
    styles: config.styles,
    styleUrls: [...config.styleUrls]
})
export class Start extends StartComponent implements OnDestroy {
    public ngOnDestroy(): void {
        super.ngOnDestroy();
        ComponentObserverManager.removeObservers("gui.Start" + this.uniqueIdentifier);
    }

    /**
     * 
     */
    public async init() {
        await super.init();
    }

    public async getStationCount(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const s: Array<Station> = (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
        return s == null ? "0" : /* valueOf */String(/* size */(<number>s.length)).toString();
    }

    public async getSignalCount(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const stations: Array<Station> = (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
        if (stations == null)return "0";
        let count: number = 0;
        for (let s of stations) {
            __regObsToDomainObj(s);
            {
                const sigs: Array<Signal> = (await GemListUtil.toArraySync(await s.getSignalsList()));
                if (sigs != null)count += /* size */(<number>sigs.length);
            }
        }
        return /* valueOf */String(count).toString();
    }

    public async getSystemHealth(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const stations: Array<Station> = (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
        if (stations == null || /* isEmpty */(stations.length == 0))return "N/A";
        let total: number = 0;
        let count: number = 0;
        for (let s of stations) {
            __regObsToDomainObj(s);
            {
                const progs: Array<Prognosis> = (await GemListUtil.toArraySync(await s.getPrognosesList()));
                if (progs != null && !/* isEmpty */(progs.length == 0)){
                    total += __regObsToDomainObj(/* get */progs[0]).getHealth();
                    count++;
                }
            }
        }
        return count === 0 ? "N/A" : Math.round(total / count) + "%";
    }

    public async getAlarmCount(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const stations: Array<Station> = (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
        if (stations == null)return "0";
        let count: number = 0;
        for (let s of stations) {
            __regObsToDomainObj(s);
            {
                const alarms: Array<Alarm> = (await GemListUtil.toArraySync(await s.getAlarmsList()));
                if (alarms != null)count += /* size */(<number>alarms.length);
            }
        }
        return /* valueOf */String(count).toString();
    }

    public async getStationHealth(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        __regObsToDomainObj(station);
        if (station == null)return "\u2014";
        const progs: Array<Prognosis> = (await GemListUtil.toArraySync(await station.getPrognosesList()));
        if (progs == null || /* isEmpty */(progs.length == 0))return "\u2014";
        return Math.round(__regObsToDomainObj(/* get */progs[0]).getHealth()) + "%";
    }

    public selectStation(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        __regObsToDomainObj(station);
        return ($) => {
            this.setSelectedStationId((<number>station.getGemId()|0));
            this.setDetailOpen(true);
        };
    }

    public closeDetail(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return ($) => this.setDetailOpen(false);
    }

    private getSelectedStation__SynchronizedResult: Station = undefined;
    public getSelectedStation__synchronized(): Station {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedStation__SynchronizedResult === undefined) {
            this.getSelectedStation__SynchronizedResult = null;
            this.getSelectedStation__update();
        }
        return this.getSelectedStation__SynchronizedResult;
    }

    public getSelectedStation__update(): void {
        
        Promise.resolve(this.getSelectedStation(
            this.createDomainObserverRegisterFunction('getSelectedStation__update' + this.computeHash([]), () => this.getSelectedStation__update()),
            this.createStateVarObserverRegisterFunction('getSelectedStation__update' + this.computeHash([]), () => this.getSelectedStation__update())
        )).then(__v => this.getSelectedStation__SynchronizedResult = __v === undefined ? null : __v);
    }

    /*private*/ async getSelectedStation(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Station> {
        const id: number = __regObsToStateVar(this.getSelectedStationId(__regObsToDomainObj, __regObsToStateVar), "_selectedStationId");
        if (id == null)return null;
        const stations: Array<Station> = (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
        if (stations == null)return null;
        for (let s of stations) {
            __regObsToDomainObj(s);
            {
                if (s.getGemId() === /* longValue */id)return s;
            }
        }
        return null;
    }

    public async getSelectedStationName(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const s: Station = __regObsToDomainObj(await this.getSelectedStation(__regObsToDomainObj, __regObsToStateVar));
        return s != null ? s.getName() : "\u2014";
    }

    public async getSelectedStationType(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const s: Station = __regObsToDomainObj(await this.getSelectedStation(__regObsToDomainObj, __regObsToStateVar));
        return s != null ? s.getTypeText() : "\u2014";
    }

    public async getSelectedStationState(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const s: Station = __regObsToDomainObj(await this.getSelectedStation(__regObsToDomainObj, __regObsToStateVar));
        return s != null ? s.getStateText() : "\u2014";
    }

    public async getSelectedSignalCount(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const s: Station = __regObsToDomainObj(await this.getSelectedStation(__regObsToDomainObj, __regObsToStateVar));
        if (s == null)return "0";
        const sigs: Array<Signal> = (await GemListUtil.toArraySync(await s.getSignalsList()));
        return sigs == null ? "0" : /* valueOf */String(/* size */(<number>sigs.length)).toString();
    }

    public async getSelectedStationHealth(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const s: Station = __regObsToDomainObj(await this.getSelectedStation(__regObsToDomainObj, __regObsToStateVar));
        if (s == null)return "\u2014";
        const progs: Array<Prognosis> = (await GemListUtil.toArraySync(await s.getPrognosesList()));
        if (progs == null || /* isEmpty */(progs.length == 0))return "\u2014";
        return Math.round(__regObsToDomainObj(/* get */progs[0]).getHealth()) + "%";
    }

    public async getSelectedWearProb(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const s: Station = __regObsToDomainObj(await this.getSelectedStation(__regObsToDomainObj, __regObsToStateVar));
        if (s == null)return "\u2014";
        const progs: Array<Prognosis> = (await GemListUtil.toArraySync(await s.getPrognosesList()));
        if (progs == null || /* isEmpty */(progs.length == 0))return "\u2014";
        return Math.round(__regObsToDomainObj(/* get */progs[0]).getErrorIndex() * 100) + "%";
    }

    public async getSelectedThroughput(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const s: Station = __regObsToDomainObj(await this.getSelectedStation(__regObsToDomainObj, __regObsToStateVar));
        if (s == null)return "\u2014";
        const progs: Array<Prognosis> = (await GemListUtil.toArraySync(await s.getPrognosesList()));
        if (progs == null || /* isEmpty */(progs.length == 0))return "\u2014";
        return Math.round(__regObsToDomainObj(/* get */progs[0]).getHealth() * 1.7) + " parts/h";
    }

    public async getSelectedRecommendation(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const s: Station = __regObsToDomainObj(await this.getSelectedStation(__regObsToDomainObj, __regObsToStateVar));
        if (s == null)return "\u2014";
        const progs: Array<Prognosis> = (await GemListUtil.toArraySync(await s.getPrognosesList()));
        if (progs == null || /* isEmpty */(progs.length == 0))return "Monitor normally.";
        const health: number = __regObsToDomainObj(/* get */progs[0]).getHealth();
        const error: number = __regObsToDomainObj(/* get */progs[0]).getErrorIndex();
        if (health < 70 || error > 0.5)return "Schedule maintenance soon.";
        if (health < 85 || error > 0.3)return "Monitor closely. Check wear parts.";
        return "Continue operation. Monitor normally.";
    }

    public startSimulation(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return ($) => console.info("[Simulation] Start requested");
    }

    public stopSimulation(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return ($) => console.info("[Simulation] Stop requested");
    }

    public resetSimulation(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return ($) => console.info("[Simulation] Reset requested");
    }

    constructor() {
        super();
    }
}
Start["__class"] = "gui.Start";
Start["__interfaces"] = ["factorydigitaltwin.FactoryDigitalTwinObserver"];




