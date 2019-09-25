import { Component, OnInit, OnDestroy} from '@angular/core';
import {EventService} from '../../shared/event.service';
import { IEvent } from '../../shared/IEvent';
import {Observable, Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit, OnDestroy {

  public data: any;
  public events: any;
  private subscription: Subscription = new Subscription();

  constructor(private es: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.subscription = this.es.getEvents().subscribe(events => {
    //   this.events = events;
    // });
    this.events = this.route.snapshot.data['events']; // use code if using Resolve, resolve automatically subscribe.
  }

  handleEventClicked(data) {
    console.log(data);
    this.data = data;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
