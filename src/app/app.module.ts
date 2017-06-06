import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { SearchFilterPipe } from '../pipes/SearchFilter.pipe';

import { AppComponent } from './app.component';
import { SearchComponent } from '../components/search/search.component';
import { TabTodoComponent } from '../components/tabTodo/tabTodo.component';
import { TabArchiveComponent } from '../components/tabArchive/tabArchive.component';
import { AddTaskComponent } from '../components/addTask/addTask.component';
import { ListTaskComponent } from '../components/listTask/listTask.component';
import { ListTaskArchiveComponent } from '../components/listTaskArchive/listTaskArchive.component';

// ROUTING
// -----------
import { routes } from './app.routing';

// REDUCERS
// -----------
import { reducer } from '../store/';

// EFFECTS
// -----------
import { TaskEffects } from '../store/task.effet';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TabTodoComponent,
    TabArchiveComponent,
    AddTaskComponent,
    ListTaskComponent,
    ListTaskArchiveComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),

    /**
    * Store devtools instrument the store retaining past versions of state
    * and recalculating new states. This enables powerful time-travel
    * debugging.
    *
    * To use the debugger, install the Redux Devtools extension for either
    * Chrome or Firefox
    *
    * See: https://github.com/zalmoxisus/redux-devtools-extension
    */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    EffectsModule.run(TaskEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
