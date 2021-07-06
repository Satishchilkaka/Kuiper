import { Component } from "@angular/core";


@Component({
    selector: 'app-warning',
    templateUrl: './warning.component.html',
    styleUrls: ['./warning.component.css']
})

export class WarningComponent {

    userName: string;
    userStatus = 'User not created';
    userCreated = false;
    addUser(event: any): any {

        this.userName = event.target.value;

    }

    createUser(): any {
        this.userCreated = true;
        this.userStatus = 'User: ' + this.userName + ' created';
    }

}