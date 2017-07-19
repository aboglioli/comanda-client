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

  put(userId: string, user: User): Observable<User> {
    return this.http.put('/users/' + userId, JSON.stringify(user))
      .map(res => <User>res.json());
  }

  delete(userId: string): Observable<User> {
    return this.http.delete('/users/' + userId)
      .map(res => <User>res.json());
  }

  getMe(): Observable<User> {
    return this.http.get('/users/me')
      .map(res => <User>res.json());
  }

  putMe(user: User): Observable<User> {
    return this.http.put('/users/me', JSON.stringify(user))
      .map(res => <User>res.json());
  }

}
