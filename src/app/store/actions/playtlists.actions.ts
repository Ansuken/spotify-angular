import { createAction, props } from '@ngrx/store';
import { Playlists } from '../../interfaces';

export const getPlaylists = createAction(
    '[PLAYLISTS] Get Playlists',
    props<{limit: number, offset: number}>()
);

export const getPlaylistsSuccess = createAction(
    '[PLAYLISTS] Get Playlists Success',
    props<{ playlists: Playlists }>()
);

export const getPlaylistsError = createAction(
    '[PLAYLISTS] Get Playlists Error',
    props<{ payload: any }>()
);


export const getPlaylist = createAction(
    '[PLAYLISTS] Get Playlist',
    props<{id: string}>()
);

export const getPlaylistSuccess = createAction(
    '[PLAYLISTS] Get Playlist Success',
    props<{ playlist: any }>()
);

export const getPlaylistError = createAction(
    '[PLAYLISTS] Get Playlist Error',
    props<{ payload: any }>()
);


export const getPlaylistsByUsername = createAction(
    '[PLAYLISTS] Get Playlists by Username',
    props<{username: string}>()
);

export const getPlaylistsByUsernameSuccess = createAction(
    '[PLAYLISTS] Get Playlists by Username Success',
    props<{ usernamePlaylists: Playlists }>()
);

export const getPlaylistsByUsernameError = createAction(
    '[PLAYLISTS] Get Playlists by Username Error',
    props<{ payload: any }>()
);