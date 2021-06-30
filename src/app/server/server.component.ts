import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {

  serverId = Math.random() * 7;
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
  getServerId () {
    return this.serverId;
  }
}
