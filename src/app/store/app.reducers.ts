import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';
import { Album, Albums, Artist, Artists, Playlists } from '../interfaces';

export interface AppState {
    album: Album,
    albums: Albums
    artist: Artist,
    artists: Artists,
    newReleases: Albums,
    playlist: any,
    playlists: Playlists,
    usernamePlaylists: Playlists,
}

export const appReducers: ActionReducerMap<AppState> = {
    album: reducers.albumsReducer,
    albums: reducers.albumsReducer,
    artist: reducers.artistsReducer,
    artists: reducers.artistsReducer,
    newReleases: reducers.albumsReducer,
    playlist: reducers.playlistsReducer,
    playlists: reducers.playlistsReducer,
    usernamePlaylists: reducers.playlistsReducer
}