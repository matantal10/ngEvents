import { Component, OnInit, OnDestroy} from '@angular/core';
import {EventService} from '../../shared/event.service';
import { IEvent } from '../../shared/IEvent';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit, OnDestroy {

  public data: any;
  public events: IEvent[];
  private subscription: Subscription = new Subscription();

  constructor(private es: EventService) {
  }

  ngOnInit() {
    this.subscription = this.es.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  handleEventClicked(data) {
    console.log(data);
    this.data = data;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
