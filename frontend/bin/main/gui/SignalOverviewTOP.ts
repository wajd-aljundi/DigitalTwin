/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { EmptyFactoryDigitalTwinObserver } from 'factorydigitaltwin/EmptyFactoryDigitalTwinObserver';
import { FactoryDigitalTwinManager } from 'factorydigitaltwin/FactoryDigitalTwinManager';
import { Measurement } from 'factorydigitaltwin/Measurement';
import { Signal } from 'factorydigitaltwin/Signal';
import { SignalObserver } from 'factorydigitaltwin/SignalObserver';
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
import { SignalType } from 'factorydigitaltwin/SignalType';

@Directive()
export abstract class SignalOverviewTOP extends EmptyFactoryDigitalTwinObserver implements StationObserver, SignalObserver {
    protected toArray<T>(arr: IUMLPList<T> | Array<T>): Array<T> {
        return GemListUtil.toArray(arr);
    }

    private static nextId: number = 0;
    protected uniqueIdentifier:number = SignalOverviewTOP.nextId++;

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
            let hash: number = SignalOverviewTOP.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.SignalOverview" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.SignalOverview" + this.uniqueIdentifier);
        }
    }


    protected _router: Router;

    /* Default method injected from factorydigitaltwin.StationObserver */
    public async notifySetName(station?: any, oldValue?: any, o?: any) {
        if (((station != null && station instanceof <any>Station) || station === null) && ((typeof oldValue === 'string') || oldValue === null) && ((typeof o === 'string') || o === null)) {
            let __args = arguments;
            if (this._stations === undefined) { this._stations = null; } 
            if (this._exportDialogOpen === undefined) { this._exportDialogOpen = null; } 
            if (this._exportFrom === undefined) { this._exportFrom = null; } 
            if (this._exportTo === undefined) { this._exportTo = null; } 
            if (this.gemTableHeader15Cols_0 === undefined) { this.gemTableHeader15Cols_0 = null; } 
            this._stationsSetExternally = false;
            this._exportDialogOpenSetExternally = false;
            this._exportFromSetExternally = false;
            this._exportToSetExternally = false;
            return <any>(async () => {
            })();
        } else if (((station != null && station instanceof <any>Signal) || station === null) && ((typeof oldValue === 'string') || oldValue === null) && ((typeof o === 'string') || o === null)) {
            return <any>await this.notifySetName$factorydigitaltwin_Signal$java_lang_String$java_lang_String(station, oldValue, o);
        } else throw new Error('invalid overload');
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    public async maybeNotifySetName(station?: any, oldValue?: any, o?: any, scope?: any) {
        if (((station != null && station instanceof <any>Station) || station === null) && ((typeof oldValue === 'string') || oldValue === null) && ((typeof o === 'string') || o === null) && ((typeof scope === 'number') || scope === null)) {
            let __args = arguments;
            if (this._stations === undefined) { this._stations = null; } 
            if (this._exportDialogOpen === undefined) { this._exportDialogOpen = null; } 
            if (this._exportFrom === undefined) { this._exportFrom = null; } 
            if (this._exportTo === undefined) { this._exportTo = null; } 
            if (this.gemTableHeader15Cols_0 === undefined) { this.gemTableHeader15Cols_0 = null; } 
            this._stationsSetExternally = false;
            this._exportDialogOpenSetExternally = false;
            this._exportFromSetExternally = false;
            this._exportToSetExternally = false;
            return <any>(async () => {
                if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
                    await this.notifySetName(station, oldValue, o);
                }
            })();
        } else if (((station != null && station instanceof <any>Signal) || station === null) && ((typeof oldValue === 'string') || oldValue === null) && ((typeof o === 'string') || o === null) && ((typeof scope === 'number') || scope === null)) {
            return <any>await this.maybeNotifySetName$factorydigitaltwin_Signal$java_lang_String$java_lang_String$umlp_backendrte_common_NotificationScope(station, oldValue, o, scope);
        } else throw new Error('invalid overload');
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    public async notifySetType(station?: any, oldValue?: any, o?: any) {
        if (((station != null && station instanceof <any>Station) || station === null) && ((typeof oldValue === 'number') || oldValue === null) && ((typeof o === 'number') || o === null)) {
            let __args = arguments;
            if (this._stations === undefined) { this._stations = null; } 
            if (this._exportDialogOpen === undefined) { this._exportDialogOpen = null; } 
            if (this._exportFrom === undefined) { this._exportFrom = null; } 
            if (this._exportTo === undefined) { this._exportTo = null; } 
            if (this.gemTableHeader15Cols_0 === undefined) { this.gemTableHeader15Cols_0 = null; } 
            this._stationsSetExternally = false;
            this._exportDialogOpenSetExternally = false;
            this._exportFromSetExternally = false;
            this._exportToSetExternally = false;
            return <any>(async () => {
            })();
        } else if (((station != null && station instanceof <any>Signal) || station === null) && ((typeof oldValue === 'number') || oldValue === null) && ((typeof o === 'number') || o === null)) {
            return <any>await this.notifySetType$factorydigitaltwin_Signal$factorydigitaltwin_SignalType$factorydigitaltwin_SignalType(station, oldValue, o);
        } else throw new Error('invalid overload');
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    public async maybeNotifySetType(station?: any, oldValue?: any, o?: any, scope?: any) {
        if (((station != null && station instanceof <any>Station) || station === null) && ((typeof oldValue === 'number') || oldValue === null) && ((typeof o === 'number') || o === null) && ((typeof scope === 'number') || scope === null)) {
            let __args = arguments;
            if (this._stations === undefined) { this._stations = null; } 
            if (this._exportDialogOpen === undefined) { this._exportDialogOpen = null; } 
            if (this._exportFrom === undefined) { this._exportFrom = null; } 
            if (this._exportTo === undefined) { this._exportTo = null; } 
            if (this.gemTableHeader15Cols_0 === undefined) { this.gemTableHeader15Cols_0 = null; } 
            this._stationsSetExternally = false;
            this._exportDialogOpenSetExternally = false;
            this._exportFromSetExternally = false;
            this._exportToSetExternally = false;
            return <any>(async () => {
                if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
                    await this.notifySetType(station, oldValue, o);
                }
            })();
        } else if (((station != null && station instanceof <any>Signal) || station === null) && ((typeof oldValue === 'number') || oldValue === null) && ((typeof o === 'number') || o === null) && ((typeof scope === 'number') || scope === null)) {
            return <any>await this.maybeNotifySetType$factorydigitaltwin_Signal$factorydigitaltwin_SignalType$factorydigitaltwin_SignalType$umlp_backendrte_common_NotificationScope(station, oldValue, o, scope);
        } else throw new Error('invalid overload');
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    public async notifySetTypeText(station?: any, oldValue?: any, o?: any) {
        if (((station != null && station instanceof <any>Station) || station === null) && ((typeof oldValue === 'string') || oldValue === null) && ((typeof o === 'string') || o === null)) {
            let __args = arguments;
            if (this._stations === undefined) { this._stations = null; } 
            if (this._exportDialogOpen === undefined) { this._exportDialogOpen = null; } 
            if (this._exportFrom === undefined) { this._exportFrom = null; } 
            if (this._exportTo === undefined) { this._exportTo = null; } 
            if (this.gemTableHeader15Cols_0 === undefined) { this.gemTableHeader15Cols_0 = null; } 
            this._stationsSetExternally = false;
            this._exportDialogOpenSetExternally = false;
            this._exportFromSetExternally = false;
            this._exportToSetExternally = false;
            return <any>(async () => {
            })();
        } else if (((station != null && station instanceof <any>Signal) || station === null) && ((typeof oldValue === 'string') || oldValue === null) && ((typeof o === 'string') || o === null)) {
            return <any>await this.notifySetTypeText$factorydigitaltwin_Signal$java_lang_String$java_lang_String(station, oldValue, o);
        } else throw new Error('invalid overload');
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    public async maybeNotifySetTypeText(station?: any, oldValue?: any, o?: any, scope?: any) {
        if (((station != null && station instanceof <any>Station) || station === null) && ((typeof oldValue === 'string') || oldValue === null) && ((typeof o === 'string') || o === null) && ((typeof scope === 'number') || scope === null)) {
            let __args = arguments;
            if (this._stations === undefined) { this._stations = null; } 
            if (this._exportDialogOpen === undefined) { this._exportDialogOpen = null; } 
            if (this._exportFrom === undefined) { this._exportFrom = null; } 
            if (this._exportTo === undefined) { this._exportTo = null; } 
            if (this.gemTableHeader15Cols_0 === undefined) { this.gemTableHeader15Cols_0 = null; } 
            this._stationsSetExternally = false;
            this._exportDialogOpenSetExternally = false;
            this._exportFromSetExternally = false;
            this._exportToSetExternally = false;
            return <any>(async () => {
                if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
                    await this.notifySetTypeText(station, oldValue, o);
                }
            })();
        } else if (((station != null && station instanceof <any>Signal) || station === null) && ((typeof oldValue === 'string') || oldValue === null) && ((typeof o === 'string') || o === null) && ((typeof scope === 'number') || scope === null)) {
            return <any>await this.maybeNotifySetTypeText$factorydigitaltwin_Signal$java_lang_String$java_lang_String$umlp_backendrte_common_NotificationScope(station, oldValue, o, scope);
        } else throw new Error('invalid overload');
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
    public notifyBuild(station?: any) {
        if (((station != null && station instanceof <any>Station) || station === null)) {
            let __args = arguments;
            if (this._stations === undefined) { this._stations = null; } 
            if (this._exportDialogOpen === undefined) { this._exportDialogOpen = null; } 
            if (this._exportFrom === undefined) { this._exportFrom = null; } 
            if (this._exportTo === undefined) { this._exportTo = null; } 
            if (this.gemTableHeader15Cols_0 === undefined) { this.gemTableHeader15Cols_0 = null; } 
            this._stationsSetExternally = false;
            this._exportDialogOpenSetExternally = false;
            this._exportFromSetExternally = false;
            this._exportToSetExternally = false;
            return <any>(() => {
            })();
        } else if (((station != null && station instanceof <any>Signal) || station === null)) {
            return <any>this.notifyBuild$factorydigitaltwin_Signal(station);
        } else throw new Error('invalid overload');
    }
    /* Default method injected from factorydigitaltwin.StationObserver */
    public maybeNotifyBuild(station?: any, scope?: any) {
        if (((station != null && station instanceof <any>Station) || station === null) && ((typeof scope === 'number') || scope === null)) {
            let __args = arguments;
            if (this._stations === undefined) { this._stations = null; } 
            if (this._exportDialogOpen === undefined) { this._exportDialogOpen = null; } 
            if (this._exportFrom === undefined) { this._exportFrom = null; } 
            if (this._exportTo === undefined) { this._exportTo = null; } 
            if (this.gemTableHeader15Cols_0 === undefined) { this.gemTableHeader15Cols_0 = null; } 
            this._stationsSetExternally = false;
            this._exportDialogOpenSetExternally = false;
            this._exportFromSetExternally = false;
            this._exportToSetExternally = false;
            return <any>(() => {
                if (NotificationScope["_$wrappers"][this.getScope()].contains(scope)){
                    this.notifyBuild(station);
                }
            })();
        } else if (((station != null && station instanceof <any>Signal) || station === null) && ((typeof scope === 'number') || scope === null)) {
            return <any>this.maybeNotifyBuild$factorydigitaltwin_Signal$umlp_backendrte_common_NotificationScope(station, scope);
        } else throw new Error('invalid overload');
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async notifySetTopic(signal: Signal, oldValue: string, o: string) {
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async maybeNotifySetTopic(signal: Signal, oldValue: string, o: string, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetTopic(signal, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async notifySetName$factorydigitaltwin_Signal$java_lang_String$java_lang_String(signal: Signal, oldValue: string, o: string) {
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async maybeNotifySetName$factorydigitaltwin_Signal$java_lang_String$java_lang_String$umlp_backendrte_common_NotificationScope(signal: Signal, oldValue: string, o: string, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetName(signal, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async notifySetCategory(signal: Signal, oldValue: SignalCategory, o: SignalCategory) {
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async maybeNotifySetCategory(signal: Signal, oldValue: SignalCategory, o: SignalCategory, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetCategory(signal, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async notifySetCategoryText(signal: Signal, oldValue: string, o: string) {
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async maybeNotifySetCategoryText(signal: Signal, oldValue: string, o: string, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetCategoryText(signal, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async notifySetType$factorydigitaltwin_Signal$factorydigitaltwin_SignalType$factorydigitaltwin_SignalType(signal: Signal, oldValue: SignalType, o: SignalType) {
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async maybeNotifySetType$factorydigitaltwin_Signal$factorydigitaltwin_SignalType$factorydigitaltwin_SignalType$umlp_backendrte_common_NotificationScope(signal: Signal, oldValue: SignalType, o: SignalType, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetType(signal, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async notifySetTypeText$factorydigitaltwin_Signal$java_lang_String$java_lang_String(signal: Signal, oldValue: string, o: string) {
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async maybeNotifySetTypeText$factorydigitaltwin_Signal$java_lang_String$java_lang_String$umlp_backendrte_common_NotificationScope(signal: Signal, oldValue: string, o: string, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetTypeText(signal, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async notifySetUnit(signal: Signal, oldValue: string, o: string) {
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async maybeNotifySetUnit(signal: Signal, oldValue: string, o: string, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetUnit(signal, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async maybeNotifyAddMeasurements(signal: Signal, arg: number, indexInList: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyAddMeasurements(signal, arg, indexInList);
        }
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async notifyRemoveMeasurements(signal: Signal, arg: number, idx: number) {
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async maybeNotifyRemoveMeasurements(signal: Signal, arg: number, idx: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifyRemoveMeasurements(signal, arg, idx);
        }
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    notifySetMeasurements(signal: Signal, idx: number, oldValue: number, o: number) {
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    maybeNotifySetMeasurements(signal: Signal, idx: number, oldValue: number, o: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            this.notifySetMeasurements(signal, idx, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async notifySetStation(signal: Signal, oldValue: number, o: number) {
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    async maybeNotifySetStation(signal: Signal, oldValue: number, o: number, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][scope].contains(this.getScope())){
            await this.notifySetStation(signal, oldValue, o);
        }
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    notifyBuild$factorydigitaltwin_Signal(signal: Signal) {
    }
    /* Default method injected from factorydigitaltwin.SignalObserver */
    maybeNotifyBuild$factorydigitaltwin_Signal$umlp_backendrte_common_NotificationScope(signal: Signal, scope: NotificationScope) {
        if (NotificationScope["_$wrappers"][this.getScope()].contains(scope)){
            this.notifyBuild(signal);
        }
    }
    _stations: Array<Station>;

    public _stationsSetExternally: boolean;

    _exportDialogOpen: boolean;

    public _exportDialogOpenSetExternally: boolean;

    _exportFrom: string;

    public _exportFromSetExternally: boolean;

    _exportTo: string;

    public _exportToSetExternally: boolean;

    gemTableHeader15Cols_0: Array<string>;

    public constructor() {
        super();
        if (this._stations === undefined) { this._stations = null; }
        this._stationsSetExternally = false;
        if (this._exportDialogOpen === undefined) { this._exportDialogOpen = null; }
        this._exportDialogOpenSetExternally = false;
        if (this._exportFrom === undefined) { this._exportFrom = null; }
        this._exportFromSetExternally = false;
        if (this._exportTo === undefined) { this._exportTo = null; }
        this._exportToSetExternally = false;
        if (this.gemTableHeader15Cols_0 === undefined) { this.gemTableHeader15Cols_0 = null; }
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

        ComponentObserverManager.callStateVariableObserver("_stations", "gui.SignalOverview" + this.uniqueIdentifier);
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

    private isExportDialogOpen__SynchronizedResult: boolean = undefined;
    public isExportDialogOpen__synchronized(): boolean {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.isExportDialogOpen__SynchronizedResult === undefined) {
            this.isExportDialogOpen__SynchronizedResult = null;
            this.isExportDialogOpen__update();
        }
        return this.isExportDialogOpen__SynchronizedResult;
    }

    public isExportDialogOpen__update(): void {
        
        Promise.resolve(this.isExportDialogOpen(
            this.createDomainObserverRegisterFunction('isExportDialogOpen__update' + this.computeHash([]), () => this.isExportDialogOpen__update()),
            this.createStateVarObserverRegisterFunction('isExportDialogOpen__update' + this.computeHash([]), () => this.isExportDialogOpen__update())
        )).then(__v => this.isExportDialogOpen__SynchronizedResult = __v === undefined ? null : __v);
    }

    public isExportDialogOpen(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): boolean {
        return this._exportDialogOpen;
    }

    public setExportDialogOpen(val: boolean) {
                this._exportDialogOpenSetExternally = true;
        this._exportDialogOpen = val;

        ComponentObserverManager.callStateVariableObserver("_exportDialogOpen", "gui.SignalOverview" + this.uniqueIdentifier);
        this.isExportDialogOpen__update();
    }

    private getExportFrom__SynchronizedResult: string = undefined;
    public getExportFrom__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getExportFrom__SynchronizedResult === undefined) {
            this.getExportFrom__SynchronizedResult = null;
            this.getExportFrom__update();
        }
        return this.getExportFrom__SynchronizedResult;
    }

    public getExportFrom__update(): void {
        
        Promise.resolve(this.getExportFrom(
            this.createDomainObserverRegisterFunction('getExportFrom__update' + this.computeHash([]), () => this.getExportFrom__update()),
            this.createStateVarObserverRegisterFunction('getExportFrom__update' + this.computeHash([]), () => this.getExportFrom__update())
        )).then(__v => this.getExportFrom__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getExportFrom(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this._exportFrom;
    }

    public setExportFrom(val: string) {
                this._exportFromSetExternally = true;
        this._exportFrom = val;

        ComponentObserverManager.callStateVariableObserver("_exportFrom", "gui.SignalOverview" + this.uniqueIdentifier);
        this.getExportFrom__update();
    }

    private getExportTo__SynchronizedResult: string = undefined;
    public getExportTo__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getExportTo__SynchronizedResult === undefined) {
            this.getExportTo__SynchronizedResult = null;
            this.getExportTo__update();
        }
        return this.getExportTo__SynchronizedResult;
    }

    public getExportTo__update(): void {
        
        Promise.resolve(this.getExportTo(
            this.createDomainObserverRegisterFunction('getExportTo__update' + this.computeHash([]), () => this.getExportTo__update()),
            this.createStateVarObserverRegisterFunction('getExportTo__update' + this.computeHash([]), () => this.getExportTo__update())
        )).then(__v => this.getExportTo__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getExportTo(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this._exportTo;
    }

    public setExportTo(val: string) {
                this._exportToSetExternally = true;
        this._exportTo = val;

        ComponentObserverManager.callStateVariableObserver("_exportTo", "gui.SignalOverview" + this.uniqueIdentifier);
        this.getExportTo__update();
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
        const val_$: string = "Signal Monitor";
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
        const val_$: string = "All signals from the production line.";
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

    public getGemText6Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Select the time window for export:";
        return val_$;
    }

    private getGemDateInput7LabelText__SynchronizedResult: string = undefined;
    public getGemDateInput7LabelText__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemDateInput7LabelText__SynchronizedResult === undefined) {
            this.getGemDateInput7LabelText__SynchronizedResult = null;
            this.getGemDateInput7LabelText__update();
        }
        return this.getGemDateInput7LabelText__SynchronizedResult;
    }

    public getGemDateInput7LabelText__update(): void {
        
        Promise.resolve(this.getGemDateInput7LabelText(
            this.createDomainObserverRegisterFunction('getGemDateInput7LabelText__update' + this.computeHash([]), () => this.getGemDateInput7LabelText__update()),
            this.createStateVarObserverRegisterFunction('getGemDateInput7LabelText__update' + this.computeHash([]), () => this.getGemDateInput7LabelText__update())
        )).then(__v => this.getGemDateInput7LabelText__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemDateInput7LabelText(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "From:";
        return val_$;
    }

    private getGemDateInput7ShowDateTime__SynchronizedResult: boolean = undefined;
    public getGemDateInput7ShowDateTime__synchronized(): boolean {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemDateInput7ShowDateTime__SynchronizedResult === undefined) {
            this.getGemDateInput7ShowDateTime__SynchronizedResult = null;
            this.getGemDateInput7ShowDateTime__update();
        }
        return this.getGemDateInput7ShowDateTime__SynchronizedResult;
    }

    public getGemDateInput7ShowDateTime__update(): void {
        
        Promise.resolve(this.getGemDateInput7ShowDateTime(
            this.createDomainObserverRegisterFunction('getGemDateInput7ShowDateTime__update' + this.computeHash([]), () => this.getGemDateInput7ShowDateTime__update()),
            this.createStateVarObserverRegisterFunction('getGemDateInput7ShowDateTime__update' + this.computeHash([]), () => this.getGemDateInput7ShowDateTime__update())
        )).then(__v => this.getGemDateInput7ShowDateTime__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemDateInput7ShowDateTime(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): boolean {
        if (false){
            return null;
        }
        const val_$: boolean = true;
        return val_$;
    }

    private getGemDateInput7Entry__SynchronizedResult: Date = undefined;
    public getGemDateInput7Entry__synchronized(): Date {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemDateInput7Entry__SynchronizedResult === undefined) {
            this.getGemDateInput7Entry__SynchronizedResult = null;
            this.getGemDateInput7Entry__update();
        }
        return this.getGemDateInput7Entry__SynchronizedResult;
    }

    public getGemDateInput7Entry__update(): void {
        
        Promise.resolve(this.getGemDateInput7Entry(
            this.createDomainObserverRegisterFunction('getGemDateInput7Entry__update' + this.computeHash([]), () => this.getGemDateInput7Entry__update()),
            this.createStateVarObserverRegisterFunction('getGemDateInput7Entry__update' + this.computeHash([]), () => this.getGemDateInput7Entry__update())
        )).then(__v => this.getGemDateInput7Entry__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemDateInput7Entry(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Date {
        if (false){
            return null;
        }
        const val_$: Date = /* parse */new Date(__regObsToStateVar(this.getExportFrom(__regObsToDomainObj, __regObsToStateVar), "_exportFrom") + 'Z');
        return val_$;
    }

    public convertGemDateInput7Entry(conv_val_$: Date): string {
        return /* toString */((d) => { 
if(d == null || d === undefined){
  return null;
}
  const pad = (n) => ('0' + n).slice(-2); 
  let s = d.getUTCFullYear() + '-' + 
         pad(d.getUTCMonth() + 1) + '-' + 
         pad(d.getUTCDate()); 
  s += 'T' + 
         pad(d.getUTCHours()) + ':' + 
         pad(d.getUTCMinutes()) + ':' + 
         pad(d.getUTCSeconds()); 
  if (d.getUTCMilliseconds() > 0) { 
    s += '.' + ('00' + d.getUTCMilliseconds()).slice(-3) + 'Z'; 
  } 
  return s; 
})(
new Date(conv_val_$)
)
;
    }

    public setGemDateInput7Entry(conv_val_$: Date) {
        if (false){
            return;
        }
        const val_$: string = this.convertGemDateInput7Entry(conv_val_$);
        this.setExportFrom(val_$);
    }

    private getGemDateInput8LabelText__SynchronizedResult: string = undefined;
    public getGemDateInput8LabelText__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemDateInput8LabelText__SynchronizedResult === undefined) {
            this.getGemDateInput8LabelText__SynchronizedResult = null;
            this.getGemDateInput8LabelText__update();
        }
        return this.getGemDateInput8LabelText__SynchronizedResult;
    }

    public getGemDateInput8LabelText__update(): void {
        
        Promise.resolve(this.getGemDateInput8LabelText(
            this.createDomainObserverRegisterFunction('getGemDateInput8LabelText__update' + this.computeHash([]), () => this.getGemDateInput8LabelText__update()),
            this.createStateVarObserverRegisterFunction('getGemDateInput8LabelText__update' + this.computeHash([]), () => this.getGemDateInput8LabelText__update())
        )).then(__v => this.getGemDateInput8LabelText__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemDateInput8LabelText(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "To:";
        return val_$;
    }

    private getGemDateInput8ShowDateTime__SynchronizedResult: boolean = undefined;
    public getGemDateInput8ShowDateTime__synchronized(): boolean {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemDateInput8ShowDateTime__SynchronizedResult === undefined) {
            this.getGemDateInput8ShowDateTime__SynchronizedResult = null;
            this.getGemDateInput8ShowDateTime__update();
        }
        return this.getGemDateInput8ShowDateTime__SynchronizedResult;
    }

    public getGemDateInput8ShowDateTime__update(): void {
        
        Promise.resolve(this.getGemDateInput8ShowDateTime(
            this.createDomainObserverRegisterFunction('getGemDateInput8ShowDateTime__update' + this.computeHash([]), () => this.getGemDateInput8ShowDateTime__update()),
            this.createStateVarObserverRegisterFunction('getGemDateInput8ShowDateTime__update' + this.computeHash([]), () => this.getGemDateInput8ShowDateTime__update())
        )).then(__v => this.getGemDateInput8ShowDateTime__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemDateInput8ShowDateTime(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): boolean {
        if (false){
            return null;
        }
        const val_$: boolean = true;
        return val_$;
    }

    private getGemDateInput8Entry__SynchronizedResult: Date = undefined;
    public getGemDateInput8Entry__synchronized(): Date {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemDateInput8Entry__SynchronizedResult === undefined) {
            this.getGemDateInput8Entry__SynchronizedResult = null;
            this.getGemDateInput8Entry__update();
        }
        return this.getGemDateInput8Entry__SynchronizedResult;
    }

    public getGemDateInput8Entry__update(): void {
        
        Promise.resolve(this.getGemDateInput8Entry(
            this.createDomainObserverRegisterFunction('getGemDateInput8Entry__update' + this.computeHash([]), () => this.getGemDateInput8Entry__update()),
            this.createStateVarObserverRegisterFunction('getGemDateInput8Entry__update' + this.computeHash([]), () => this.getGemDateInput8Entry__update())
        )).then(__v => this.getGemDateInput8Entry__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemDateInput8Entry(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Date {
        if (false){
            return null;
        }
        const val_$: Date = /* parse */new Date(__regObsToStateVar(this.getExportTo(__regObsToDomainObj, __regObsToStateVar), "_exportTo") + 'Z');
        return val_$;
    }

    public convertGemDateInput8Entry(conv_val_$: Date): string {
        return /* toString */((d) => { 
if(d == null || d === undefined){
  return null;
}
  const pad = (n) => ('0' + n).slice(-2); 
  let s = d.getUTCFullYear() + '-' + 
         pad(d.getUTCMonth() + 1) + '-' + 
         pad(d.getUTCDate()); 
  s += 'T' + 
         pad(d.getUTCHours()) + ':' + 
         pad(d.getUTCMinutes()) + ':' + 
         pad(d.getUTCSeconds()); 
  if (d.getUTCMilliseconds() > 0) { 
    s += '.' + ('00' + d.getUTCMilliseconds()).slice(-3) + 'Z'; 
  } 
  return s; 
})(
new Date(conv_val_$)
)
;
    }

    public setGemDateInput8Entry(conv_val_$: Date) {
        if (false){
            return;
        }
        const val_$: string = this.convertGemDateInput8Entry(conv_val_$);
        this.setExportTo(val_$);
    }

    private exportCsv__SynchronizedResult: (p1: void) => void = undefined;
    public exportCsv__synchronized(): (p1: void) => void {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.exportCsv__SynchronizedResult === undefined) {
            this.exportCsv__SynchronizedResult = null;
            this.exportCsv__update();
        }
        return this.exportCsv__SynchronizedResult;
    }

    public exportCsv__update(): void {
        
        Promise.resolve(this.exportCsv(
            this.createDomainObserverRegisterFunction('exportCsv__update' + this.computeHash([]), () => this.exportCsv__update()),
            this.createStateVarObserverRegisterFunction('exportCsv__update' + this.computeHash([]), () => this.exportCsv__update())
        )).then(__v => this.exportCsv__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async exportCsv(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<(p1: void) => void> {
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    private getGemButton10Label__SynchronizedResult: string = undefined;
    public getGemButton10Label__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemButton10Label__SynchronizedResult === undefined) {
            this.getGemButton10Label__SynchronizedResult = null;
            this.getGemButton10Label__update();
        }
        return this.getGemButton10Label__SynchronizedResult;
    }

    public getGemButton10Label__update(): void {
        
        Promise.resolve(this.getGemButton10Label(
            this.createDomainObserverRegisterFunction('getGemButton10Label__update' + this.computeHash([]), () => this.getGemButton10Label__update()),
            this.createStateVarObserverRegisterFunction('getGemButton10Label__update' + this.computeHash([]), () => this.getGemButton10Label__update())
        )).then(__v => this.getGemButton10Label__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemButton10Label(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Export CSV";
        return val_$;
    }

    public async gemButton10LeftClick(event_$: void) {
        if (await this.exportCsv() != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))((await this.exportCsv()));
        }
    }

    private closeExportDialog__SynchronizedResult: (p1: void) => void = undefined;
    public closeExportDialog__synchronized(): (p1: void) => void {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.closeExportDialog__SynchronizedResult === undefined) {
            this.closeExportDialog__SynchronizedResult = null;
            this.closeExportDialog__update();
        }
        return this.closeExportDialog__SynchronizedResult;
    }

    public closeExportDialog__update(): void {
        
        Promise.resolve(this.closeExportDialog(
            this.createDomainObserverRegisterFunction('closeExportDialog__update' + this.computeHash([]), () => this.closeExportDialog__update()),
            this.createStateVarObserverRegisterFunction('closeExportDialog__update' + this.computeHash([]), () => this.closeExportDialog__update())
        )).then(__v => this.closeExportDialog__SynchronizedResult = __v === undefined ? null : __v);
    }

    public closeExportDialog(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    private getGemButton11Label__SynchronizedResult: string = undefined;
    public getGemButton11Label__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemButton11Label__SynchronizedResult === undefined) {
            this.getGemButton11Label__SynchronizedResult = null;
            this.getGemButton11Label__update();
        }
        return this.getGemButton11Label__SynchronizedResult;
    }

    public getGemButton11Label__update(): void {
        
        Promise.resolve(this.getGemButton11Label(
            this.createDomainObserverRegisterFunction('getGemButton11Label__update' + this.computeHash([]), () => this.getGemButton11Label__update()),
            this.createStateVarObserverRegisterFunction('getGemButton11Label__update' + this.computeHash([]), () => this.getGemButton11Label__update())
        )).then(__v => this.getGemButton11Label__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemButton11Label(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Cancel";
        return val_$;
    }

    public gemButton11LeftClick(event_$: void) {
        if (this.closeExportDialog() != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))(this.closeExportDialog());
        }
    }

    private getGemRow9ColGap__SynchronizedResult: string = undefined;
    public getGemRow9ColGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow9ColGap__SynchronizedResult === undefined) {
            this.getGemRow9ColGap__SynchronizedResult = null;
            this.getGemRow9ColGap__update();
        }
        return this.getGemRow9ColGap__SynchronizedResult;
    }

    public getGemRow9ColGap__update(): void {
        
        Promise.resolve(this.getGemRow9ColGap(
            this.createDomainObserverRegisterFunction('getGemRow9ColGap__update' + this.computeHash([]), () => this.getGemRow9ColGap__update()),
            this.createStateVarObserverRegisterFunction('getGemRow9ColGap__update' + this.computeHash([]), () => this.getGemRow9ColGap__update())
        )).then(__v => this.getGemRow9ColGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRow9ColGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "10px";
        return val_$;
    }

    private getGemColumn5RowGap__SynchronizedResult: string = undefined;
    public getGemColumn5RowGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn5RowGap__SynchronizedResult === undefined) {
            this.getGemColumn5RowGap__SynchronizedResult = null;
            this.getGemColumn5RowGap__update();
        }
        return this.getGemColumn5RowGap__SynchronizedResult;
    }

    public getGemColumn5RowGap__update(): void {
        
        Promise.resolve(this.getGemColumn5RowGap(
            this.createDomainObserverRegisterFunction('getGemColumn5RowGap__update' + this.computeHash([]), () => this.getGemColumn5RowGap__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn5RowGap__update' + this.computeHash([]), () => this.getGemColumn5RowGap__update())
        )).then(__v => this.getGemColumn5RowGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemColumn5RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "14px";
        return val_$;
    }

    private getGemCard4Title__SynchronizedResult: string = undefined;
    public getGemCard4Title__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemCard4Title__SynchronizedResult === undefined) {
            this.getGemCard4Title__SynchronizedResult = null;
            this.getGemCard4Title__update();
        }
        return this.getGemCard4Title__SynchronizedResult;
    }

    public getGemCard4Title__update(): void {
        
        Promise.resolve(this.getGemCard4Title(
            this.createDomainObserverRegisterFunction('getGemCard4Title__update' + this.computeHash([]), () => this.getGemCard4Title__update()),
            this.createStateVarObserverRegisterFunction('getGemCard4Title__update' + this.computeHash([]), () => this.getGemCard4Title__update())
        )).then(__v => this.getGemCard4Title__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemCard4Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Export Signals as CSV";
        return val_$;
    }

    private getExportDialogIsOpen__SynchronizedResult: boolean = undefined;
    public getExportDialogIsOpen__synchronized(): boolean {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getExportDialogIsOpen__SynchronizedResult === undefined) {
            this.getExportDialogIsOpen__SynchronizedResult = null;
            this.getExportDialogIsOpen__update();
        }
        return this.getExportDialogIsOpen__SynchronizedResult;
    }

    public getExportDialogIsOpen__update(): void {
        
        Promise.resolve(this.getExportDialogIsOpen(
            this.createDomainObserverRegisterFunction('getExportDialogIsOpen__update' + this.computeHash([]), () => this.getExportDialogIsOpen__update()),
            this.createStateVarObserverRegisterFunction('getExportDialogIsOpen__update' + this.computeHash([]), () => this.getExportDialogIsOpen__update())
        )).then(__v => this.getExportDialogIsOpen__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getExportDialogIsOpen(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): boolean {
        if (false){
            return null;
        }
        const val_$: boolean = __regObsToStateVar(this.isExportDialogOpen(__regObsToDomainObj, __regObsToStateVar), "_exportDialogOpen");
        return val_$;
    }

    public convertExportDialogIsOpen(conv_val_$: boolean): boolean {
        return conv_val_$;
    }

    public setExportDialogIsOpen(conv_val_$: boolean) {
        if (false){
            return;
        }
        const val_$: boolean = this.convertExportDialogIsOpen(conv_val_$);
        this.setExportDialogOpen(val_$);
    }

    private openExportDialog__SynchronizedResult: (p1: void) => void = undefined;
    public openExportDialog__synchronized(): (p1: void) => void {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.openExportDialog__SynchronizedResult === undefined) {
            this.openExportDialog__SynchronizedResult = null;
            this.openExportDialog__update();
        }
        return this.openExportDialog__SynchronizedResult;
    }

    public openExportDialog__update(): void {
        
        Promise.resolve(this.openExportDialog(
            this.createDomainObserverRegisterFunction('openExportDialog__update' + this.computeHash([]), () => this.openExportDialog__update()),
            this.createStateVarObserverRegisterFunction('openExportDialog__update' + this.computeHash([]), () => this.openExportDialog__update())
        )).then(__v => this.openExportDialog__SynchronizedResult = __v === undefined ? null : __v);
    }

    public openExportDialog(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    private getExportBtnLabel__SynchronizedResult: string = undefined;
    public getExportBtnLabel__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getExportBtnLabel__SynchronizedResult === undefined) {
            this.getExportBtnLabel__SynchronizedResult = null;
            this.getExportBtnLabel__update();
        }
        return this.getExportBtnLabel__SynchronizedResult;
    }

    public getExportBtnLabel__update(): void {
        
        Promise.resolve(this.getExportBtnLabel(
            this.createDomainObserverRegisterFunction('getExportBtnLabel__update' + this.computeHash([]), () => this.getExportBtnLabel__update()),
            this.createStateVarObserverRegisterFunction('getExportBtnLabel__update' + this.computeHash([]), () => this.getExportBtnLabel__update())
        )).then(__v => this.getExportBtnLabel__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getExportBtnLabel(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Export CSV";
        return val_$;
    }

    public exportBtnLeftClick(event_$: void) {
        if (this.openExportDialog() != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))(this.openExportDialog());
        }
    }

    private getGemRow13ColGap__SynchronizedResult: string = undefined;
    public getGemRow13ColGap__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow13ColGap__SynchronizedResult === undefined) {
            this.getGemRow13ColGap__SynchronizedResult = null;
            this.getGemRow13ColGap__update();
        }
        return this.getGemRow13ColGap__SynchronizedResult;
    }

    public getGemRow13ColGap__update(): void {
        
        Promise.resolve(this.getGemRow13ColGap(
            this.createDomainObserverRegisterFunction('getGemRow13ColGap__update' + this.computeHash([]), () => this.getGemRow13ColGap__update()),
            this.createStateVarObserverRegisterFunction('getGemRow13ColGap__update' + this.computeHash([]), () => this.getGemRow13ColGap__update())
        )).then(__v => this.getGemRow13ColGap__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemRow13ColGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "10px";
        return val_$;
    }

    private getGemTableHeader15Cols_0__SynchronizedResult: Array<string> = undefined;
    public getGemTableHeader15Cols_0__synchronized(): Array<string> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTableHeader15Cols_0__SynchronizedResult === undefined) {
            this.getGemTableHeader15Cols_0__SynchronizedResult = null;
            this.getGemTableHeader15Cols_0__update();
        }
        return this.getGemTableHeader15Cols_0__SynchronizedResult;
    }

    public getGemTableHeader15Cols_0__update(): void {
        
        Promise.resolve(this.getGemTableHeader15Cols_0(
            this.createDomainObserverRegisterFunction('getGemTableHeader15Cols_0__update' + this.computeHash([]), () => this.getGemTableHeader15Cols_0__update()),
            this.createStateVarObserverRegisterFunction('getGemTableHeader15Cols_0__update' + this.computeHash([]), () => this.getGemTableHeader15Cols_0__update())
        )).then(__v => this.getGemTableHeader15Cols_0__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getGemTableHeader15Cols_0(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Array<string> {
        return this.gemTableHeader15Cols_0;
    }

    private getGemTableHeader15Cols__SynchronizedResult: Array<string> = undefined;
    public getGemTableHeader15Cols__synchronized(): Array<string> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTableHeader15Cols__SynchronizedResult === undefined) {
            this.getGemTableHeader15Cols__SynchronizedResult = null;
            this.getGemTableHeader15Cols__update();
        }
        return this.getGemTableHeader15Cols__SynchronizedResult;
    }

    public getGemTableHeader15Cols__update(): void {
        
        Promise.resolve(this.getGemTableHeader15Cols(
            this.createDomainObserverRegisterFunction('getGemTableHeader15Cols__update' + this.computeHash([]), () => this.getGemTableHeader15Cols__update()),
            this.createStateVarObserverRegisterFunction('getGemTableHeader15Cols__update' + this.computeHash([]), () => this.getGemTableHeader15Cols__update())
        )).then(__v => this.getGemTableHeader15Cols__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getGemTableHeader15Cols(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<string>> {
        if (false){
            return null;
        }
        const val_$: Array<string> = (await GemListUtil.toArraySync(await this.getGemTableHeader15Cols_0(__regObsToDomainObj, __regObsToStateVar)));
        return val_$;
    }

    public async notifyAddSignals(val_$: Station, val_$2: number, val_$3: number) {
    }

    public async notifyAddMeasurements(val_$: Signal, val_$2: number, val_$3: number) {
    }

    private getGemText20Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText20Value__synchronized(m: Measurement, signal: Signal, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText20Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]) === undefined) {
            this.getGemText20Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], null);
            this.getGemText20Value__update(m, signal, station);
        }
        return this.getGemText20Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]);
    }

    public getGemText20Value__update(m: Measurement, signal: Signal, station: Station): void {
        
        Promise.resolve(this.getGemText20Value(m, signal, station,
            this.createDomainObserverRegisterFunction('getGemText20Value__update' + this.computeHash([m, signal, station]), () => this.getGemText20Value__update(m, signal, station)),
            this.createStateVarObserverRegisterFunction('getGemText20Value__update' + this.computeHash([m, signal, station]), () => this.getGemText20Value__update(m, signal, station))
        )).then(__v => this.getGemText20Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText20Value(m: Measurement, signal: Signal, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(m);
        __regObsToDomainObj(signal);
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        const val_$: string = station.getName();
        return val_$;
    }

    private getGemText21Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText21Value__synchronized(m: Measurement, signal: Signal, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText21Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]) === undefined) {
            this.getGemText21Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], null);
            this.getGemText21Value__update(m, signal, station);
        }
        return this.getGemText21Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]);
    }

    public getGemText21Value__update(m: Measurement, signal: Signal, station: Station): void {
        
        Promise.resolve(this.getGemText21Value(m, signal, station,
            this.createDomainObserverRegisterFunction('getGemText21Value__update' + this.computeHash([m, signal, station]), () => this.getGemText21Value__update(m, signal, station)),
            this.createStateVarObserverRegisterFunction('getGemText21Value__update' + this.computeHash([m, signal, station]), () => this.getGemText21Value__update(m, signal, station))
        )).then(__v => this.getGemText21Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText21Value(m: Measurement, signal: Signal, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(m);
        __regObsToDomainObj(signal);
        __regObsToDomainObj(station);
        if (false || signal == null){
            return null;
        }
        const val_$: string = signal.getName();
        return val_$;
    }

    private getCategoryCellValue__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getCategoryCellValue__synchronized(m: Measurement, signal: Signal, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getCategoryCellValue__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]) === undefined) {
            this.getCategoryCellValue__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], null);
            this.getCategoryCellValue__update(m, signal, station);
        }
        return this.getCategoryCellValue__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]);
    }

    public getCategoryCellValue__update(m: Measurement, signal: Signal, station: Station): void {
        
        Promise.resolve(this.getCategoryCellValue(m, signal, station,
            this.createDomainObserverRegisterFunction('getCategoryCellValue__update' + this.computeHash([m, signal, station]), () => this.getCategoryCellValue__update(m, signal, station)),
            this.createStateVarObserverRegisterFunction('getCategoryCellValue__update' + this.computeHash([m, signal, station]), () => this.getCategoryCellValue__update(m, signal, station))
        )).then(__v => this.getCategoryCellValue__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getCategoryCellValue(m: Measurement, signal: Signal, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(m);
        __regObsToDomainObj(signal);
        __regObsToDomainObj(station);
        if (false || signal == null){
            return null;
        }
        const val_$: string = signal.getCategoryText();
        return val_$;
    }

    private getGemText22Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText22Value__synchronized(m: Measurement, signal: Signal, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText22Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]) === undefined) {
            this.getGemText22Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], null);
            this.getGemText22Value__update(m, signal, station);
        }
        return this.getGemText22Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]);
    }

    public getGemText22Value__update(m: Measurement, signal: Signal, station: Station): void {
        
        Promise.resolve(this.getGemText22Value(m, signal, station,
            this.createDomainObserverRegisterFunction('getGemText22Value__update' + this.computeHash([m, signal, station]), () => this.getGemText22Value__update(m, signal, station)),
            this.createStateVarObserverRegisterFunction('getGemText22Value__update' + this.computeHash([m, signal, station]), () => this.getGemText22Value__update(m, signal, station))
        )).then(__v => this.getGemText22Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText22Value(m: Measurement, signal: Signal, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(m);
        __regObsToDomainObj(signal);
        __regObsToDomainObj(station);
        if (false || signal == null){
            return null;
        }
        const val_$: string = signal.getTopic();
        return val_$;
    }

    private getGemText23Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText23Value__synchronized(m: Measurement, signal: Signal, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText23Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]) === undefined) {
            this.getGemText23Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], null);
            this.getGemText23Value__update(m, signal, station);
        }
        return this.getGemText23Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]);
    }

    public getGemText23Value__update(m: Measurement, signal: Signal, station: Station): void {
        
        Promise.resolve(this.getGemText23Value(m, signal, station,
            this.createDomainObserverRegisterFunction('getGemText23Value__update' + this.computeHash([m, signal, station]), () => this.getGemText23Value__update(m, signal, station)),
            this.createStateVarObserverRegisterFunction('getGemText23Value__update' + this.computeHash([m, signal, station]), () => this.getGemText23Value__update(m, signal, station))
        )).then(__v => this.getGemText23Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText23Value(m: Measurement, signal: Signal, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(m);
        __regObsToDomainObj(signal);
        __regObsToDomainObj(station);
        if (false || m == null){
            return null;
        }
        const val_$: string = m.getStringValue();
        return val_$;
    }

    private getGemText24Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText24Value__synchronized(m: Measurement, signal: Signal, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText24Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]) === undefined) {
            this.getGemText24Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], null);
            this.getGemText24Value__update(m, signal, station);
        }
        return this.getGemText24Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]);
    }

    public getGemText24Value__update(m: Measurement, signal: Signal, station: Station): void {
        
        Promise.resolve(this.getGemText24Value(m, signal, station,
            this.createDomainObserverRegisterFunction('getGemText24Value__update' + this.computeHash([m, signal, station]), () => this.getGemText24Value__update(m, signal, station)),
            this.createStateVarObserverRegisterFunction('getGemText24Value__update' + this.computeHash([m, signal, station]), () => this.getGemText24Value__update(m, signal, station))
        )).then(__v => this.getGemText24Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText24Value(m: Measurement, signal: Signal, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(m);
        __regObsToDomainObj(signal);
        __regObsToDomainObj(station);
        if (false || m == null){
            return null;
        }
        const val_$: string = m.getTimestampText();
        return val_$;
    }

    private getGemText25Value__SynchronizedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText25Value__synchronized(m: Measurement, signal: Signal, station: Station): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText25Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]) === undefined) {
            this.getGemText25Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], null);
            this.getGemText25Value__update(m, signal, station);
        }
        return this.getGemText25Value__SynchronizedResult.get([m.getGemId(), signal.getGemId(), station.getGemId()]);
    }

    public getGemText25Value__update(m: Measurement, signal: Signal, station: Station): void {
        
        Promise.resolve(this.getGemText25Value(m, signal, station,
            this.createDomainObserverRegisterFunction('getGemText25Value__update' + this.computeHash([m, signal, station]), () => this.getGemText25Value__update(m, signal, station)),
            this.createStateVarObserverRegisterFunction('getGemText25Value__update' + this.computeHash([m, signal, station]), () => this.getGemText25Value__update(m, signal, station))
        )).then(__v => this.getGemText25Value__SynchronizedResult.set([m.getGemId(), signal.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public getGemText25Value(m: Measurement, signal: Signal, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(m);
        __regObsToDomainObj(signal);
        __regObsToDomainObj(station);
        if (false || m == null){
            return null;
        }
        const val_$: string = /* valueOf */String(m.getLatencyMs()).toString();
        return val_$;
    }

    private getIt18Iterable__SynchronizedResult: ManyKeysMap<any, Array<Measurement>> = new ManyKeysMap()
    public getIt18Iterable__synchronized(signal: Signal, station: Station): Array<Measurement> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getIt18Iterable__SynchronizedResult.get([signal.getGemId(), station.getGemId()]) === undefined) {
            this.getIt18Iterable__SynchronizedResult.set([signal.getGemId(), station.getGemId()], null);
            this.getIt18Iterable__update(signal, station);
        }
        return this.getIt18Iterable__SynchronizedResult.get([signal.getGemId(), station.getGemId()]);
    }

    public getIt18Iterable__update(signal: Signal, station: Station): void {
        
        Promise.resolve(this.getIt18Iterable(signal, station,
            this.createDomainObserverRegisterFunction('getIt18Iterable__update' + this.computeHash([signal, station]), () => this.getIt18Iterable__update(signal, station)),
            this.createStateVarObserverRegisterFunction('getIt18Iterable__update' + this.computeHash([signal, station]), () => this.getIt18Iterable__update(signal, station))
        )).then(__v => this.getIt18Iterable__SynchronizedResult.set([signal.getGemId(), station.getGemId()], __v === undefined ? null : __v));
    }

    public async getIt18Iterable(signal: Signal, station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Measurement>> {
        __regObsToDomainObj(signal);
        __regObsToDomainObj(station);
        if (false || signal == null){
            return null;
        }
        return (await GemListUtil.toArraySync(await signal.getMeasurementsList()));
    }

    private getIt17Iterable__SynchronizedResult: ManyKeysMap<any, Array<Signal>> = new ManyKeysMap()
    public getIt17Iterable__synchronized(station: Station): Array<Signal> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getIt17Iterable__SynchronizedResult.get([station.getGemId()]) === undefined) {
            this.getIt17Iterable__SynchronizedResult.set([station.getGemId()], null);
            this.getIt17Iterable__update(station);
        }
        return this.getIt17Iterable__SynchronizedResult.get([station.getGemId()]);
    }

    public getIt17Iterable__update(station: Station): void {
        
        Promise.resolve(this.getIt17Iterable(station,
            this.createDomainObserverRegisterFunction('getIt17Iterable__update' + this.computeHash([station]), () => this.getIt17Iterable__update(station)),
            this.createStateVarObserverRegisterFunction('getIt17Iterable__update' + this.computeHash([station]), () => this.getIt17Iterable__update(station))
        )).then(__v => this.getIt17Iterable__SynchronizedResult.set([station.getGemId()], __v === undefined ? null : __v));
    }

    public async getIt17Iterable(station: Station, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Signal>> {
        __regObsToDomainObj(station);
        if (false || station == null){
            return null;
        }
        return (await GemListUtil.toArraySync(await station.getSignalsList()));
    }

    private getIt16Iterable__SynchronizedResult: Array<Station> = undefined;
    public getIt16Iterable__synchronized(): Array<Station> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getIt16Iterable__SynchronizedResult === undefined) {
            this.getIt16Iterable__SynchronizedResult = null;
            this.getIt16Iterable__update();
        }
        return this.getIt16Iterable__SynchronizedResult;
    }

    public getIt16Iterable__update(): void {
        
        Promise.resolve(this.getIt16Iterable(
            this.createDomainObserverRegisterFunction('getIt16Iterable__update' + this.computeHash([]), () => this.getIt16Iterable__update()),
            this.createStateVarObserverRegisterFunction('getIt16Iterable__update' + this.computeHash([]), () => this.getIt16Iterable__update())
        )).then(__v => this.getIt16Iterable__SynchronizedResult = __v === undefined ? null : __v);
    }

    public async getIt16Iterable(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Station>> {
        if (false){
            return null;
        }
        return (await GemListUtil.toArraySync(__regObsToStateVar(await this.getStations(__regObsToDomainObj, __regObsToStateVar), "_stations")));
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
        const val_$: string = "12px";
        return val_$;
    }

    private getSignalTableCardTitle__SynchronizedResult: string = undefined;
    public getSignalTableCardTitle__synchronized(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getSignalTableCardTitle__SynchronizedResult === undefined) {
            this.getSignalTableCardTitle__SynchronizedResult = null;
            this.getSignalTableCardTitle__update();
        }
        return this.getSignalTableCardTitle__SynchronizedResult;
    }

    public getSignalTableCardTitle__update(): void {
        
        Promise.resolve(this.getSignalTableCardTitle(
            this.createDomainObserverRegisterFunction('getSignalTableCardTitle__update' + this.computeHash([]), () => this.getSignalTableCardTitle__update()),
            this.createStateVarObserverRegisterFunction('getSignalTableCardTitle__update' + this.computeHash([]), () => this.getSignalTableCardTitle__update())
        )).then(__v => this.getSignalTableCardTitle__SynchronizedResult = __v === undefined ? null : __v);
    }

    public getSignalTableCardTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Signal Table";
        return val_$;
    }

    async initIt18Iterable(signal: Signal, station: Station) {
        {
            let array = (await GemListUtil.toArraySync(await signal.getMeasurementsList()));
            for(let index = 0; index < array.length; index++) {
                let m = array[index];
                {
                }
            }
        }
    }

    public async initIt18Iterable_2(signal: Signal, station: Station) {
        if (!await signal.containsObserver(this)){
            await signal.addObserver(this);
        }
        await this.initIt18Iterable(signal, station);
    }

    async initIt17Iterable(station: Station) {
        {
            let array = (await GemListUtil.toArraySync(await station.getSignalsList()));
            for(let index = 0; index < array.length; index++) {
                let signal = array[index];
                {
                    await this.initIt18Iterable_2(signal, station);
                }
            }
        }
    }

    public async initIt17Iterable_1(station: Station) {
        if (!await station.containsObserver(this)){
            await station.addObserver(this);
        }
        await this.initIt17Iterable(station);
    }

    async initIt16Iterable() {
        {
            let array = (await GemListUtil.toArraySync(await this.getStations()));
            for(let index = 0; index < array.length; index++) {
                let station = array[index];
                {
                    await this.initIt17Iterable_1(station);
                }
            }
        }
    }

    async initGemTableHeader15Cols_0() {
        const tmp_$: Array<string> = <any>([]);
        /* add */(tmp_$.push("Station")>0);
        /* add */(tmp_$.push("Signal")>0);
        /* add */(tmp_$.push("Category")>0);
        /* add */(tmp_$.push("Topic")>0);
        /* add */(tmp_$.push("Value")>0);
        /* add */(tmp_$.push("Timestamp")>0);
        /* add */(tmp_$.push("Latency (ms)")>0);
        this.gemTableHeader15Cols_0 = tmp_$;
        await this.initIt16Iterable();
    }

    async initExportTo() {
        if (!this._exportToSetExternally){
        }
        await this.initGemTableHeader15Cols_0();
    }

    async initExportFrom() {
        if (!this._exportFromSetExternally){
        }
        await this.initExportTo();
    }

    async initExportDialogOpen() {
        if (!this._exportDialogOpenSetExternally){
            this.setExportDialogOpen(false);
        }
        await this.initExportFrom();
    }

    async initStations() {
        if (!this._stationsSetExternally){
            this._stations = (await GemListUtil.toArraySync(await FactoryDigitalTwinManager.getStationList()));
        }
        await this.initExportDialogOpen();
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
SignalOverviewTOP["__class"] = "gui.SignalOverviewTOP";
SignalOverviewTOP["__interfaces"] = ["factorydigitaltwin.FactoryDigitalTwinObserver","factorydigitaltwin.SignalObserver","factorydigitaltwin.StationObserver"];





import { SignalCategory } from 'factorydigitaltwin/SignalCategory';


import { StationState } from 'factorydigitaltwin/StationState';


import { StationType } from 'factorydigitaltwin/StationType';

