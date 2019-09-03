import { Component, OnInit } from '@angular/core';
import {EventService} from '../../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import { IEvent } from '../../shared/IEvent';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .event-image { height: 100px; }
    a { cursor: pointer; float: right }
  `]
})
export class EventDetailsComponent implements OnInit {

  public event: IEvent;
  public addNew = false;

  constructor(private eventService: EventService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    // this.event = this.eventService.getEvent(1);
    // +: for casting into a number
    const id = this.route.snapshot.params.id ? +this.route.snapshot.params.id : null;
    this.event = this.eventService.getEvent(id);
  }

  addSession() {
    this.addNew = true;
  }

  cancelNewSession() {
    this.addNew = false;
  }

  saveNewSession(session) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addNew = false;
  }
}

