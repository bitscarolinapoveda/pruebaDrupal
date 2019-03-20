import { Directive, ElementRef,  Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appOrganizeGridMuuri]'
})
export class OrganizeGridMuuriDirective {

  @Input() isLast: boolean;

  @Output('appOrganizeGridMuuri') initEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    if (this.isLast) {
      setTimeout(() => this.initEvent.emit(), 10);
    }
  }

}
