import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);

    console.log('CONNECTED');

    this.socket.on('hola', (data) => {
      console.log('hola > ', data);

      this.socket.emit('chau', {content: 'chau'})
    });

    console.log('SET');
  }

}
