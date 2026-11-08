/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { EmptyFactoryDigitalTwinObserver } from 'factorydigitaltwin/EmptyFactoryDigitalTwinObserver';
import { FactoryDigitalTwinManager } from 'factorydigitaltwin/FactoryDigitalTwinManager';
import { Prognosis } from 'factorydigitaltwin/Prognosis';
import { Station } from 'factorydigitaltwin/Station';
import { StationObserver } from 'factorydigitaltwin/StationObserver';
import { Station_subscribeManagerEvents } from 'factorydigitaltwin/commands/Station_subscribeManagerEvents';
import { StringHelper } from '@umlp/commonj2ts';
import { CommandManager } from '@umlp/commonj2ts';
import { NotificationScope } from '@umlp/commonj2ts';
import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import { IUMLPList } from '@umlp/commonj2ts';
import ManyKeysMap from 'many-keys-map';import { GemIdentifiable } from '@umlp/commonj2ts';
import { GemListUtil } from '@umlp/commonj2ts';

@Directive()
export abstract class PrognosisOverviewTOP extends EmptyFactoryDigitalTwinObserver implements StationObserver {
    protected toArray<T>(arr: IUMLPList<T> | Array<T>): Array<T> {
        return GemListUtil.toArray(arr);
    }

    private static nextId: number = 0;
    protected uniqueIdentifier:number = PrognosisOverviewTOP.nextId++;

    private static nextHash: number = 0;
    protected hashes: ManyKeysMap<any, number> = new ManyKeysMap();
    protected computeHash(objs: any[]): number {
        let key = [];
        for (const obj of objs) {
            if (typeof obj.getGemId === 'function') {
                key.push(obj.getGemId());
            } else {
                key.push(obj);
            }
        }
        if (this.hashes.has(key)) {
            return this.hashes.get(key);
        } else {
            let hash: number = PrognosisOverviewTOP.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.PrognosisOverview" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.PrognosisOverview" + this.uniqueIdentifier);
        }
    }


    protected _router: Router;

    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifySetName(station: Station, oldValue: string, o: string) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifySetName(station: Station, oldValue: string, o: string, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetName(station, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifySetType(station: Station, oldValue: StationType, o: StationType) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifySetType(station: Station, oldValue: StationType, o: StationType, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetType(station, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifySetTypeText(station: Station, oldValue: string, o: string) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifySetTypeText(station: Station, oldValue: string, o: string, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetTypeText(station, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifySetPath(station: Station, oldValue: string, o: string) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifySetPath(station: Station, oldValue: string, o: string, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetPath(station, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifySetState(station: Station, oldValue: StationState, o: StationState) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifySetState(station: Station, oldValue: StationState, o: StationState, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetState(station, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifySetStateText(station: Station, oldValue: string, o: string) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifySetStateText(station: Station, oldValue: string, o: string, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetStateText(station, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifyAddSignals(station: Station, arg: number, indexInList: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifyAddSignals(station: Station, arg: number, indexInList: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyAddSignals(station, arg, indexInList);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifyRemoveSignals(station: Station, arg: number, idx: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifyRemoveSignals(station: Station, arg: number, idx: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyRemoveSignals(station, arg, idx);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    notifySetSignals(station: Station, idx: number, oldValue: number, o: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    maybeNotifySetSignals(station: Station, idx: number, oldValue: number, o: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            this.notifySetSignals(station, idx, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifyAddStatuses(station: Station, arg: number, indexInList: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifyAddStatuses(station: Station, arg: number, indexInList: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyAddStatuses(station, arg, indexInList);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifyRemoveStatuses(station: Station, arg: number, idx: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifyRemoveStatuses(station: Station, arg: number, idx: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyRemoveStatuses(station, arg, idx);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    notifySetStatuses(station: Station, idx: number, oldValue: number, o: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    maybeNotifySetStatuses(station: Station, idx: number, oldValue: number, o: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            this.notifySetStatuses(station, idx, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifyAddAlarms(station: Station, arg: number, indexInList: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifyAddAlarms(station: Station, arg: number, indexInList: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyAddAlarms(station, arg, indexInList);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifyRemoveAlarms(station: Station, arg: number, idx: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifyRemoveAlarms(station: Station, arg: number, idx: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyRemoveAlarms(station, arg, idx);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    notifySetAlarms(station: Station, idx: number, oldValue: number, o: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    maybeNotifySetAlarms(station: Station, idx: number, oldValue: number, o: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            this.notifySetAlarms(station, idx, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifyAddPrognoses(station: Station, arg: number, indexInList: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyAddPrognoses(station, arg, indexInList);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifyRemovePrognoses(station: Station, arg: number, idx: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifyRemovePrognoses(station: Station, arg: number, idx: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyRemovePrognoses(station, arg, idx);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    notifySetPrognoses(station: Station, idx: number, oldValue: number, o: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    maybeNotifySetPrognoses(station: Station, idx: number, oldValue: number, o: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            this.notifySetPrognoses(station, idx, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifyAddParameters(station: Station, arg: number, indexInList: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifyAddParameters(station: Station, arg: number, indexInList: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyAddParameters(station, arg, indexInList);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async notifyRemoveParameters(station: Station, arg: number, idx: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    async maybeNotifyRemoveParameters(station: Station, arg: number, idx: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyRemoveParameters(station, arg, idx);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    notifySetParameters(station: Station, idx: number, oldValue: number, o: number) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    maybeNotifySetParameters(station: Station, idx: number, oldValue: number, o: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            this.notifySetParameters(station, idx, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    notifyBuild(station: Station) {
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    maybeNotifyBuild(station: Station, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][this.getScope()].contains(scope)){
            this.notifyBuild(station);
        }
    }
    _stations: Array<Station>;

    public _stationsSetExternally: boolean;

    gemTableHeader12Cols_0: Array<string>;

    public constructor() {
        super();
        if (this._stations === undefined) { this._stations = null; }
        this._stationsSetExternally = false;
        if (this.gemTableHeader12Cols_0 === undefined) { this.gemTableHeader12Cols_0 = null; }
    }

    private getStations__SynchronizedResult: Array<Station> = undefined;
    public getStations__synchronized(): Array<Station> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStations__SynchronizedResult === undefined) {
            this.getStations__SynchronizedResult = null;
            this.getStations__update();
        }
        return this.getStations__SynchronizedResult;
    }

    public getStations__update(): void {
        
        Promise.resolve(this.getStations(
            this.createDomainObserverRegisterFunction('getStations__update' + this.computeHash([]), () => this.getStations__update()),
            this.createStateVarObserverRegisterFunction('getStations__update' + this.computeHash([]), () => this.getStations__update())
        )).then(__v => this.getStations__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getStations(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Array<Station> {
        return this._stations;
    }

    public setStations(val: Array<Station>) {
                this._stationsSetExternally = true;
        this._stations = val;

        ComponentObserverManager.callStateVariableObserver("_stations", "gui.PrognosisOverview" + this.uniqueIdentifier);
        this.getStations__update();
    }

    async removeStations(gemId_$: number) {
        for(let i: number = /* size */(<number>(await GemListUtil.toArraySync((await this.getStations()))).length) - 1; i >= 0; --i) {{
            if (/* get */(await GemListUtil.toArraySync((await this.getStations())))[i].getGemId() === gemId_$){
                /* remove */(await GemListUtil.toArraySync((await this.getStations()))).splice(i, 1)[0];
            }
        };}
    }

    async addStations(val_$: Station) {
        /* add */(await GemListUtil.toArraySync((await this.getStations()))).splice(/* size */(<number>(await GemListUtil.toArraySync((await this.getStations()))).length), 0, val_$);
    }

    private getScope__SynchronizedResult: NotificationScope = undefined;
    public getScope__synchronized(): NotificationScope {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getScope__SynchronizedResult === undefined) {
            this.getScope__SynchronizedResult = null;
            this.getScope__update();
        }
        return this.getScope__SynchronizedResult;
    }

    public getScope__update(): void {
        
        Promise.resolve(this.getScope(
            this.createDomainObserverRegisterFunction('getScope__update' + this.computeHash([]), () => this.getScope__update()),
            this.createStateVarObserverRegisterFunction('getScope__update' + this.computeHash([]), () => this.getScope__update())
        )).then(__v => this.getScope__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getScope(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): NotificationScope {
        return NotificationScope.LOCAL;
    }

    private getGemText2Value__SynchronizedResult: string = undefined;
    public getGemText2Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText2Value__SynchronizedResult === undefined) {
            this.getGemText2Value__SynchronizedResult = null;
            this.getGemText2Value__update();
        }
        return this.getGemText2Value__SynchronizedResult;
    }

    public getGemText2Value__update(): void {
        
        Promise.resolve(this.getGemText2Value(
            this.createDomainObserverRegisterFunction('getGemText2Value__update' + this.computeHash([]), () => this.getGemText2Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText2Value__update' + this.computeHash([]), () => this.getGemText2Value__update())
        )).then(__v => this.getGemText2Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText2Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Prognosis";
        return val_$;
    }

    private getGemText2Size__SynchronizedResult: string = undefined;
    public getGemText2Size__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText2Size__SynchronizedResult === undefined) {
            this.getGemText2Size__SynchronizedResult = null;
            this.getGemText2Size__update();
        }
        return this.getGemText2Size__SynchronizedResult;
    }

    public getGemText2Size__update(): void {
        
        Promise.resolve(this.getGemText2Size(
            this.createDomainObserverRegisterFunction('getGemText2Size__update' + this.computeHash([]), () => this.getGemText2Size__update()),
            this.createStateVarObserverRegisterFunction('getGemText2Size__update' + this.computeHash([]), () => this.getGemText2Size__update())
        )).then(__v => this.getGemText2Size__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText2Size(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "2rem";
        return val_$;
    }

    private getGemText2Weight__SynchronizedResult: string = undefined;
    public getGemText2Weight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText2Weight__SynchronizedResult === undefined) {
            this.getGemText2Weight__SynchronizedResult = null;
            this.getGemText2Weight__update();
        }
        return this.getGemText2Weight__SynchronizedResult;
    }

    public getGemText2Weight__update(): void {
        
        Promise.resolve(this.getGemText2Weight(
            this.createDomainObserverRegisterFunction('getGemText2Weight__update' + this.computeHash([]), () => this.getGemText2Weight__update()),
            this.createStateVarObserverRegisterFunction('getGemText2Weight__update' + this.computeHash([]), () => this.getGemText2Weight__update())
        )).then(__v => this.getGemText2Weight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText2Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText3Value__SynchronizedResult: string = undefined;
    public getGemText3Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText3Value__SynchronizedResult === undefined) {
            this.getGemText3Value__SynchronizedResult = null;
            this.getGemText3Value__update();
        }
        return this.getGemText3Value__SynchronizedResult;
    }

    public getGemText3Value__update(): void {
        
        Promise.resolve(this.getGemText3Value(
            this.createDomainObserverRegisterFunction('getGemText3Value__update' + this.computeHash([]), () => this.getGemText3Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText3Value__update' + this.computeHash([]), () => this.getGemText3Value__update())
        )).then(__v => this.getGemText3Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText3Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "System health, wear probability and maintenance schedule.";
        return val_$;
    }

    private getGemText3Color__SynchronizedResult: string = undefined;
    public getGemText3Color__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText3Color__SynchronizedResult === undefined) {
            this.getGemText3Color__SynchronizedResult = null;
            this.getGemText3Color__update();
        }
        return this.getGemText3Color__SynchronizedResult;
    }

    public getGemText3Color__update(): void {
        
        Promise.resolve(this.getGemText3Color(
            this.createDomainObserverRegisterFunction('getGemText3Color__update' + this.computeHash([]), () => this.getGemText3Color__update()),
            this.createStateVarObserverRegisterFunction('getGemText3Color__update' + this.computeHash([]), () => this.getGemText3Color__update())
        )).then(__v => this.getGemText3Color__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText3Color(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "secondary";
        return val_$;
    }

    private getGemColumn1RowGap__SynchronizedResult: string = undefined;
    public getGemColumn1RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn1RowGap__SynchronizedResult === undefined) {
            this.getGemColumn1RowGap__SynchronizedResult = null;
            this.getGemColumn1RowGap__update();
        }
        return this.getGemColumn1RowGap__SynchronizedResult;
    }

    public getGemColumn1RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn1RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn1RowGap__update' + this.computeHash([]), () => this.getGemColumn1RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn1RowGap__update' + this.computeHash([]), () => this.getGemColumn1RowGap__update())
        )).then(__v => this.getGemColumn1RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn1RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "4px";
        return val_$;
    }

    private getGemText5Value__SynchronizedResult: string = undefined;
    public getGemText5Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText5Value__SynchronizedResult === undefined) {
            this.getGemText5Value__SynchronizedResult = null;
            this.getGemText5Value__update();
        }
        return this.getGemText5Value__SynchronizedResult;
    }

    public getGemText5Value__update(): void {
        
        Promise.resolve(this.getGemText5Value(
            this.createDomainObserverRegisterFunction('getGemText5Value__update' + this.computeHash([]), () => this.getGemText5Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText5Value__update' + this.computeHash([]), () => this.getGemText5Value__update())
        )).then(__v => this.getGemText5Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText5Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Average health:";
        return val_$;
    }

    private getSystemHealthAvg__SynchronizedResult: string = undefined;
    public getSystemHealthAvg__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSystemHealthAvg__SynchronizedResult === undefined) {
            this.getSystemHealthAvg__SynchronizedResult = null;
            this.getSystemHealthAvg__update();
        }
        return this.getSystemHealthAvg__SynchronizedResult;
    }

    public getSystemHealthAvg__update(): void {
        
        Promise.resolve(this.getSystemHealthAvg(
            this.createDomainObserverRegisterFunction('getSystemHealthAvg__update' + this.computeHash([]), () => this.getSystemHealthAvg__update()),
            this.createStateVarObserverRegisterFunction('getSystemHealthAvg__update' + this.computeHash([]), () => this.getSystemHealthAvg__update())
        )).then(__v => this.getSystemHealthAvg__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSystemHealthAvg(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getGemText6Value__SynchronizedResult: string = undefined;
    public getGemText6Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText6Value__SynchronizedResult === undefined) {
            this.getGemText6Value__SynchronizedResult = null;
            this.getGemText6Value__update();
        }
        return this.getGemText6Value__SynchronizedResult;
    }

    public getGemText6Value__update(): void {
        
        Promise.resolve(this.getGemText6Value(
            this.createDomainObserverRegisterFunction('getGemText6Value__update' + this.computeHash([]), () => this.getGemText6Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText6Value__update' + this.computeHash([]), () => this.getGemText6Value__update())
        )).then(__v => this.getGemText6Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemText6Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getSystemHealthAvg(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText7Value__SynchronizedResult: string = undefined;
    public getGemText7Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText7Value__SynchronizedResult === undefined) {
            this.getGemText7Value__SynchronizedResult = null;
            this.getGemText7Value__update();
        }
        return this.getGemText7Value__SynchronizedResult;
    }

    public getGemText7Value__update(): void {
        
        Promise.resolve(this.getGemText7Value(
            this.createDomainObserverRegisterFunction('getGemText7Value__update' + this.computeHash([]), () => this.getGemText7Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText7Value__update' + this.computeHash([]), () => this.getGemText7Value__update())
        )).then(__v => this.getGemText7Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText7Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Stations monitored:";
        return val_$;
    }

    private getStationCount__SynchronizedResult: string = undefined;
    public getStationCount__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStationCount__SynchronizedResult === undefined) {
            this.getStationCount__SynchronizedResult = null;
            this.getStationCount__update();
        }
        return this.getStationCount__SynchronizedResult;
    }

    public getStationCount__update(): void {
        
        Promise.resolve(this.getStationCount(
            this.createDomainObserverRegisterFunction('getStationCount__update' + this.computeHash([]), () => this.getStationCount__update()),
            this.createStateVarObserverRegisterFunction('getStationCount__update' + this.computeHash([]), () => this.getStationCount__update())
        )).then(__v => this.getStationCount__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getStationCount(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getGemText8Value__SynchronizedResult: string = undefined;
    public getGemText8Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText8Value__SynchronizedResult === undefined) {
            this.getGemText8Value__SynchronizedResult = null;
            this.getGemText8Value__update();
        }
        return this.getGemText8Value__SynchronizedResult;
    }

    public getGemText8Value__update(): void {
        
        Promise.resolve(this.getGemText8Value(
            this.createDomainObserverRegisterFunction('getGemText8Value__update' + this.computeHash([]), () => this.getGemText8Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText8Value__update' + this.computeHash([]), () => this.getGemText8Value__update())
        )).then(__v => this.getGemText8Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemText8Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getStationCount(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText9Value__SynchronizedResult: string = undefined;
    public getGemText9Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText9Value__SynchronizedResult === undefined) {
            this.getGemText9Value__SynchronizedResult = null;
            this.getGemText9Value__update();
        }
        return this.getGemText9Value__SynchronizedResult;
    }

    public getGemText9Value__update(): void {
        
        Promise.resolve(this.getGemText9Value(
            this.createDomainObserverRegisterFunction('getGemText9Value__update' + this.computeHash([]), () => this.getGemText9Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText9Value__update' + this.computeHash([]), () => this.getGemText9Value__update())
        )).then(__v => this.getGemText9Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText9Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Next maintenance:";
        return val_$;
    }

    private getNextMaintenanceDate__SynchronizedResult: string = undefined;
    public getNextMaintenanceDate__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getNextMaintenanceDate__SynchronizedResult === undefined) {
            this.getNextMaintenanceDate__SynchronizedResult = null;
            this.getNextMaintenanceDate__update();
        }
        return this.getNextMaintenanceDate__SynchronizedResult;
    }

    public getNextMaintenanceDate__update(): void {
        
        Promise.resolve(this.getNextMaintenanceDate(
            this.createDomainObserverRegisterFunction('getNextMaintenanceDate__update' + this.computeHash([]), () => this.getNextMaintenanceDate__update()),
            this.createStateVarObserverRegisterFunction('getNextMaintenanceDate__update' + this.computeHash([]), () => this.getNextMaintenanceDate__update())
        )).then(__v => this.getNextMaintenanceDate__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getNextMaintenanceDate(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getGemText10Value__SynchronizedResult: string = undefined;
    public getGemText10Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText10Value__SynchronizedResult === undefined) {
            this.getGemText10Value__SynchronizedResult = null;
            this.getGemText10Value__update();
        }
        return this.getGemText10Value__SynchronizedResult;
    }

    public getGemText10Value__update(): void {
        
        Promise.resolve(this.getGemText10Value(
            this.createDomainObserverRegisterFunction('getGemText10Value__update' + this.computeHash([]), () => this.getGemText10Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText10Value__update' + this.computeHash([]), () => this.getGemText10Value__update())
        )).then(__v => this.getGemText10Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemText10Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getNextMaintenanceDate(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getSystemHealthCardTitle__SynchronizedResult: string = undefined;
    public getSystemHealthCardTitle__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSystemHealthCardTitle__SynchronizedResult === undefined) {
            this.getSystemHealthCardTitle__SynchronizedResult = null;
            this.getSystemHealthCardTitle__update();
        }
        return this.getSystemHealthCardTitle__SynchronizedResult;
    }

    public getSystemHealthCardTitle__update(): void {
        
        Promise.resolve(this.getSystemHealthCardTitle(
            this.createDomainObserverRegisterFunction('getSystemHealthCardTitle__update' + this.computeHash([]), () => this.getSystemHealthCardTitle__update()),
            this.createStateVarObserverRegisterFunction('getSystemHealthCardTitle__update' + this.computeHash([]), () => this.getSystemHealthCardTitle__update())
        )).then(__v => this.getSystemHealthCardTitle__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getSystemHealthCardTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Overall System Health";
        return val_$;
    }

    private getGemTableHeader12Cols_0__SynchronizedResult: Array<string> = undefined;
    public getGemTableHeader12Cols_0__synchronized(): Array<string> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTableHeader12Cols_0__SynchronizedResult === undefined) {
            this.getGemTableHeader12Cols_0__SynchronizedResult = null;
            this.getGemTableHeader12Cols_0__update();
        }
        return this.getGemTableHeader12Cols_0__SynchronizedResult;
    }

    public getGemTableHeader12Cols_0__update(): void {
        
        Promise.resolve(this.getGemTableHeader12Cols_0(
            this.createDomainObserverRegisterFunction('getGemTableHeader12Cols_0__update' + this.computeHash([]), () => this.getGemTableHeader12Cols_0__update()),
            this.createStateVarObserverRegisterFunction('getGemTableHeader12Cols_0__update' + this.computeHash([]), () => this.getGemTableHeader12Cols_0__update())
        )).then(__v => this.getGemTableHeader12Cols_0__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemTableHeader12Cols_0(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Array<string> {
        return this.gemTableHeader12Cols_0;
    }

    private getGemTableHeader12Cols__SynchronizedResult: Array<string> = undefined;
    public getGemTableHeader12Cols__synchronized(): Array<string> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTableHeader12Cols__SynchronizedResult === undefined) {
            this.getGemTableHeader12Cols__SynchronizedResult = null;
            this.getGemTableHeader12Cols__update();
        }
        return this.getGemTableHeader12Cols__SynchronizedResult;
    }

    public getGemTableHeader12Cols__update(): void {
        
        Promise.resolve(this.getGemTableHeader12Cols(
            this.createDomainObserverRegisterFunction('getGemTableHeader12Cols__update' + this.computeHash([]), () => this.getGemTableHeader12Cols__update()),
            this.createStateVarObserverRegisterFunction('getGemTableHeader12Cols__update' + this.computeHash([]), () => this.getGemTableHeader12Cols__update())
        )).then(__v => this.getGemTableHeader12Cols__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemTableHeader12Cols(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<string>> {
        if (false){
            return null;
        }
        const val_$: Array<string> = (await GemListUtil.toArraySync(await this.getGemTableHeader12Cols_0(__regObsToDomainObj, __regObsToStateVar)));
        return val_$;
    }

    public async notifyAddPrognoses(val_$: Station, val_$2: number, val_$3: number) {
    }

    private getStationNameCellValue__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getStationNameCellValue__synchronized(prognosis: Prognosis, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStationNameCellValue__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]) === undefined) {
            this.getStationNameCellValue__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], null);
            this.getStationNameCellValue__update(prognosis, station);
        }
        return this.getStationNameCellValue__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]);
    }

    public getStationNameCellValue__update(prognosis: Prognosis, station: Station): void {
        
        Promise.resolve(this.getStationNameCellValue(prognosis, station,
            this.createDomainObserverRegisterFunction('getStationNameCellValue__update' + this.computeHash([prognosis, station]), () => this.getStationNameCellValue__update(prognosis, station)),
            this.createStateVarObserverRegisterFunction('getStationNameCellValue__update' + this.computeHash([prognosis, station]), () => this.getStationNameCellValue__update(prognosis, station))
        )).then(__v => this.getStationNameCellValue__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getStationNameCellValue(prognosis: Prognosis, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(prognosis);
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        const val_$: string = station.getName();
        return val_$;
    }

    private getGemText16Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText16Value__synchronized(prognosis: Prognosis, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText16Value__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]) === undefined) {
            this.getGemText16Value__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], null);
            this.getGemText16Value__update(prognosis, station);
        }
        return this.getGemText16Value__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]);
    }

    public getGemText16Value__update(prognosis: Prognosis, station: Station): void {
        
        Promise.resolve(this.getGemText16Value(prognosis, station,
            this.createDomainObserverRegisterFunction('getGemText16Value__update' + this.computeHash([prognosis, station]), () => this.getGemText16Value__update(prognosis, station)),
            this.createStateVarObserverRegisterFunction('getGemText16Value__update' + this.computeHash([prognosis, station]), () => this.getGemText16Value__update(prognosis, station))
        )).then(__v => this.getGemText16Value__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText16Value(prognosis: Prognosis, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(prognosis);
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        const val_$: string = station.getTypeText();
        return val_$;
    }

    private getHealthCellValue__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getHealthCellValue__synchronized(prognosis: Prognosis, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getHealthCellValue__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]) === undefined) {
            this.getHealthCellValue__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], null);
            this.getHealthCellValue__update(prognosis, station);
        }
        return this.getHealthCellValue__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]);
    }

    public getHealthCellValue__update(prognosis: Prognosis, station: Station): void {
        
        Promise.resolve(this.getHealthCellValue(prognosis, station,
            this.createDomainObserverRegisterFunction('getHealthCellValue__update' + this.computeHash([prognosis, station]), () => this.getHealthCellValue__update(prognosis, station)),
            this.createStateVarObserverRegisterFunction('getHealthCellValue__update' + this.computeHash([prognosis, station]), () => this.getHealthCellValue__update(prognosis, station))
        )).then(__v => this.getHealthCellValue__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getHealthCellValue(prognosis: Prognosis, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(prognosis);
        __regObsToDomainObj(station);
        if (false || prognosis == null){
            return null;
        }
        const val_$: string = /* valueOf */String(prognosis.getHealth()).toString();
        return val_$;
    }

    private getGemText17Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText17Value__synchronized(prognosis: Prognosis, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText17Value__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]) === undefined) {
            this.getGemText17Value__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], null);
            this.getGemText17Value__update(prognosis, station);
        }
        return this.getGemText17Value__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]);
    }

    public getGemText17Value__update(prognosis: Prognosis, station: Station): void {
        
        Promise.resolve(this.getGemText17Value(prognosis, station,
            this.createDomainObserverRegisterFunction('getGemText17Value__update' + this.computeHash([prognosis, station]), () => this.getGemText17Value__update(prognosis, station)),
            this.createStateVarObserverRegisterFunction('getGemText17Value__update' + this.computeHash([prognosis, station]), () => this.getGemText17Value__update(prognosis, station))
        )).then(__v => this.getGemText17Value__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText17Value(prognosis: Prognosis, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(prognosis);
        __regObsToDomainObj(station);
        if (false || prognosis == null){
            return null;
        }
        const val_$: string = /* valueOf */String(prognosis.getErrorIndex()).toString();
        return val_$;
    }

    private getWearProbability__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getWearProbability__synchronized(val_$_$0: number): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getWearProbability__SynchronizedResult.get([val_$_$0]) === undefined) {
            this.getWearProbability__SynchronizedResult.set([val_$_$0], null);
            this.getWearProbability__update(val_$_$0);
        }
        return this.getWearProbability__SynchronizedResult.get([val_$_$0]);
    }

    public getWearProbability__update(val_$_$0: number): void {
        
        Promise.resolve(this.getWearProbability(val_$_$0,
            this.createDomainObserverRegisterFunction('getWearProbability__update' + this.computeHash([val_$_$0]), () => this.getWearProbability__update(val_$_$0)),
            this.createStateVarObserverRegisterFunction('getWearProbability__update' + this.computeHash([val_$_$0]), () => this.getWearProbability__update(val_$_$0))
        )).then(__v => this.getWearProbability__SynchronizedResult.set([val_$_$0], __v === undefined ? null : __v));
    }

    public getWearProbability(val_$_$0: number, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return null;
    }

    private getWearCellValue__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getWearCellValue__synchronized(prognosis: Prognosis, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getWearCellValue__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]) === undefined) {
            this.getWearCellValue__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], null);
            this.getWearCellValue__update(prognosis, station);
        }
        return this.getWearCellValue__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]);
    }

    public getWearCellValue__update(prognosis: Prognosis, station: Station): void {
        
        Promise.resolve(this.getWearCellValue(prognosis, station,
            this.createDomainObserverRegisterFunction('getWearCellValue__update' + this.computeHash([prognosis, station]), () => this.getWearCellValue__update(prognosis, station)),
            this.createStateVarObserverRegisterFunction('getWearCellValue__update' + this.computeHash([prognosis, station]), () => this.getWearCellValue__update(prognosis, station))
        )).then(__v => this.getWearCellValue__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getWearCellValue(prognosis: Prognosis, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(prognosis);
        __regObsToDomainObj(station);
        if (false || prognosis == null){
            return null;
        }
        const val_$: string = this.getWearProbability(prognosis.getErrorIndex(), __regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getMaintCellValue__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getMaintCellValue__synchronized(prognosis: Prognosis, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getMaintCellValue__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]) === undefined) {
            this.getMaintCellValue__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], null);
            this.getMaintCellValue__update(prognosis, station);
        }
        return this.getMaintCellValue__SynchronizedResult.get([prognosis.getGemId(), station.getGemId()]);
    }

    public getMaintCellValue__update(prognosis: Prognosis, station: Station): void {
        
        Promise.resolve(this.getMaintCellValue(prognosis, station,
            this.createDomainObserverRegisterFunction('getMaintCellValue__update' + this.computeHash([prognosis, station]), () => this.getMaintCellValue__update(prognosis, station)),
            this.createStateVarObserverRegisterFunction('getMaintCellValue__update' + this.computeHash([prognosis, station]), () => this.getMaintCellValue__update(prognosis, station))
        )).then(__v => this.getMaintCellValue__SynchronizedResult.set([prognosis.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getMaintCellValue(prognosis: Prognosis, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(prognosis);
        __regObsToDomainObj(station);
        if (false || prognosis == null){
            return null;
        }
        const val_$: string = prognosis.getNextMaintenanceText();
        return val_$;
    }

    private getIt14Iterable__SynchronizedResult: ManyKeysMap<any, Array<Prognosis>> = new ManyKeysMap()
    public getIt14Iterable__synchronized(station: Station): Array<Prognosis> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getIt14Iterable__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getIt14Iterable__SynchronizedResult.set([station.getGemId()], null);
            this.getIt14Iterable__update(station);
        }
        return this.getIt14Iterable__SynchronizedResult.get([station.getGemId()]);
    }

    public getIt14Iterable__update(station: Station): void {
        
        Promise.resolve(this.getIt14Iterable(station,
            this.createDomainObserverRegisterFunction('getIt14Iterable__update' + this.computeHash([station]), () => this.getIt14Iterable__update(station)),
            this.createStateVarObserverRegisterFunction('getIt14Iterable__update' + this.computeHash([station]), () => this.getIt14Iterable__update(station))
        )).then(__v => this.getIt14Iterable__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public async getIt14Iterable(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Prognosis>> {
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        return (await GemListUtil.toArraySync(await station.getPrognosesList()));
    }

    private getIt13Iterable__SynchronizedResult: Array<Station> = undefined;
    public getIt13Iterable__synchronized(): Array<Station> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getIt13Iterable__SynchronizedResult === undefined) {
            this.getIt13Iterable__SynchronizedResult = null;
            this.getIt13Iterable__update();
        }
        return this.getIt13Iterable__SynchronizedResult;
    }

    public getIt13Iterable__update(): void {
        
        Promise.resolve(this.getIt13Iterable(
            this.createDomainObserverRegisterFunction('getIt13Iterable__update' + this.computeHash([]), () => this.getIt13Iterable__update()),
            this.createStateVarObserverRegisterFunction('getIt13Iterable__update' + this.computeHash([]), () => this.getIt13Iterable__update())
        )).then(__v => this.getIt13Iterable__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getIt13Iterable(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Station>> {
        if (false){
            return null;
        }
        return (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
    }

    private getPrognosisTableCardTitle__SynchronizedResult: string = undefined;
    public getPrognosisTableCardTitle__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getPrognosisTableCardTitle__SynchronizedResult === undefined) {
            this.getPrognosisTableCardTitle__SynchronizedResult = null;
            this.getPrognosisTableCardTitle__update();
        }
        return this.getPrognosisTableCardTitle__SynchronizedResult;
    }

    public getPrognosisTableCardTitle__update(): void {
        
        Promise.resolve(this.getPrognosisTableCardTitle(
            this.createDomainObserverRegisterFunction('getPrognosisTableCardTitle__update' + this.computeHash([]), () => this.getPrognosisTableCardTitle__update()),
            this.createStateVarObserverRegisterFunction('getPrognosisTableCardTitle__update' + this.computeHash([]), () => this.getPrognosisTableCardTitle__update())
        )).then(__v => this.getPrognosisTableCardTitle__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getPrognosisTableCardTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Station Prognosis";
        return val_$;
    }

    async initIt14Iterable(station: Station) {
        {
            let array = (await GemListUtil.toArraySync(await station.getPrognosesList()));
            for(let index = 0; index < array.length; index++) {
                let prognosis = array[index];
                {
                }
            }
        }
    }

    public async initIt14Iterable_1(station: Station) {
        if (!await station.containsObserver(this)){
            await station.addObserver(this);
        }
        await this.initIt14Iterable(station);
    }

    async initIt13Iterable() {
        {
            let array = (await GemListUtil.toArraySync(await this.getStations()));
            for(let index = 0; index < array.length; index++) {
                let station = array[index];
                {
                    await this.initIt14Iterable_1(station);
                }
            }
        }
    }

    async initGemTableHeader12Cols_0() {
        const tmp_$: Array<string> = <any>([]);
        /* add */(tmp_$.push("Station")>0);
        /* add */(tmp_$.push("Type")>0);
        /* add */(tmp_$.push("Health (%)")>0);
        /* add */(tmp_$.push("Error Index")>0);
        /* add */(tmp_$.push("Wear Prob. (%)")>0);
        /* add */(tmp_$.push("Next Maintenance")>0);
        this.gemTableHeader12Cols_0 = tmp_$;
        await this.initIt13Iterable();
    }

    async initStations() {
        if (!this._stationsSetExternally){
            this._stations = (await GemListUtil.toArraySync(await FactoryDigitalTwinManager.getStationList()));
        }
        await this.initGemTableHeader12Cols_0();
    }

    protected allVarsInited: boolean = false;
    public async init() {
        await FactoryDigitalTwinManager.addObserver(this);
        await CommandManager.executeCommand<any>(new Station_subscribeManagerEvents());
        await this.initStations();
    }

    public async destroy() {
        await FactoryDigitalTwinManager.removeObserver(this);
    }

    public async notifyStationDeleted(gemId_$: number) {
    }

    public async notifyStationAdded(val_$: Station) {
    }
}
PrognosisOverviewTOP["__class"] = "gui.PrognosisOverviewTOP";
PrognosisOverviewTOP["__interfaces"] = ["factorydigitaltwin.FactoryDigitalTwinObserver","factorydigitaltwin.StationObserver"];





import { StationState } from 'factorydigitaltwin/StationState';


import { StationType } from 'factorydigitaltwin/StationType';

