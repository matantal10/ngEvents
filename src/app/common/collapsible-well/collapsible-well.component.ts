import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent implements OnInit {

  public isToggled: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleSession() {
    this.isToggled = !this.isToggled;
  }
}
