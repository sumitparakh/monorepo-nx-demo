import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[autoFocus]',
})
export class AutoFocusDirective implements OnInit {
  @Input() public autoFocus: boolean;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  ngOnInit() {
    console.log('Auto Focus', this.autoFocus, this.el.nativeElement);
    if (this.autoFocus) {
      this.el.nativeElement.focus();
    }
  }
}
