import { Pipe, PipeTransform } from '@angular/core';

import { Task } from '../model/Task';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
    transform(tasks: Task[], search: string) {
        if (search) {
            return tasks.filter(task => task.name.indexOf(search) >= 0);
        } else {
            return tasks;
        }
    }
}
