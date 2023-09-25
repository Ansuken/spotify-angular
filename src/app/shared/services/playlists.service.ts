import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Playlists } from '../../interfaces';

@Injectable({
    providedIn: 'root'
})
export class PlaylistsService {

    private apiUrl = environments.apiUrl;

    constructor(private http: HttpClient) { }

    getPlaylists( limit: number, offset: number ):Observable<Playlists> {
        return this.http
            .get<Playlists>(`${ this.apiUrl }/browse/featured-playlists`);
    }

    getPlaylist( id: string ):Observable<Playlists> {
        return this.http
            .get<Playlists>(`${ this.apiUrl }/playlists/${id}`);
    }

    getPlaylistsByUsername( username: string ):Observable<Playlists> {
        return this.http
            .get<Playlists>(`${ this.apiUrl }/users/${username}/playlists`);
    }
}