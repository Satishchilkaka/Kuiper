import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowToCreateNewServer = true;

  serverStatus = 'Server not created';
  toggleStatus = 'Toggle not enabled';

  isUnchanged = false;
  serverName: number;

  constructor() {
    setTimeout(() => {
      this.allowToCreateNewServer = false;
    }, 2000);


  }


  addUpdateServerName(event: any): any {
    this.serverName = event.target.value;
    console.log(event.target.value);
  }
  createServer(): any {
    this.serverStatus = 'Server name: ' + this.serverName + ' created ';
  }

  toggleEnable(): any {
    this.toggleStatus = 'Toggle enabled';
  }



  toggleDisabled(): any {

    const testButton = document.getElementById('testButton') as HTMLInputElement;
    testButton.disabled = !testButton.disabled;

    return testButton.disabled;
  }
  clickEnable(): any {
    const saveButton = document.getElementById('saveButton') as HTMLAnchorElement;
    // saveButton.disabled = !saveButton.disabled;
    // this.allowToCreateNewServer = false;
  }
  // allowButton = this.toggleDisabled();
  ngOnInit(): void {
    this.allowToCreateNewServer = false;
  }
}


