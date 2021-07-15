import { Component, OnInit } from '@angular/core';

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
  servers = ['ServerOne, ServerTwo, ServerThree'];
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
    this.servers.push(this.serverName);
    this.serverName = this.userInput;
  }
  getColor(): any {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  ngOnInit(): void {
  }

}
