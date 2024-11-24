import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Example } from './models/example';

@Injectable()
export abstract class <%= classify(name) %>Core {

  abstract getList(): Observable<Example[]>;

  abstract usecase2(): Observable<void>;

}