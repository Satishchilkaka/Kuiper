import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInput: string;
  userName: string;
  constructor() { }
  enteredUserName(event: any): any {
    this.userInput = event.target.value;
    // console.log(event.target.value);
  }
  addUser(): any {
    this.userName = this.userInput;
  }

  ngOnInit(): void {
  }

}
