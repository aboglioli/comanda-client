import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  error = false;

  constructor(private accountService: AccountService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if(this.form.valid) {
      const {user, password} = this.form.value;

      this.accountService.login(user, password)
        .subscribe(
          authToken => {
            this.error = false;
            this.router.navigate(['/']);
          },
          err => this.error = true
        )
    }
  }

}
