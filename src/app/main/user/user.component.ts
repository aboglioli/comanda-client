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
    const user = this.materializeUser(event.newData);

    this.userService.post(user)
      .subscribe(user => {
        event.confirm.resolve(user);
      });

    setTimeout(() => {
      console.log(this.users);
    }, 2000);
  }

  edit(event) {
    const user = this.materializeUser(event.newData);
    console.log(user);

    event.confirm.resolve(event.newData);
  }

  delete(event) {
    const user = this.materializeUser(event.newData);
    console.log(user);

    event.confirm.resolve();
  }

  private materializeUser(data): User {
    const user = <User>data;

    for(let prop in user) {
      if(!user[prop]) {
        delete user[prop];
      }
    }

    return user;
  }

}
