class AppComponent {
    constructor() {
        this.clockFormat = "ss";
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