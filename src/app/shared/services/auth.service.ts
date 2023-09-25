import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environments } from '../../../environments/environments';
import { Token } from '../../../app/interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'https://accounts.spotify.com/api/token';
    private client = environments.client;
    public token: string | null;
    public expiresAt: string | null;

    constructor(private http: HttpClient) {
        this.token = this.getStoredToken();
        this.expiresAt = this.getExpiresAt();
    }

    getStoredToken() {
        return localStorage.getItem('token');
    }

    getExpiresAt() {
        return localStorage.getItem('expires_at');
    }

    isAuthenticated(): boolean {
        const expiresAt = this.getExpiresAt();
        const token = this.getStoredToken();
        const expired = (expiresAt || '') < new Date().getTime().toString();
        return !!token && !expired;
    }

    setToken( token: Token ): void {
        const expiresAt = Date.now() + (token.expires_in * 1000);
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('expires_at', JSON.stringify(expiresAt));
        this.token = this.getStoredToken();
        this.expiresAt = this.getExpiresAt();
    }

    getToken(): Observable<Token> {
        return this.http
            .post<Token>(`${this.apiUrl}?grant_type=client_credentials&client_id=${this.client.client_id}&client_secret=${this.client.client_secret}`,
                null,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }
                });
    }

    // TODO
    getAuthorizationCode() {
        return this.http
            .post(`${this.apiUrl}?grant_type=authorization_code`,
                null,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        'Authorization': 'Basic ' + btoa(this.client.client_id + ':' + this.client.client_secret)
                    }
                })
    }
}
