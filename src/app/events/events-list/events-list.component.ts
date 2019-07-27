import { Component, OnInit } from '@angular/core';
import {EventService} from '../../shared/event.service';
import { HttpClient } from '@angular/common/http';
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
     this.events = this.es.getEvents();
  }

  handleEventClicked(data) {
    console.log(data);
    this.data = data;
  }
}
