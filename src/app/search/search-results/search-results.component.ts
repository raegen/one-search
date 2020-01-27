import { Component } from '@angular/core';
import { Provider } from 'shared/provider';
import { StateService } from 'shared/state.service';

@Component({
    selector: 'one-results',
    template: `
        <ng-container *ngIf="stateService.state.search$ | async"><ng-content></ng-content></ng-container>
    `
})
export class SearchResultsComponent {
    constructor(public stateService: StateService) { }
}

@Component({
    selector: 'one-google-results',
    template: `
        <one-results>
            This is the Google component. You typed <b>{{ stateService.state.search$ | async }}</b>.
        </one-results>
    `
})
export class GoogleSearchResultsComponent {
    provider = Provider.google;
    constructor(public stateService: StateService) { }
}

@Component({
    selector: 'one-bing-results',
    template: `
        <one-results>
            This is the Bing component. You typed <b>{{ stateService.state.search$ | async }}</b>.
        </one-results>
    `
})
export class BingSearchResultsComponent {
    provider = Provider.bing;
    constructor(public stateService: StateService) { }
}
