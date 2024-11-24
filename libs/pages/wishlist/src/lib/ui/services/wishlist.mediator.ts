import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { WishlistCore } from '../../core/wishlist.core';
import { Wish } from '@buygiftpresent/core';

@Injectable()
export class WishlistMediator {
  private readonly _topWishes$ = new BehaviorSubject<Wish[]>([]);
  private readonly _lastWishes$ = new BehaviorSubject<Wish[]>([]);
  private readonly _inProgress$ = new BehaviorSubject<{ visible: boolean }>({
    visible: false,
  });

  readonly topWishes$: Observable<Wish[]> = this._topWishes$.asObservable();
  readonly lastWishes$: Observable<Wish[]> = this._lastWishes$.asObservable();

  readonly inProgress$: Observable<{ visible: boolean }> =
    this._inProgress$.asObservable();

  constructor(private readonly core: WishlistCore) {}

  init(): void {
    this.core
      .getLast$()
      .pipe(tap((wishes: Wish[]) => console.log(wishes)))
      .subscribe();

    this.core
      .getTop$()
      .pipe(tap((wishes: Wish[]) => this._topWishes$.next(wishes)))
      .subscribe();
  }
}
