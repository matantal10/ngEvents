import {Component, Input, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import {JQ_TOKEN} from '../../shared/jQuery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements OnInit {

  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalContainer', {static: true}) containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal() {
    if (this.closeOnBodyClick.toLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
