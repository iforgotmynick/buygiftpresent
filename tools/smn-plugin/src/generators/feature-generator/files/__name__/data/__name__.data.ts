import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Example } from '../core/models/example';
import { <%= classify(name) %>Core } from '../core/<%= dasherize(name) %>.core';

@Injectable()
export class <%= classify(name) %>Data implements <%= classify(name) %>Core {
  // TODO: Inject one or several API services
  // constructor(
  //   private readonly api1: Api1,
  //   private readonly api2: Api2,
  // ) { }

  getList(): Observable<Example[]> {
    // TODO: 
    // 1. Adapt request to DTO model using <%= classify(name) %>Adapter
    // 2. Adapt response to business logic model using <%= classify(name) %>Adapter
    return of([]);
  }

  usecase2(): Observable<void> {
        // TODO: 
    // 1. Adapt request to DTO model using <%= classify(name) %>Adapter
    // 2. Adapt response to business logic model using <%= classify(name) %>Adapter
    return of(void 0);
  }
}