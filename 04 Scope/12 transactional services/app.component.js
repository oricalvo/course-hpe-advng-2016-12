class AppComponent {
    constructor(appStore, service1, service2) {
        this.clockFormat = "ss";
        this.service1 = service1;
        this.service2 = service2;
        this.appStore = appStore;

        this.counter = this.appStore.get().state1.counter;;
    }

    applyChanges() {
        var appState = this.appStore.get();
        var state1 = this.service1.reset(appState.state1);
        var state2 = this.service2.reset(appState.state2);
        this.appStore.set({
            state1: state1,
            state2: state2,
        });
    }
}

appModule.component("myApp", {
    controller: AppComponent,
    templateUrl: "app.component.html",
})