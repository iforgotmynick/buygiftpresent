import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WishCardComponent} from '@buygiftpresent/wish-card';
import {Wish} from '@buygiftpresent/core';

@Component({
  selector: 'lib-wish-list',
  standalone: true,
  imports: [CommonModule, WishCardComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishListComponent {
  @Input() wishes: Wish[] = [];
}
