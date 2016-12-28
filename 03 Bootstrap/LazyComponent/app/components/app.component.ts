import {appModule} from "../app.module";

export class AppComponent {
    clockLoaded: boolean;

    constructor(private $scope) {
        this.clockLoaded = false;
    }

    load() {
        SystemJS.import("/app/components/clock.component").then(()=> {
            console.log("DONE");

            this.$scope.$apply(() => {
                this.clockLoaded = true;
            });
        });
    }
}

appModule.component("myApp", <any>{
	controller: AppComponent,
	template: require("./app.component.html!text"),
    styles: require("./app.component.css!css"),
});
