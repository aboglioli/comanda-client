import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Notification } from '../../models';

@Injectable()
export class NotificationService {
  private notifications: Notification[];
  private notification$ = new BehaviorSubject<Notification[]>([]);

  constructor() {
    this.notifications = [];
  }

  notify(message: string, type = 'success') {
    this.notifications.push({
      message,
      type
    })

    this.notification$.next(this.notifications);
  }

  removeNotification(index: number) {
    this.notifications = this.notifications.filter((notification, i) => i !== index);

    this.notification$.next(this.notifications);
  }

  onNotification(): Observable<Notification[]> {
    return this.notification$.asObservable();
  }

}
