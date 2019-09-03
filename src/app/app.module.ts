import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/events-list/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './shared/event.service';
import { AuthService } from './user/auth.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './appRoutes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { SideBarComponent } from './side-bar/side-bar-menu/side-bar.component';
import { SideBarToggleComponent } from './side-bar/side-bar-toggle/side-bar-toggle.component';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    SideBarComponent,
    SideBarToggleComponent,
    CreateSessionComponent,
    SessionListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    AuthService
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
