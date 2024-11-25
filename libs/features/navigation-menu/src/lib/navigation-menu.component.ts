import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from './components/sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'lib-navigation-menu',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, DialogModule, SignInModalComponent, SignUpModalComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  readonly menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: ['/home'] },
    { label: 'Wishlist', icon: 'pi pi-file-edit', routerLink: ['/wishlist'] },
  ];
  signUpVisible = false;
  signInVisible = false;

  onSignIn() {
    this.signInVisible = !this.signInVisible;
  }

  onSignUp() {
    this.signUpVisible = !this.signUpVisible;
  }
}
