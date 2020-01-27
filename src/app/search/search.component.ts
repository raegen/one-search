import { Component } from '@angular/core';
import { Provider } from 'shared/provider';
import { StateService } from 'shared/state.service';
import { SubscriberComponent } from 'shared/subscriber.component';

@Component({
    selector: 'one-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent extends SubscriberComponent {
    Provider = Object.keys(Provider);

    constructor(public stateService: StateService) {
        super();
    }

    onActivate({ provider }) {
        this.stateService.state.provider$.next(provider);
    }
}
