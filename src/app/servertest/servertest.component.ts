import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
@Component({
  selector: 'app-servertest',
  templateUrl: './servertest.component.html',
  styleUrls: ['./servertest.component.css']
})
export class ServertestComponent implements OnInit {

  userInput: string;
  serverName: string;
  serverId = 100;
  serverStatus = 'Offline';
  servers = ['ServerOne', 'ServerTwo', 'ServerThree'];
  currentTime = dayjs();
  today = new Date();
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    console.log(this.servers.length);
  }
  getServerStatus(): any {
    return this.serverStatus;
  }

  enteredServerName(event: any): any {
    this.userInput = event.target.value;
  }
  addTestServerName(): any {
    this.serverName = this.userInput;
    this.servers.push(this.serverName);
  }
  getColor(): any {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  ngOnInit(): void {
  }

}
