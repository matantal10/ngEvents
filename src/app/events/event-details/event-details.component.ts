import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .event-image {height: 100px; }
  `]
})
export class EventDetailsComponent implements OnInit {

  public event: any;

  constructor(private eventService: EventService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    // this.event = this.eventService.getEvent(1);
    // +: for casting into a number
    const id = this.route.snapshot.params.id ? +this.route.snapshot.params.id : null;
    this.event = this.eventService.getEvent(id);
  }

}

