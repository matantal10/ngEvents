import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {

  public data: any;
  public events:any;
 
  constructor (private es: EventService) { 
  }

  ngOnInit() {
     this.events = this.es.getEvents();
  }

  handleEventClicked(data){
    console.log(data);
    this.data = data;
  }
}
