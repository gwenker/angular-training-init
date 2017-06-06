import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/do';

import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { Http, Response } from '@angular/http';

import * as taskAction from './task.action';

import { Task } from '../model/task';


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class TaskEffects {

    /**
     * Effect initTaskList$
     * 
     * Allows to init task list with a json
     * Trigger by :  INIT_TASKS
     * Dispatch : ADD_TASKS
     */
    @Effect()
    initTaskList$: Observable<Action> = this.actions$
        .ofType(taskAction.ActionTypes.INIT_TASKS)
        .switchMap(() => {
            return this.http.get('assets/data/tasks.json')
                .map(res => new taskAction.AddTasks(res.json().data));
        });

    constructor(private actions$: Actions, private http: Http) { }
}
