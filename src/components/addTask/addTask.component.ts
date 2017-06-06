import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/';
import * as taskActions from '../../store/task.action';

import { Task } from '../../model/Task';

@Component({
    selector: 'app-add-task',
    templateUrl: './addTask.component.html'
})
export class AddTaskComponent {
    private taskName: string;

    constructor(private store: Store<fromRoot.State>) { }

    addTask() {
        if (this.taskName) {
            this.store.dispatch(new taskActions.AddTask(new Task(this.taskName)));
        }
    }
}
