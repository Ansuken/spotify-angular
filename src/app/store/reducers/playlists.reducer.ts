import { createReducer, on } from '@ngrx/store';
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
import { Playlists } from '../../interfaces';

export const playlistsInitialState: any /*Playlists*/ = {
    playlists: []
}

const _playlistsReducer = createReducer(playlistsInitialState,

    on( getPlaylists, state => ({ ...state })),
    
    on( getPlaylistsSuccess, (state, { playlists }) => {
        return { 
            ...state, 
            ...playlists 
        }
    }),

    on( getPlaylistsError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

    on( getPlaylist, state => ({ ...state })),
    
    on( getPlaylistSuccess, (state, { playlist }) => {
        return { 
            ...state, 
            ...playlist 
        }
    }),

    on( getPlaylistError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

    on( getPlaylistsByUsername, state => ({ ...state })),
    
    on( getPlaylistsByUsernameSuccess, (state, { usernamePlaylists }) => {
        return { 
            ...state, 
            ...usernamePlaylists
        }
    }),

    on( getPlaylistsByUsernameError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    }))
);

export function playlistsReducer(state: any, action: any) {
    return _playlistsReducer(state, action);
}