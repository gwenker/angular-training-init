import { Component, Output, EventEmitter } from '@angular/core';

import { Task } from '../../model/Task';

import { TaskService } from '../../service/Task.service';

@Component({
    selector: 'app-add-task',
    templateUrl: './addTask.component.html',
    styleUrls: ['./addTask.component.css']
})
export class AddTaskComponent {
    private taskName: string;

    @Output()
    private addTaskEvent: EventEmitter<string> = new EventEmitter();

    constructor(private taskService: TaskService) { }

    addTask() {
        if (this.taskName) {
            this.taskService.addTask(new Task(this.taskName));
            this.addTaskEvent.emit(this.taskName);
            console.log('Add task');
        }
    }
}
