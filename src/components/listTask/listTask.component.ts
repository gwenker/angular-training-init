import { Component, Input } from '@angular/core';

import { Task } from '../../model/Task';

import { TaskService } from '../../service/Task.service';

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
}
