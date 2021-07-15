import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId = Math.random() * 7;
  serverStatus = 'offline';
  servers = ['one', 'two', 'three'];

  getServerStatus(): any {
    return this.serverStatus;
  }
  getServerId(): any {
    return this.serverId;
  }
}
