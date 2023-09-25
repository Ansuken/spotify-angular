import { createReducer, on } from '@ngrx/store';
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
import { Albums, Album } from '../../interfaces';

export const albumsInitialState: any /*Albums*/ = {
    albums: []
}

const _albumsReducer = createReducer(albumsInitialState,

    on( getAlbumsByArtist, state => ({ ...state })),
    
    on( getAlbumsByArtistSuccess, (state, { albums }) => {
        return { 
            ...state, 
            ...albums 
        }
    }),

    on( getAlbumsByArtistError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

    on( getAlbum, state => ({ ...state })),
    
    on( getAlbumSuccess, (state, { album }) => {
        return { 
            ...state, 
            ...album
        }
    }),

    on( getAlbumError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

    on( getNewReleases, state => ({ ...state })),
    
    on( getNewReleasesSuccess, (state, { newReleases }) => {
        return { 
            ...state, 
            ...newReleases
        }
    }),

    on( getNewReleasesError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    }))
);

export function albumsReducer(state: any, action: any) {
    return _albumsReducer(state, action);
}