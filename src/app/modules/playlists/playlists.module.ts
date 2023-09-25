import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsRoutingModule } from './playlists-routing.module';

import { SharedModule } from '../../../app/shared/shared.module';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

@NgModule({
    declarations: [
        PlaylistsComponent,
        PlaylistComponent
    ],
    imports: [
        CommonModule,
        PlaylistsRoutingModule,
        SharedModule
    ]
})
export class PlaylistsModule { }
