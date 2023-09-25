import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsRoutingModule } from './albums-routing.module';

import { SharedModule  } from '../../shared/shared.module';
import { AlbumComponent } from './pages/album/album.component';

@NgModule({
    declarations: [
        AlbumComponent
    ],
    imports: [
        CommonModule,
        AlbumsRoutingModule,
        SharedModule
    ]
})
export class AlbumsModule { }
