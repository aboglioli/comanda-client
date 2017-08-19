import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import * as Nes from 'nes';

import { AccountService } from './account.service';

@Injectable()
export class SocketService {
  private url = 'http://localhost:3000';
  private client;

  constructor(private accountService: AccountService) {
    this.client = new Nes.Client('ws://localhost:3000');

    const token = this.accountService.getAuthToken();

    this.client.connect({
      auth: {
        headers: {
          authorization: token
        }
      }
    }, (err) => {
      if(err) {
        console.log(err);
      }

      this.client.subscribe(
        '/hello',
        (update) => {
          console.log(update);
        },
        (err) => { console.log(err); }
      );
    });
  }

}
