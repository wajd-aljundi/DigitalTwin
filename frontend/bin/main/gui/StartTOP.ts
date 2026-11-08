/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { EmptyFactoryDigitalTwinObserver } from 'factorydigitaltwin/EmptyFactoryDigitalTwinObserver';
import { FactoryDigitalTwinManager } from 'factorydigitaltwin/FactoryDigitalTwinManager';
import { Station } from 'factorydigitaltwin/Station';
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
export abstract class StartTOP extends EmptyFactoryDigitalTwinObserver {
    protected toArray<T>(arr: IUMLPList<T> | Array<T>): Array<T> {
        return GemListUtil.toArray(arr);
    }

    private static nextId: number = 0;
    protected uniqueIdentifier:number = StartTOP.nextId++;

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
            let hash: number = StartTOP.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.Start" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.Start" + this.uniqueIdentifier);
        }
    }


    protected _router: Router;

    _stations: Array<Station>;

    public _stationsSetExternally: boolean;

    _detailOpen: boolean;

    public _detailOpenSetExternally: boolean;

    _selectedStationId: number;

    public _selectedStationIdSetExternally: boolean;

    public constructor() {
        super();
        if (this._stations === undefined) { this._stations = null; }
        this._stationsSetExternally = false;
        if (this._detailOpen === undefined) { this._detailOpen = null; }
        this._detailOpenSetExternally = false;
        if (this._selectedStationId === undefined) { this._selectedStationId = null; }
        this._selectedStationIdSetExternally = false;
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

        ComponentObserverManager.callStateVariableObserver("_stations", "gui.Start" + this.uniqueIdentifier);
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

    private isDetailOpen__SynchronizedResult: boolean = undefined;
    public isDetailOpen__synchronized(): boolean {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.isDetailOpen__SynchronizedResult === undefined) {
            this.isDetailOpen__SynchronizedResult = null;
            this.isDetailOpen__update();
        }
        return this.isDetailOpen__SynchronizedResult;
    }

    public isDetailOpen__update(): void {
        
        Promise.resolve(this.isDetailOpen(
            this.createDomainObserverRegisterFunction('isDetailOpen__update' + this.computeHash([]), () => this.isDetailOpen__update()),
            this.createStateVarObserverRegisterFunction('isDetailOpen__update' + this.computeHash([]), () => this.isDetailOpen__update())
        )).then(__v => this.isDetailOpen__SynchronizedResult = __v === undefined ? null : __v);
    }

    public isDetailOpen(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): boolean {
        return this._detailOpen;
    }

    public setDetailOpen(val: boolean) {
                this._detailOpenSetExternally = true;
        this._detailOpen = val;

        ComponentObserverManager.callStateVariableObserver("_detailOpen", "gui.Start" + this.uniqueIdentifier);
        this.isDetailOpen__update();
    }

    private getSelectedStationId__SynchronizedResult: number = undefined;
    public getSelectedStationId__synchronized(): number {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedStationId__SynchronizedResult === undefined) {
            this.getSelectedStationId__SynchronizedResult = null;
            this.getSelectedStationId__update();
        }
        return this.getSelectedStationId__SynchronizedResult;
    }

    public getSelectedStationId__update(): void {
        
        Promise.resolve(this.getSelectedStationId(
            this.createDomainObserverRegisterFunction('getSelectedStationId__update' + this.computeHash([]), () => this.getSelectedStationId__update()),
            this.createStateVarObserverRegisterFunction('getSelectedStationId__update' + this.computeHash([]), () => this.getSelectedStationId__update())
        )).then(__v => this.getSelectedStationId__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getSelectedStationId(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): number {
        return this._selectedStationId;
    }

    public setSelectedStationId(val: number) {
                this._selectedStationIdSetExternally = true;
        this._selectedStationId = val;

        ComponentObserverManager.callStateVariableObserver("_selectedStationId", "gui.Start" + this.uniqueIdentifier);
        this.getSelectedStationId__update();
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
        const val_$: string = "Dashboard";
        return val_$;
    }

    private getGemText3Size__SynchronizedResult: string = undefined;
    public getGemText3Size__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText3Size__SynchronizedResult === undefined) {
            this.getGemText3Size__SynchronizedResult = null;
            this.getGemText3Size__update();
        }
        return this.getGemText3Size__SynchronizedResult;
    }

    public getGemText3Size__update(): void {
        
        Promise.resolve(this.getGemText3Size(
            this.createDomainObserverRegisterFunction('getGemText3Size__update' + this.computeHash([]), () => this.getGemText3Size__update()),
            this.createStateVarObserverRegisterFunction('getGemText3Size__update' + this.computeHash([]), () => this.getGemText3Size__update())
        )).then(__v => this.getGemText3Size__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText3Size(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "2rem";
        return val_$;
    }

    private getGemText3Weight__SynchronizedResult: string = undefined;
    public getGemText3Weight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText3Weight__SynchronizedResult === undefined) {
            this.getGemText3Weight__SynchronizedResult = null;
            this.getGemText3Weight__update();
        }
        return this.getGemText3Weight__SynchronizedResult;
    }

    public getGemText3Weight__update(): void {
        
        Promise.resolve(this.getGemText3Weight(
            this.createDomainObserverRegisterFunction('getGemText3Weight__update' + this.computeHash([]), () => this.getGemText3Weight__update()),
            this.createStateVarObserverRegisterFunction('getGemText3Weight__update' + this.computeHash([]), () => this.getGemText3Weight__update())
        )).then(__v => this.getGemText3Weight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText3Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText4Value__SynchronizedResult: string = undefined;
    public getGemText4Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText4Value__SynchronizedResult === undefined) {
            this.getGemText4Value__SynchronizedResult = null;
            this.getGemText4Value__update();
        }
        return this.getGemText4Value__SynchronizedResult;
    }

    public getGemText4Value__update(): void {
        
        Promise.resolve(this.getGemText4Value(
            this.createDomainObserverRegisterFunction('getGemText4Value__update' + this.computeHash([]), () => this.getGemText4Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText4Value__update' + this.computeHash([]), () => this.getGemText4Value__update())
        )).then(__v => this.getGemText4Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText4Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Live overview based on Station, Signal, Alarm and Prognosis data.";
        return val_$;
    }

    private getGemText4Color__SynchronizedResult: string = undefined;
    public getGemText4Color__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText4Color__SynchronizedResult === undefined) {
            this.getGemText4Color__SynchronizedResult = null;
            this.getGemText4Color__update();
        }
        return this.getGemText4Color__SynchronizedResult;
    }

    public getGemText4Color__update(): void {
        
        Promise.resolve(this.getGemText4Color(
            this.createDomainObserverRegisterFunction('getGemText4Color__update' + this.computeHash([]), () => this.getGemText4Color__update()),
            this.createStateVarObserverRegisterFunction('getGemText4Color__update' + this.computeHash([]), () => this.getGemText4Color__update())
        )).then(__v => this.getGemText4Color__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText4Color(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "secondary";
        return val_$;
    }

    private getGemColumn2RowGap__SynchronizedResult: string = undefined;
    public getGemColumn2RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn2RowGap__SynchronizedResult === undefined) {
            this.getGemColumn2RowGap__SynchronizedResult = null;
            this.getGemColumn2RowGap__update();
        }
        return this.getGemColumn2RowGap__SynchronizedResult;
    }

    public getGemColumn2RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn2RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn2RowGap__update' + this.computeHash([]), () => this.getGemColumn2RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn2RowGap__update' + this.computeHash([]), () => this.getGemColumn2RowGap__update())
        )).then(__v => this.getGemColumn2RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn2RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "2px";
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

    private getStationsValueValue__SynchronizedResult: string = undefined;
    public getStationsValueValue__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStationsValueValue__SynchronizedResult === undefined) {
            this.getStationsValueValue__SynchronizedResult = null;
            this.getStationsValueValue__update();
        }
        return this.getStationsValueValue__SynchronizedResult;
    }

    public getStationsValueValue__update(): void {
        
        Promise.resolve(this.getStationsValueValue(
            this.createDomainObserverRegisterFunction('getStationsValueValue__update' + this.computeHash([]), () => this.getStationsValueValue__update()),
            this.createStateVarObserverRegisterFunction('getStationsValueValue__update' + this.computeHash([]), () => this.getStationsValueValue__update())
        )).then(__v => this.getStationsValueValue__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getStationsValueValue(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getStationCount(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getStationsValueSize__SynchronizedResult: string = undefined;
    public getStationsValueSize__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStationsValueSize__SynchronizedResult === undefined) {
            this.getStationsValueSize__SynchronizedResult = null;
            this.getStationsValueSize__update();
        }
        return this.getStationsValueSize__SynchronizedResult;
    }

    public getStationsValueSize__update(): void {
        
        Promise.resolve(this.getStationsValueSize(
            this.createDomainObserverRegisterFunction('getStationsValueSize__update' + this.computeHash([]), () => this.getStationsValueSize__update()),
            this.createStateVarObserverRegisterFunction('getStationsValueSize__update' + this.computeHash([]), () => this.getStationsValueSize__update())
        )).then(__v => this.getStationsValueSize__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getStationsValueSize(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "2.2rem";
        return val_$;
    }

    private getStationsValueWeight__SynchronizedResult: string = undefined;
    public getStationsValueWeight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStationsValueWeight__SynchronizedResult === undefined) {
            this.getStationsValueWeight__SynchronizedResult = null;
            this.getStationsValueWeight__update();
        }
        return this.getStationsValueWeight__SynchronizedResult;
    }

    public getStationsValueWeight__update(): void {
        
        Promise.resolve(this.getStationsValueWeight(
            this.createDomainObserverRegisterFunction('getStationsValueWeight__update' + this.computeHash([]), () => this.getStationsValueWeight__update()),
            this.createStateVarObserverRegisterFunction('getStationsValueWeight__update' + this.computeHash([]), () => this.getStationsValueWeight__update())
        )).then(__v => this.getStationsValueWeight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getStationsValueWeight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
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
        const val_$: string = "Active production modules";
        return val_$;
    }

    private getGemText7Color__SynchronizedResult: string = undefined;
    public getGemText7Color__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText7Color__SynchronizedResult === undefined) {
            this.getGemText7Color__SynchronizedResult = null;
            this.getGemText7Color__update();
        }
        return this.getGemText7Color__SynchronizedResult;
    }

    public getGemText7Color__update(): void {
        
        Promise.resolve(this.getGemText7Color(
            this.createDomainObserverRegisterFunction('getGemText7Color__update' + this.computeHash([]), () => this.getGemText7Color__update()),
            this.createStateVarObserverRegisterFunction('getGemText7Color__update' + this.computeHash([]), () => this.getGemText7Color__update())
        )).then(__v => this.getGemText7Color__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText7Color(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "secondary";
        return val_$;
    }

    private getGemColumn6RowGap__SynchronizedResult: string = undefined;
    public getGemColumn6RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn6RowGap__SynchronizedResult === undefined) {
            this.getGemColumn6RowGap__SynchronizedResult = null;
            this.getGemColumn6RowGap__update();
        }
        return this.getGemColumn6RowGap__SynchronizedResult;
    }

    public getGemColumn6RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn6RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn6RowGap__update' + this.computeHash([]), () => this.getGemColumn6RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn6RowGap__update' + this.computeHash([]), () => this.getGemColumn6RowGap__update())
        )).then(__v => this.getGemColumn6RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn6RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "4px";
        return val_$;
    }

    private getStationsCardTitle__SynchronizedResult: string = undefined;
    public getStationsCardTitle__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStationsCardTitle__SynchronizedResult === undefined) {
            this.getStationsCardTitle__SynchronizedResult = null;
            this.getStationsCardTitle__update();
        }
        return this.getStationsCardTitle__SynchronizedResult;
    }

    public getStationsCardTitle__update(): void {
        
        Promise.resolve(this.getStationsCardTitle(
            this.createDomainObserverRegisterFunction('getStationsCardTitle__update' + this.computeHash([]), () => this.getStationsCardTitle__update()),
            this.createStateVarObserverRegisterFunction('getStationsCardTitle__update' + this.computeHash([]), () => this.getStationsCardTitle__update())
        )).then(__v => this.getStationsCardTitle__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getStationsCardTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Stations";
        return val_$;
    }

    private getSignalCount__SynchronizedResult: string = undefined;
    public getSignalCount__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSignalCount__SynchronizedResult === undefined) {
            this.getSignalCount__SynchronizedResult = null;
            this.getSignalCount__update();
        }
        return this.getSignalCount__SynchronizedResult;
    }

    public getSignalCount__update(): void {
        
        Promise.resolve(this.getSignalCount(
            this.createDomainObserverRegisterFunction('getSignalCount__update' + this.computeHash([]), () => this.getSignalCount__update()),
            this.createStateVarObserverRegisterFunction('getSignalCount__update' + this.computeHash([]), () => this.getSignalCount__update())
        )).then(__v => this.getSignalCount__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSignalCount(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getSignalsValueValue__SynchronizedResult: string = undefined;
    public getSignalsValueValue__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSignalsValueValue__SynchronizedResult === undefined) {
            this.getSignalsValueValue__SynchronizedResult = null;
            this.getSignalsValueValue__update();
        }
        return this.getSignalsValueValue__SynchronizedResult;
    }

    public getSignalsValueValue__update(): void {
        
        Promise.resolve(this.getSignalsValueValue(
            this.createDomainObserverRegisterFunction('getSignalsValueValue__update' + this.computeHash([]), () => this.getSignalsValueValue__update()),
            this.createStateVarObserverRegisterFunction('getSignalsValueValue__update' + this.computeHash([]), () => this.getSignalsValueValue__update())
        )).then(__v => this.getSignalsValueValue__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSignalsValueValue(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getSignalCount(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getSignalsValueSize__SynchronizedResult: string = undefined;
    public getSignalsValueSize__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSignalsValueSize__SynchronizedResult === undefined) {
            this.getSignalsValueSize__SynchronizedResult = null;
            this.getSignalsValueSize__update();
        }
        return this.getSignalsValueSize__SynchronizedResult;
    }

    public getSignalsValueSize__update(): void {
        
        Promise.resolve(this.getSignalsValueSize(
            this.createDomainObserverRegisterFunction('getSignalsValueSize__update' + this.computeHash([]), () => this.getSignalsValueSize__update()),
            this.createStateVarObserverRegisterFunction('getSignalsValueSize__update' + this.computeHash([]), () => this.getSignalsValueSize__update())
        )).then(__v => this.getSignalsValueSize__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getSignalsValueSize(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "2.2rem";
        return val_$;
    }

    private getSignalsValueWeight__SynchronizedResult: string = undefined;
    public getSignalsValueWeight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSignalsValueWeight__SynchronizedResult === undefined) {
            this.getSignalsValueWeight__SynchronizedResult = null;
            this.getSignalsValueWeight__update();
        }
        return this.getSignalsValueWeight__SynchronizedResult;
    }

    public getSignalsValueWeight__update(): void {
        
        Promise.resolve(this.getSignalsValueWeight(
            this.createDomainObserverRegisterFunction('getSignalsValueWeight__update' + this.computeHash([]), () => this.getSignalsValueWeight__update()),
            this.createStateVarObserverRegisterFunction('getSignalsValueWeight__update' + this.computeHash([]), () => this.getSignalsValueWeight__update())
        )).then(__v => this.getSignalsValueWeight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getSignalsValueWeight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
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
        const val_$: string = "Input, output and internal signals";
        return val_$;
    }

    private getGemText9Color__SynchronizedResult: string = undefined;
    public getGemText9Color__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText9Color__SynchronizedResult === undefined) {
            this.getGemText9Color__SynchronizedResult = null;
            this.getGemText9Color__update();
        }
        return this.getGemText9Color__SynchronizedResult;
    }

    public getGemText9Color__update(): void {
        
        Promise.resolve(this.getGemText9Color(
            this.createDomainObserverRegisterFunction('getGemText9Color__update' + this.computeHash([]), () => this.getGemText9Color__update()),
            this.createStateVarObserverRegisterFunction('getGemText9Color__update' + this.computeHash([]), () => this.getGemText9Color__update())
        )).then(__v => this.getGemText9Color__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText9Color(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "secondary";
        return val_$;
    }

    private getGemColumn8RowGap__SynchronizedResult: string = undefined;
    public getGemColumn8RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn8RowGap__SynchronizedResult === undefined) {
            this.getGemColumn8RowGap__SynchronizedResult = null;
            this.getGemColumn8RowGap__update();
        }
        return this.getGemColumn8RowGap__SynchronizedResult;
    }

    public getGemColumn8RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn8RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn8RowGap__update' + this.computeHash([]), () => this.getGemColumn8RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn8RowGap__update' + this.computeHash([]), () => this.getGemColumn8RowGap__update())
        )).then(__v => this.getGemColumn8RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn8RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "4px";
        return val_$;
    }

    private getSignalsCardTitle__SynchronizedResult: string = undefined;
    public getSignalsCardTitle__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSignalsCardTitle__SynchronizedResult === undefined) {
            this.getSignalsCardTitle__SynchronizedResult = null;
            this.getSignalsCardTitle__update();
        }
        return this.getSignalsCardTitle__SynchronizedResult;
    }

    public getSignalsCardTitle__update(): void {
        
        Promise.resolve(this.getSignalsCardTitle(
            this.createDomainObserverRegisterFunction('getSignalsCardTitle__update' + this.computeHash([]), () => this.getSignalsCardTitle__update()),
            this.createStateVarObserverRegisterFunction('getSignalsCardTitle__update' + this.computeHash([]), () => this.getSignalsCardTitle__update())
        )).then(__v => this.getSignalsCardTitle__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getSignalsCardTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Signals";
        return val_$;
    }

    private getSystemHealth__SynchronizedResult: string = undefined;
    public getSystemHealth__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSystemHealth__SynchronizedResult === undefined) {
            this.getSystemHealth__SynchronizedResult = null;
            this.getSystemHealth__update();
        }
        return this.getSystemHealth__SynchronizedResult;
    }

    public getSystemHealth__update(): void {
        
        Promise.resolve(this.getSystemHealth(
            this.createDomainObserverRegisterFunction('getSystemHealth__update' + this.computeHash([]), () => this.getSystemHealth__update()),
            this.createStateVarObserverRegisterFunction('getSystemHealth__update' + this.computeHash([]), () => this.getSystemHealth__update())
        )).then(__v => this.getSystemHealth__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSystemHealth(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getHealthValueValue__SynchronizedResult: string = undefined;
    public getHealthValueValue__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getHealthValueValue__SynchronizedResult === undefined) {
            this.getHealthValueValue__SynchronizedResult = null;
            this.getHealthValueValue__update();
        }
        return this.getHealthValueValue__SynchronizedResult;
    }

    public getHealthValueValue__update(): void {
        
        Promise.resolve(this.getHealthValueValue(
            this.createDomainObserverRegisterFunction('getHealthValueValue__update' + this.computeHash([]), () => this.getHealthValueValue__update()),
            this.createStateVarObserverRegisterFunction('getHealthValueValue__update' + this.computeHash([]), () => this.getHealthValueValue__update())
        )).then(__v => this.getHealthValueValue__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getHealthValueValue(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getSystemHealth(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getHealthValueSize__SynchronizedResult: string = undefined;
    public getHealthValueSize__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getHealthValueSize__SynchronizedResult === undefined) {
            this.getHealthValueSize__SynchronizedResult = null;
            this.getHealthValueSize__update();
        }
        return this.getHealthValueSize__SynchronizedResult;
    }

    public getHealthValueSize__update(): void {
        
        Promise.resolve(this.getHealthValueSize(
            this.createDomainObserverRegisterFunction('getHealthValueSize__update' + this.computeHash([]), () => this.getHealthValueSize__update()),
            this.createStateVarObserverRegisterFunction('getHealthValueSize__update' + this.computeHash([]), () => this.getHealthValueSize__update())
        )).then(__v => this.getHealthValueSize__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getHealthValueSize(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "2.2rem";
        return val_$;
    }

    private getHealthValueWeight__SynchronizedResult: string = undefined;
    public getHealthValueWeight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getHealthValueWeight__SynchronizedResult === undefined) {
            this.getHealthValueWeight__SynchronizedResult = null;
            this.getHealthValueWeight__update();
        }
        return this.getHealthValueWeight__SynchronizedResult;
    }

    public getHealthValueWeight__update(): void {
        
        Promise.resolve(this.getHealthValueWeight(
            this.createDomainObserverRegisterFunction('getHealthValueWeight__update' + this.computeHash([]), () => this.getHealthValueWeight__update()),
            this.createStateVarObserverRegisterFunction('getHealthValueWeight__update' + this.computeHash([]), () => this.getHealthValueWeight__update())
        )).then(__v => this.getHealthValueWeight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getHealthValueWeight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText11Value__SynchronizedResult: string = undefined;
    public getGemText11Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText11Value__SynchronizedResult === undefined) {
            this.getGemText11Value__SynchronizedResult = null;
            this.getGemText11Value__update();
        }
        return this.getGemText11Value__SynchronizedResult;
    }

    public getGemText11Value__update(): void {
        
        Promise.resolve(this.getGemText11Value(
            this.createDomainObserverRegisterFunction('getGemText11Value__update' + this.computeHash([]), () => this.getGemText11Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText11Value__update' + this.computeHash([]), () => this.getGemText11Value__update())
        )).then(__v => this.getGemText11Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText11Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Average station health";
        return val_$;
    }

    private getGemText11Color__SynchronizedResult: string = undefined;
    public getGemText11Color__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText11Color__SynchronizedResult === undefined) {
            this.getGemText11Color__SynchronizedResult = null;
            this.getGemText11Color__update();
        }
        return this.getGemText11Color__SynchronizedResult;
    }

    public getGemText11Color__update(): void {
        
        Promise.resolve(this.getGemText11Color(
            this.createDomainObserverRegisterFunction('getGemText11Color__update' + this.computeHash([]), () => this.getGemText11Color__update()),
            this.createStateVarObserverRegisterFunction('getGemText11Color__update' + this.computeHash([]), () => this.getGemText11Color__update())
        )).then(__v => this.getGemText11Color__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText11Color(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "secondary";
        return val_$;
    }

    private getGemColumn10RowGap__SynchronizedResult: string = undefined;
    public getGemColumn10RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn10RowGap__SynchronizedResult === undefined) {
            this.getGemColumn10RowGap__SynchronizedResult = null;
            this.getGemColumn10RowGap__update();
        }
        return this.getGemColumn10RowGap__SynchronizedResult;
    }

    public getGemColumn10RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn10RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn10RowGap__update' + this.computeHash([]), () => this.getGemColumn10RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn10RowGap__update' + this.computeHash([]), () => this.getGemColumn10RowGap__update())
        )).then(__v => this.getGemColumn10RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn10RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "4px";
        return val_$;
    }

    private getHealthCardTitle__SynchronizedResult: string = undefined;
    public getHealthCardTitle__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getHealthCardTitle__SynchronizedResult === undefined) {
            this.getHealthCardTitle__SynchronizedResult = null;
            this.getHealthCardTitle__update();
        }
        return this.getHealthCardTitle__SynchronizedResult;
    }

    public getHealthCardTitle__update(): void {
        
        Promise.resolve(this.getHealthCardTitle(
            this.createDomainObserverRegisterFunction('getHealthCardTitle__update' + this.computeHash([]), () => this.getHealthCardTitle__update()),
            this.createStateVarObserverRegisterFunction('getHealthCardTitle__update' + this.computeHash([]), () => this.getHealthCardTitle__update())
        )).then(__v => this.getHealthCardTitle__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getHealthCardTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Health";
        return val_$;
    }

    private getAlarmCount__SynchronizedResult: string = undefined;
    public getAlarmCount__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAlarmCount__SynchronizedResult === undefined) {
            this.getAlarmCount__SynchronizedResult = null;
            this.getAlarmCount__update();
        }
        return this.getAlarmCount__SynchronizedResult;
    }

    public getAlarmCount__update(): void {
        
        Promise.resolve(this.getAlarmCount(
            this.createDomainObserverRegisterFunction('getAlarmCount__update' + this.computeHash([]), () => this.getAlarmCount__update()),
            this.createStateVarObserverRegisterFunction('getAlarmCount__update' + this.computeHash([]), () => this.getAlarmCount__update())
        )).then(__v => this.getAlarmCount__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getAlarmCount(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getAlarmsValueValue__SynchronizedResult: string = undefined;
    public getAlarmsValueValue__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAlarmsValueValue__SynchronizedResult === undefined) {
            this.getAlarmsValueValue__SynchronizedResult = null;
            this.getAlarmsValueValue__update();
        }
        return this.getAlarmsValueValue__SynchronizedResult;
    }

    public getAlarmsValueValue__update(): void {
        
        Promise.resolve(this.getAlarmsValueValue(
            this.createDomainObserverRegisterFunction('getAlarmsValueValue__update' + this.computeHash([]), () => this.getAlarmsValueValue__update()),
            this.createStateVarObserverRegisterFunction('getAlarmsValueValue__update' + this.computeHash([]), () => this.getAlarmsValueValue__update())
        )).then(__v => this.getAlarmsValueValue__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getAlarmsValueValue(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getAlarmCount(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getAlarmsValueSize__SynchronizedResult: string = undefined;
    public getAlarmsValueSize__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAlarmsValueSize__SynchronizedResult === undefined) {
            this.getAlarmsValueSize__SynchronizedResult = null;
            this.getAlarmsValueSize__update();
        }
        return this.getAlarmsValueSize__SynchronizedResult;
    }

    public getAlarmsValueSize__update(): void {
        
        Promise.resolve(this.getAlarmsValueSize(
            this.createDomainObserverRegisterFunction('getAlarmsValueSize__update' + this.computeHash([]), () => this.getAlarmsValueSize__update()),
            this.createStateVarObserverRegisterFunction('getAlarmsValueSize__update' + this.computeHash([]), () => this.getAlarmsValueSize__update())
        )).then(__v => this.getAlarmsValueSize__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getAlarmsValueSize(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "2.2rem";
        return val_$;
    }

    private getAlarmsValueWeight__SynchronizedResult: string = undefined;
    public getAlarmsValueWeight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAlarmsValueWeight__SynchronizedResult === undefined) {
            this.getAlarmsValueWeight__SynchronizedResult = null;
            this.getAlarmsValueWeight__update();
        }
        return this.getAlarmsValueWeight__SynchronizedResult;
    }

    public getAlarmsValueWeight__update(): void {
        
        Promise.resolve(this.getAlarmsValueWeight(
            this.createDomainObserverRegisterFunction('getAlarmsValueWeight__update' + this.computeHash([]), () => this.getAlarmsValueWeight__update()),
            this.createStateVarObserverRegisterFunction('getAlarmsValueWeight__update' + this.computeHash([]), () => this.getAlarmsValueWeight__update())
        )).then(__v => this.getAlarmsValueWeight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getAlarmsValueWeight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText13Value__SynchronizedResult: string = undefined;
    public getGemText13Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText13Value__SynchronizedResult === undefined) {
            this.getGemText13Value__SynchronizedResult = null;
            this.getGemText13Value__update();
        }
        return this.getGemText13Value__SynchronizedResult;
    }

    public getGemText13Value__update(): void {
        
        Promise.resolve(this.getGemText13Value(
            this.createDomainObserverRegisterFunction('getGemText13Value__update' + this.computeHash([]), () => this.getGemText13Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText13Value__update' + this.computeHash([]), () => this.getGemText13Value__update())
        )).then(__v => this.getGemText13Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText13Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Requires attention";
        return val_$;
    }

    private getGemText13Color__SynchronizedResult: string = undefined;
    public getGemText13Color__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText13Color__SynchronizedResult === undefined) {
            this.getGemText13Color__SynchronizedResult = null;
            this.getGemText13Color__update();
        }
        return this.getGemText13Color__SynchronizedResult;
    }

    public getGemText13Color__update(): void {
        
        Promise.resolve(this.getGemText13Color(
            this.createDomainObserverRegisterFunction('getGemText13Color__update' + this.computeHash([]), () => this.getGemText13Color__update()),
            this.createStateVarObserverRegisterFunction('getGemText13Color__update' + this.computeHash([]), () => this.getGemText13Color__update())
        )).then(__v => this.getGemText13Color__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText13Color(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "secondary";
        return val_$;
    }

    private getGemColumn12RowGap__SynchronizedResult: string = undefined;
    public getGemColumn12RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn12RowGap__SynchronizedResult === undefined) {
            this.getGemColumn12RowGap__SynchronizedResult = null;
            this.getGemColumn12RowGap__update();
        }
        return this.getGemColumn12RowGap__SynchronizedResult;
    }

    public getGemColumn12RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn12RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn12RowGap__update' + this.computeHash([]), () => this.getGemColumn12RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn12RowGap__update' + this.computeHash([]), () => this.getGemColumn12RowGap__update())
        )).then(__v => this.getGemColumn12RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn12RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "4px";
        return val_$;
    }

    private getAlarmsCardTitle__SynchronizedResult: string = undefined;
    public getAlarmsCardTitle__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAlarmsCardTitle__SynchronizedResult === undefined) {
            this.getAlarmsCardTitle__SynchronizedResult = null;
            this.getAlarmsCardTitle__update();
        }
        return this.getAlarmsCardTitle__SynchronizedResult;
    }

    public getAlarmsCardTitle__update(): void {
        
        Promise.resolve(this.getAlarmsCardTitle(
            this.createDomainObserverRegisterFunction('getAlarmsCardTitle__update' + this.computeHash([]), () => this.getAlarmsCardTitle__update()),
            this.createStateVarObserverRegisterFunction('getAlarmsCardTitle__update' + this.computeHash([]), () => this.getAlarmsCardTitle__update())
        )).then(__v => this.getAlarmsCardTitle__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getAlarmsCardTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Open alarms";
        return val_$;
    }

    private getGemRow5ColGap__SynchronizedResult: string = undefined;
    public getGemRow5ColGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow5ColGap__SynchronizedResult === undefined) {
            this.getGemRow5ColGap__SynchronizedResult = null;
            this.getGemRow5ColGap__update();
        }
        return this.getGemRow5ColGap__SynchronizedResult;
    }

    public getGemRow5ColGap__update(): void {
        
        Promise.resolve(this.getGemRow5ColGap(
            this.createDomainObserverRegisterFunction('getGemRow5ColGap__update' + this.computeHash([]), () => this.getGemRow5ColGap__update()),
            this.createStateVarObserverRegisterFunction('getGemRow5ColGap__update' + this.computeHash([]), () => this.getGemRow5ColGap__update())
        )).then(__v => this.getGemRow5ColGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRow5ColGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "16px";
        return val_$;
    }

    private getGemText17Value__SynchronizedResult: string = undefined;
    public getGemText17Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText17Value__SynchronizedResult === undefined) {
            this.getGemText17Value__SynchronizedResult = null;
            this.getGemText17Value__update();
        }
        return this.getGemText17Value__SynchronizedResult;
    }

    public getGemText17Value__update(): void {
        
        Promise.resolve(this.getGemText17Value(
            this.createDomainObserverRegisterFunction('getGemText17Value__update' + this.computeHash([]), () => this.getGemText17Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText17Value__update' + this.computeHash([]), () => this.getGemText17Value__update())
        )).then(__v => this.getGemText17Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText17Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Click a station to inspect status, signals and prognosis.";
        return val_$;
    }

    private getGemText17Color__SynchronizedResult: string = undefined;
    public getGemText17Color__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText17Color__SynchronizedResult === undefined) {
            this.getGemText17Color__SynchronizedResult = null;
            this.getGemText17Color__update();
        }
        return this.getGemText17Color__SynchronizedResult;
    }

    public getGemText17Color__update(): void {
        
        Promise.resolve(this.getGemText17Color(
            this.createDomainObserverRegisterFunction('getGemText17Color__update' + this.computeHash([]), () => this.getGemText17Color__update()),
            this.createStateVarObserverRegisterFunction('getGemText17Color__update' + this.computeHash([]), () => this.getGemText17Color__update())
        )).then(__v => this.getGemText17Color__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText17Color(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "secondary";
        return val_$;
    }

    private getGemText20Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText20Value__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText20Value__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemText20Value__SynchronizedResult.set([station.getGemId()], null);
            this.getGemText20Value__update(station);
        }
        return this.getGemText20Value__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemText20Value__update(station: Station): void {
        
        Promise.resolve(this.getGemText20Value(station,
            this.createDomainObserverRegisterFunction('getGemText20Value__update' + this.computeHash([station]), () => this.getGemText20Value__update(station)),
            this.createStateVarObserverRegisterFunction('getGemText20Value__update' + this.computeHash([station]), () => this.getGemText20Value__update(station))
        )).then(__v => this.getGemText20Value__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText20Value(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        const val_$: string = station.getName();
        return val_$;
    }

    private getGemText20Weight__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText20Weight__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText20Weight__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemText20Weight__SynchronizedResult.set([station.getGemId()], null);
            this.getGemText20Weight__update(station);
        }
        return this.getGemText20Weight__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemText20Weight__update(station: Station): void {
        
        Promise.resolve(this.getGemText20Weight(station,
            this.createDomainObserverRegisterFunction('getGemText20Weight__update' + this.computeHash([station]), () => this.getGemText20Weight__update(station)),
            this.createStateVarObserverRegisterFunction('getGemText20Weight__update' + this.computeHash([station]), () => this.getGemText20Weight__update(station))
        )).then(__v => this.getGemText20Weight__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText20Weight(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText21Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText21Value__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText21Value__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemText21Value__SynchronizedResult.set([station.getGemId()], null);
            this.getGemText21Value__update(station);
        }
        return this.getGemText21Value__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemText21Value__update(station: Station): void {
        
        Promise.resolve(this.getGemText21Value(station,
            this.createDomainObserverRegisterFunction('getGemText21Value__update' + this.computeHash([station]), () => this.getGemText21Value__update(station)),
            this.createStateVarObserverRegisterFunction('getGemText21Value__update' + this.computeHash([station]), () => this.getGemText21Value__update(station))
        )).then(__v => this.getGemText21Value__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText21Value(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        const val_$: string = station.getTypeText();
        return val_$;
    }

    private getGemText21Color__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText21Color__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText21Color__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemText21Color__SynchronizedResult.set([station.getGemId()], null);
            this.getGemText21Color__update(station);
        }
        return this.getGemText21Color__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemText21Color__update(station: Station): void {
        
        Promise.resolve(this.getGemText21Color(station,
            this.createDomainObserverRegisterFunction('getGemText21Color__update' + this.computeHash([station]), () => this.getGemText21Color__update(station)),
            this.createStateVarObserverRegisterFunction('getGemText21Color__update' + this.computeHash([station]), () => this.getGemText21Color__update(station))
        )).then(__v => this.getGemText21Color__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText21Color(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "secondary";
        return val_$;
    }

    private getGemText23Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText23Value__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText23Value__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemText23Value__SynchronizedResult.set([station.getGemId()], null);
            this.getGemText23Value__update(station);
        }
        return this.getGemText23Value__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemText23Value__update(station: Station): void {
        
        Promise.resolve(this.getGemText23Value(station,
            this.createDomainObserverRegisterFunction('getGemText23Value__update' + this.computeHash([station]), () => this.getGemText23Value__update(station)),
            this.createStateVarObserverRegisterFunction('getGemText23Value__update' + this.computeHash([station]), () => this.getGemText23Value__update(station))
        )).then(__v => this.getGemText23Value__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText23Value(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "Status";
        return val_$;
    }

    private getStateLabelValue__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getStateLabelValue__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStateLabelValue__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getStateLabelValue__SynchronizedResult.set([station.getGemId()], null);
            this.getStateLabelValue__update(station);
        }
        return this.getStateLabelValue__SynchronizedResult.get([station.getGemId()]);
    }

    public getStateLabelValue__update(station: Station): void {
        
        Promise.resolve(this.getStateLabelValue(station,
            this.createDomainObserverRegisterFunction('getStateLabelValue__update' + this.computeHash([station]), () => this.getStateLabelValue__update(station)),
            this.createStateVarObserverRegisterFunction('getStateLabelValue__update' + this.computeHash([station]), () => this.getStateLabelValue__update(station))
        )).then(__v => this.getStateLabelValue__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getStateLabelValue(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        const val_$: string = station.getStateText();
        return val_$;
    }

    private getGemRow22ColGap__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemRow22ColGap__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow22ColGap__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemRow22ColGap__SynchronizedResult.set([station.getGemId()], null);
            this.getGemRow22ColGap__update(station);
        }
        return this.getGemRow22ColGap__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemRow22ColGap__update(station: Station): void {
        
        Promise.resolve(this.getGemRow22ColGap(station,
            this.createDomainObserverRegisterFunction('getGemRow22ColGap__update' + this.computeHash([station]), () => this.getGemRow22ColGap__update(station)),
            this.createStateVarObserverRegisterFunction('getGemRow22ColGap__update' + this.computeHash([station]), () => this.getGemRow22ColGap__update(station))
        )).then(__v => this.getGemRow22ColGap__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemRow22ColGap(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "8px";
        return val_$;
    }

    private getGemText25Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText25Value__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText25Value__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemText25Value__SynchronizedResult.set([station.getGemId()], null);
            this.getGemText25Value__update(station);
        }
        return this.getGemText25Value__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemText25Value__update(station: Station): void {
        
        Promise.resolve(this.getGemText25Value(station,
            this.createDomainObserverRegisterFunction('getGemText25Value__update' + this.computeHash([station]), () => this.getGemText25Value__update(station)),
            this.createStateVarObserverRegisterFunction('getGemText25Value__update' + this.computeHash([station]), () => this.getGemText25Value__update(station))
        )).then(__v => this.getGemText25Value__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText25Value(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "Health";
        return val_$;
    }

    private getStationHealth__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getStationHealth__synchronized(val_$_$0: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStationHealth__SynchronizedResult.get([val_$_$0.getGemId()]) === undefined) {
            this.getStationHealth__SynchronizedResult.set([val_$_$0.getGemId()], null);
            this.getStationHealth__update(val_$_$0);
        }
        return this.getStationHealth__SynchronizedResult.get([val_$_$0.getGemId()]);
    }

    public getStationHealth__update(val_$_$0: Station): void {
        
        Promise.resolve(this.getStationHealth(val_$_$0,
            this.createDomainObserverRegisterFunction('getStationHealth__update' + this.computeHash([val_$_$0]), () => this.getStationHealth__update(val_$_$0)),
            this.createStateVarObserverRegisterFunction('getStationHealth__update' + this.computeHash([val_$_$0]), () => this.getStationHealth__update(val_$_$0))
        )).then(__v => this.getStationHealth__SynchronizedResult.set([val_$_$0.getGemId()], __v === undefined ? null : __v));
    }

    public async getStationHealth(val_$_$0: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        __regObsToDomainObj(val_$_$0);
        return null;
    }

    private getGemText26Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText26Value__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText26Value__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemText26Value__SynchronizedResult.set([station.getGemId()], null);
            this.getGemText26Value__update(station);
        }
        return this.getGemText26Value__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemText26Value__update(station: Station): void {
        
        Promise.resolve(this.getGemText26Value(station,
            this.createDomainObserverRegisterFunction('getGemText26Value__update' + this.computeHash([station]), () => this.getGemText26Value__update(station)),
            this.createStateVarObserverRegisterFunction('getGemText26Value__update' + this.computeHash([station]), () => this.getGemText26Value__update(station))
        )).then(__v => this.getGemText26Value__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public async getGemText26Value(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = await this.getStationHealth(station, __regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText26Weight__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText26Weight__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText26Weight__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemText26Weight__SynchronizedResult.set([station.getGemId()], null);
            this.getGemText26Weight__update(station);
        }
        return this.getGemText26Weight__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemText26Weight__update(station: Station): void {
        
        Promise.resolve(this.getGemText26Weight(station,
            this.createDomainObserverRegisterFunction('getGemText26Weight__update' + this.computeHash([station]), () => this.getGemText26Weight__update(station)),
            this.createStateVarObserverRegisterFunction('getGemText26Weight__update' + this.computeHash([station]), () => this.getGemText26Weight__update(station))
        )).then(__v => this.getGemText26Weight__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText26Weight(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemRow24ColGap__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemRow24ColGap__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow24ColGap__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemRow24ColGap__SynchronizedResult.set([station.getGemId()], null);
            this.getGemRow24ColGap__update(station);
        }
        return this.getGemRow24ColGap__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemRow24ColGap__update(station: Station): void {
        
        Promise.resolve(this.getGemRow24ColGap(station,
            this.createDomainObserverRegisterFunction('getGemRow24ColGap__update' + this.computeHash([station]), () => this.getGemRow24ColGap__update(station)),
            this.createStateVarObserverRegisterFunction('getGemRow24ColGap__update' + this.computeHash([station]), () => this.getGemRow24ColGap__update(station))
        )).then(__v => this.getGemRow24ColGap__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemRow24ColGap(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "8px";
        return val_$;
    }

    private getHealthBarHeight__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getHealthBarHeight__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getHealthBarHeight__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getHealthBarHeight__SynchronizedResult.set([station.getGemId()], null);
            this.getHealthBarHeight__update(station);
        }
        return this.getHealthBarHeight__SynchronizedResult.get([station.getGemId()]);
    }

    public getHealthBarHeight__update(station: Station): void {
        
        Promise.resolve(this.getHealthBarHeight(station,
            this.createDomainObserverRegisterFunction('getHealthBarHeight__update' + this.computeHash([station]), () => this.getHealthBarHeight__update(station)),
            this.createStateVarObserverRegisterFunction('getHealthBarHeight__update' + this.computeHash([station]), () => this.getHealthBarHeight__update(station))
        )).then(__v => this.getHealthBarHeight__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getHealthBarHeight(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "6px";
        return val_$;
    }

    private selectStation__SynchronizedResult: ManyKeysMap<any, (p1: void) => void> = new ManyKeysMap()
    public selectStation__synchronized(val_$_$0: Station): (p1: void) => void {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.selectStation__SynchronizedResult.get([val_$_$0.getGemId()]) === undefined) {
            this.selectStation__SynchronizedResult.set([val_$_$0.getGemId()], null);
            this.selectStation__update(val_$_$0);
        }
        return this.selectStation__SynchronizedResult.get([val_$_$0.getGemId()]);
    }

    public selectStation__update(val_$_$0: Station): void {
        
        Promise.resolve(this.selectStation(val_$_$0,
            this.createDomainObserverRegisterFunction('selectStation__update' + this.computeHash([val_$_$0]), () => this.selectStation__update(val_$_$0)),
            this.createStateVarObserverRegisterFunction('selectStation__update' + this.computeHash([val_$_$0]), () => this.selectStation__update(val_$_$0))
        )).then(__v => this.selectStation__SynchronizedResult.set([val_$_$0.getGemId()], __v === undefined ? null : __v));
    }

    public selectStation(val_$_$0: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        __regObsToDomainObj(val_$_$0);
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    private getGemButton27Label__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemButton27Label__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemButton27Label__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemButton27Label__SynchronizedResult.set([station.getGemId()], null);
            this.getGemButton27Label__update(station);
        }
        return this.getGemButton27Label__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemButton27Label__update(station: Station): void {
        
        Promise.resolve(this.getGemButton27Label(station,
            this.createDomainObserverRegisterFunction('getGemButton27Label__update' + this.computeHash([station]), () => this.getGemButton27Label__update(station)),
            this.createStateVarObserverRegisterFunction('getGemButton27Label__update' + this.computeHash([station]), () => this.getGemButton27Label__update(station))
        )).then(__v => this.getGemButton27Label__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemButton27Label(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "Select";
        return val_$;
    }

    public gemButton27LeftClick(event_$: void, station: Station) {
        if (this.selectStation(station) != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))(this.selectStation(station));
        }
    }

    private getGemColumn19RowGap__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemColumn19RowGap__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn19RowGap__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemColumn19RowGap__SynchronizedResult.set([station.getGemId()], null);
            this.getGemColumn19RowGap__update(station);
        }
        return this.getGemColumn19RowGap__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemColumn19RowGap__update(station: Station): void {
        
        Promise.resolve(this.getGemColumn19RowGap(station,
            this.createDomainObserverRegisterFunction('getGemColumn19RowGap__update' + this.computeHash([station]), () => this.getGemColumn19RowGap__update(station)),
            this.createStateVarObserverRegisterFunction('getGemColumn19RowGap__update' + this.computeHash([station]), () => this.getGemColumn19RowGap__update(station))
        )).then(__v => this.getGemColumn19RowGap__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemColumn19RowGap(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "8px";
        return val_$;
    }

    private getIt18Iterable__SynchronizedResult: Array<Station> = undefined;
    public getIt18Iterable__synchronized(): Array<Station> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getIt18Iterable__SynchronizedResult === undefined) {
            this.getIt18Iterable__SynchronizedResult = null;
            this.getIt18Iterable__update();
        }
        return this.getIt18Iterable__SynchronizedResult;
    }

    public getIt18Iterable__update(): void {
        
        Promise.resolve(this.getIt18Iterable(
            this.createDomainObserverRegisterFunction('getIt18Iterable__update' + this.computeHash([]), () => this.getIt18Iterable__update()),
            this.createStateVarObserverRegisterFunction('getIt18Iterable__update' + this.computeHash([]), () => this.getIt18Iterable__update())
        )).then(__v => this.getIt18Iterable__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getIt18Iterable(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Station>> {
        if (false){
            return null;
        }
        return (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
    }

    private getStationGridWrap__SynchronizedResult: string = undefined;
    public getStationGridWrap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStationGridWrap__SynchronizedResult === undefined) {
            this.getStationGridWrap__SynchronizedResult = null;
            this.getStationGridWrap__update();
        }
        return this.getStationGridWrap__SynchronizedResult;
    }

    public getStationGridWrap__update(): void {
        
        Promise.resolve(this.getStationGridWrap(
            this.createDomainObserverRegisterFunction('getStationGridWrap__update' + this.computeHash([]), () => this.getStationGridWrap__update()),
            this.createStateVarObserverRegisterFunction('getStationGridWrap__update' + this.computeHash([]), () => this.getStationGridWrap__update())
        )).then(__v => this.getStationGridWrap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getStationGridWrap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "wrap";
        return val_$;
    }

    private getStationGridColGap__SynchronizedResult: string = undefined;
    public getStationGridColGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStationGridColGap__SynchronizedResult === undefined) {
            this.getStationGridColGap__SynchronizedResult = null;
            this.getStationGridColGap__update();
        }
        return this.getStationGridColGap__SynchronizedResult;
    }

    public getStationGridColGap__update(): void {
        
        Promise.resolve(this.getStationGridColGap(
            this.createDomainObserverRegisterFunction('getStationGridColGap__update' + this.computeHash([]), () => this.getStationGridColGap__update()),
            this.createStateVarObserverRegisterFunction('getStationGridColGap__update' + this.computeHash([]), () => this.getStationGridColGap__update())
        )).then(__v => this.getStationGridColGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getStationGridColGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "14px";
        return val_$;
    }

    private getStationGridRowGap__SynchronizedResult: string = undefined;
    public getStationGridRowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStationGridRowGap__SynchronizedResult === undefined) {
            this.getStationGridRowGap__SynchronizedResult = null;
            this.getStationGridRowGap__update();
        }
        return this.getStationGridRowGap__SynchronizedResult;
    }

    public getStationGridRowGap__update(): void {
        
        Promise.resolve(this.getStationGridRowGap(
            this.createDomainObserverRegisterFunction('getStationGridRowGap__update' + this.computeHash([]), () => this.getStationGridRowGap__update()),
            this.createStateVarObserverRegisterFunction('getStationGridRowGap__update' + this.computeHash([]), () => this.getStationGridRowGap__update())
        )).then(__v => this.getStationGridRowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getStationGridRowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "14px";
        return val_$;
    }

    private startSimulation__SynchronizedResult: (p1: void) => void = undefined;
    public startSimulation__synchronized(): (p1: void) => void {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.startSimulation__SynchronizedResult === undefined) {
            this.startSimulation__SynchronizedResult = null;
            this.startSimulation__update();
        }
        return this.startSimulation__SynchronizedResult;
    }

    public startSimulation__update(): void {
        
        Promise.resolve(this.startSimulation(
            this.createDomainObserverRegisterFunction('startSimulation__update' + this.computeHash([]), () => this.startSimulation__update()),
            this.createStateVarObserverRegisterFunction('startSimulation__update' + this.computeHash([]), () => this.startSimulation__update())
        )).then(__v => this.startSimulation__SynchronizedResult = __v === undefined ? null : __v);
    }

    public startSimulation(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    private getStartBtnLabel__SynchronizedResult: string = undefined;
    public getStartBtnLabel__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStartBtnLabel__SynchronizedResult === undefined) {
            this.getStartBtnLabel__SynchronizedResult = null;
            this.getStartBtnLabel__update();
        }
        return this.getStartBtnLabel__SynchronizedResult;
    }

    public getStartBtnLabel__update(): void {
        
        Promise.resolve(this.getStartBtnLabel(
            this.createDomainObserverRegisterFunction('getStartBtnLabel__update' + this.computeHash([]), () => this.getStartBtnLabel__update()),
            this.createStateVarObserverRegisterFunction('getStartBtnLabel__update' + this.computeHash([]), () => this.getStartBtnLabel__update())
        )).then(__v => this.getStartBtnLabel__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getStartBtnLabel(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Start Simulation";
        return val_$;
    }

    public startBtnLeftClick(event_$: void) {
        if (this.startSimulation() != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))(this.startSimulation());
        }
    }

    private stopSimulation__SynchronizedResult: (p1: void) => void = undefined;
    public stopSimulation__synchronized(): (p1: void) => void {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.stopSimulation__SynchronizedResult === undefined) {
            this.stopSimulation__SynchronizedResult = null;
            this.stopSimulation__update();
        }
        return this.stopSimulation__SynchronizedResult;
    }

    public stopSimulation__update(): void {
        
        Promise.resolve(this.stopSimulation(
            this.createDomainObserverRegisterFunction('stopSimulation__update' + this.computeHash([]), () => this.stopSimulation__update()),
            this.createStateVarObserverRegisterFunction('stopSimulation__update' + this.computeHash([]), () => this.stopSimulation__update())
        )).then(__v => this.stopSimulation__SynchronizedResult = __v === undefined ? null : __v);
    }

    public stopSimulation(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    private getStopBtnLabel__SynchronizedResult: string = undefined;
    public getStopBtnLabel__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getStopBtnLabel__SynchronizedResult === undefined) {
            this.getStopBtnLabel__SynchronizedResult = null;
            this.getStopBtnLabel__update();
        }
        return this.getStopBtnLabel__SynchronizedResult;
    }

    public getStopBtnLabel__update(): void {
        
        Promise.resolve(this.getStopBtnLabel(
            this.createDomainObserverRegisterFunction('getStopBtnLabel__update' + this.computeHash([]), () => this.getStopBtnLabel__update()),
            this.createStateVarObserverRegisterFunction('getStopBtnLabel__update' + this.computeHash([]), () => this.getStopBtnLabel__update())
        )).then(__v => this.getStopBtnLabel__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getStopBtnLabel(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Stop Simulation";
        return val_$;
    }

    public stopBtnLeftClick(event_$: void) {
        if (this.stopSimulation() != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))(this.stopSimulation());
        }
    }

    private resetSimulation__SynchronizedResult: (p1: void) => void = undefined;
    public resetSimulation__synchronized(): (p1: void) => void {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.resetSimulation__SynchronizedResult === undefined) {
            this.resetSimulation__SynchronizedResult = null;
            this.resetSimulation__update();
        }
        return this.resetSimulation__SynchronizedResult;
    }

    public resetSimulation__update(): void {
        
        Promise.resolve(this.resetSimulation(
            this.createDomainObserverRegisterFunction('resetSimulation__update' + this.computeHash([]), () => this.resetSimulation__update()),
            this.createStateVarObserverRegisterFunction('resetSimulation__update' + this.computeHash([]), () => this.resetSimulation__update())
        )).then(__v => this.resetSimulation__SynchronizedResult = __v === undefined ? null : __v);
    }

    public resetSimulation(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    private getResetBtnLabel__SynchronizedResult: string = undefined;
    public getResetBtnLabel__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getResetBtnLabel__SynchronizedResult === undefined) {
            this.getResetBtnLabel__SynchronizedResult = null;
            this.getResetBtnLabel__update();
        }
        return this.getResetBtnLabel__SynchronizedResult;
    }

    public getResetBtnLabel__update(): void {
        
        Promise.resolve(this.getResetBtnLabel(
            this.createDomainObserverRegisterFunction('getResetBtnLabel__update' + this.computeHash([]), () => this.getResetBtnLabel__update()),
            this.createStateVarObserverRegisterFunction('getResetBtnLabel__update' + this.computeHash([]), () => this.getResetBtnLabel__update())
        )).then(__v => this.getResetBtnLabel__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getResetBtnLabel(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Reset Simulation";
        return val_$;
    }

    public resetBtnLeftClick(event_$: void) {
        if (this.resetSimulation() != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))(this.resetSimulation());
        }
    }

    private getGemRow28ColGap__SynchronizedResult: string = undefined;
    public getGemRow28ColGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow28ColGap__SynchronizedResult === undefined) {
            this.getGemRow28ColGap__SynchronizedResult = null;
            this.getGemRow28ColGap__update();
        }
        return this.getGemRow28ColGap__SynchronizedResult;
    }

    public getGemRow28ColGap__update(): void {
        
        Promise.resolve(this.getGemRow28ColGap(
            this.createDomainObserverRegisterFunction('getGemRow28ColGap__update' + this.computeHash([]), () => this.getGemRow28ColGap__update()),
            this.createStateVarObserverRegisterFunction('getGemRow28ColGap__update' + this.computeHash([]), () => this.getGemRow28ColGap__update())
        )).then(__v => this.getGemRow28ColGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRow28ColGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "10px";
        return val_$;
    }

    private getGemText30Value__SynchronizedResult: string = undefined;
    public getGemText30Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText30Value__SynchronizedResult === undefined) {
            this.getGemText30Value__SynchronizedResult = null;
            this.getGemText30Value__update();
        }
        return this.getGemText30Value__SynchronizedResult;
    }

    public getGemText30Value__update(): void {
        
        Promise.resolve(this.getGemText30Value(
            this.createDomainObserverRegisterFunction('getGemText30Value__update' + this.computeHash([]), () => this.getGemText30Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText30Value__update' + this.computeHash([]), () => this.getGemText30Value__update())
        )).then(__v => this.getGemText30Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText30Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Simulation Speed";
        return val_$;
    }

    private getGemText30Weight__SynchronizedResult: string = undefined;
    public getGemText30Weight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText30Weight__SynchronizedResult === undefined) {
            this.getGemText30Weight__SynchronizedResult = null;
            this.getGemText30Weight__update();
        }
        return this.getGemText30Weight__SynchronizedResult;
    }

    public getGemText30Weight__update(): void {
        
        Promise.resolve(this.getGemText30Weight(
            this.createDomainObserverRegisterFunction('getGemText30Weight__update' + this.computeHash([]), () => this.getGemText30Weight__update()),
            this.createStateVarObserverRegisterFunction('getGemText30Weight__update' + this.computeHash([]), () => this.getGemText30Weight__update())
        )).then(__v => this.getGemText30Weight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText30Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemRangeInput31Id__SynchronizedResult: string = undefined;
    public getGemRangeInput31Id__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput31Id__SynchronizedResult === undefined) {
            this.getGemRangeInput31Id__SynchronizedResult = null;
            this.getGemRangeInput31Id__update();
        }
        return this.getGemRangeInput31Id__SynchronizedResult;
    }

    public getGemRangeInput31Id__update(): void {
        
        Promise.resolve(this.getGemRangeInput31Id(
            this.createDomainObserverRegisterFunction('getGemRangeInput31Id__update' + this.computeHash([]), () => this.getGemRangeInput31Id__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput31Id__update' + this.computeHash([]), () => this.getGemRangeInput31Id__update())
        )).then(__v => this.getGemRangeInput31Id__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput31Id(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "simSpeed";
        return val_$;
    }

    private getGemRangeInput31LabelText__SynchronizedResult: string = undefined;
    public getGemRangeInput31LabelText__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput31LabelText__SynchronizedResult === undefined) {
            this.getGemRangeInput31LabelText__SynchronizedResult = null;
            this.getGemRangeInput31LabelText__update();
        }
        return this.getGemRangeInput31LabelText__SynchronizedResult;
    }

    public getGemRangeInput31LabelText__update(): void {
        
        Promise.resolve(this.getGemRangeInput31LabelText(
            this.createDomainObserverRegisterFunction('getGemRangeInput31LabelText__update' + this.computeHash([]), () => this.getGemRangeInput31LabelText__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput31LabelText__update' + this.computeHash([]), () => this.getGemRangeInput31LabelText__update())
        )).then(__v => this.getGemRangeInput31LabelText__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput31LabelText(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Speed multiplier";
        return val_$;
    }

    private getGemRangeInput31Vertical__SynchronizedResult: boolean = undefined;
    public getGemRangeInput31Vertical__synchronized(): boolean {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput31Vertical__SynchronizedResult === undefined) {
            this.getGemRangeInput31Vertical__SynchronizedResult = null;
            this.getGemRangeInput31Vertical__update();
        }
        return this.getGemRangeInput31Vertical__SynchronizedResult;
    }

    public getGemRangeInput31Vertical__update(): void {
        
        Promise.resolve(this.getGemRangeInput31Vertical(
            this.createDomainObserverRegisterFunction('getGemRangeInput31Vertical__update' + this.computeHash([]), () => this.getGemRangeInput31Vertical__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput31Vertical__update' + this.computeHash([]), () => this.getGemRangeInput31Vertical__update())
        )).then(__v => this.getGemRangeInput31Vertical__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput31Vertical(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): boolean {
        if (false){
            return null;
        }
        const val_$: boolean = false;
        return val_$;
    }

    private getGemRangeInput31MinValue__SynchronizedResult: number = undefined;
    public getGemRangeInput31MinValue__synchronized(): number {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput31MinValue__SynchronizedResult === undefined) {
            this.getGemRangeInput31MinValue__SynchronizedResult = null;
            this.getGemRangeInput31MinValue__update();
        }
        return this.getGemRangeInput31MinValue__SynchronizedResult;
    }

    public getGemRangeInput31MinValue__update(): void {
        
        Promise.resolve(this.getGemRangeInput31MinValue(
            this.createDomainObserverRegisterFunction('getGemRangeInput31MinValue__update' + this.computeHash([]), () => this.getGemRangeInput31MinValue__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput31MinValue__update' + this.computeHash([]), () => this.getGemRangeInput31MinValue__update())
        )).then(__v => this.getGemRangeInput31MinValue__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput31MinValue(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): number {
        if (false){
            return null;
        }
        const val_$: number = 1;
        return val_$;
    }

    private getGemRangeInput31MaxValue__SynchronizedResult: number = undefined;
    public getGemRangeInput31MaxValue__synchronized(): number {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput31MaxValue__SynchronizedResult === undefined) {
            this.getGemRangeInput31MaxValue__SynchronizedResult = null;
            this.getGemRangeInput31MaxValue__update();
        }
        return this.getGemRangeInput31MaxValue__SynchronizedResult;
    }

    public getGemRangeInput31MaxValue__update(): void {
        
        Promise.resolve(this.getGemRangeInput31MaxValue(
            this.createDomainObserverRegisterFunction('getGemRangeInput31MaxValue__update' + this.computeHash([]), () => this.getGemRangeInput31MaxValue__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput31MaxValue__update' + this.computeHash([]), () => this.getGemRangeInput31MaxValue__update())
        )).then(__v => this.getGemRangeInput31MaxValue__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput31MaxValue(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): number {
        if (false){
            return null;
        }
        const val_$: number = 10;
        return val_$;
    }

    private getGemRangeInput31Step__SynchronizedResult: number = undefined;
    public getGemRangeInput31Step__synchronized(): number {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput31Step__SynchronizedResult === undefined) {
            this.getGemRangeInput31Step__SynchronizedResult = null;
            this.getGemRangeInput31Step__update();
        }
        return this.getGemRangeInput31Step__SynchronizedResult;
    }

    public getGemRangeInput31Step__update(): void {
        
        Promise.resolve(this.getGemRangeInput31Step(
            this.createDomainObserverRegisterFunction('getGemRangeInput31Step__update' + this.computeHash([]), () => this.getGemRangeInput31Step__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput31Step__update' + this.computeHash([]), () => this.getGemRangeInput31Step__update())
        )).then(__v => this.getGemRangeInput31Step__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput31Step(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): number {
        if (false){
            return null;
        }
        const val_$: number = 1;
        return val_$;
    }

    private getGemRangeInput31Size__SynchronizedResult: string = undefined;
    public getGemRangeInput31Size__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput31Size__SynchronizedResult === undefined) {
            this.getGemRangeInput31Size__SynchronizedResult = null;
            this.getGemRangeInput31Size__update();
        }
        return this.getGemRangeInput31Size__SynchronizedResult;
    }

    public getGemRangeInput31Size__update(): void {
        
        Promise.resolve(this.getGemRangeInput31Size(
            this.createDomainObserverRegisterFunction('getGemRangeInput31Size__update' + this.computeHash([]), () => this.getGemRangeInput31Size__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput31Size__update' + this.computeHash([]), () => this.getGemRangeInput31Size__update())
        )).then(__v => this.getGemRangeInput31Size__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput31Size(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "280px";
        return val_$;
    }

    private getGemColumn29RowGap__SynchronizedResult: string = undefined;
    public getGemColumn29RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn29RowGap__SynchronizedResult === undefined) {
            this.getGemColumn29RowGap__SynchronizedResult = null;
            this.getGemColumn29RowGap__update();
        }
        return this.getGemColumn29RowGap__SynchronizedResult;
    }

    public getGemColumn29RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn29RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn29RowGap__update' + this.computeHash([]), () => this.getGemColumn29RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn29RowGap__update' + this.computeHash([]), () => this.getGemColumn29RowGap__update())
        )).then(__v => this.getGemColumn29RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn29RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "8px";
        return val_$;
    }

    private getGemText33Value__SynchronizedResult: string = undefined;
    public getGemText33Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText33Value__SynchronizedResult === undefined) {
            this.getGemText33Value__SynchronizedResult = null;
            this.getGemText33Value__update();
        }
        return this.getGemText33Value__SynchronizedResult;
    }

    public getGemText33Value__update(): void {
        
        Promise.resolve(this.getGemText33Value(
            this.createDomainObserverRegisterFunction('getGemText33Value__update' + this.computeHash([]), () => this.getGemText33Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText33Value__update' + this.computeHash([]), () => this.getGemText33Value__update())
        )).then(__v => this.getGemText33Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText33Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Packet Interval";
        return val_$;
    }

    private getGemText33Weight__SynchronizedResult: string = undefined;
    public getGemText33Weight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText33Weight__SynchronizedResult === undefined) {
            this.getGemText33Weight__SynchronizedResult = null;
            this.getGemText33Weight__update();
        }
        return this.getGemText33Weight__SynchronizedResult;
    }

    public getGemText33Weight__update(): void {
        
        Promise.resolve(this.getGemText33Weight(
            this.createDomainObserverRegisterFunction('getGemText33Weight__update' + this.computeHash([]), () => this.getGemText33Weight__update()),
            this.createStateVarObserverRegisterFunction('getGemText33Weight__update' + this.computeHash([]), () => this.getGemText33Weight__update())
        )).then(__v => this.getGemText33Weight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText33Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemRangeInput34Id__SynchronizedResult: string = undefined;
    public getGemRangeInput34Id__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput34Id__SynchronizedResult === undefined) {
            this.getGemRangeInput34Id__SynchronizedResult = null;
            this.getGemRangeInput34Id__update();
        }
        return this.getGemRangeInput34Id__SynchronizedResult;
    }

    public getGemRangeInput34Id__update(): void {
        
        Promise.resolve(this.getGemRangeInput34Id(
            this.createDomainObserverRegisterFunction('getGemRangeInput34Id__update' + this.computeHash([]), () => this.getGemRangeInput34Id__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput34Id__update' + this.computeHash([]), () => this.getGemRangeInput34Id__update())
        )).then(__v => this.getGemRangeInput34Id__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput34Id(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "packetInterval";
        return val_$;
    }

    private getGemRangeInput34LabelText__SynchronizedResult: string = undefined;
    public getGemRangeInput34LabelText__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput34LabelText__SynchronizedResult === undefined) {
            this.getGemRangeInput34LabelText__SynchronizedResult = null;
            this.getGemRangeInput34LabelText__update();
        }
        return this.getGemRangeInput34LabelText__SynchronizedResult;
    }

    public getGemRangeInput34LabelText__update(): void {
        
        Promise.resolve(this.getGemRangeInput34LabelText(
            this.createDomainObserverRegisterFunction('getGemRangeInput34LabelText__update' + this.computeHash([]), () => this.getGemRangeInput34LabelText__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput34LabelText__update' + this.computeHash([]), () => this.getGemRangeInput34LabelText__update())
        )).then(__v => this.getGemRangeInput34LabelText__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput34LabelText(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Interval (seconds)";
        return val_$;
    }

    private getGemRangeInput34Vertical__SynchronizedResult: boolean = undefined;
    public getGemRangeInput34Vertical__synchronized(): boolean {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput34Vertical__SynchronizedResult === undefined) {
            this.getGemRangeInput34Vertical__SynchronizedResult = null;
            this.getGemRangeInput34Vertical__update();
        }
        return this.getGemRangeInput34Vertical__SynchronizedResult;
    }

    public getGemRangeInput34Vertical__update(): void {
        
        Promise.resolve(this.getGemRangeInput34Vertical(
            this.createDomainObserverRegisterFunction('getGemRangeInput34Vertical__update' + this.computeHash([]), () => this.getGemRangeInput34Vertical__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput34Vertical__update' + this.computeHash([]), () => this.getGemRangeInput34Vertical__update())
        )).then(__v => this.getGemRangeInput34Vertical__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput34Vertical(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): boolean {
        if (false){
            return null;
        }
        const val_$: boolean = false;
        return val_$;
    }

    private getGemRangeInput34MinValue__SynchronizedResult: number = undefined;
    public getGemRangeInput34MinValue__synchronized(): number {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput34MinValue__SynchronizedResult === undefined) {
            this.getGemRangeInput34MinValue__SynchronizedResult = null;
            this.getGemRangeInput34MinValue__update();
        }
        return this.getGemRangeInput34MinValue__SynchronizedResult;
    }

    public getGemRangeInput34MinValue__update(): void {
        
        Promise.resolve(this.getGemRangeInput34MinValue(
            this.createDomainObserverRegisterFunction('getGemRangeInput34MinValue__update' + this.computeHash([]), () => this.getGemRangeInput34MinValue__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput34MinValue__update' + this.computeHash([]), () => this.getGemRangeInput34MinValue__update())
        )).then(__v => this.getGemRangeInput34MinValue__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput34MinValue(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): number {
        if (false){
            return null;
        }
        const val_$: number = 1;
        return val_$;
    }

    private getGemRangeInput34MaxValue__SynchronizedResult: number = undefined;
    public getGemRangeInput34MaxValue__synchronized(): number {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput34MaxValue__SynchronizedResult === undefined) {
            this.getGemRangeInput34MaxValue__SynchronizedResult = null;
            this.getGemRangeInput34MaxValue__update();
        }
        return this.getGemRangeInput34MaxValue__SynchronizedResult;
    }

    public getGemRangeInput34MaxValue__update(): void {
        
        Promise.resolve(this.getGemRangeInput34MaxValue(
            this.createDomainObserverRegisterFunction('getGemRangeInput34MaxValue__update' + this.computeHash([]), () => this.getGemRangeInput34MaxValue__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput34MaxValue__update' + this.computeHash([]), () => this.getGemRangeInput34MaxValue__update())
        )).then(__v => this.getGemRangeInput34MaxValue__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput34MaxValue(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): number {
        if (false){
            return null;
        }
        const val_$: number = 60;
        return val_$;
    }

    private getGemRangeInput34Step__SynchronizedResult: number = undefined;
    public getGemRangeInput34Step__synchronized(): number {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput34Step__SynchronizedResult === undefined) {
            this.getGemRangeInput34Step__SynchronizedResult = null;
            this.getGemRangeInput34Step__update();
        }
        return this.getGemRangeInput34Step__SynchronizedResult;
    }

    public getGemRangeInput34Step__update(): void {
        
        Promise.resolve(this.getGemRangeInput34Step(
            this.createDomainObserverRegisterFunction('getGemRangeInput34Step__update' + this.computeHash([]), () => this.getGemRangeInput34Step__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput34Step__update' + this.computeHash([]), () => this.getGemRangeInput34Step__update())
        )).then(__v => this.getGemRangeInput34Step__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput34Step(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): number {
        if (false){
            return null;
        }
        const val_$: number = 1;
        return val_$;
    }

    private getGemRangeInput34Size__SynchronizedResult: string = undefined;
    public getGemRangeInput34Size__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput34Size__SynchronizedResult === undefined) {
            this.getGemRangeInput34Size__SynchronizedResult = null;
            this.getGemRangeInput34Size__update();
        }
        return this.getGemRangeInput34Size__SynchronizedResult;
    }

    public getGemRangeInput34Size__update(): void {
        
        Promise.resolve(this.getGemRangeInput34Size(
            this.createDomainObserverRegisterFunction('getGemRangeInput34Size__update' + this.computeHash([]), () => this.getGemRangeInput34Size__update()),
            this.createStateVarObserverRegisterFunction('getGemRangeInput34Size__update' + this.computeHash([]), () => this.getGemRangeInput34Size__update())
        )).then(__v => this.getGemRangeInput34Size__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRangeInput34Size(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "280px";
        return val_$;
    }

    private getGemColumn32RowGap__SynchronizedResult: string = undefined;
    public getGemColumn32RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn32RowGap__SynchronizedResult === undefined) {
            this.getGemColumn32RowGap__SynchronizedResult = null;
            this.getGemColumn32RowGap__update();
        }
        return this.getGemColumn32RowGap__SynchronizedResult;
    }

    public getGemColumn32RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn32RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn32RowGap__update' + this.computeHash([]), () => this.getGemColumn32RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn32RowGap__update' + this.computeHash([]), () => this.getGemColumn32RowGap__update())
        )).then(__v => this.getGemColumn32RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn32RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "8px";
        return val_$;
    }

    private getGemColumn16RowGap__SynchronizedResult: string = undefined;
    public getGemColumn16RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn16RowGap__SynchronizedResult === undefined) {
            this.getGemColumn16RowGap__SynchronizedResult = null;
            this.getGemColumn16RowGap__update();
        }
        return this.getGemColumn16RowGap__SynchronizedResult;
    }

    public getGemColumn16RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn16RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn16RowGap__update' + this.computeHash([]), () => this.getGemColumn16RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn16RowGap__update' + this.computeHash([]), () => this.getGemColumn16RowGap__update())
        )).then(__v => this.getGemColumn16RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn16RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "16px";
        return val_$;
    }

    private getFactoryCardTitle__SynchronizedResult: string = undefined;
    public getFactoryCardTitle__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getFactoryCardTitle__SynchronizedResult === undefined) {
            this.getFactoryCardTitle__SynchronizedResult = null;
            this.getFactoryCardTitle__update();
        }
        return this.getFactoryCardTitle__SynchronizedResult;
    }

    public getFactoryCardTitle__update(): void {
        
        Promise.resolve(this.getFactoryCardTitle(
            this.createDomainObserverRegisterFunction('getFactoryCardTitle__update' + this.computeHash([]), () => this.getFactoryCardTitle__update()),
            this.createStateVarObserverRegisterFunction('getFactoryCardTitle__update' + this.computeHash([]), () => this.getFactoryCardTitle__update())
        )).then(__v => this.getFactoryCardTitle__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getFactoryCardTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Factory Layout";
        return val_$;
    }

    private getGemText38Value__SynchronizedResult: string = undefined;
    public getGemText38Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText38Value__SynchronizedResult === undefined) {
            this.getGemText38Value__SynchronizedResult = null;
            this.getGemText38Value__update();
        }
        return this.getGemText38Value__SynchronizedResult;
    }

    public getGemText38Value__update(): void {
        
        Promise.resolve(this.getGemText38Value(
            this.createDomainObserverRegisterFunction('getGemText38Value__update' + this.computeHash([]), () => this.getGemText38Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText38Value__update' + this.computeHash([]), () => this.getGemText38Value__update())
        )).then(__v => this.getGemText38Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText38Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Name";
        return val_$;
    }

    private getSelectedStationName__SynchronizedResult: string = undefined;
    public getSelectedStationName__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedStationName__SynchronizedResult === undefined) {
            this.getSelectedStationName__SynchronizedResult = null;
            this.getSelectedStationName__update();
        }
        return this.getSelectedStationName__SynchronizedResult;
    }

    public getSelectedStationName__update(): void {
        
        Promise.resolve(this.getSelectedStationName(
            this.createDomainObserverRegisterFunction('getSelectedStationName__update' + this.computeHash([]), () => this.getSelectedStationName__update()),
            this.createStateVarObserverRegisterFunction('getSelectedStationName__update' + this.computeHash([]), () => this.getSelectedStationName__update())
        )).then(__v => this.getSelectedStationName__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSelectedStationName(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getGemText39Value__SynchronizedResult: string = undefined;
    public getGemText39Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText39Value__SynchronizedResult === undefined) {
            this.getGemText39Value__SynchronizedResult = null;
            this.getGemText39Value__update();
        }
        return this.getGemText39Value__SynchronizedResult;
    }

    public getGemText39Value__update(): void {
        
        Promise.resolve(this.getGemText39Value(
            this.createDomainObserverRegisterFunction('getGemText39Value__update' + this.computeHash([]), () => this.getGemText39Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText39Value__update' + this.computeHash([]), () => this.getGemText39Value__update())
        )).then(__v => this.getGemText39Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemText39Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getSelectedStationName(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText39Weight__SynchronizedResult: string = undefined;
    public getGemText39Weight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText39Weight__SynchronizedResult === undefined) {
            this.getGemText39Weight__SynchronizedResult = null;
            this.getGemText39Weight__update();
        }
        return this.getGemText39Weight__SynchronizedResult;
    }

    public getGemText39Weight__update(): void {
        
        Promise.resolve(this.getGemText39Weight(
            this.createDomainObserverRegisterFunction('getGemText39Weight__update' + this.computeHash([]), () => this.getGemText39Weight__update()),
            this.createStateVarObserverRegisterFunction('getGemText39Weight__update' + this.computeHash([]), () => this.getGemText39Weight__update())
        )).then(__v => this.getGemText39Weight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText39Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText40Value__SynchronizedResult: string = undefined;
    public getGemText40Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText40Value__SynchronizedResult === undefined) {
            this.getGemText40Value__SynchronizedResult = null;
            this.getGemText40Value__update();
        }
        return this.getGemText40Value__SynchronizedResult;
    }

    public getGemText40Value__update(): void {
        
        Promise.resolve(this.getGemText40Value(
            this.createDomainObserverRegisterFunction('getGemText40Value__update' + this.computeHash([]), () => this.getGemText40Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText40Value__update' + this.computeHash([]), () => this.getGemText40Value__update())
        )).then(__v => this.getGemText40Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText40Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Type";
        return val_$;
    }

    private getSelectedStationType__SynchronizedResult: string = undefined;
    public getSelectedStationType__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedStationType__SynchronizedResult === undefined) {
            this.getSelectedStationType__SynchronizedResult = null;
            this.getSelectedStationType__update();
        }
        return this.getSelectedStationType__SynchronizedResult;
    }

    public getSelectedStationType__update(): void {
        
        Promise.resolve(this.getSelectedStationType(
            this.createDomainObserverRegisterFunction('getSelectedStationType__update' + this.computeHash([]), () => this.getSelectedStationType__update()),
            this.createStateVarObserverRegisterFunction('getSelectedStationType__update' + this.computeHash([]), () => this.getSelectedStationType__update())
        )).then(__v => this.getSelectedStationType__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSelectedStationType(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getGemText41Value__SynchronizedResult: string = undefined;
    public getGemText41Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText41Value__SynchronizedResult === undefined) {
            this.getGemText41Value__SynchronizedResult = null;
            this.getGemText41Value__update();
        }
        return this.getGemText41Value__SynchronizedResult;
    }

    public getGemText41Value__update(): void {
        
        Promise.resolve(this.getGemText41Value(
            this.createDomainObserverRegisterFunction('getGemText41Value__update' + this.computeHash([]), () => this.getGemText41Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText41Value__update' + this.computeHash([]), () => this.getGemText41Value__update())
        )).then(__v => this.getGemText41Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemText41Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getSelectedStationType(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText41Weight__SynchronizedResult: string = undefined;
    public getGemText41Weight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText41Weight__SynchronizedResult === undefined) {
            this.getGemText41Weight__SynchronizedResult = null;
            this.getGemText41Weight__update();
        }
        return this.getGemText41Weight__SynchronizedResult;
    }

    public getGemText41Weight__update(): void {
        
        Promise.resolve(this.getGemText41Weight(
            this.createDomainObserverRegisterFunction('getGemText41Weight__update' + this.computeHash([]), () => this.getGemText41Weight__update()),
            this.createStateVarObserverRegisterFunction('getGemText41Weight__update' + this.computeHash([]), () => this.getGemText41Weight__update())
        )).then(__v => this.getGemText41Weight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText41Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText42Value__SynchronizedResult: string = undefined;
    public getGemText42Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText42Value__SynchronizedResult === undefined) {
            this.getGemText42Value__SynchronizedResult = null;
            this.getGemText42Value__update();
        }
        return this.getGemText42Value__SynchronizedResult;
    }

    public getGemText42Value__update(): void {
        
        Promise.resolve(this.getGemText42Value(
            this.createDomainObserverRegisterFunction('getGemText42Value__update' + this.computeHash([]), () => this.getGemText42Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText42Value__update' + this.computeHash([]), () => this.getGemText42Value__update())
        )).then(__v => this.getGemText42Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText42Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Status";
        return val_$;
    }

    private getSelectedStationState__SynchronizedResult: string = undefined;
    public getSelectedStationState__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedStationState__SynchronizedResult === undefined) {
            this.getSelectedStationState__SynchronizedResult = null;
            this.getSelectedStationState__update();
        }
        return this.getSelectedStationState__SynchronizedResult;
    }

    public getSelectedStationState__update(): void {
        
        Promise.resolve(this.getSelectedStationState(
            this.createDomainObserverRegisterFunction('getSelectedStationState__update' + this.computeHash([]), () => this.getSelectedStationState__update()),
            this.createStateVarObserverRegisterFunction('getSelectedStationState__update' + this.computeHash([]), () => this.getSelectedStationState__update())
        )).then(__v => this.getSelectedStationState__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSelectedStationState(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getSelectedStateLabelValue__SynchronizedResult: string = undefined;
    public getSelectedStateLabelValue__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedStateLabelValue__SynchronizedResult === undefined) {
            this.getSelectedStateLabelValue__SynchronizedResult = null;
            this.getSelectedStateLabelValue__update();
        }
        return this.getSelectedStateLabelValue__SynchronizedResult;
    }

    public getSelectedStateLabelValue__update(): void {
        
        Promise.resolve(this.getSelectedStateLabelValue(
            this.createDomainObserverRegisterFunction('getSelectedStateLabelValue__update' + this.computeHash([]), () => this.getSelectedStateLabelValue__update()),
            this.createStateVarObserverRegisterFunction('getSelectedStateLabelValue__update' + this.computeHash([]), () => this.getSelectedStateLabelValue__update())
        )).then(__v => this.getSelectedStateLabelValue__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSelectedStateLabelValue(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getSelectedStationState(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText43Value__SynchronizedResult: string = undefined;
    public getGemText43Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText43Value__SynchronizedResult === undefined) {
            this.getGemText43Value__SynchronizedResult = null;
            this.getGemText43Value__update();
        }
        return this.getGemText43Value__SynchronizedResult;
    }

    public getGemText43Value__update(): void {
        
        Promise.resolve(this.getGemText43Value(
            this.createDomainObserverRegisterFunction('getGemText43Value__update' + this.computeHash([]), () => this.getGemText43Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText43Value__update' + this.computeHash([]), () => this.getGemText43Value__update())
        )).then(__v => this.getGemText43Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText43Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Signals";
        return val_$;
    }

    private getSelectedSignalCount__SynchronizedResult: string = undefined;
    public getSelectedSignalCount__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedSignalCount__SynchronizedResult === undefined) {
            this.getSelectedSignalCount__SynchronizedResult = null;
            this.getSelectedSignalCount__update();
        }
        return this.getSelectedSignalCount__SynchronizedResult;
    }

    public getSelectedSignalCount__update(): void {
        
        Promise.resolve(this.getSelectedSignalCount(
            this.createDomainObserverRegisterFunction('getSelectedSignalCount__update' + this.computeHash([]), () => this.getSelectedSignalCount__update()),
            this.createStateVarObserverRegisterFunction('getSelectedSignalCount__update' + this.computeHash([]), () => this.getSelectedSignalCount__update())
        )).then(__v => this.getSelectedSignalCount__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSelectedSignalCount(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getGemText44Value__SynchronizedResult: string = undefined;
    public getGemText44Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText44Value__SynchronizedResult === undefined) {
            this.getGemText44Value__SynchronizedResult = null;
            this.getGemText44Value__update();
        }
        return this.getGemText44Value__SynchronizedResult;
    }

    public getGemText44Value__update(): void {
        
        Promise.resolve(this.getGemText44Value(
            this.createDomainObserverRegisterFunction('getGemText44Value__update' + this.computeHash([]), () => this.getGemText44Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText44Value__update' + this.computeHash([]), () => this.getGemText44Value__update())
        )).then(__v => this.getGemText44Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemText44Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getSelectedSignalCount(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText44Weight__SynchronizedResult: string = undefined;
    public getGemText44Weight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText44Weight__SynchronizedResult === undefined) {
            this.getGemText44Weight__SynchronizedResult = null;
            this.getGemText44Weight__update();
        }
        return this.getGemText44Weight__SynchronizedResult;
    }

    public getGemText44Weight__update(): void {
        
        Promise.resolve(this.getGemText44Weight(
            this.createDomainObserverRegisterFunction('getGemText44Weight__update' + this.computeHash([]), () => this.getGemText44Weight__update()),
            this.createStateVarObserverRegisterFunction('getGemText44Weight__update' + this.computeHash([]), () => this.getGemText44Weight__update())
        )).then(__v => this.getGemText44Weight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText44Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText45Value__SynchronizedResult: string = undefined;
    public getGemText45Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText45Value__SynchronizedResult === undefined) {
            this.getGemText45Value__SynchronizedResult = null;
            this.getGemText45Value__update();
        }
        return this.getGemText45Value__SynchronizedResult;
    }

    public getGemText45Value__update(): void {
        
        Promise.resolve(this.getGemText45Value(
            this.createDomainObserverRegisterFunction('getGemText45Value__update' + this.computeHash([]), () => this.getGemText45Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText45Value__update' + this.computeHash([]), () => this.getGemText45Value__update())
        )).then(__v => this.getGemText45Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText45Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Health";
        return val_$;
    }

    private getSelectedStationHealth__SynchronizedResult: string = undefined;
    public getSelectedStationHealth__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedStationHealth__SynchronizedResult === undefined) {
            this.getSelectedStationHealth__SynchronizedResult = null;
            this.getSelectedStationHealth__update();
        }
        return this.getSelectedStationHealth__SynchronizedResult;
    }

    public getSelectedStationHealth__update(): void {
        
        Promise.resolve(this.getSelectedStationHealth(
            this.createDomainObserverRegisterFunction('getSelectedStationHealth__update' + this.computeHash([]), () => this.getSelectedStationHealth__update()),
            this.createStateVarObserverRegisterFunction('getSelectedStationHealth__update' + this.computeHash([]), () => this.getSelectedStationHealth__update())
        )).then(__v => this.getSelectedStationHealth__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSelectedStationHealth(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getGemText46Value__SynchronizedResult: string = undefined;
    public getGemText46Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText46Value__SynchronizedResult === undefined) {
            this.getGemText46Value__SynchronizedResult = null;
            this.getGemText46Value__update();
        }
        return this.getGemText46Value__SynchronizedResult;
    }

    public getGemText46Value__update(): void {
        
        Promise.resolve(this.getGemText46Value(
            this.createDomainObserverRegisterFunction('getGemText46Value__update' + this.computeHash([]), () => this.getGemText46Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText46Value__update' + this.computeHash([]), () => this.getGemText46Value__update())
        )).then(__v => this.getGemText46Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemText46Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getSelectedStationHealth(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText46Weight__SynchronizedResult: string = undefined;
    public getGemText46Weight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText46Weight__SynchronizedResult === undefined) {
            this.getGemText46Weight__SynchronizedResult = null;
            this.getGemText46Weight__update();
        }
        return this.getGemText46Weight__SynchronizedResult;
    }

    public getGemText46Weight__update(): void {
        
        Promise.resolve(this.getGemText46Weight(
            this.createDomainObserverRegisterFunction('getGemText46Weight__update' + this.computeHash([]), () => this.getGemText46Weight__update()),
            this.createStateVarObserverRegisterFunction('getGemText46Weight__update' + this.computeHash([]), () => this.getGemText46Weight__update())
        )).then(__v => this.getGemText46Weight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText46Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText47Value__SynchronizedResult: string = undefined;
    public getGemText47Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText47Value__SynchronizedResult === undefined) {
            this.getGemText47Value__SynchronizedResult = null;
            this.getGemText47Value__update();
        }
        return this.getGemText47Value__SynchronizedResult;
    }

    public getGemText47Value__update(): void {
        
        Promise.resolve(this.getGemText47Value(
            this.createDomainObserverRegisterFunction('getGemText47Value__update' + this.computeHash([]), () => this.getGemText47Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText47Value__update' + this.computeHash([]), () => this.getGemText47Value__update())
        )).then(__v => this.getGemText47Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText47Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Wear probability";
        return val_$;
    }

    private getSelectedWearProb__SynchronizedResult: string = undefined;
    public getSelectedWearProb__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedWearProb__SynchronizedResult === undefined) {
            this.getSelectedWearProb__SynchronizedResult = null;
            this.getSelectedWearProb__update();
        }
        return this.getSelectedWearProb__SynchronizedResult;
    }

    public getSelectedWearProb__update(): void {
        
        Promise.resolve(this.getSelectedWearProb(
            this.createDomainObserverRegisterFunction('getSelectedWearProb__update' + this.computeHash([]), () => this.getSelectedWearProb__update()),
            this.createStateVarObserverRegisterFunction('getSelectedWearProb__update' + this.computeHash([]), () => this.getSelectedWearProb__update())
        )).then(__v => this.getSelectedWearProb__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSelectedWearProb(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getGemText48Value__SynchronizedResult: string = undefined;
    public getGemText48Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText48Value__SynchronizedResult === undefined) {
            this.getGemText48Value__SynchronizedResult = null;
            this.getGemText48Value__update();
        }
        return this.getGemText48Value__SynchronizedResult;
    }

    public getGemText48Value__update(): void {
        
        Promise.resolve(this.getGemText48Value(
            this.createDomainObserverRegisterFunction('getGemText48Value__update' + this.computeHash([]), () => this.getGemText48Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText48Value__update' + this.computeHash([]), () => this.getGemText48Value__update())
        )).then(__v => this.getGemText48Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemText48Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getSelectedWearProb(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText48Weight__SynchronizedResult: string = undefined;
    public getGemText48Weight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText48Weight__SynchronizedResult === undefined) {
            this.getGemText48Weight__SynchronizedResult = null;
            this.getGemText48Weight__update();
        }
        return this.getGemText48Weight__SynchronizedResult;
    }

    public getGemText48Weight__update(): void {
        
        Promise.resolve(this.getGemText48Weight(
            this.createDomainObserverRegisterFunction('getGemText48Weight__update' + this.computeHash([]), () => this.getGemText48Weight__update()),
            this.createStateVarObserverRegisterFunction('getGemText48Weight__update' + this.computeHash([]), () => this.getGemText48Weight__update())
        )).then(__v => this.getGemText48Weight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText48Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText49Value__SynchronizedResult: string = undefined;
    public getGemText49Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText49Value__SynchronizedResult === undefined) {
            this.getGemText49Value__SynchronizedResult = null;
            this.getGemText49Value__update();
        }
        return this.getGemText49Value__SynchronizedResult;
    }

    public getGemText49Value__update(): void {
        
        Promise.resolve(this.getGemText49Value(
            this.createDomainObserverRegisterFunction('getGemText49Value__update' + this.computeHash([]), () => this.getGemText49Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText49Value__update' + this.computeHash([]), () => this.getGemText49Value__update())
        )).then(__v => this.getGemText49Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText49Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Throughput";
        return val_$;
    }

    private getSelectedThroughput__SynchronizedResult: string = undefined;
    public getSelectedThroughput__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedThroughput__SynchronizedResult === undefined) {
            this.getSelectedThroughput__SynchronizedResult = null;
            this.getSelectedThroughput__update();
        }
        return this.getSelectedThroughput__SynchronizedResult;
    }

    public getSelectedThroughput__update(): void {
        
        Promise.resolve(this.getSelectedThroughput(
            this.createDomainObserverRegisterFunction('getSelectedThroughput__update' + this.computeHash([]), () => this.getSelectedThroughput__update()),
            this.createStateVarObserverRegisterFunction('getSelectedThroughput__update' + this.computeHash([]), () => this.getSelectedThroughput__update())
        )).then(__v => this.getSelectedThroughput__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSelectedThroughput(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getGemText50Value__SynchronizedResult: string = undefined;
    public getGemText50Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText50Value__SynchronizedResult === undefined) {
            this.getGemText50Value__SynchronizedResult = null;
            this.getGemText50Value__update();
        }
        return this.getGemText50Value__SynchronizedResult;
    }

    public getGemText50Value__update(): void {
        
        Promise.resolve(this.getGemText50Value(
            this.createDomainObserverRegisterFunction('getGemText50Value__update' + this.computeHash([]), () => this.getGemText50Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText50Value__update' + this.computeHash([]), () => this.getGemText50Value__update())
        )).then(__v => this.getGemText50Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemText50Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getSelectedThroughput(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText50Weight__SynchronizedResult: string = undefined;
    public getGemText50Weight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText50Weight__SynchronizedResult === undefined) {
            this.getGemText50Weight__SynchronizedResult = null;
            this.getGemText50Weight__update();
        }
        return this.getGemText50Weight__SynchronizedResult;
    }

    public getGemText50Weight__update(): void {
        
        Promise.resolve(this.getGemText50Weight(
            this.createDomainObserverRegisterFunction('getGemText50Weight__update' + this.computeHash([]), () => this.getGemText50Weight__update()),
            this.createStateVarObserverRegisterFunction('getGemText50Weight__update' + this.computeHash([]), () => this.getGemText50Weight__update())
        )).then(__v => this.getGemText50Weight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText50Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText51Value__SynchronizedResult: string = undefined;
    public getGemText51Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText51Value__SynchronizedResult === undefined) {
            this.getGemText51Value__SynchronizedResult = null;
            this.getGemText51Value__update();
        }
        return this.getGemText51Value__SynchronizedResult;
    }

    public getGemText51Value__update(): void {
        
        Promise.resolve(this.getGemText51Value(
            this.createDomainObserverRegisterFunction('getGemText51Value__update' + this.computeHash([]), () => this.getGemText51Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText51Value__update' + this.computeHash([]), () => this.getGemText51Value__update())
        )).then(__v => this.getGemText51Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText51Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Recommendation";
        return val_$;
    }

    private getSelectedRecommendation__SynchronizedResult: string = undefined;
    public getSelectedRecommendation__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedRecommendation__SynchronizedResult === undefined) {
            this.getSelectedRecommendation__SynchronizedResult = null;
            this.getSelectedRecommendation__update();
        }
        return this.getSelectedRecommendation__SynchronizedResult;
    }

    public getSelectedRecommendation__update(): void {
        
        Promise.resolve(this.getSelectedRecommendation(
            this.createDomainObserverRegisterFunction('getSelectedRecommendation__update' + this.computeHash([]), () => this.getSelectedRecommendation__update()),
            this.createStateVarObserverRegisterFunction('getSelectedRecommendation__update' + this.computeHash([]), () => this.getSelectedRecommendation__update())
        )).then(__v => this.getSelectedRecommendation__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getSelectedRecommendation(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    private getGemText52Value__SynchronizedResult: string = undefined;
    public getGemText52Value__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText52Value__SynchronizedResult === undefined) {
            this.getGemText52Value__SynchronizedResult = null;
            this.getGemText52Value__update();
        }
        return this.getGemText52Value__SynchronizedResult;
    }

    public getGemText52Value__update(): void {
        
        Promise.resolve(this.getGemText52Value(
            this.createDomainObserverRegisterFunction('getGemText52Value__update' + this.computeHash([]), () => this.getGemText52Value__update()),
            this.createStateVarObserverRegisterFunction('getGemText52Value__update' + this.computeHash([]), () => this.getGemText52Value__update())
        )).then(__v => this.getGemText52Value__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemText52Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getSelectedRecommendation(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText52Weight__SynchronizedResult: string = undefined;
    public getGemText52Weight__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText52Weight__SynchronizedResult === undefined) {
            this.getGemText52Weight__SynchronizedResult = null;
            this.getGemText52Weight__update();
        }
        return this.getGemText52Weight__SynchronizedResult;
    }

    public getGemText52Weight__update(): void {
        
        Promise.resolve(this.getGemText52Weight(
            this.createDomainObserverRegisterFunction('getGemText52Weight__update' + this.computeHash([]), () => this.getGemText52Weight__update()),
            this.createStateVarObserverRegisterFunction('getGemText52Weight__update' + this.computeHash([]), () => this.getGemText52Weight__update())
        )).then(__v => this.getGemText52Weight__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemText52Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private closeDetail__SynchronizedResult: (p1: void) => void = undefined;
    public closeDetail__synchronized(): (p1: void) => void {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.closeDetail__SynchronizedResult === undefined) {
            this.closeDetail__SynchronizedResult = null;
            this.closeDetail__update();
        }
        return this.closeDetail__SynchronizedResult;
    }

    public closeDetail__update(): void {
        
        Promise.resolve(this.closeDetail(
            this.createDomainObserverRegisterFunction('closeDetail__update' + this.computeHash([]), () => this.closeDetail__update()),
            this.createStateVarObserverRegisterFunction('closeDetail__update' + this.computeHash([]), () => this.closeDetail__update())
        )).then(__v => this.closeDetail__SynchronizedResult = __v === undefined ? null : __v);
    }

    public closeDetail(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    private getGemButton53Label__SynchronizedResult: string = undefined;
    public getGemButton53Label__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemButton53Label__SynchronizedResult === undefined) {
            this.getGemButton53Label__SynchronizedResult = null;
            this.getGemButton53Label__update();
        }
        return this.getGemButton53Label__SynchronizedResult;
    }

    public getGemButton53Label__update(): void {
        
        Promise.resolve(this.getGemButton53Label(
            this.createDomainObserverRegisterFunction('getGemButton53Label__update' + this.computeHash([]), () => this.getGemButton53Label__update()),
            this.createStateVarObserverRegisterFunction('getGemButton53Label__update' + this.computeHash([]), () => this.getGemButton53Label__update())
        )).then(__v => this.getGemButton53Label__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemButton53Label(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Close";
        return val_$;
    }

    public gemButton53LeftClick(event_$: void) {
        if (this.closeDetail() != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))(this.closeDetail());
        }
    }

    private getGemColumn36RowGap__SynchronizedResult: string = undefined;
    public getGemColumn36RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn36RowGap__SynchronizedResult === undefined) {
            this.getGemColumn36RowGap__SynchronizedResult = null;
            this.getGemColumn36RowGap__update();
        }
        return this.getGemColumn36RowGap__SynchronizedResult;
    }

    public getGemColumn36RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn36RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn36RowGap__update' + this.computeHash([]), () => this.getGemColumn36RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn36RowGap__update' + this.computeHash([]), () => this.getGemColumn36RowGap__update())
        )).then(__v => this.getGemColumn36RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn36RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "12px";
        return val_$;
    }

    private getSelectedPanelTitle__SynchronizedResult: string = undefined;
    public getSelectedPanelTitle__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSelectedPanelTitle__SynchronizedResult === undefined) {
            this.getSelectedPanelTitle__SynchronizedResult = null;
            this.getSelectedPanelTitle__update();
        }
        return this.getSelectedPanelTitle__SynchronizedResult;
    }

    public getSelectedPanelTitle__update(): void {
        
        Promise.resolve(this.getSelectedPanelTitle(
            this.createDomainObserverRegisterFunction('getSelectedPanelTitle__update' + this.computeHash([]), () => this.getSelectedPanelTitle__update()),
            this.createStateVarObserverRegisterFunction('getSelectedPanelTitle__update' + this.computeHash([]), () => this.getSelectedPanelTitle__update())
        )).then(__v => this.getSelectedPanelTitle__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getSelectedPanelTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Selected Station";
        return val_$;
    }

    private getGuard35Condition__SynchronizedResult: boolean = undefined;
    public getGuard35Condition__synchronized(): boolean {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGuard35Condition__SynchronizedResult === undefined) {
            this.getGuard35Condition__SynchronizedResult = null;
            this.getGuard35Condition__update();
        }
        return this.getGuard35Condition__SynchronizedResult;
    }

    public getGuard35Condition__update(): void {
        
        Promise.resolve(this.getGuard35Condition(
            this.createDomainObserverRegisterFunction('getGuard35Condition__update' + this.computeHash([]), () => this.getGuard35Condition__update()),
            this.createStateVarObserverRegisterFunction('getGuard35Condition__update' + this.computeHash([]), () => this.getGuard35Condition__update())
        )).then(__v => this.getGuard35Condition__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGuard35Condition(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): boolean {
        if (false){
            return null;
        }
        return __regObsToStateVar(this.isDetailOpen(__regObsToDomainObj, __regObsToStateVar), "_detailOpen");
    }

    private getGemColumn15RowGap__SynchronizedResult: string = undefined;
    public getGemColumn15RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn15RowGap__SynchronizedResult === undefined) {
            this.getGemColumn15RowGap__SynchronizedResult = null;
            this.getGemColumn15RowGap__update();
        }
        return this.getGemColumn15RowGap__SynchronizedResult;
    }

    public getGemColumn15RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn15RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn15RowGap__update' + this.computeHash([]), () => this.getGemColumn15RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn15RowGap__update' + this.computeHash([]), () => this.getGemColumn15RowGap__update())
        )).then(__v => this.getGemColumn15RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn15RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "16px";
        return val_$;
    }

    private getGemColumn15Width__SynchronizedResult: string = undefined;
    public getGemColumn15Width__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn15Width__SynchronizedResult === undefined) {
            this.getGemColumn15Width__SynchronizedResult = null;
            this.getGemColumn15Width__update();
        }
        return this.getGemColumn15Width__SynchronizedResult;
    }

    public getGemColumn15Width__update(): void {
        
        Promise.resolve(this.getGemColumn15Width(
            this.createDomainObserverRegisterFunction('getGemColumn15Width__update' + this.computeHash([]), () => this.getGemColumn15Width__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn15Width__update' + this.computeHash([]), () => this.getGemColumn15Width__update())
        )).then(__v => this.getGemColumn15Width__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn15Width(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "65%";
        return val_$;
    }

    private getGemText58Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText58Value__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText58Value__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemText58Value__SynchronizedResult.set([station.getGemId()], null);
            this.getGemText58Value__update(station);
        }
        return this.getGemText58Value__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemText58Value__update(station: Station): void {
        
        Promise.resolve(this.getGemText58Value(station,
            this.createDomainObserverRegisterFunction('getGemText58Value__update' + this.computeHash([station]), () => this.getGemText58Value__update(station)),
            this.createStateVarObserverRegisterFunction('getGemText58Value__update' + this.computeHash([station]), () => this.getGemText58Value__update(station))
        )).then(__v => this.getGemText58Value__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText58Value(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        const val_$: string = station.getName();
        return val_$;
    }

    private getGemText58Weight__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText58Weight__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText58Weight__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemText58Weight__SynchronizedResult.set([station.getGemId()], null);
            this.getGemText58Weight__update(station);
        }
        return this.getGemText58Weight__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemText58Weight__update(station: Station): void {
        
        Promise.resolve(this.getGemText58Weight(station,
            this.createDomainObserverRegisterFunction('getGemText58Weight__update' + this.computeHash([station]), () => this.getGemText58Weight__update(station)),
            this.createStateVarObserverRegisterFunction('getGemText58Weight__update' + this.computeHash([station]), () => this.getGemText58Weight__update(station))
        )).then(__v => this.getGemText58Weight__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText58Weight(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemRangeInput59Id__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemRangeInput59Id__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput59Id__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemRangeInput59Id__SynchronizedResult.set([station.getGemId()], null);
            this.getGemRangeInput59Id__update(station);
        }
        return this.getGemRangeInput59Id__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemRangeInput59Id__update(station: Station): void {
        
        Promise.resolve(this.getGemRangeInput59Id(station,
            this.createDomainObserverRegisterFunction('getGemRangeInput59Id__update' + this.computeHash([station]), () => this.getGemRangeInput59Id__update(station)),
            this.createStateVarObserverRegisterFunction('getGemRangeInput59Id__update' + this.computeHash([station]), () => this.getGemRangeInput59Id__update(station))
        )).then(__v => this.getGemRangeInput59Id__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemRangeInput59Id(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        const val_$: string = station.getName();
        return val_$;
    }

    private getGemRangeInput59LabelText__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemRangeInput59LabelText__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput59LabelText__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemRangeInput59LabelText__SynchronizedResult.set([station.getGemId()], null);
            this.getGemRangeInput59LabelText__update(station);
        }
        return this.getGemRangeInput59LabelText__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemRangeInput59LabelText__update(station: Station): void {
        
        Promise.resolve(this.getGemRangeInput59LabelText(station,
            this.createDomainObserverRegisterFunction('getGemRangeInput59LabelText__update' + this.computeHash([station]), () => this.getGemRangeInput59LabelText__update(station)),
            this.createStateVarObserverRegisterFunction('getGemRangeInput59LabelText__update' + this.computeHash([station]), () => this.getGemRangeInput59LabelText__update(station))
        )).then(__v => this.getGemRangeInput59LabelText__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemRangeInput59LabelText(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "Power (%)";
        return val_$;
    }

    private getGemRangeInput59Vertical__SynchronizedResult: ManyKeysMap<any, boolean> = new ManyKeysMap()
    public getGemRangeInput59Vertical__synchronized(station: Station): boolean {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput59Vertical__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemRangeInput59Vertical__SynchronizedResult.set([station.getGemId()], null);
            this.getGemRangeInput59Vertical__update(station);
        }
        return this.getGemRangeInput59Vertical__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemRangeInput59Vertical__update(station: Station): void {
        
        Promise.resolve(this.getGemRangeInput59Vertical(station,
            this.createDomainObserverRegisterFunction('getGemRangeInput59Vertical__update' + this.computeHash([station]), () => this.getGemRangeInput59Vertical__update(station)),
            this.createStateVarObserverRegisterFunction('getGemRangeInput59Vertical__update' + this.computeHash([station]), () => this.getGemRangeInput59Vertical__update(station))
        )).then(__v => this.getGemRangeInput59Vertical__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemRangeInput59Vertical(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): boolean {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: boolean = false;
        return val_$;
    }

    private getGemRangeInput59MinValue__SynchronizedResult: ManyKeysMap<any, number> = new ManyKeysMap()
    public getGemRangeInput59MinValue__synchronized(station: Station): number {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput59MinValue__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemRangeInput59MinValue__SynchronizedResult.set([station.getGemId()], null);
            this.getGemRangeInput59MinValue__update(station);
        }
        return this.getGemRangeInput59MinValue__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemRangeInput59MinValue__update(station: Station): void {
        
        Promise.resolve(this.getGemRangeInput59MinValue(station,
            this.createDomainObserverRegisterFunction('getGemRangeInput59MinValue__update' + this.computeHash([station]), () => this.getGemRangeInput59MinValue__update(station)),
            this.createStateVarObserverRegisterFunction('getGemRangeInput59MinValue__update' + this.computeHash([station]), () => this.getGemRangeInput59MinValue__update(station))
        )).then(__v => this.getGemRangeInput59MinValue__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemRangeInput59MinValue(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): number {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: number = 0;
        return val_$;
    }

    private getGemRangeInput59MaxValue__SynchronizedResult: ManyKeysMap<any, number> = new ManyKeysMap()
    public getGemRangeInput59MaxValue__synchronized(station: Station): number {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput59MaxValue__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemRangeInput59MaxValue__SynchronizedResult.set([station.getGemId()], null);
            this.getGemRangeInput59MaxValue__update(station);
        }
        return this.getGemRangeInput59MaxValue__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemRangeInput59MaxValue__update(station: Station): void {
        
        Promise.resolve(this.getGemRangeInput59MaxValue(station,
            this.createDomainObserverRegisterFunction('getGemRangeInput59MaxValue__update' + this.computeHash([station]), () => this.getGemRangeInput59MaxValue__update(station)),
            this.createStateVarObserverRegisterFunction('getGemRangeInput59MaxValue__update' + this.computeHash([station]), () => this.getGemRangeInput59MaxValue__update(station))
        )).then(__v => this.getGemRangeInput59MaxValue__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemRangeInput59MaxValue(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): number {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: number = 100;
        return val_$;
    }

    private getGemRangeInput59Step__SynchronizedResult: ManyKeysMap<any, number> = new ManyKeysMap()
    public getGemRangeInput59Step__synchronized(station: Station): number {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput59Step__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemRangeInput59Step__SynchronizedResult.set([station.getGemId()], null);
            this.getGemRangeInput59Step__update(station);
        }
        return this.getGemRangeInput59Step__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemRangeInput59Step__update(station: Station): void {
        
        Promise.resolve(this.getGemRangeInput59Step(station,
            this.createDomainObserverRegisterFunction('getGemRangeInput59Step__update' + this.computeHash([station]), () => this.getGemRangeInput59Step__update(station)),
            this.createStateVarObserverRegisterFunction('getGemRangeInput59Step__update' + this.computeHash([station]), () => this.getGemRangeInput59Step__update(station))
        )).then(__v => this.getGemRangeInput59Step__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemRangeInput59Step(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): number {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: number = 5;
        return val_$;
    }

    private getGemRangeInput59Size__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemRangeInput59Size__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRangeInput59Size__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemRangeInput59Size__SynchronizedResult.set([station.getGemId()], null);
            this.getGemRangeInput59Size__update(station);
        }
        return this.getGemRangeInput59Size__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemRangeInput59Size__update(station: Station): void {
        
        Promise.resolve(this.getGemRangeInput59Size(station,
            this.createDomainObserverRegisterFunction('getGemRangeInput59Size__update' + this.computeHash([station]), () => this.getGemRangeInput59Size__update(station)),
            this.createStateVarObserverRegisterFunction('getGemRangeInput59Size__update' + this.computeHash([station]), () => this.getGemRangeInput59Size__update(station))
        )).then(__v => this.getGemRangeInput59Size__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemRangeInput59Size(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "220px";
        return val_$;
    }

    private getGemColumn57RowGap__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemColumn57RowGap__synchronized(station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn57RowGap__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getGemColumn57RowGap__SynchronizedResult.set([station.getGemId()], null);
            this.getGemColumn57RowGap__update(station);
        }
        return this.getGemColumn57RowGap__SynchronizedResult.get([station.getGemId()]);
    }

    public getGemColumn57RowGap__update(station: Station): void {
        
        Promise.resolve(this.getGemColumn57RowGap(station,
            this.createDomainObserverRegisterFunction('getGemColumn57RowGap__update' + this.computeHash([station]), () => this.getGemColumn57RowGap__update(station)),
            this.createStateVarObserverRegisterFunction('getGemColumn57RowGap__update' + this.computeHash([station]), () => this.getGemColumn57RowGap__update(station))
        )).then(__v => this.getGemColumn57RowGap__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemColumn57RowGap(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(station);
        if (false){
            return null;
        }
        const val_$: string = "4px";
        return val_$;
    }

    private getIt56Iterable__SynchronizedResult: Array<Station> = undefined;
    public getIt56Iterable__synchronized(): Array<Station> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getIt56Iterable__SynchronizedResult === undefined) {
            this.getIt56Iterable__SynchronizedResult = null;
            this.getIt56Iterable__update();
        }
        return this.getIt56Iterable__SynchronizedResult;
    }

    public getIt56Iterable__update(): void {
        
        Promise.resolve(this.getIt56Iterable(
            this.createDomainObserverRegisterFunction('getIt56Iterable__update' + this.computeHash([]), () => this.getIt56Iterable__update()),
            this.createStateVarObserverRegisterFunction('getIt56Iterable__update' + this.computeHash([]), () => this.getIt56Iterable__update())
        )).then(__v => this.getIt56Iterable__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getIt56Iterable(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Station>> {
        if (false){
            return null;
        }
        return (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
    }

    private getGemColumn55RowGap__SynchronizedResult: string = undefined;
    public getGemColumn55RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn55RowGap__SynchronizedResult === undefined) {
            this.getGemColumn55RowGap__SynchronizedResult = null;
            this.getGemColumn55RowGap__update();
        }
        return this.getGemColumn55RowGap__SynchronizedResult;
    }

    public getGemColumn55RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn55RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn55RowGap__update' + this.computeHash([]), () => this.getGemColumn55RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn55RowGap__update' + this.computeHash([]), () => this.getGemColumn55RowGap__update())
        )).then(__v => this.getGemColumn55RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn55RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "20px";
        return val_$;
    }

    private getPowerCardTitle__SynchronizedResult: string = undefined;
    public getPowerCardTitle__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getPowerCardTitle__SynchronizedResult === undefined) {
            this.getPowerCardTitle__SynchronizedResult = null;
            this.getPowerCardTitle__update();
        }
        return this.getPowerCardTitle__SynchronizedResult;
    }

    public getPowerCardTitle__update(): void {
        
        Promise.resolve(this.getPowerCardTitle(
            this.createDomainObserverRegisterFunction('getPowerCardTitle__update' + this.computeHash([]), () => this.getPowerCardTitle__update()),
            this.createStateVarObserverRegisterFunction('getPowerCardTitle__update' + this.computeHash([]), () => this.getPowerCardTitle__update())
        )).then(__v => this.getPowerCardTitle__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getPowerCardTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Machine Power Control";
        return val_$;
    }

    private getGemColumn54Width__SynchronizedResult: string = undefined;
    public getGemColumn54Width__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn54Width__SynchronizedResult === undefined) {
            this.getGemColumn54Width__SynchronizedResult = null;
            this.getGemColumn54Width__update();
        }
        return this.getGemColumn54Width__SynchronizedResult;
    }

    public getGemColumn54Width__update(): void {
        
        Promise.resolve(this.getGemColumn54Width(
            this.createDomainObserverRegisterFunction('getGemColumn54Width__update' + this.computeHash([]), () => this.getGemColumn54Width__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn54Width__update' + this.computeHash([]), () => this.getGemColumn54Width__update())
        )).then(__v => this.getGemColumn54Width__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn54Width(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "35%";
        return val_$;
    }

    private getGemColumn54RowGap__SynchronizedResult: string = undefined;
    public getGemColumn54RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn54RowGap__SynchronizedResult === undefined) {
            this.getGemColumn54RowGap__SynchronizedResult = null;
            this.getGemColumn54RowGap__update();
        }
        return this.getGemColumn54RowGap__SynchronizedResult;
    }

    public getGemColumn54RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn54RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn54RowGap__update' + this.computeHash([]), () => this.getGemColumn54RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn54RowGap__update' + this.computeHash([]), () => this.getGemColumn54RowGap__update())
        )).then(__v => this.getGemColumn54RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn54RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "0px";
        return val_$;
    }

    private getGemRow14ColGap__SynchronizedResult: string = undefined;
    public getGemRow14ColGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow14ColGap__SynchronizedResult === undefined) {
            this.getGemRow14ColGap__SynchronizedResult = null;
            this.getGemRow14ColGap__update();
        }
        return this.getGemRow14ColGap__SynchronizedResult;
    }

    public getGemRow14ColGap__update(): void {
        
        Promise.resolve(this.getGemRow14ColGap(
            this.createDomainObserverRegisterFunction('getGemRow14ColGap__update' + this.computeHash([]), () => this.getGemRow14ColGap__update()),
            this.createStateVarObserverRegisterFunction('getGemRow14ColGap__update' + this.computeHash([]), () => this.getGemRow14ColGap__update())
        )).then(__v => this.getGemRow14ColGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRow14ColGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "16px";
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
        const val_$: string = "24px";
        return val_$;
    }

    private getGemColumn1Width__SynchronizedResult: string = undefined;
    public getGemColumn1Width__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn1Width__SynchronizedResult === undefined) {
            this.getGemColumn1Width__SynchronizedResult = null;
            this.getGemColumn1Width__update();
        }
        return this.getGemColumn1Width__SynchronizedResult;
    }

    public getGemColumn1Width__update(): void {
        
        Promise.resolve(this.getGemColumn1Width(
            this.createDomainObserverRegisterFunction('getGemColumn1Width__update' + this.computeHash([]), () => this.getGemColumn1Width__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn1Width__update' + this.computeHash([]), () => this.getGemColumn1Width__update())
        )).then(__v => this.getGemColumn1Width__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn1Width(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "100%";
        return val_$;
    }

    async initIt18Iterable() {
        {
            let array = (await GemListUtil.toArraySync(await this.getStations()));
            for(let index = 0; index < array.length; index++) {
                let station = array[index];
                {
                }
            }
        }
    }

    async initIt56Iterable() {
        {
            let array = (await GemListUtil.toArraySync(await this.getStations()));
            for(let index = 0; index < array.length; index++) {
                let station = array[index];
                {
                }
            }
        }
    }

    async initSelectedStationId() {
        if (!this._selectedStationIdSetExternally){
        }
        await this.initIt18Iterable();
        await this.initIt56Iterable();
    }

    async initDetailOpen() {
        if (!this._detailOpenSetExternally){
            this.setDetailOpen(false);
        }
        await this.initSelectedStationId();
    }

    async initStations() {
        if (!this._stationsSetExternally){
            this._stations = (await GemListUtil.toArraySync(await FactoryDigitalTwinManager.getStationList()));
        }
        await this.initDetailOpen();
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
StartTOP["__class"] = "gui.StartTOP";
StartTOP["__interfaces"] = ["factorydigitaltwin.FactoryDigitalTwinObserver"];




