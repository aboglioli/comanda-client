import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoadingService {
  private loader$ = new Subject<boolean>();

  constructor() { }

  showLoader() {
    this.loader$.next(true);
  }

  hideLoader() {
    this.loader$.next(false);
  }

  onLoader(): Observable<boolean> {
    return this.loader$.asObservable();
  }

}
