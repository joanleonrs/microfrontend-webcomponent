import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventBusService {

    constructor() { }

    private state$ = new Subject();
    private clients: HTMLElement[] = [];
    private listeners: Array<any> = [];

    public registerClient(client: HTMLElement, listeners:Array<any>) {
        this.clients.push(client);
    }

    public setState(state: string) {
        for(let client of this.clients) {
            client.setAttribute('state', state);
        }
    }

    // public broadcast(state){
    //     // Iterar sobre los client listeners y publicar el msg
    //     for(let client of this.listeners) {
    //         client.setAttribute('state', state);
    //     }
    // }

}
