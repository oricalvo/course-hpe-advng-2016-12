"use strict";
var angular = require("angular");
var app_component_1 = require("./components/app.component");
var app_module_1 = require("./app.module");
var clock_component_1 = require("./components/clock.component");
app_component_1.AppComponent;
clock_component_1.ClockComponent;
angular.bootstrap(document.getElementById("html"), [app_module_1.appModule.name]);
//# sourceMappingURL=main.js.map