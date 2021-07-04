import { Component } from "@angular/core";


@Component({
    selector: 'app-warning',
    templateUrl: './warning.component.html',
    styleUrls: ['./warning.component.css']
})

export class WarningComponent {

    userName: string;
    userStatus = 'User not created';

    addUser(event: any): any {

        this.userName = event.target.value;

    }

    userCreated(): any {
        this.userStatus = 'User: ' + this.userName + ' created';
    }

}