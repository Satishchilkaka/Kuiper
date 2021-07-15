import { createDirectiveDefinitionMap } from '@angular/compiler/src/render3/partial/directive';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverName: string;
  serverNameInput: string;
  servers = ['OneServer', 'twoServer', 'ThreeServer'];
  getServerNameInput(event: any): any {
    this.serverNameInput = event.target.value;
  }

  getServerName(): any {
    this.serverName = 'Server name:' + this.serverNameInput + ' created';
    this.servers.push(this.serverName);
  }


  ngOnInit(): void {
  }

}
