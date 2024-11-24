import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SkeletonModule } from 'primeng/skeleton';

import { WishlistMediator } from './ui/services/wishlist.mediator';
import { WishlistData } from './data/wishlist.data';
import { WishlistCore } from './core/wishlist.core';
import { WishListComponent } from '@buygiftpresent/wish-list';
import { Wish } from '@buygiftpresent/core';

@Component({
  selector: 'lib-wishlist',
  templateUrl: 'wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  standalone: true,
  imports: [CommonModule, SkeletonModule, WishListComponent],
  providers: [
    WishlistMediator,
    { provide: WishlistCore, useClass: WishlistData },
  ],
})
export class WishlistComponent implements OnInit {
  readonly inProgress$: Observable<{ visible: boolean }>;
  readonly lastWishes$: Observable<Wish[]>;
  readonly topWishes$: Observable<Wish[]>;

  constructor(private readonly mediator: WishlistMediator) {
    this.inProgress$ = this.mediator.inProgress$;
    this.lastWishes$ = this.mediator.lastWishes$;
    this.topWishes$ = this.mediator.topWishes$;
  }

  ngOnInit(): void {
    this.mediator.init();
  }
}
