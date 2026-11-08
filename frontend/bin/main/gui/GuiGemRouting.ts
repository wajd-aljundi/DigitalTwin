
import { Route } from "@angular/router";
  import { AlarmOverview } from "./AlarmOverviewComponent";
  import { PrognosisOverview } from "gui/PrognosisOverview";
  import { SignalOverview } from "gui/SignalOverview";
  import { Start } from "gui/Start";


export const routes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "AlarmOverview"
  },
  {
    path: "AlarmOverview",
    component: AlarmOverview
  },
  {
    path: "PrognosisOverview",
    component: PrognosisOverview
  },
  {
    path: "SignalOverview",
    component: SignalOverview
  },
  {
    path: "Start",
    component: Start
  },
]
