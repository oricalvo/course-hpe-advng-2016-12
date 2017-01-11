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
var ClockComponent = (function () {
    function ClockComponent() {
        this.format = "HH:mm:ss";
        this.time = new Date();
        this.tick = new core_1.EventEmitter();
    }
    ClockComponent.prototype.ngOnInit = function () {
        console.log("clock.onInit");
        this.start();
    };
    ClockComponent.prototype.start = function () {
        var _this = this;
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(function () {
            _this.time = new Date();
            _this.tick.emit();
        }, 1000);
    };
    ClockComponent.prototype.stop = function () {
        if (!this.intervalId) {
            return;
        }
        clearInterval(this.intervalId);
        this.intervalId = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ClockComponent.prototype, "format", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ClockComponent.prototype, "tick", void 0);
    ClockComponent = __decorate([
        core_1.Component({
            selector: 'my-clock',
            moduleId: module.id,
            templateUrl: "clock.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], ClockComponent);
    return ClockComponent;
}());
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=clock.component.js.map