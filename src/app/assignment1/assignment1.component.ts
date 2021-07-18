import { Component, OnInit } from '@angular/core';

import * as dayjs from 'dayjs';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  constructor() { }
  toggle = false;
  password: string;
  text = 'This is text';
  clcikLogs = [];
  count = 0;
  details(): any {
    this.toggle = !this.toggle;
    this.clcikLogs.push(new Date());
  }
  showClicks(): any {

  }
  dateTime(): any {
    return dayjs();
  }
  getColor(): any {
    // this.clcikLogs.length >= 5 ? 'red' : 'green';
  }

  ngOnInit(): void {
  }

}
