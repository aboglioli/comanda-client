import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { UserService } from '../../shared/services';
import { User } from '../../models';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];
  settings = {
    columns: {
      _id: {
        title: 'ID',
        editable: false
      },
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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get()
      .subscribe(users => {
        this.users = users;
      })

    this.settings = _.assign(this.settings, environment.ng2SmartTableDefaultSettings);
  }

  create(event) {
    const user = <User>event.newData;
    console.log(user);

    // if(event.newData)

    event.confirm.resolve(event.newData);
  }

  edit(event) {
    event.newData.scope = ['admin', event.newData.scope];
    console.log(event);
    event.confirm.resolve(event.newData);
  }

  delete(event) {
    event.confirm.resolve();
  }

}
