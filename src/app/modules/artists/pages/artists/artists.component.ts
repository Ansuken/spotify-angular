import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../store/app.reducers';
import { artists } from '../../../../../data/artists-data';
import { Artists } from '../../../../../app/interfaces';
import { getArtists } from '../../../../../app/store/actions';

@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
    public artistsCollection: Artists = artists;
    public artistType: string = 'artist';

    constructor( private store: Store<AppState> ) {
        this.getFollowedArtistsCollection(this.artistType );
    }

    ngOnInit(): void {
        this.store.select('artists').subscribe( ( artists ) => {
            this.artistsCollection = artists;
        });
    }

    getFollowedArtistsCollection( artistType: string ): void {
        this.store.dispatch( getArtists({artistType}) );
    }
}
