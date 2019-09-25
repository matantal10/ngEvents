import { Component, OnInit, OnDestroy} from '@angular/core';
import {EventService} from '../../shared/event.service';
import { IEvent } from '../../shared/IEvent';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {

  public data: any;
  public events: IEvent[];

  constructor(private es: EventService) {
  }

  ngOnInit() {
    this.es.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  handleEventClicked(data) {
    console.log(data);
    this.data = data;
  }
}
