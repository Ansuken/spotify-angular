import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../store/app.reducers';
import { getPlaylists, getPlaylistsByUsername } from '../../../../store/actions';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {
    public playlists: any = {
        playlists: {}
    };
    public usernamePlaylists: any = {
        playlists: {}
    }
    public limit: number = 10;
    public offset: number = 0;

    public username: string = 'ansuken';

    constructor( private store: Store<AppState> ) {
        this.getPlaylistsCollection(this.limit || 10, this.offset || 0);
        this.getUsernamePlaylistsCollection(this.username);
    }

    ngOnInit(): void {
        this.store.select('playlists').subscribe( ( playlists ) => {
            this.playlists = playlists;
        });

        this.store.select('usernamePlaylists').subscribe( ( playlists ) => {
            this.usernamePlaylists = playlists;
        });
    }

    getPlaylistsCollection( limit: number, offset: number ): void {
        this.store.dispatch( getPlaylists({limit, offset}) );
    }

    getUsernamePlaylistsCollection( username: string ): void {
        this.store.dispatch( getPlaylistsByUsername({username}) );
    }
}
