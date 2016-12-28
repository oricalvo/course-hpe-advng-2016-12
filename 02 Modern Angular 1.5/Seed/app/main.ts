import * as angular from "angular";
import {AppComponent} from "./components/app.component";
import {appModule} from "./app.module";
import {ClockComponent} from "./components/clock.component";

AppComponent;
ClockComponent;

angular.bootstrap(document.getElementById("html"), [appModule.name]);
