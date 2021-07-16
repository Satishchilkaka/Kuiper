import { Component, OnInit } from '@angular/core';

import * as dayjs from 'dayjs';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  constructor() { }
  users = ['user1', 'user2', 'user3'];
  today = new Date();
  toggle = true;
  password: string;
  text = 'This is text';
  count = 0;
  details(): any {
    this.toggle = !this.toggle;
    return this.count++;

  }
  dateTime(): any {
    return dayjs();
  }
  getColor(): any {
    return this.count >= 5 ? 'red' : 'green';
  }

  ngOnInit(): void {
  }

}
