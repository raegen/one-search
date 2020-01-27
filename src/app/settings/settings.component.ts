import { Component } from '@angular/core';
import { StateService } from 'shared/state.service';
import { Theme } from 'shared/theme';

@Component({
    selector: 'one-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    Theme = Object.keys(Theme);

    constructor(public stateService: StateService) {
    }
}
