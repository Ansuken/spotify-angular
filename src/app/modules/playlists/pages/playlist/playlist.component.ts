import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../store/app.reducers';
import { getPlaylist } from '../../../../store/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {
    public playlist: any = {
        playlist: {}
    };

    public playlistId: string = '';
    public tracks!: any;

    constructor( private store: Store<AppState>,
                 private route: ActivatedRoute ) {
        this.route.paramMap.subscribe( paramMap => {
            this.playlistId = paramMap.get('id')!;
            this.getPlaylistsCollection();
        });
    }

    ngOnInit(): void {
        this.store.select('playlist').subscribe( ( playlist ) => {
            if ( !playlist ) return;
            this.playlist = playlist;
            this.tracks = this.playlist.tracks;
        });
    }

    getPlaylistsCollection(): void {
        this.store.dispatch( getPlaylist({id: this.playlistId}) );
    }
}
