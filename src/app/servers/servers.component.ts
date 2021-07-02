import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

    allowToCreateNewServer = true;

  serverStatus = 'Server not created';
  toggleStatus = 'Toggle not enabled';
  
  isUnchanged = false;

constructor() {
    setTimeout(() => {
       this.allowToCreateNewServer = false;
    }, 2000);

   
}
addServer(): any {
 this.serverStatus = 'Server created !!!';
}

addUpdateServerName(event: any): any {
console.log(event);
}

toggleEnable(): any {
    this.toggleStatus = 'Toggle enabled';
}

working(): any {
    console.warn('Test Button works!');
  }

  toggleDisabled(): any {

    const testButton = document.getElementById('testButton') as HTMLInputElement;
    testButton.disabled = !testButton.disabled;
    console.warn(testButton.disabled);
    return testButton.disabled;
  }
  clickEnable(): any {
      const saveButton = document.getElementById('saveButton') as HTMLAnchorElement;
     // saveButton.disabled = !saveButton.disabled;
   // this.allowToCreateNewServer = false;
  }
  //allowButton = this.toggleDisabled();
    ngOnInit(): void {
        this.allowToCreateNewServer = false;
    }
}


