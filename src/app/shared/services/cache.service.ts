import { Injectable } from '@angular/core';

@Injectable()
export class CacheService  {
  private cache: any;

  constructor() {
    this.cache = {};
    this.restore();
  }

  set(key: string, value: any, persist = false): void {
    this.cache[key] = value;

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
    delete this.cache[key];
    localStorage.removeItem(key);
  }

  persist(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
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
