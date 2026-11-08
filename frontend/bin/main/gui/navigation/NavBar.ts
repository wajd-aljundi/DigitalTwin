/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { StringHelper } from '@umlp/commonj2ts';
import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import { IUMLPList } from '@umlp/commonj2ts';
import ManyKeysMap from 'many-keys-map';import { GemIdentifiable } from '@umlp/commonj2ts';
import { GemListUtil } from '@umlp/commonj2ts';

@Directive()
export class NavBar {
    protected toArray<T>(arr: IUMLPList<T> | Array<T>): Array<T> {
        return GemListUtil.toArray(arr);
    }

    private static nextId: number = 0;
    protected uniqueIdentifier:number = NavBar.nextId++;

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
            let hash: number = NavBar.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.navigation.NavBar" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.navigation.NavBar" + this.uniqueIdentifier);
        }
    }

    public ngOnDestroy(): void {
        ComponentObserverManager.removeObservers("gui.navigation.NavBar" + this.uniqueIdentifier);
    }


    protected _router: Router;

    public constructor() {
    }

    private getGemNavItem2Title__SynchronizedResult: string = undefined;
    public getGemNavItem2Title__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem2Title__SynchronizedResult === undefined) {
            this.getGemNavItem2Title__SynchronizedResult = null;
            this.getGemNavItem2Title__update();
        }
        return this.getGemNavItem2Title__SynchronizedResult;
    }

    public getGemNavItem2Title__update(): void {
        
        Promise.resolve(this.getGemNavItem2Title(
            this.createDomainObserverRegisterFunction('getGemNavItem2Title__update' + this.computeHash([]), () => this.getGemNavItem2Title__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem2Title__update' + this.computeHash([]), () => this.getGemNavItem2Title__update())
        )).then(__v => this.getGemNavItem2Title__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemNavItem2Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Dashboard";
        return val_$;
    }

    private getGemNavItem2Target__SynchronizedResult: string = undefined;
    public getGemNavItem2Target__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem2Target__SynchronizedResult === undefined) {
            this.getGemNavItem2Target__SynchronizedResult = null;
            this.getGemNavItem2Target__update();
        }
        return this.getGemNavItem2Target__SynchronizedResult;
    }

    public getGemNavItem2Target__update(): void {
        
        Promise.resolve(this.getGemNavItem2Target(
            this.createDomainObserverRegisterFunction('getGemNavItem2Target__update' + this.computeHash([]), () => this.getGemNavItem2Target__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem2Target__update' + this.computeHash([]), () => this.getGemNavItem2Target__update())
        )).then(__v => this.getGemNavItem2Target__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemNavItem2Target(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "/gui/Start";
        return val_$;
    }

    private getGemNavItem3Title__SynchronizedResult: string = undefined;
    public getGemNavItem3Title__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem3Title__SynchronizedResult === undefined) {
            this.getGemNavItem3Title__SynchronizedResult = null;
            this.getGemNavItem3Title__update();
        }
        return this.getGemNavItem3Title__SynchronizedResult;
    }

    public getGemNavItem3Title__update(): void {
        
        Promise.resolve(this.getGemNavItem3Title(
            this.createDomainObserverRegisterFunction('getGemNavItem3Title__update' + this.computeHash([]), () => this.getGemNavItem3Title__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem3Title__update' + this.computeHash([]), () => this.getGemNavItem3Title__update())
        )).then(__v => this.getGemNavItem3Title__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemNavItem3Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Alarms";
        return val_$;
    }

    private getGemNavItem3Target__SynchronizedResult: string = undefined;
    public getGemNavItem3Target__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem3Target__SynchronizedResult === undefined) {
            this.getGemNavItem3Target__SynchronizedResult = null;
            this.getGemNavItem3Target__update();
        }
        return this.getGemNavItem3Target__SynchronizedResult;
    }

    public getGemNavItem3Target__update(): void {
        
        Promise.resolve(this.getGemNavItem3Target(
            this.createDomainObserverRegisterFunction('getGemNavItem3Target__update' + this.computeHash([]), () => this.getGemNavItem3Target__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem3Target__update' + this.computeHash([]), () => this.getGemNavItem3Target__update())
        )).then(__v => this.getGemNavItem3Target__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemNavItem3Target(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "/gui/AlarmOverview";
        return val_$;
    }

    private getGemNavItem4Title__SynchronizedResult: string = undefined;
    public getGemNavItem4Title__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem4Title__SynchronizedResult === undefined) {
            this.getGemNavItem4Title__SynchronizedResult = null;
            this.getGemNavItem4Title__update();
        }
        return this.getGemNavItem4Title__SynchronizedResult;
    }

    public getGemNavItem4Title__update(): void {
        
        Promise.resolve(this.getGemNavItem4Title(
            this.createDomainObserverRegisterFunction('getGemNavItem4Title__update' + this.computeHash([]), () => this.getGemNavItem4Title__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem4Title__update' + this.computeHash([]), () => this.getGemNavItem4Title__update())
        )).then(__v => this.getGemNavItem4Title__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemNavItem4Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Signals";
        return val_$;
    }

    private getGemNavItem4Target__SynchronizedResult: string = undefined;
    public getGemNavItem4Target__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem4Target__SynchronizedResult === undefined) {
            this.getGemNavItem4Target__SynchronizedResult = null;
            this.getGemNavItem4Target__update();
        }
        return this.getGemNavItem4Target__SynchronizedResult;
    }

    public getGemNavItem4Target__update(): void {
        
        Promise.resolve(this.getGemNavItem4Target(
            this.createDomainObserverRegisterFunction('getGemNavItem4Target__update' + this.computeHash([]), () => this.getGemNavItem4Target__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem4Target__update' + this.computeHash([]), () => this.getGemNavItem4Target__update())
        )).then(__v => this.getGemNavItem4Target__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemNavItem4Target(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "/gui/SignalOverview";
        return val_$;
    }

    private getGemNavItem5Title__SynchronizedResult: string = undefined;
    public getGemNavItem5Title__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem5Title__SynchronizedResult === undefined) {
            this.getGemNavItem5Title__SynchronizedResult = null;
            this.getGemNavItem5Title__update();
        }
        return this.getGemNavItem5Title__SynchronizedResult;
    }

    public getGemNavItem5Title__update(): void {
        
        Promise.resolve(this.getGemNavItem5Title(
            this.createDomainObserverRegisterFunction('getGemNavItem5Title__update' + this.computeHash([]), () => this.getGemNavItem5Title__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem5Title__update' + this.computeHash([]), () => this.getGemNavItem5Title__update())
        )).then(__v => this.getGemNavItem5Title__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemNavItem5Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Prognosis";
        return val_$;
    }

    private getGemNavItem5Target__SynchronizedResult: string = undefined;
    public getGemNavItem5Target__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem5Target__SynchronizedResult === undefined) {
            this.getGemNavItem5Target__SynchronizedResult = null;
            this.getGemNavItem5Target__update();
        }
        return this.getGemNavItem5Target__SynchronizedResult;
    }

    public getGemNavItem5Target__update(): void {
        
        Promise.resolve(this.getGemNavItem5Target(
            this.createDomainObserverRegisterFunction('getGemNavItem5Target__update' + this.computeHash([]), () => this.getGemNavItem5Target__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem5Target__update' + this.computeHash([]), () => this.getGemNavItem5Target__update())
        )).then(__v => this.getGemNavItem5Target__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemNavItem5Target(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "/gui/PrognosisOverview";
        return val_$;
    }

    private getGemNavList1Width__SynchronizedResult: string = undefined;
    public getGemNavList1Width__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavList1Width__SynchronizedResult === undefined) {
            this.getGemNavList1Width__SynchronizedResult = null;
            this.getGemNavList1Width__update();
        }
        return this.getGemNavList1Width__SynchronizedResult;
    }

    public getGemNavList1Width__update(): void {
        
        Promise.resolve(this.getGemNavList1Width(
            this.createDomainObserverRegisterFunction('getGemNavList1Width__update' + this.computeHash([]), () => this.getGemNavList1Width__update()),
            this.createStateVarObserverRegisterFunction('getGemNavList1Width__update' + this.computeHash([]), () => this.getGemNavList1Width__update())
        )).then(__v => this.getGemNavList1Width__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemNavList1Width(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "34ch";
        return val_$;
    }

    private getGemNavList1Height__SynchronizedResult: string = undefined;
    public getGemNavList1Height__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavList1Height__SynchronizedResult === undefined) {
            this.getGemNavList1Height__SynchronizedResult = null;
            this.getGemNavList1Height__update();
        }
        return this.getGemNavList1Height__SynchronizedResult;
    }

    public getGemNavList1Height__update(): void {
        
        Promise.resolve(this.getGemNavList1Height(
            this.createDomainObserverRegisterFunction('getGemNavList1Height__update' + this.computeHash([]), () => this.getGemNavList1Height__update()),
            this.createStateVarObserverRegisterFunction('getGemNavList1Height__update' + this.computeHash([]), () => this.getGemNavList1Height__update())
        )).then(__v => this.getGemNavList1Height__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemNavList1Height(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "100vh";
        return val_$;
    }

    private getGemColumn6HAlign__SynchronizedResult: string = undefined;
    public getGemColumn6HAlign__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn6HAlign__SynchronizedResult === undefined) {
            this.getGemColumn6HAlign__SynchronizedResult = null;
            this.getGemColumn6HAlign__update();
        }
        return this.getGemColumn6HAlign__SynchronizedResult;
    }

    public getGemColumn6HAlign__update(): void {
        
        Promise.resolve(this.getGemColumn6HAlign(
            this.createDomainObserverRegisterFunction('getGemColumn6HAlign__update' + this.computeHash([]), () => this.getGemColumn6HAlign__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn6HAlign__update' + this.computeHash([]), () => this.getGemColumn6HAlign__update())
        )).then(__v => this.getGemColumn6HAlign__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn6HAlign(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "stretch";
        return val_$;
    }

    private getGemColumn6Width__SynchronizedResult: string = undefined;
    public getGemColumn6Width__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn6Width__SynchronizedResult === undefined) {
            this.getGemColumn6Width__SynchronizedResult = null;
            this.getGemColumn6Width__update();
        }
        return this.getGemColumn6Width__SynchronizedResult;
    }

    public getGemColumn6Width__update(): void {
        
        Promise.resolve(this.getGemColumn6Width(
            this.createDomainObserverRegisterFunction('getGemColumn6Width__update' + this.computeHash([]), () => this.getGemColumn6Width__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn6Width__update' + this.computeHash([]), () => this.getGemColumn6Width__update())
        )).then(__v => this.getGemColumn6Width__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn6Width(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "100%";
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
        const val_$: string = "0px";
        return val_$;
    }

    private getGemRow0ColGap__SynchronizedResult: string = undefined;
    public getGemRow0ColGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow0ColGap__SynchronizedResult === undefined) {
            this.getGemRow0ColGap__SynchronizedResult = null;
            this.getGemRow0ColGap__update();
        }
        return this.getGemRow0ColGap__SynchronizedResult;
    }

    public getGemRow0ColGap__update(): void {
        
        Promise.resolve(this.getGemRow0ColGap(
            this.createDomainObserverRegisterFunction('getGemRow0ColGap__update' + this.computeHash([]), () => this.getGemRow0ColGap__update()),
            this.createStateVarObserverRegisterFunction('getGemRow0ColGap__update' + this.computeHash([]), () => this.getGemRow0ColGap__update())
        )).then(__v => this.getGemRow0ColGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRow0ColGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "0px";
        return val_$;
    }

    protected allVarsInited: boolean = false;
    public init() {
    }

    public destroy() {
    }
}
NavBar["__class"] = "gui.navigation.NavBar";



