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
    const notification: Notification = {
      message,
      type
    };

    this.notifications.push(notification);

    // Notifications are closed after 3 seconds
    setTimeout(() => {
      this.notifications = this.notifications.filter(n => n !== notification);
      this.notification$.next(this.notifications);
    }, 3000);

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
