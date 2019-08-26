import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @HostBinding('class.is-open')
  public isSideBarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }

}
