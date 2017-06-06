import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/';
import * as taskActions from '../../store/task.action';

import { Task } from '../../model/Task';

@Component({
    selector: 'app-list-task',
    templateUrl: './listTask.component.html',
    styleUrls: ['./listTask.component.css']
})
export class ListTaskComponent {

    @Input()
    private tasks: Task[];

    @Input()
    private search: string;

    constructor(private store: Store<fromRoot.State>) {
    }

    completeTask(task: Task) {
        this.store.dispatch(new taskActions.Archive(task));
    }
}
