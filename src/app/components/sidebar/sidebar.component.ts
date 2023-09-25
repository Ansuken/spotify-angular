import { Component } from '@angular/core';
import { NavbarItem } from '../../../app/interfaces';
import { mainNavbar } from '../../../data/navbars-data';
import { myNavbar } from '../../../data/navbars-data';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    public mainNavbar: NavbarItem[] = mainNavbar;
    public myNavbar: NavbarItem[] = myNavbar;
}
