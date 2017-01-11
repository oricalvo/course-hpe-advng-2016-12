"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var clock_component_1 = require("./clock.component");
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Ori";
        this.format = "HH:mm:ss";
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("app.onInit");
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log("app.ngAfterViewInit");
        this.clock1.stop();
    };
    AppComponent.prototype.onTick = function () {
        console.log("Tick");
    };
    AppComponent.prototype.start = function () {
        this.clock1.start();
    };
    AppComponent.prototype.stop = function () {
        this.clock1.stop();
    };
    __decorate([
        core_1.ViewChild("clock1"), 
        __metadata('design:type', clock_component_1.ClockComponent)
    ], AppComponent.prototype, "clock1", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map