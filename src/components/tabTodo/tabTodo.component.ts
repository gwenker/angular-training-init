import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../../store/';

import { Task } from '../../model/Task';

@Component({
    selector: 'app-tab-todo',
    templateUrl: './tabTodo.component.html',
    styleUrls: ['./tabTodo.component.css']
})
export class TabTodoComponent implements OnInit, OnDestroy {

    private tasks: Task[];
    private tasksObs: Observable<Task[]>;

    private search: string;
    private searchObs: Observable<string>;

    // object used to memorize subscription list and unsubscribe them when onDestroy is called
    private subscription: Subscription = new Subscription();

    constructor(private store: Store<fromRoot.State>) {
        this.tasksObs = store.select(fromRoot.getTasksTodo);
        this.searchObs = store.select(fromRoot.getFilterTask);
    }

    ngOnInit() {
        // Subscribe to site store
        this.subscription.add(this.tasksObs.subscribe((tasks) => {
            this.tasks = tasks;
        }));

        // Subscribe to site store
        this.subscription.add(this.searchObs.subscribe((filter) => {
            this.search = filter;
        }));
    }

    ngOnDestroy() {
        // unsubscribe every subscriptions
        this.subscription.unsubscribe();
    }

}
