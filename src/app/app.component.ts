import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NavigationMenuComponent} from '@buygiftpresent/navigation-menu';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavigationMenuComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'buygiftpresent';
}
