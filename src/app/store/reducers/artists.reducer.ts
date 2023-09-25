import { createReducer, on } from '@ngrx/store';
import {
    getArtists,
    getArtistsSuccess,
    getArtistsError,
    getArtist,
    getArtistSuccess,
    getArtistError
} from '../actions';
import { Artist } from '../../interfaces';

export const artistsInitialState: any /*Artist[]*/ = {
    artists: []
}

const _artistsReducer = createReducer(artistsInitialState,

    on( getArtists, state => ({ ...state })),
    
    on( getArtistsSuccess, (state, { artists }) => {
        return { 
            ...state, 
            ...artists 
        }
    }),

    on( getArtistsError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

    on( getArtist, state => ({ ...state })),
    
    on( getArtistSuccess, (state, { artist }) => {
        return { 
            ...state, 
            ...artist 
        }
    }),

    on( getArtistError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    }))
);

export function artistsReducer(state: any, action: any) {
    return _artistsReducer(state, action);
}