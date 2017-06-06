import { createSelector } from 'reselect';
import { Task } from '../model/Task';
import * as taskActions from './task.action';

export interface State {
    tasksArchive: Task[];
    tasksTodo: Task[];
    filter: string;
};

const initialState: State = {
    tasksArchive: [],
    tasksTodo: [],
    filter: ''
};

export function reducer(state = initialState, action: taskActions.Actions): State {
    switch (action.type) {
        case taskActions.ActionTypes.ADD_TASKS: {
            return {
                tasksArchive: [],
                tasksTodo: (<taskActions.AddTasks>action).payload,
                filter: state.filter
            };
        }
        case taskActions.ActionTypes.ADD_TASK: {
            const taskToAdd: Task = (<taskActions.AddTask>action).payload;
            taskToAdd.id = state.tasksTodo.length;
            return {
                tasksArchive: state.tasksArchive,
                tasksTodo: state.tasksTodo.concat(taskToAdd),
                filter: state.filter
            };
        }
        case taskActions.ActionTypes.ARCHIVE: {
            const taskToArchive: Task = (<taskActions.Archive>action).payload;
            const index = state.tasksTodo.indexOf(taskToArchive);
            state.tasksTodo.splice(index, 1);
            return {
                tasksArchive: state.tasksArchive.concat((<taskActions.Archive>action).payload),
                tasksTodo: state.tasksTodo,
                filter: state.filter
            };
        }
        case taskActions.ActionTypes.SET_FILTER: {
            return {
                tasksArchive: state.tasksArchive,
                tasksTodo: state.tasksTodo,
                filter: (<taskActions.SetFilter>action).payload
            };
        }
        default: {
            return state;
        }
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
export const getTasksArchive = (state: State) => state.tasksArchive;
export const getTasksTodo = (state: State) => state.tasksTodo;
export const getFilter = (state: State) => state.filter;
