import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  constructor() { }

  @Input() sessions: any;

  ngOnInit() {
  }

}
