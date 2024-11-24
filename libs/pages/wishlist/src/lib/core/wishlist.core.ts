import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Wish } from '@buygiftpresent/core';

@Injectable()
export abstract class WishlistCore {
  abstract getTop$(): Observable<Wish[]>;
  abstract getLast$(): Observable<Wish[]>;
}
