import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {JQ_TOKEN} from '../shared/jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

  public htmlEl: HTMLElement;
  @Input('modal-trigger') modalId: string;

  constructor(@Inject(JQ_TOKEN) private $: any, private elRef: ElementRef) {
    this.htmlEl = elRef.nativeElement;
  }

  ngOnInit() {
    this.htmlEl.addEventListener('click', (e => {
      this.$(`#${this.modalId}`).modal({});
    }));
  }

}
