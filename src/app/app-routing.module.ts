import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then( m => m.LoginModule )
    },
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule )
    },
    {
        path: 'albums',
        loadChildren: () => import('./modules/albums/albums.module').then( m => m.AlbumsModule )
    },
    {
        path: 'artists',
        loadChildren: () => import('./modules/artists/artists.module').then( m => m.ArtistsModule )
    },
    {
        path: 'playlists',
        loadChildren: () => import('./modules/playlists/playlists.module').then( m => m.PlaylistsModule )
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
    }
  ];
  
  @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
  })
  export class AppRoutingModule { }