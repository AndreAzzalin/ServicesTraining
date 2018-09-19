import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UrlSerializer} from '@angular/router';
import {UserService} from '../user.service';
import {CounterService} from '../counter.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css'],

})
export class ActiveUsersComponent implements OnInit {
    users: string[] = [];

    constructor(private userService: UserService, private counterService: CounterService) {
    }

    ngOnInit() {
        this.users = this.userService.activeUsers;
    }

    setToInactive(id: number) {
        this.userService.setToInactive(id);
        /* notify all'observer la modifica del valore id */
        this.counterService.counterConsole.emit(id);
    }
}
