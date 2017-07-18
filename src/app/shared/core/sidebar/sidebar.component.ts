import { Component, OnInit } from '@angular/core';

import { Sidebar } from '../../../models/sidebar.interface';

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
            url: '/product/raw'
          },
          {
            name: 'Productos',
            url: '/product/single'
          },
          {
            name: 'Combinación',
            url: '/product/combination'
          }
        ]
      }
    ];
  }

}
