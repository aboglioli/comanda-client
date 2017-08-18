import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { NotificationsService } from 'angular2-notifications';

import { UserService } from '../../shared/services';
import { User } from '../../models';
import { config } from '../../config';
import { removeEmptyProperties } from '../../utils';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
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
        title: 'Rol',
        editor: {
          type: 'list',
          config: {
            selectText: 'Seleccionar rol',
            list: [
              {value: 'admin', title: 'Administrador'}
            ],
          },
        },
      },
      password: {
        title: 'Contraseña'
      }
    }
  };

  constructor(private userService: UserService,
              private notification: NotificationsService) { }

  ngOnInit() {
    this.userService.get().subscribe(users => {
      this.users = users;
    });

    this.settings = _.assign(this.settings, config.ng2SmartTableDefaultSettings);
  }

  onCreate(event) {
    const user = <User>removeEmptyProperties(event.newData);

    const required = [];

    if(!user.user) {
      required.push('usuario');
    }

    if(!user.password) {
      required.push('contraseña');
    }

    if(required.length > 0) {
      return this.notification.error('Error', 'Se require ' + required.join(', '));
    }

    if(user.email) {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(!emailRegex.test(user.email)) {
        return this.notification.error('Error', 'Email inválido');
      }
    }

    user.scope = event.newData.scope ? [event.newData.scope] : [];

    this.userService.post(user).subscribe(user => {
        event.confirm.resolve(user);
      });
  }

  onEdit(event) {
    const userId = event.newData._id;
    const user = <User>removeEmptyProperties(event.newData);

    const required = [];

    if(!user.user) {
      required.push('usuario');
    }

    if(required.length > 0) {
      return this.notification.error('Error', 'Se require ' + required.join(', '));
    }

    if(user.email) {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(!emailRegex.test(user.email)) {
        return this.notification.error('Email inválido');
      }
    }

    if(typeof user.scope === 'string') {
      user.scope = [user.scope];
    }

    this.userService.put(userId, _.omit(user, ['_id', 'created_at', 'updated_at'])).subscribe(user => {
      event.confirm.resolve(user);
    });
  }

  onDelete(event) {
    const userId = event.data._id;

    this.userService.delete(userId).subscribe(() => {
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
