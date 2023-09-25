import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { 
    getArtists,
    getArtistsSuccess,
    getArtistsError,
    getArtist,
    getArtistSuccess,
    getArtistError
} from '../actions';
import { ArtistsService } from '../../shared/services';

@Injectable()
export class ArtistsEffects {

    constructor(
        private actions$: Actions,
        private artistsService: ArtistsService
    ){}

    getArtists$ = createEffect(
        () => this.actions$.pipe(
            ofType( getArtists ),
            mergeMap(
                (action) => this.artistsService.getFollowedArtists(action.artistType)
                    .pipe(
                        map( artists => getArtistsSuccess({ artists }) ),
                        catchError( err => of(getArtistsError({ payload: err })) )
                    )
            )
        )
    );

    getArtist$ = createEffect(
        () => this.actions$.pipe(
            ofType( getArtist ),
            mergeMap(
                (action) => this.artistsService.getArtist(action.id)
                    .pipe(
                        map( artist => getArtistSuccess({ artist }) ),
                        catchError( err => of(getArtistError({ payload: err })) )
                    )
            )
        )
    );
}