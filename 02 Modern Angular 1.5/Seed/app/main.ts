import * as angular from "angular";
import {AppComponent} from "./components/app.component";
import {appModule} from "./app.module";

AppComponent;

angular.bootstrap(document.getElementById("html"), [appModule.name]);