import { Component, Input } from '@angular/core';
import { NavbarItem } from 'src/app/interfaces';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
    @Input()
    public list: NavbarItem[] = [];
}
