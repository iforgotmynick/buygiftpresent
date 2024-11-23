import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MenuComponent} from '@buygiftpresent/menu';

@Component({
  standalone: true,
  imports: [MenuComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'buygiftpresent';
}
