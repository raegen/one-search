import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Provider } from './provider';
import { Theme } from './theme';

@Injectable()
export class StateService {
    state = {
        search$: new BehaviorSubject('').pipe(distinctUntilChanged()) as BehaviorSubject<string>,
        theme$: new BehaviorSubject(Theme.light).pipe(distinctUntilChanged()) as BehaviorSubject<Theme>,
        provider$: new BehaviorSubject(Provider.bing).pipe(distinctUntilChanged()) as BehaviorSubject<Provider>
    };
}
