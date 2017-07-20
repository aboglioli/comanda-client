import { Component, OnInit } from '@angular/core';

import { SearchInputEditorComponent } from './search-input-editor/search-input-editor.component';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
 data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      link: '<a href="http://www.google.com">Google</a>',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      link: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      link: '<a href="https://github.com/akveo/ng2-smart-table">Ng2 smart table</a>',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
    },
  ];

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
      },
      username: {
        title: 'User Name',
      },
      link: {
        title: 'Link',
        type: 'html',
        editor: {
          type: 'custom',
          component: SearchInputEditorComponent,
        },
      },
    },
  };

  constructor() { }

  ngOnInit() {
  }

  onCreate(event) {
    console.log(event.newData);
  }

  onEdit(event) {
    console.log(event.newData);
  }

  onDelete(event) {
    console.log(event.newData);
  }

}
