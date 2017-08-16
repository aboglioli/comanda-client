import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    console.log('SOCKET.IO');
    this.socket = io(this.url);
    console.log('CONNECTED');

    this.socket.on('pong', () => {
      console.log('PONG');
    });

    this.socket.emit('ping');
  }

}
