import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Wish} from '@buygiftpresent/core';
import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-wish-list',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishListComponent {
  @Input() wishes: Wish[] = [];
}
