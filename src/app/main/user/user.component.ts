import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { UserService, NotificationService } from '../../shared/services';
import { User } from '../../models';
import { config } from '../../config';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];
  settings = {
    columns: {
      user: {
        title: 'Usuario'
      },
      name: {
        title: 'Nombre'
      },
      email: {
        title: 'Email',
      },
      scope: {
        title: 'Rol'
      },
      password: {
        title: 'Contraseña'
      }
    }
  };

  constructor(private userService: UserService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.userService.get()
      .subscribe(users => {
        this.users = users;
      })

    this.settings = _.assign(this.settings, config.ng2SmartTableDefaultSettings);
  }

  onCreate(event) {
    const user = this.materializeUser(event.newData);



    this.userService.post(user)
      .subscribe(user => {
        event.confirm.resolve(user);
      });
  }

  onEdit(event) {
    const userId = event.newData._id;
    const user = this.materializeUser(event.newData);

    this.userService.put(userId, user)
      .subscribe(user => {
        event.confirm.resolve(user);
      });
  }

  onDelete(event) {
    const userId = event.data._id;

    this.userService.delete(userId)
      .subscribe(() => {
        event.confirm.resolve();
      });
  }

  private materializeUser(data): User {
    const user = <User>data;

    for(let prop in user) {
      if(!user[prop]) {
        delete user[prop];
      }
    }

    delete user._id;
    delete user.created_at;
    delete user.updated_at;

    return user;
  }

}
