import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environments } from '../../../environments/environments';
import { Album, Albums } from '../../interfaces';

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {

    private apiUrl = environments.apiUrl;

    constructor(private http: HttpClient) { }

    getAlbum( id: string ):Observable<Album> {
        return this.http
            .get<Album>(`${ this.apiUrl }/albums/${id}`);
    }

    getAlbumsByArtist( id: string ):Observable<Albums> {
        return this.http
            .get<Albums>(`${ this.apiUrl }/artists/${id}/albums`);
    }

    getNewReleases( country: string):Observable<Albums> {
        return this.http
            .get<Albums>(`${ this.apiUrl }/browse/new-releases?country=${country}`);
    }
}
