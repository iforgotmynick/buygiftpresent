import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { <%= classify(name) %>Core } from '../../core/<%= dasherize(name) %>.core';

@Injectable()
export class <%= classify(name) %>Mediator {
  private readonly _inProgress$ = new BehaviorSubject<{visible: boolean}>({visible: false});

  readonly inProgress$: Observable<{visible: boolean}> = this._inProgress$.asObservable();

  constructor(private readonly core: <%= classify(name) %>Core) { }

  init(): void {
    this.fetch();
    // TODO: implement
  }

  private fetch(): void {
    this.core.getList()
      .pipe(
        tap({
          next: list => console.log(list),
          error: err => console.log(err),
        }),
        finalize(() => console.log('finaliize'))
      )
      .subscribe();
  }
}