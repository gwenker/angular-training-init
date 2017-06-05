import { Component, Input } from '@angular/core';

import { Task } from '../../model/Task';

import { TaskService } from '../../service/Task.service';

@Component({
    selector: 'app-tab-todo',
    templateUrl: './tabTodo.component.html',
    styleUrls: ['./tabTodo.component.css']
})
export class TabTodoComponent {

    @Input()
    private search: string;

    private tasks: Task[];

    constructor(private taskService: TaskService) {
        this.tasks = taskService.getTasks();
    }

    refreshListTask(event) {
        console.log('Refresh list');
        this.tasks = this.taskService.getTasks();
    }

}
