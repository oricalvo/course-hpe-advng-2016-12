import * as angular from "angular";
import {AppComponent} from "./components/app.component";
import {appModule} from "./app.module";
import {ClockComponent} from "./components/clock.component";

AppComponent;
//ClockComponent;

appModule.config(function($compileProvider) {
    appModule.component = function () {
        return $compileProvider.component.apply($compileProvider, arguments);
    }
});

angular.bootstrap(document.getElementById("html"), [appModule.name]);
