import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WishlistCore } from '../core/wishlist.core';
import { WishesApi } from '@buygiftpresent/api';
import { Wish } from '@buygiftpresent/core';

@Injectable()
export class WishlistData implements WishlistCore {
  private readonly wishesApi = inject(WishesApi);

  getTop$(): Observable<Wish[]> {
    return this.wishesApi.getTop();
  }

  getLast$(): Observable<Wish[]> {
    return this.wishesApi.getLast();
  }
}
