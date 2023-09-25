import { Component, Input } from '@angular/core';
import { ItemBox } from '../../../../app/interfaces';

@Component({
    selector: 'shared-item-box',
    templateUrl: './item-box.component.html',
    styleUrls: ['./item-box.component.scss']
})
export class ItemBoxComponent {

    @Input()
    public data!: ItemBox;
}
