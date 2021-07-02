import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

    allowToCreateNewServer = true;
    isUnchanged = false;
    condition: true;
  

constructor() {
    setTimeout(() => {
       this.allowToCreateNewServer = false;
    }, 2000);

   
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
      const saveTo = document.getElementById('saveButton') as HTMLAnchorElement;
     // saveTo = false
   // this.allowToCreateNewServer = false;
  }
  //allowButton = this.toggleDisabled();
    ngOnInit(): void {
       // throw new Error('Method not implemented.');
    }
}


