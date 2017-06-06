import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/';
import * as taskActions from '../../store/task.action';

import { Task } from '../../model/Task';

@Component({
    selector: 'app-list-task-archive',
    templateUrl: './listTaskArchive.component.html',
    styleUrls: ['./listTaskArchive.component.css']
})
export class ListTaskArchiveComponent {

    @Input()
    private tasks: Task[];

    @Input()
    private search: string;
}
