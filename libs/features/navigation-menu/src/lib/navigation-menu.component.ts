import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lib-navigation-menu',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  readonly menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: ['/home'] },
    { label: 'Wishlist', icon: 'pi pi-file-edit', routerLink: ['/wishlist'] },
  ];
}
