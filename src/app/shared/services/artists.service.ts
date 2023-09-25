import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environments } from '../../../environments/environments';
import { Artist } from '../../interfaces';

@Injectable({
    providedIn: 'root'
})
export class ArtistsService {

    private apiUrl = environments.apiUrl;

    constructor(private http: HttpClient) { }

    getFollowedArtists( type: string ):Observable<Artist[]> {
        return this.http
            .get<Artist[]>(`${ this.apiUrl }/me/following?type=${type}&limit=50`);
    } 

    getArtist( id: string ):Observable<Artist> {
        return this.http
            .get<Artist>(`${ this.apiUrl }/artists/${id}`);
    }
}