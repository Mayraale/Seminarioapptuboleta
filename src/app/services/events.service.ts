import { Injectable } from '@angular/core';
import * as dataEvents from "./events.json";
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlServer ="http://190.131.209.106";

  constructor(private storage: Storage) { }

  getEvents(){
    return fetch(`${this.urlServer}/events`).then(
      response => response.json()
    );
  }

  getLocalEvents(){
    return dataEvents;
  }


}


