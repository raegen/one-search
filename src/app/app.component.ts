import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from 'shared/state.service';
import { Provider } from './shared/provider';
import { SubscriberComponent } from './shared/subscriber.component';

@Component({
    selector: 'one-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends SubscriberComponent {
    title = 'One Search';

    constructor(public stateService: StateService, private overlayContainer: OverlayContainer) {
        super();
        this.subscription.add(
            this.stateService.state.theme$.subscribe(
                theme => this.overlayContainer.getContainerElement().setAttribute('theme', theme)
            )
        );
    }
}
