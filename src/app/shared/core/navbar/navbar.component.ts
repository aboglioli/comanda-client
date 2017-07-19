import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/login']);
  }

}
