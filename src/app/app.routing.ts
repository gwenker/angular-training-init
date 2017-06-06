import { RouterModule, Routes, Resolve } from '@angular/router';

import { TabTodoComponent } from '../components/tabTodo/tabTodo.component';
import { TabArchiveComponent } from '../components/tabArchive/tabArchive.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'todoTab', pathMatch: 'full'
    },
    {
        path: 'todoTab', component: TabTodoComponent
    },
    {
        path: 'archiveTab', component: TabArchiveComponent
    }
];