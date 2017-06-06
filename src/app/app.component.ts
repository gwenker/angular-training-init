import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/';
import * as taskActions from '../store/task.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: string = String('My Awesome TODO List');
  private selectedTab: string = String('TODO');

  constructor(private store: Store<fromRoot.State>) {
    store.dispatch(new taskActions.InitTask());
  }

  selectTab(name: string) {
    this.selectedTab = name;
  }

}
