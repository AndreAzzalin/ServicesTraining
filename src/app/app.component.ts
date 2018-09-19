import {Component} from '@angular/core';
import {CounterService} from './counter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CounterService]
})
export class AppComponent {

    constructor(private counterService: CounterService) {
        /* subscribe -> observer alla modifica della variabile id esegui la funzione toConsole*/
        this.counterService.counterConsole.subscribe((id: number) => this.counterService.toConsole());
    }
}
