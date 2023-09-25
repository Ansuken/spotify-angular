import { createAction, props } from '@ngrx/store';
import { Artist } from '../../interfaces';

export const getArtists = createAction(
    '[ARTISTS] Get Artists',
    props<{ artistType: string }>()
);

export const getArtistsSuccess = createAction(
    '[ARTISTS] Get Artists Success',
    props<{ artists: Artist[] }>()
);

export const getArtistsError = createAction(
    '[ARTISTS] Get Artists Error',
    props<{ payload: any }>()
);

export const getArtist = createAction(
    '[ARTISTS] Get Artist',
    props<{ id: string }>()
);

export const getArtistSuccess = createAction(
    '[ARTISTS] Get Artist Success',
    props<{ artist: Artist }>()
);

export const getArtistError = createAction(
    '[ARTISTS] Get Artist Error',
    props<{ payload: any }>()
);