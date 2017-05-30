import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TaskService } from '../service/Task.service';

import { SearchFilterPipe } from '../pipes/SearchFilter.pipe';

import { AppComponent } from './app.component';
import { SearchComponent } from '../components/search/search.component';
import { TabTodoComponent } from '../components/tabTodo/tabTodo.component';
import { TabArchiveComponent } from '../components/tabArchive/tabArchive.component';
import { AddTaskComponent } from '../components/addTask/addTask.component';
import { ListTaskComponent } from '../components/listTask/listTask.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TabTodoComponent,
    TabArchiveComponent,
    AddTaskComponent,
    ListTaskComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
