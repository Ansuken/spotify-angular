import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './pages/artist/artist.component';
import { ArtistsComponent } from './pages/artists/artists.component';

const routes: Routes = [
    {
        path: '',
        component: ArtistsComponent
    },
    {
        path: ':id',
        component: ArtistComponent
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }