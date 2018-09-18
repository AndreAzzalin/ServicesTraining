import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
    users: string[] = [];
    @Output() userSetToInactive = new EventEmitter<number>();

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.users = this.userService.inactiveUsers;
    }

    onSetToInactive(id: number) {
        this.userService.onSetToInactive(id);
    }
}
