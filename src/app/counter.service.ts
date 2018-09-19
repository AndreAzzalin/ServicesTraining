import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    countActive: number;
    countInactive: number;
    /* event emitter classe che estende observable */
    counterConsole = new EventEmitter<number>();

    constructor(private userService: UserService) {
    }

    toConsole() {
        this.countActive = this.userService.activeUsers.length;
        this.countInactive = this.userService.inactiveUsers.length;
        console.log('---------------------------------');
        console.log('Count active = ' + this.countActive);
        console.log('Count inactive = ' + this.countInactive);
        console.log('---------------------------------');
    }
}
