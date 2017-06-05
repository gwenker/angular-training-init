import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: string = "My Awesome TODO List";
  private mySearchInput: String;
  private selectedTab: string = String('TODO');

  selectTab(name: string) {
    this.selectedTab = name;
  }

}
