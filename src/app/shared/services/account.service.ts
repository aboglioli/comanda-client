import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class AccountService {
  private authToken: string;

  constructor(private http: Http) { }

  login(user: string, password: string): Observable<string> {
    const url = `${environment.baseUrl}/account/login`;
    const json = JSON.stringify({user, password});

    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers});

    return this.http.post(url, json, options)
      .map(res => {
        const body = res.json();
        this.authToken = body.authToken;
        return <string>body.authToken;
      });
  }

}
