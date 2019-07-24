import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles:[`
    
  `]
})
export class EventDetailsComponent implements OnInit {

  event: any;

  constructor(private es:EventService) {
   }

  ngOnInit() {
    this.event = this.es.getEvent(1);
  }

}

