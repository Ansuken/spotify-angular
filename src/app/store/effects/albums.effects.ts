import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { 
    getAlbumsByArtist,
    getAlbumsByArtistSuccess,
    getAlbumsByArtistError,
    getAlbum,
    getAlbumSuccess,
    getAlbumError,
    getNewReleases,
    getNewReleasesSuccess,
    getNewReleasesError
} from '../actions';
import { AlbumsService } from '../../shared/services';

@Injectable()
export class AlbumsEffects {

    constructor(
        private actions$: Actions,
        private albumsService: AlbumsService
    ){}

    getAlbums$ = createEffect(
        () => this.actions$.pipe(
            ofType( getAlbumsByArtist ),
            mergeMap(
                (action) => this.albumsService.getAlbumsByArtist(action.artist)
                    .pipe(
                        map( albums => getAlbumsByArtistSuccess({ albums }) ),
                        catchError( err => of(getAlbumsByArtistError({ payload: err })) )
                    )
            )
        )
    );

    getAlbum$ = createEffect(
        () => this.actions$.pipe(
            ofType( getAlbum ),
            mergeMap(
                (action) => this.albumsService.getAlbum(action.id)
                    .pipe(
                        map( album => getAlbumSuccess({ album }) ),
                        catchError( err => of(getAlbumError({ payload: err })) )
                    )
            )
        )
    );

    getNewReleases$ = createEffect(
        () => this.actions$.pipe(
            ofType( getNewReleases ),
            mergeMap(
                (action) => this.albumsService.getNewReleases(action.country)
                    .pipe(
                        map( newReleases => getNewReleasesSuccess({ newReleases }) ),
                        catchError( err => of(getNewReleasesError({ payload: err })) )
                    )
            )
        )
    );
}