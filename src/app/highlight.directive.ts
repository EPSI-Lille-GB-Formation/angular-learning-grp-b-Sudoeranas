import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  @Input('bg-color')
  bgHighlightColor = 'yellow';

  @HostBinding('style.backgroundColor')
  bgColor = 'transparent';

  @Input('default-color')
  bgHighlightDefaultColor = 'transparent';

  constructor() { }

  ngAfterViewInit(){
    this.bgColor = this.bgHighlightDefaultColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.bgHighlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = this.bgHighlightDefaultColor;
  }

}
