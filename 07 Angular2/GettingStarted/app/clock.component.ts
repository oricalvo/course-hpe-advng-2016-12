import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'my-clock',
  moduleId: module.id,
  templateUrl: "clock.component.html",
})
export class ClockComponent  {
  private intervalId: any;

  time: Date;
  @Input() format: string;
  @Output() tick: EventEmitter<void>;

  constructor() {
    this.format = "HH:mm:ss";
    this.time = new Date();
    this.tick = new EventEmitter<void>();
  }

  ngOnInit() {
    console.log("clock.onInit");

    this.start();
  }

  start() {
    if(this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.time = new Date();

      this.tick.emit();
    }, 1000);
  }

  stop() {
    if(!this.intervalId) {
      return;
    }

    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}
