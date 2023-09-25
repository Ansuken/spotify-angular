import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsRoutingModule } from './artists-routing.module';

import { SharedModule  } from '../../shared/shared.module';
import { ArtistsComponent } from './pages/artists/artists.component';
import { ArtistComponent } from './pages/artist/artist.component';

@NgModule({
    declarations: [
        ArtistComponent,
        ArtistsComponent
    ],
    imports: [
        CommonModule,
        ArtistsRoutingModule,
        SharedModule
    ]
})
export class ArtistsModule { }