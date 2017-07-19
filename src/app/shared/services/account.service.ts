import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { HttpService } from './http.service';
import { CacheService } from './cache.service';

@Injectable()
export class AccountService {
  private authToken: string;

  constructor(private http: Http,
              private cache: CacheService) {
    if(this.cache.has('authToken')) {
      this.authToken = this.cache.get('authToken');
    }
  }

  getAuthToken(): string {
    return this.authToken;
  }

  isLoggedIn(): boolean {
    return !!this.authToken;
  }

  login(user: string, password: string): Observable<string> {
    const json = JSON.stringify({user, password});

    return this.http.post('/account/login', json)
      .map(res => {
        const body = res.json();
        this.authToken = body.authToken;

        this.cache.set('authToken', body.authToken, true);

        return <string>body.authToken;
      });
  }

  logout() {
    this.authToken = null;
    this.cache.delete('authToken');
  }

}
