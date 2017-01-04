class CounterComponent {
    constructor() {
    }
}

appModule.component("myCounter", {
    controller: CounterComponent,
    templateUrl: "counter.component.html",
    bindings: {
        "value": "<",
    }
})