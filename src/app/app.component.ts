import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: String = 'My Awesome TODO List';
  private mySearchInput: String;
  private selectedTab: String = 'TODO';

  selectTab(name: String) {
    this.selectedTab = name;
  }

}
