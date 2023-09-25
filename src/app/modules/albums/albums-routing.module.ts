import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';

const routes: Routes = [
    {
        path: '',
        component: AlbumComponent
    },
    {
        path: ':id',
        component: AlbumComponent
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }