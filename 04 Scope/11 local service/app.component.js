class AppComponent {
    constructor() {
        this.clockFormat = "ss";

        this.$injector = angular.injector([function($provide) {
            $provide.factory("dataService", function() {
                return {
                    run: function() {
                    }
                }
            });
        }]);
    }

    changeFormat() {
        this.clockFormat = "HH:mm:ss";
    }

    onClockTick($event) {
        console.log("Tick:", $event);
    }
}

appModule.component("myApp", {
    controller: AppComponent,
    templateUrl: "app.component.html",
})