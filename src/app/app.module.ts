import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { 
  SidebarComponent,
  ListComponent, 
  SpinnerComponent
} from './components';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './shared/services/auth.service';
import { InterceptorService } from './shared/services';

import { appReducers } from './store/app.reducers';
import { EffectsArray } from './store/effects';
import { environments } from '../environments/environments';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot( EffectsArray ),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environments.production,
    })
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
