import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

    constructor( 
        private router: Router,
        private loaderService: LoaderService,
        private authService: AuthService ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if ( req.url.includes('api/token') ) return next.handle(req);
        if ( !this.authService.isAuthenticated() ) {
            this.router.navigate(['/login']);
            return next.handle(req);
        }
        this.loaderService.show();
        const token = JSON.parse(localStorage.getItem('token') || '{}');
        const headers = new HttpHeaders({
            'Authorization': `${token.token_type}  ${token.access_token}`
        });

        const requestClone = req.clone({
            headers
        });

        return next.handle( requestClone )
            .pipe(finalize(() => this.loaderService.hide()));
    }
}
