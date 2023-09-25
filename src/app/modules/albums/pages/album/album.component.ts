import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../../../../app/interfaces';
import { AppState } from '../../../../../app/store/app.reducers';
import { getAlbum } from '../../../../../app/store/actions';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent {

    public album: Album = {
        album_type: '',
        artists: [],
        available_markets: [],
        copyrights: [],
        external_ids: {
            upc: ''
        },
        external_urls: {
            spotify: ''
        },
        genres: [],
        href: '',
        id: '',
        images: [],
        label: '',
        name: '',
        popularity: 0,
        release_date: '',
        release_date_precision: '',
        total_tracks: 0,
        tracks: {
            href: '',
            items: [],
            limit: 0,
            next: null,
            offset: 0,
            previous: null,
            total: 0
        },
        type: '',
        uri: ''
    };

    public albumId: string = '';

    constructor( private store: Store<AppState>,
        private route: ActivatedRoute ) {
            this.route.paramMap.subscribe( paramMap => {
            this.albumId = paramMap.get('id')!;
            this.getAlbumCollection();
        });
    }

    ngOnInit(): void {
        this.store.select('album').subscribe( ( album ) => {
            if ( !album ) return;
            this.album = album;
        });
    }

    getAlbumCollection(): void {
        this.store.dispatch( getAlbum({id: this.albumId}) );
    }
}
