import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Wish} from '@buygiftpresent/core';
import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'lib-wish-list',
  standalone: true,
  imports: [CommonModule, CarouselModule, DialogModule, ButtonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishListComponent {
  @Input() wishes: Wish[] = [];

  dialogVisible = false;
  selectedWish: Wish | null = null;

  showDialog(wish: Wish): void {
    this.dialogVisible = !this.dialogVisible;
    this.selectedWish = wish;
  }
}
