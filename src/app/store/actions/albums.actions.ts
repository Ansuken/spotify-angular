import { createAction, props } from '@ngrx/store';
import { Album, Albums } from '../../interfaces';

export const getAlbumsByArtist = createAction(
    '[ALBUMS] Get Albums',
    props<{artist: string}>()
);

export const getAlbumsByArtistSuccess = createAction(
    '[ALBUMS] Get Albums Success',
    props<{ albums: Albums }>()
);

export const getAlbumsByArtistError = createAction(
    '[ALBUMS] Get Albums Error',
    props<{ payload: any }>()
);

export const getAlbum = createAction(
    '[ALBUMS] Get Album',
    props<{id: string}>()
);

export const getAlbumSuccess = createAction(
    '[ALBUMS] Get Album Success',
    props<{ album: Album }>()
);

export const getAlbumError = createAction(
    '[ALBUMS] Get Album Error',
    props<{ payload: any }>()
);

export const getNewReleases = createAction(
    '[ALBUMS] Get New Releases',
    props<{ country: string }>()
);

export const getNewReleasesSuccess = createAction(
    '[ALBUMS] Get New Releases Success',
    props<{ newReleases: Albums }>()
);

export const getNewReleasesError = createAction(
    '[ALBUMS] Get New Releases Error',
    props<{ payload: any }>()
);