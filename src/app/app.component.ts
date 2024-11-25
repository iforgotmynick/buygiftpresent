import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenubarModule } from 'primeng/menubar';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule, 
    RouterModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  readonly menuItems = [
    { label: 'Home', icon: 'pi pi-home', routerLink: ['/home'] },
    { label: 'Wishlist', icon: 'pi pi-file-edit', routerLink: ['/wishlist'] },
  ];

  title = 'buygiftpresent';
}
