
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testserver',
    templateUrl: './testserver.component.html',
    styleUrls: ['./testserver.component.css']
})

export class TestserverComponent implements OnInit {
    constructor() { }

    serverName: string;
    serverInput(event: any): any {
        this.serverName = event.target.value;

    }


    ngOnInit() { }
}