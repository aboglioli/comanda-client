import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import *  as _ from 'lodash';

import { User } from '../../models';
import { NotificationService } from './notification.service';

@Injectable()
export class UserService {

  constructor(private http: Http,
              private notificationService: NotificationService) { }

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
      .map(res => <User>res.json())
      .do(() => this.notificationService.notify('Usuario creado'));
  }

  put(userId: string, user: User): Observable<User> {
    return this.http.put('/users/' + userId, JSON.stringify(user))
      .map(res => <User>res.json())
      .do(() => this.notificationService.notify('Usuario modificado'));
  }

  delete(userId: string): Observable<User> {
    return this.http.delete('/users/' + userId)
      .map(res => <User>res.json())
      .do(() => this.notificationService.notify('Usuario eliminado'));
  }

  getMe(): Observable<User> {
    return this.http.get('/users/me')
      .map(res => <User>res.json());
  }

  putMe(user: User): Observable<User> {
    return this.http.put('/users/me', JSON.stringify(user))
      .map(res => <User>res.json())
      .do(() => this.notificationService.notify('Usuario modificado'));
  }

}
