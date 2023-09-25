import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { 
    getPlaylists,
    getPlaylistsSuccess,
    getPlaylistsError,
    getPlaylist,
    getPlaylistSuccess,
    getPlaylistError,
    getPlaylistsByUsername,
    getPlaylistsByUsernameSuccess,
    getPlaylistsByUsernameError
} from '../actions';
import { PlaylistsService } from '../../shared/services';

@Injectable()
export class PlaylistsEffects {

    constructor(
        private actions$: Actions,
        private playlistsService: PlaylistsService
    ){}

    getPlaylists$ = createEffect(
        () => this.actions$.pipe(
            ofType( getPlaylists ),
            mergeMap(
                (action) => this.playlistsService.getPlaylists(action.limit, action.offset)
                    .pipe(
                        map( playlists => getPlaylistsSuccess({ playlists }) ),
                        catchError( err => of(getPlaylistsError({ payload: err })) )
                    )
            )
        )
    );

    getPlaylist$ = createEffect(
        () => this.actions$.pipe(
            ofType( getPlaylist ),
            mergeMap(
                (action) => this.playlistsService.getPlaylist(action.id)
                    .pipe(
                        map( playlist => getPlaylistSuccess({ playlist }) ),
                        catchError( err => of(getPlaylistError({ payload: err })) )
                    )
            )
        )
    );

    getPlaylistsByUsername$ = createEffect(
        () => this.actions$.pipe(
            ofType( getPlaylistsByUsername ),
            mergeMap(
                (action) => this.playlistsService.getPlaylistsByUsername(action.username)
                    .pipe(
                        map( usernamePlaylists => getPlaylistsByUsernameSuccess({ usernamePlaylists }) ),
                        catchError( err => of(getPlaylistsByUsernameError({ payload: err })) )
                    )
            )
        )
    );
}