import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnInit {

  constructor() { }

  @Input() sessions: any;

  ngOnInit() {
  }

}
