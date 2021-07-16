import { Component, OnInit } from '@angular/core';

import * as dayjs from 'dayjs';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  users = ['user1', 'user2', 'user3'];
  constructor() { }
  password: string;
  details(): any {
    this.password = 'This is new password';

  }
  dateTime(): any {
    return dayjs();

  }
  ngOnInit(): void {
  }

}
