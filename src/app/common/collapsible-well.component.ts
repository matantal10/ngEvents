import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent implements OnInit {

  @Input() title: string;
  public isToggled: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleSession() {
    this.isToggled = !this.isToggled;
  }
}
