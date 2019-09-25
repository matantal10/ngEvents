import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { EventService } from './event.service';
import {map} from 'rxjs/operators';

@Injectable()
export class EventResolverService implements Resolve<any> {

  constructor(private eventService: EventService) {
  }

  // A Resolver automatically subscribe to an observable, no need to subscribe.
  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }
}
