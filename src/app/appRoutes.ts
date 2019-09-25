import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {CreateSessionComponent} from './events/event-details/create-session/create-session.component';
import {EventsListResolverService} from './shared/events-list-resolver.service';
import {EventResolverService} from './shared/event-resolver.service';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolverService}},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: 'events/session/new', component: CreateSessionComponent }
];
