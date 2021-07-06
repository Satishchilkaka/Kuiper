import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  userName: string;
  userState: string;
  userCreateState = false;

  userInput(event: any): any {
    this.userName = event.target.value;
  }
  createUser(): any {
    this.userCreateState = true;
    this.userState = 'User Name: ' + this.userName + ' created';
  }

  ngOnInit(): void {
  }

}
