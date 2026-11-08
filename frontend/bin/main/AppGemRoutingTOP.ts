
import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "gui"
  },
  {
    path: "gui",
    loadChildren: () => import("./gui/GuiGemRouting").then(m => m.routes)
  },
];