import {Component, ViewChild} from '@angular/core';
import {ClockComponent} from "./clock.component";

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: "app.component.html",
})
export class AppComponent  {
  @ViewChild("clock1") clock1: ClockComponent;
  name: string;
  format: string;

  constructor() {
    this.name = "Ori";
    this.format = "HH:mm:ss";
  }

  ngOnInit() {
    console.log("app.onInit");
  }

  ngAfterViewInit() {
    console.log("app.ngAfterViewInit");

    this.clock1.stop();
  }

  onTick() {
    console.log("Tick");
  }

  start() {
    this.clock1.start();
  }

  stop() {
    this.clock1.stop();
  }
}
