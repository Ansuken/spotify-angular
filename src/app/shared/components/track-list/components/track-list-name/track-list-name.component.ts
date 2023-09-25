import { Component, Input } from '@angular/core';

@Component({
    selector: 'track-list-name',
    templateUrl: './track-list-name.component.html',
    styleUrls: ['./track-list-name.component.scss']
})
export class TrackListNameComponent {
    @Input()
    public track: any = {};
}
