import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class SubscriberComponent implements OnDestroy {
    readonly subscription: Subscription = new Subscription();

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
