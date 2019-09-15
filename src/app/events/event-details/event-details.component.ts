import { Component, OnInit } from '@angular/core';
import {EventService} from '../../shared/event.service';
import {ActivatedRoute, Params} from '@angular/router';
import { IEvent } from '../../shared/IEvent';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .event-image { height: 100px; }
    a { cursor: pointer; }
  `]
})
export class EventDetailsComponent implements OnInit {

  public event: IEvent;
  public addNew = false;
  public filterBy = 'All';
  public sortBy = 'name';

  constructor(private eventService: EventService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    // ForEach helps resetting the event on any change from outer components
   this.route.params.forEach((params: Params) => {
     this.event = this.eventService.getEvent(+params.id);
     // initialize default setting on any event change from outer compnent event
     this.addNew = false;
     this.filterBy = 'All';
     this.sortBy = 'name';
   });
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
    console.log(this.event.sessions);
  }
}

