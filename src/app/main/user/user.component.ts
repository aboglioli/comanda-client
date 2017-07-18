import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get()
      .subscribe(users => {
        console.log(users);
      })
  }

}
