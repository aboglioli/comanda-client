import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/services';
import { User } from '../../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get()
      .subscribe(users => {
        this.users = users;
      })
  }

}
