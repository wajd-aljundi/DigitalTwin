/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { GemListUtil } from '@umlp/commonj2ts';

import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

export class AppRouter {
    public static navigateToGuiAlarmOverview(router:Router){
        router.navigate(["gui/AlarmOverview"]);
    }

    public static navigateToGuiPrognosisOverview(router:Router){
        router.navigate(["gui/PrognosisOverview"]);
    }

    public static navigateToGuiSignalOverview(router:Router){
        router.navigate(["gui/SignalOverview"]);
    }

    public static navigateToGuiStart(router:Router){
        router.navigate(["gui/Start"]);
    }
}
AppRouter["__class"] = "app.AppRouter";



