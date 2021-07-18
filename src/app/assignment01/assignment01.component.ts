import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment01',
  templateUrl: './assignment01.component.html',
  styleUrls: ['./assignment01.component.css']
})
export class Assignment01Component implements OnInit {
  inputFieldText: string;
  inputDetails: string;
  toggle = true;
  constructor() { }
  inputText(event: any): any {
    this.inputFieldText = event.target.value;
    console.log(event.target.value);
  }
  iDetails(): any {
    this.inputDetails = this.inputFieldText;
  }
  toggleDetails(): any {
    this.toggle = !this.toggle;
  }
  ngOnInit(): void {
  }

}
