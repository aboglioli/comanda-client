import { Component, OnInit } from '@angular/core';

import { Sidebar } from '../../../models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebar: Sidebar[];

  constructor() { }

  ngOnInit() {
    this.sidebar = [
      {
        name: 'Productos',
        icon: 'cube',
        items: [
          {
            name: 'Insumos',
            url: '/products/raw'
          },
          {
            name: 'Productos',
            url: '/products'
          }
        ]
      },
      {
        name: 'Usuarios',
        icon: 'users',
        items: [
          {
            name: 'Usuarios',
            url: '/users'
          }
        ]
      }
    ];
  }

}
