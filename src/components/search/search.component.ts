import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/';
import * as taskActions from '../../store/task.action';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    mySearchInputValue: string;

    constructor(private store: Store<fromRoot.State>) {
    }

    get mySearchInput() {
        return this.mySearchInputValue;
    }

    set mySearchInput(val: string) {
        this.mySearchInputValue = val;
        this.store.dispatch(new taskActions.SetFilter(val));
    }
}
