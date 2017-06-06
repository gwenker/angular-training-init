import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';


/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromTask from './task.reducer';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    tasks: fromTask.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
    tasks: fromTask.reducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects state.
 *
 * Selectors are used with the `select` operator to subsrcibe to state
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.stateExempleState$ = state$.select(stateExemple);
 * 	}
 * }
 * ```
 */
export const getTaskState = (state: State) => state.tasks;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our compose function comes in handy. From right to left, we
 * first select the state then we pass the state to the reducer's
 * the selector of ressource, finally returning an observable
 * of search results.
 *
 * Share memoizes the selector functions and publishes the result. This means
 * every time you call the selector, you will get back the same result
 * observable. Each subscription to the resultant observable
 * is shared across all subscribers.
 */
export const getTasksArchive = createSelector(getTaskState, fromTask.getTasksArchive);
export const getTasksTodo = createSelector(getTaskState, fromTask.getTasksTodo);
export const getFilterTask = createSelector(getTaskState, fromTask.getFilter);
