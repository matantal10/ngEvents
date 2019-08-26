import {Component, HostListener, Input, OnInit} from '@angular/core';
import {SideBarComponent} from '../side-bar-menu/side-bar.component';

@Component({
  selector: 'side-bar-toggle',
  templateUrl: './side-bar-toggle.component.html',
  styleUrls: ['./side-bar-toggle.component.scss']
})
export class SideBarToggleComponent implements OnInit {

  constructor() { }

  @Input()
  public sideBar: SideBarComponent;

  ngOnInit() {
  }

  @HostListener('click')
  click() {
    this.sideBar.toggleSideBar();
  }

}
