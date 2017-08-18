import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

import * as Nes from 'nes';

@Injectable()
export class SocketService {
  private url = 'http://localhost:3000';
  private client;

  constructor() {
    this.client = new Nes.Client('ws://localhost:3000');

    this.client.connect((err) => {
      console.log('CONNECTED');
      this.client.subscribe(
        '/hello',
        (update, flags) => {
          console.log(update);
        },
        (err) => { }
      );
    });
  }

}
