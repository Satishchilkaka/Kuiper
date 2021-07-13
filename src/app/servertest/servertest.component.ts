import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servertest',
  templateUrl: './servertest.component.html',
  styleUrls: ['./servertest.component.css']
})
export class ServertestComponent implements OnInit {

  constructor() { }
  userInput: string;
  serverName: string;

  enteredServerName(event: any): any {
    this.userInput = event.target.value;
  }
  addTestServerName(): any {
    this.serverName = this.userInput;
  }

  ngOnInit(): void {
  }

}
