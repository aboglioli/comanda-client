import { Component } from '@angular/core';

@Component({
  selector: 'app-raw-list',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/products/raw']" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Insumos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['disposable']" routerLinkActive="active">Descartables</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['papers']" routerLinkActive="active">Merchandising</a>
      </li>
    </ul>

    <router-outlet></router-outlet>
  `
})
export class RawListComponent {
}
