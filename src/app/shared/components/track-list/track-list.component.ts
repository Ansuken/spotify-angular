import { Component, Input } from '@angular/core';

@Component({
    selector: 'shared-track-list',
    templateUrl: './track-list.component.html',
    styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent {

    @Input()
    public tracklist!: any;
    @Input()
    public type: string = 'album';
    
    public msToTime(duration: number) {
        let seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60);
        return ((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds);
    }
}
