import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  userName: string;
  userStatus = 'User not created';

  addUser(event: any): any {
    this.userName = event.target.value;
  }
  createUser(): any {
    this.userStatus = 'User name: ' + this.userName + ' created !!! ';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
