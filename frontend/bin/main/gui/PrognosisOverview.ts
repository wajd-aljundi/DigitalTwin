/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { Prognosis } from 'factorydigitaltwin/Prognosis';
import { Station } from 'factorydigitaltwin/Station';
import { Component } from '@angular/core';
import { PrognosisOverviewTOP } from './PrognosisOverviewTOP';
import { StringHelper } from '@umlp/commonj2ts';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import { PrognosisOverviewComponent, config } from 'gui/PrognosisOverviewComponent';
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
export class PrognosisOverview extends PrognosisOverviewComponent implements OnDestroy {
    public ngOnDestroy(): void {
        super.ngOnDestroy();
        ComponentObserverManager.removeObservers("gui.PrognosisOverview" + this.uniqueIdentifier);
    }

    /**
     * 
     */
    public async init() {
        await super.init();
    }

    public async getSystemHealthAvg(
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

    public async getStationCount(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const stations: Array<Station> = (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
        return stations == null ? "0" : /* valueOf */String(/* size */(<number>stations.length)).toString();
    }

    public async getNextMaintenanceDate(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        const stations: Array<Station> = (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
        if (stations == null || /* isEmpty */(stations.length == 0))return "N/A";
        let earliest: string = null;
        for (let s of stations) {
            __regObsToDomainObj(s);
            {
                const progs: Array<Prognosis> = (await GemListUtil.toArraySync(await s.getPrognosesList()));
                if (progs != null && !/* isEmpty */(progs.length == 0)){
                    const d: string = __regObsToDomainObj(/* get */progs[0]).getNextMaintenanceText();
                    if (earliest == null || /* compareTo */d.localeCompare(earliest) < 0){
                        earliest = d;
                    }
                }
            }
        }
        return earliest != null ? earliest : "N/A";
    }

    public getWearProbability(errorIndex: number, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return Math.round(errorIndex * 100) + "%";
    }

    constructor() {
        super();
    }
}
PrognosisOverview["__class"] = "gui.PrognosisOverview";
PrognosisOverview["__interfaces"] = ["factorydigitaltwin.FactoryDigitalTwinObserver","factorydigitaltwin.StationObserver"];




