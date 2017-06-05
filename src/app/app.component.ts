import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: string = String('My Awesome TODO List');
  private mySearchInput: string;
  private selectedTab: string = String('TODO');

  selectTab(name: string) {
    this.selectedTab = name;
  }

}
