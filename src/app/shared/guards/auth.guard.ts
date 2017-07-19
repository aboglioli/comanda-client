import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AccountService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private accountService: AccountService) { }

  canActivate() {
    if (this.accountService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
