/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { Alarm } from 'factorydigitaltwin/Alarm';
import { EmptyFactoryDigitalTwinObserver } from 'factorydigitaltwin/EmptyFactoryDigitalTwinObserver';
import { FactoryDigitalTwinManager } from 'factorydigitaltwin/FactoryDigitalTwinManager';
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
export class AlarmOverview extends EmptyFactoryDigitalTwinObserver implements StationObserver {
    protected toArray<T>(arr: IUMLPList<T> | Array<T>): Array<T> {
        return GemListUtil.toArray(arr);
    }

    private static nextId: number = 0;
    protected uniqueIdentifier:number = AlarmOverview.nextId++;

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
            let hash: number = AlarmOverview.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.AlarmOverview" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.AlarmOverview" + this.uniqueIdentifier);
        }
    }

    public ngOnDestroy(): void {
        ComponentObserverManager.removeObservers("gui.AlarmOverview" + this.uniqueIdentifier);
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
    async notifyAddPrognoses(station: Station, arg: number, indexInList: number) {
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

    gemTableHeader6Cols_0: Array<string>;

    public constructor() {
        super();
        if (this._stations === undefined) { this._stations = null; }
        this._stationsSetExternally = false;
        if (this.gemTableHeader6Cols_0 === undefined) { this.gemTableHeader6Cols_0 = null; }
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

        ComponentObserverManager.callStateVariableObserver("_stations", "gui.AlarmOverview" + this.uniqueIdentifier);
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
        const val_$: string = "Alarm History";
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
        const val_$: string = "All alarms recorded across the production line.";
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

    private getGemTableHeader6Cols_0__SynchronizedResult: Array<string> = undefined;
    public getGemTableHeader6Cols_0__synchronized(): Array<string> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTableHeader6Cols_0__SynchronizedResult === undefined) {
            this.getGemTableHeader6Cols_0__SynchronizedResult = null;
            this.getGemTableHeader6Cols_0__update();
        }
        return this.getGemTableHeader6Cols_0__SynchronizedResult;
    }

    public getGemTableHeader6Cols_0__update(): void {
        
        Promise.resolve(this.getGemTableHeader6Cols_0(
            this.createDomainObserverRegisterFunction('getGemTableHeader6Cols_0__update' + this.computeHash([]), () => this.getGemTableHeader6Cols_0__update()),
            this.createStateVarObserverRegisterFunction('getGemTableHeader6Cols_0__update' + this.computeHash([]), () => this.getGemTableHeader6Cols_0__update())
        )).then(__v => this.getGemTableHeader6Cols_0__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemTableHeader6Cols_0(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Array<string> {
        return this.gemTableHeader6Cols_0;
    }

    private getGemTableHeader6Cols__SynchronizedResult: Array<string> = undefined;
    public getGemTableHeader6Cols__synchronized(): Array<string> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTableHeader6Cols__SynchronizedResult === undefined) {
            this.getGemTableHeader6Cols__SynchronizedResult = null;
            this.getGemTableHeader6Cols__update();
        }
        return this.getGemTableHeader6Cols__SynchronizedResult;
    }

    public getGemTableHeader6Cols__update(): void {
        
        Promise.resolve(this.getGemTableHeader6Cols(
            this.createDomainObserverRegisterFunction('getGemTableHeader6Cols__update' + this.computeHash([]), () => this.getGemTableHeader6Cols__update()),
            this.createStateVarObserverRegisterFunction('getGemTableHeader6Cols__update' + this.computeHash([]), () => this.getGemTableHeader6Cols__update())
        )).then(__v => this.getGemTableHeader6Cols__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemTableHeader6Cols(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<string>> {
        if (false){
            return null;
        }
        const val_$: Array<string> = (await GemListUtil.toArraySync(await this.getGemTableHeader6Cols_0(__regObsToDomainObj, __regObsToStateVar)));
        return val_$;
    }

    public async notifyAddAlarms(val_$: Station, val_$2: number, val_$3: number) {
    }

    private getStationNameCellValue__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getStationNameCellValue__synchronized(alarm: Alarm, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStationNameCellValue__SynchronizedResult.get([alarm.getGemId(), station.getGemId()]) === undefined) {
            this.getStationNameCellValue__SynchronizedResult.set([alarm.getGemId(), station.getGemId()], null);
            this.getStationNameCellValue__update(alarm, station);
        }
        return this.getStationNameCellValue__SynchronizedResult.get([alarm.getGemId(), station.getGemId()]);
    }

    public getStationNameCellValue__update(alarm: Alarm, station: Station): void {
        
        Promise.resolve(this.getStationNameCellValue(alarm, station,
            this.createDomainObserverRegisterFunction('getStationNameCellValue__update' + this.computeHash([alarm, station]), () => this.getStationNameCellValue__update(alarm, station)),
            this.createStateVarObserverRegisterFunction('getStationNameCellValue__update' + this.computeHash([alarm, station]), () => this.getStationNameCellValue__update(alarm, station))
        )).then(__v => this.getStationNameCellValue__SynchronizedResult.set([alarm.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getStationNameCellValue(alarm: Alarm, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(alarm);
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        const val_$: string = station.getName();
        return val_$;
    }

    private getAlarmTypeCellValue__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getAlarmTypeCellValue__synchronized(alarm: Alarm, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAlarmTypeCellValue__SynchronizedResult.get([alarm.getGemId(), station.getGemId()]) === undefined) {
            this.getAlarmTypeCellValue__SynchronizedResult.set([alarm.getGemId(), station.getGemId()], null);
            this.getAlarmTypeCellValue__update(alarm, station);
        }
        return this.getAlarmTypeCellValue__SynchronizedResult.get([alarm.getGemId(), station.getGemId()]);
    }

    public getAlarmTypeCellValue__update(alarm: Alarm, station: Station): void {
        
        Promise.resolve(this.getAlarmTypeCellValue(alarm, station,
            this.createDomainObserverRegisterFunction('getAlarmTypeCellValue__update' + this.computeHash([alarm, station]), () => this.getAlarmTypeCellValue__update(alarm, station)),
            this.createStateVarObserverRegisterFunction('getAlarmTypeCellValue__update' + this.computeHash([alarm, station]), () => this.getAlarmTypeCellValue__update(alarm, station))
        )).then(__v => this.getAlarmTypeCellValue__SynchronizedResult.set([alarm.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getAlarmTypeCellValue(alarm: Alarm, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(alarm);
        __regObsToDomainObj(station);
        if (false || alarm == null){
            return null;
        }
        const val_$: string = alarm.getType();
        return val_$;
    }

    private getGemText10Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText10Value__synchronized(alarm: Alarm, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText10Value__SynchronizedResult.get([alarm.getGemId(), station.getGemId()]) === undefined) {
            this.getGemText10Value__SynchronizedResult.set([alarm.getGemId(), station.getGemId()], null);
            this.getGemText10Value__update(alarm, station);
        }
        return this.getGemText10Value__SynchronizedResult.get([alarm.getGemId(), station.getGemId()]);
    }

    public getGemText10Value__update(alarm: Alarm, station: Station): void {
        
        Promise.resolve(this.getGemText10Value(alarm, station,
            this.createDomainObserverRegisterFunction('getGemText10Value__update' + this.computeHash([alarm, station]), () => this.getGemText10Value__update(alarm, station)),
            this.createStateVarObserverRegisterFunction('getGemText10Value__update' + this.computeHash([alarm, station]), () => this.getGemText10Value__update(alarm, station))
        )).then(__v => this.getGemText10Value__SynchronizedResult.set([alarm.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText10Value(alarm: Alarm, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(alarm);
        __regObsToDomainObj(station);
        if (false || alarm == null){
            return null;
        }
        const val_$: string = alarm.getAlarmMessage();
        return val_$;
    }

    private getGemText11Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText11Value__synchronized(alarm: Alarm, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText11Value__SynchronizedResult.get([alarm.getGemId(), station.getGemId()]) === undefined) {
            this.getGemText11Value__SynchronizedResult.set([alarm.getGemId(), station.getGemId()], null);
            this.getGemText11Value__update(alarm, station);
        }
        return this.getGemText11Value__SynchronizedResult.get([alarm.getGemId(), station.getGemId()]);
    }

    public getGemText11Value__update(alarm: Alarm, station: Station): void {
        
        Promise.resolve(this.getGemText11Value(alarm, station,
            this.createDomainObserverRegisterFunction('getGemText11Value__update' + this.computeHash([alarm, station]), () => this.getGemText11Value__update(alarm, station)),
            this.createStateVarObserverRegisterFunction('getGemText11Value__update' + this.computeHash([alarm, station]), () => this.getGemText11Value__update(alarm, station))
        )).then(__v => this.getGemText11Value__SynchronizedResult.set([alarm.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText11Value(alarm: Alarm, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(alarm);
        __regObsToDomainObj(station);
        if (false || alarm == null){
            return null;
        }
        const val_$: string = alarm.getTimeStampText();
        return val_$;
    }

    private getAlarmStatusCellValue__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getAlarmStatusCellValue__synchronized(alarm: Alarm, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAlarmStatusCellValue__SynchronizedResult.get([alarm.getGemId(), station.getGemId()]) === undefined) {
            this.getAlarmStatusCellValue__SynchronizedResult.set([alarm.getGemId(), station.getGemId()], null);
            this.getAlarmStatusCellValue__update(alarm, station);
        }
        return this.getAlarmStatusCellValue__SynchronizedResult.get([alarm.getGemId(), station.getGemId()]);
    }

    public getAlarmStatusCellValue__update(alarm: Alarm, station: Station): void {
        
        Promise.resolve(this.getAlarmStatusCellValue(alarm, station,
            this.createDomainObserverRegisterFunction('getAlarmStatusCellValue__update' + this.computeHash([alarm, station]), () => this.getAlarmStatusCellValue__update(alarm, station)),
            this.createStateVarObserverRegisterFunction('getAlarmStatusCellValue__update' + this.computeHash([alarm, station]), () => this.getAlarmStatusCellValue__update(alarm, station))
        )).then(__v => this.getAlarmStatusCellValue__SynchronizedResult.set([alarm.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getAlarmStatusCellValue(alarm: Alarm, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(alarm);
        __regObsToDomainObj(station);
        if (false || alarm == null){
            return null;
        }
        const val_$: string = alarm.getStatus();
        return val_$;
    }

    private getIt8Iterable__SynchronizedResult: ManyKeysMap<any, Array<Alarm>> = new ManyKeysMap()
    public getIt8Iterable__synchronized(station: Station): Array<Alarm> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getIt8Iterable__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getIt8Iterable__SynchronizedResult.set([station.getGemId()], null);
            this.getIt8Iterable__update(station);
        }
        return this.getIt8Iterable__SynchronizedResult.get([station.getGemId()]);
    }

    public getIt8Iterable__update(station: Station): void {
        
        Promise.resolve(this.getIt8Iterable(station,
            this.createDomainObserverRegisterFunction('getIt8Iterable__update' + this.computeHash([station]), () => this.getIt8Iterable__update(station)),
            this.createStateVarObserverRegisterFunction('getIt8Iterable__update' + this.computeHash([station]), () => this.getIt8Iterable__update(station))
        )).then(__v => this.getIt8Iterable__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public async getIt8Iterable(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Alarm>> {
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        return (await GemListUtil.toArraySync(await station.getAlarmsList()));
    }

    private getIt7Iterable__SynchronizedResult: Array<Station> = undefined;
    public getIt7Iterable__synchronized(): Array<Station> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getIt7Iterable__SynchronizedResult === undefined) {
            this.getIt7Iterable__SynchronizedResult = null;
            this.getIt7Iterable__update();
        }
        return this.getIt7Iterable__SynchronizedResult;
    }

    public getIt7Iterable__update(): void {
        
        Promise.resolve(this.getIt7Iterable(
            this.createDomainObserverRegisterFunction('getIt7Iterable__update' + this.computeHash([]), () => this.getIt7Iterable__update()),
            this.createStateVarObserverRegisterFunction('getIt7Iterable__update' + this.computeHash([]), () => this.getIt7Iterable__update())
        )).then(__v => this.getIt7Iterable__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getIt7Iterable(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Station>> {
        if (false){
            return null;
        }
        return (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
    }

    private getGemColumn4RowGap__SynchronizedResult: string = undefined;
    public getGemColumn4RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn4RowGap__SynchronizedResult === undefined) {
            this.getGemColumn4RowGap__SynchronizedResult = null;
            this.getGemColumn4RowGap__update();
        }
        return this.getGemColumn4RowGap__SynchronizedResult;
    }

    public getGemColumn4RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn4RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn4RowGap__update' + this.computeHash([]), () => this.getGemColumn4RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn4RowGap__update' + this.computeHash([]), () => this.getGemColumn4RowGap__update())
        )).then(__v => this.getGemColumn4RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn4RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "0px";
        return val_$;
    }

    private getAlarmTableCardTitle__SynchronizedResult: string = undefined;
    public getAlarmTableCardTitle__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAlarmTableCardTitle__SynchronizedResult === undefined) {
            this.getAlarmTableCardTitle__SynchronizedResult = null;
            this.getAlarmTableCardTitle__update();
        }
        return this.getAlarmTableCardTitle__SynchronizedResult;
    }

    public getAlarmTableCardTitle__update(): void {
        
        Promise.resolve(this.getAlarmTableCardTitle(
            this.createDomainObserverRegisterFunction('getAlarmTableCardTitle__update' + this.computeHash([]), () => this.getAlarmTableCardTitle__update()),
            this.createStateVarObserverRegisterFunction('getAlarmTableCardTitle__update' + this.computeHash([]), () => this.getAlarmTableCardTitle__update())
        )).then(__v => this.getAlarmTableCardTitle__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getAlarmTableCardTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "All Alarms";
        return val_$;
    }

    async initIt8Iterable(station: Station) {
        {
            let array = (await GemListUtil.toArraySync(await station.getAlarmsList()));
            for(let index = 0; index < array.length; index++) {
                let alarm = array[index];
                {
                }
            }
        }
    }

    public async initIt8Iterable_1(station: Station) {
        if (!await station.containsObserver(this)){
            await station.addObserver(this);
        }
        await this.initIt8Iterable(station);
    }

    async initIt7Iterable() {
        {
            let array = (await GemListUtil.toArraySync(await this.getStations()));
            for(let index = 0; index < array.length; index++) {
                let station = array[index];
                {
                    await this.initIt8Iterable_1(station);
                }
            }
        }
    }

    async initGemTableHeader6Cols_0() {
        const tmp_$: Array<string> = <any>([]);
        /* add */(tmp_$.push("Station")>0);
        /* add */(tmp_$.push("Type")>0);
        /* add */(tmp_$.push("Message")>0);
        /* add */(tmp_$.push("Timestamp")>0);
        /* add */(tmp_$.push("Status")>0);
        this.gemTableHeader6Cols_0 = tmp_$;
        await this.initIt7Iterable();
    }

    async initStations() {
        if (!this._stationsSetExternally){
            this._stations = (await GemListUtil.toArraySync(await FactoryDigitalTwinManager.getStationList()));
        }
        await this.initGemTableHeader6Cols_0();
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
AlarmOverview["__class"] = "gui.AlarmOverview";
AlarmOverview["__interfaces"] = ["factorydigitaltwin.FactoryDigitalTwinObserver","factorydigitaltwin.StationObserver"];





import { StationState } from 'factorydigitaltwin/StationState';


import { StationType } from 'factorydigitaltwin/StationType';

