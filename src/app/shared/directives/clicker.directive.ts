import { Directive, ElementRef, HostBinding, HostListener, Input, Output, Renderer2, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[pwClicker]',

})
export class ClickerDirective implements OnInit, OnDestroy{

  @HostBinding('style.backgroundColor')
  @Input() pwClicker = 'red';

  @HostBinding('style.border')
  @Input() pwClickerBorder = '2px solid red';

  @Output() delayedClick = new EventEmitter<MouseEvent>();

  private clickSubj = new Subject<MouseEvent>();
  private subscriptions = new Subscription();

  constructor(private el: ElementRef<HTMLInputElement>, private renderer: Renderer2 ) {
    renderer.setStyle(el.nativeElement, 'background-color', 'pink');
   }

   ngOnInit() {
     this.subscriptions.add(this.clickSubj
     .pipe(debounceTime(1000))
     .subscribe(e => this.delayedClick.emit(e)))
   }

   ngOnDestroy() {
     this.subscriptions.unsubscribe()
   }

   @HostListener('click', ['$event'])
   clickHandler(ev: MouseEvent) {
     ev.preventDefault();
     ev.stopPropagation();

     this.clickSubj.next(ev);
   }


}
