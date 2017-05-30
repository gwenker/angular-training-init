import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    mySearchInputValue: string;

    @Output()
    mySearchInputChange: EventEmitter<string> = new EventEmitter();

    @Input()
    get mySearchInput() {
        return this.mySearchInputValue;
    }

    set mySearchInput(val: string) {
        this.mySearchInputValue = val;
        this.mySearchInputChange.emit(this.mySearchInputValue);
    }
}
