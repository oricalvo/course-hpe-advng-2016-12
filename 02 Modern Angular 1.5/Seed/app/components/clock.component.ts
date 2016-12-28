import {appModule} from "../app.module";
import {ComponentBase} from "./componentBase";

export class ClockComponent extends ComponentBase {
    time: Date;
    intervalId;

    constructor(private $interval, $attrs, $scope) {
        super($attrs, $scope);

        this.time = new Date();

        this.intervalId = $interval(() => {
            this.time = new Date();
        }, 1000);
    }

    stop() {
        console.log("stop");

        if(this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    }
}

appModule.component("myClock", <any>{
	controller: ClockComponent,
	template: require("./clock.component.html!text"),
    styles: require("./clock.component.css!css"),
});
