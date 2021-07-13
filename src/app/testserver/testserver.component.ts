
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testserver',
    templateUrl: './testserver.component.html',
    styleUrls: ['./testserver.component.css']
})

export class TestserverComponent implements OnInit {
    constructor() { }

    serverName: string;
    serverProgress: string;
    server = Math.random();
    serverInput(event: any): any {
        this.serverName = event.target.value;
    }
    serverState(): any {
        this.serverProgress = this.serverName;
    }

    ngOnInit() { }
}