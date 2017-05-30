import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tab-archive',
    templateUrl: './tabArchive.component.html'
})
export class TabArchiveComponent {

    @Input()
    private search: string;

}
