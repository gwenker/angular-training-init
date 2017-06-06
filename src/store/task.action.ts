import { Action } from '@ngrx/store';
import { Task } from '../model/Task';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 * 
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique. 
 */
export const ActionTypes = {
    ARCHIVE: '[Task] Archive task',
    ADD_TASK: '[Task] Add task',
    ADD_TASKS: '[Task] Add tasks',
    SET_FILTER: '[Task] Set filter',
    INIT_TASKS: '[Task] Init tasks list'
};


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 * 
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class Archive implements Action {
    type = ActionTypes.ARCHIVE;
    constructor(public payload: Task) { }
}

export class AddTask implements Action {
    type = ActionTypes.ADD_TASK;
    constructor(public payload: Task) { }
}

export class AddTasks implements Action {
    type = ActionTypes.ADD_TASKS;
    constructor(public payload: Task[]) { }
}

export class SetFilter implements Action {
    type = ActionTypes.SET_FILTER;
    constructor(public payload: string) { }
}

export class InitTask implements Action {
    type = ActionTypes.INIT_TASKS;
    constructor() { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = Archive |
    AddTask |
    AddTasks |
    SetFilter |
    InitTask
    ;
