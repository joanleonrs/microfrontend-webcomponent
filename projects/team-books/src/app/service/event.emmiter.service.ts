import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class EventEmitterService {

  data = new EventEmitter();

  constructor () { }

  sendMessage(data: any) {
    console.log('message sent: ', data)
    this.data.emit(data);
  }
}
