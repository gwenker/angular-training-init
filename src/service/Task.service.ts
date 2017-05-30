import { Task } from '../model/Task';

export class TaskService {

    public tasks: Task[];

    constructor() {
        this.tasks = this.init();
    }

    private init(): Task[] {
        this.tasks = new Array();
        this.addTask(new Task('MyFirstTask'));
        this.addTask(new Task('MySecondTask'));
        return this.tasks;
    }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public addTask(task: Task): Task[] {
        task.id = this.tasks.length;
        this.tasks = this.tasks.concat(task);
        return this.tasks;
    }

}
