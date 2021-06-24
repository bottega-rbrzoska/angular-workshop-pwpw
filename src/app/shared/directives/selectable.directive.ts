import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pwSelectable]',
  exportAs: 'pwSelectable'
})
export class SelectableDirective {

  @Input('pwSelectable') className: string = 'highlight';
  private isSelected = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  toggleSelection() {
    this.isSelected = !this.isSelected;
    if (this.isSelected) {
      this.renderer.addClass(this.el.nativeElement, this.className )
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.className )
    }
  }

  select() {
    this.isSelected = true;
    this.renderer.addClass(this.el.nativeElement, this.className )
  }

}
