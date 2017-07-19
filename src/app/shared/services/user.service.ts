import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import *  as _ from 'lodash';

import { User } from '../../models';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  get(): Observable<User[]> {
    return this.http.get('/users')
      .map(res => <User[]>res.json());
  }

  getById(userId: string): Observable<User> {
    return this.http.get('/users/' + userId)
      .map(res => <User>res.json());
  }

  post(user: User): Observable<User> {
    return this.http.post('/users', JSON.stringify(user))
      .map(res => <User>res.json());
  }

  put(user: User): Observable<User> {
    return this.http.put('/users/' + user._id, JSON.stringify(user))
      .map(res => <User>res.json());
  }

  // delete()

  getMe(): Observable<User> {
    return this.http.get('/users/me')
      .map(res => <User>res.json());
  }

  putMe(user: User): Observable<User> {
    return this.http.put('/users/me', JSON.stringify(user))
      .map(res => <User>res.json());
  }

}
