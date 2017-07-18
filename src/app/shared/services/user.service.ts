import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../../models';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  get(): Observable<User[]> {
    return this.http.get('/users')
      .map(res => <User[]>res.json());
  }

}
