import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

const routes: Routes = [
    {
        path: '',
        component: PlaylistsComponent
    },
    {
        path: ':id',
        component: PlaylistComponent
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }