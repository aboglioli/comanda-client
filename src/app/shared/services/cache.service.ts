import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CacheService  {
  private cache: any;
  private emitter$ = new Subject<{key: string, action: string, value: any}>();

  constructor() {
    this.cache = {};
    this.restore();
  }

  set(key: string, value: any, persist = false): void {
    this.cache[key] = value;

    this.emitter$.next({key, action: 'set', value});

    if(persist) {
      this.persist(key, value);
    }
  }

  get(key: string): any {
    return this.cache[key];
  }

  has(key: string): boolean {
    return !!this.cache[key];
  }

  delete(key: string): void {
    const value = this.cache[key];

    delete this.cache[key];
    localStorage.removeItem(key);

    this.emitter$.next({key, action: 'delete', value});
  }

  persist(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  onChanges(): Observable<any> {
    return this.emitter$.asObservable();
  }

  private restore() {
    for(let key in localStorage) {
      const value = localStorage.getItem(key);

      try {
        const jsonValue = JSON.parse(value);
        this.set(key, jsonValue);
      } catch(e) {
        this.set(key, value);
      }
    }
  }
}
