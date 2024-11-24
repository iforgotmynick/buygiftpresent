import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { Wish } from '@buygiftpresent/core';

@Component({
  selector: 'lib-wish-card',
  templateUrl: 'wish-card.component.html',
  styleUrls: ['./wish-card.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
})
export class WishCardComponent {
  @Input() wish!: Wish;
}
