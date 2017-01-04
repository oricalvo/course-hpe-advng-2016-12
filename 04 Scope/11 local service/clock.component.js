class ClockComponent {
    constructor($interval, $scope) {
        var dataService = getService($scope, "dataService");

        console.log(this.format);

        this.format = "HH:mm:ss";
        console.log(this.format);

        this.time = new Date();

        $interval(()=> {
            console.log(this.format);

            this.time = new Date();

            var $event = {
                when: new Date(),
                sender: this,
            };

            this.onTick({$event: $event});
        }, 1000);
    }
}

appModule.component("myClock", {
    controller: ClockComponent,
    templateUrl: "clock.component.html",
    bindings: {
        "onTick": "&",
        "format": "<?",
    }
})