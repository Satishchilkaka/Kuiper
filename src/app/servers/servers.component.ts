import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

    allowToCreateNewServer = true;

constructor() {
    setTimeout(() => {
       this.allowToCreateNewServer = false;
    }, 2000);

}

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
