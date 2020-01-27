import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { StateService } from 'shared/state.service';
import { SubscriberComponent } from './../../shared/subscriber.component';

export const CHANGE_DEBOUNCE = 500;

@Component({
    selector: 'one-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent extends SubscriberComponent {
    debounce$ = new Subject<string>();
    constructor(public stateService: StateService) {
        super();
        this.subscription.add(
            this.debounce$.pipe(debounceTime(CHANGE_DEBOUNCE)).subscribe(
                search => stateService.state.search$.next(search)
            )
        );
    }
}
