import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class EventDataService {
  private events = new BehaviorSubject<any>([]);
  event = this.events.asObservable();

  constructor() { }

  addItem(item) {
    this.events.next(this.events.getValue().concat([item]));
  }
}
