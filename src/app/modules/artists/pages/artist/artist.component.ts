import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Artist, Albums } from '../../../../../app/interfaces';
import { AppState } from '../../../../../app/store/app.reducers';
import { getAlbumsByArtist, getArtist } from '../../../../../app/store/actions';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
    public data: Artist = {
        external_urls: {
            spotify: ''
        },
        followers: {
            href: null,
            total: 0
        },
        genres: [],
        href: '',
        id: '',
        images: [],
        name: '',
        popularity: 0,
        type: '',
        uri: ''
    };
    public albums: Albums = {
        href: '',
        items: [],
        limit: 0,
        next: '',
        offset: 0,
        previous: null,
        total: 0
    };

    public artist: any;

    public artistId: string = '';

    constructor( private store: Store<AppState>,
                 private route: ActivatedRoute ) {
        this.route.paramMap.subscribe( paramMap => {
            this.artistId = paramMap.get('id')!;
            this.getArtist();
            this.getAlbums();
        });
    }

    ngOnInit(): void {
        this.store.select('artist').subscribe( ( artist ) => {
            if ( !artist ) return;
            this.artist = artist;
        });

        this.store.select('albums').subscribe( ( albums ) => {
            if ( !albums ) return;
            this.albums = albums;
        });
    }

    getArtist(): void {
        this.store.dispatch( getArtist({id: this.artistId}) );
    }

    getAlbums(): void {
        this.store.dispatch( getAlbumsByArtist({artist: this.artistId}) );
    }
}
