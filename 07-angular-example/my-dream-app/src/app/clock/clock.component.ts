import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: string;
  @Input() city: string;
  @Input() borderRadius: string;
  constructor() {
    this.setTime();
    setInterval(() => this.setTime(), 1000);
  }

  setTime() {
    const time = new Date();
    this.time = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
  }

  ngOnInit() {
  }

}
