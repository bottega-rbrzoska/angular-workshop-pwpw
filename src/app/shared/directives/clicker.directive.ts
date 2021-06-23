import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[pwClicker]',

})
export class ClickerDirective {

  constructor(private el: ElementRef<HTMLInputElement>, private renderer: Renderer2 ) {

    console.log('directive init')
   }

}
