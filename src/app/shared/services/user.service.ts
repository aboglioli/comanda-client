import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { NotificationsService } from 'angular2-notifications';

import { User } from '../../models';

@Injectable()
export class UserService {

  constructor(private http: Http,
              private notification: NotificationsService) { }

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
      .do(() => this.notification.success('Usuario', 'Creado exitosamente'));
  }

  put(userId: string, user: User): Observable<User> {
    return this.http.put('/users/' + userId, JSON.stringify(user))
      .map(res => <User>res.json())
      .do(() => this.notification.success('Usuario', 'Modificado exitosamente'));
  }

  delete(userId: string): Observable<User> {
    return this.http.delete('/users/' + userId)
      .map(res => <User>res.json())
      .do(() => this.notification.success('Usuario', 'Eliminado existosametne'));
  }

  getMe(): Observable<User> {
    return this.http.get('/users/me')
      .map(res => <User>res.json());
  }

  putMe(user: User): Observable<User> {
    return this.http.put('/users/me', JSON.stringify(user))
      .map(res => <User>res.json())
      .do(() => this.notification.success('Usuario', 'Modificado exitosamente'));
  }

}
