import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './services/event.service';
import { HttpClientModule } from '@angular/common/http';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './appRoutes';
import { CreateEventComponent } from './events/create-event/create-event.component'

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
