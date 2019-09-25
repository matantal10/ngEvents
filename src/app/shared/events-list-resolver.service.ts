import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';
import {map} from 'rxjs/operators';

@Injectable()
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) {
  }

  // A Resolver automatically subscribe to an observable, no need to subscribe.
  resolve() {
    return this.eventService.getEvents();
  }
}
