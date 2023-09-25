import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../store/app.reducers';
import { getNewReleases, getPlaylists } from '../../../../store/actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public playlists: any = {
        playlists: {}
    };

    public newReleases: any = {
        albums: {}
    }
    public limit: number = 10;
    public offset: number = 0;

    public country: string = 'ES';

    constructor( private store: Store<AppState> ) {
        this.getPlaylistsCollection(this.limit || 10, this.offset || 0);
        this.getNewReleasesCollection(this.country);
    }

    ngOnInit(): void {
        this.store.select('playlists').subscribe( ( playlists ) => {
            this.playlists = playlists;
        });
        this.store.select('newReleases').subscribe( ( newReleases ) => {
            this.newReleases = newReleases;
        });
    }

    getPlaylistsCollection( limit: number, offset: number ): void {
        this.store.dispatch( getPlaylists({limit, offset}) );
    }

    getNewReleasesCollection( country: string ): void {
        this.store.dispatch( getNewReleases({country}));
    }
}
