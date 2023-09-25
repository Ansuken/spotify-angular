import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../app/shared/services';
import { Token } from '../../../../../app/interfaces';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    
    constructor( 
            private router: Router,
            public authService: AuthService
    ) {
                if ( authService.isAuthenticated() ) {
                    this.router.navigate(['/home']);
                }
    }

    ngOnInit(): void {
    }

    login(): void {
        if ( !this.authService.isAuthenticated() ) {
            this.authService.getToken().subscribe( (token: Token) => {
                this.authService.setToken(token);
                this.router.navigate(['/home']);
            });
        };
    }

}
