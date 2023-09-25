import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemBoxComponent, TrackListComponent } from './';
import { TrackListNameComponent } from './components/track-list/components/track-list-name/track-list-name.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ItemBoxComponent,
        TrackListComponent,
        TrackListNameComponent
    ],
    exports: [
        ItemBoxComponent,
        TrackListComponent
    ]
})
export class SharedModule {}