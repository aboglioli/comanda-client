import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-main',
  template: `
    <div id="wrapper">
      <app-navbar></app-navbar>

      <div id="content">
        <router-outlet></router-outlet>
      </div>

      <span class="metadata">{{envName}}</span>
    </div>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  envName = environment.envName;

  constructor() { }

  ngOnInit() {
  }

}
