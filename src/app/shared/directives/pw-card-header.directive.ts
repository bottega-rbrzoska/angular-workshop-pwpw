import { CardComponent } from './../components/card/card.component';
import { Directive, HostBinding, Injector, Optional } from '@angular/core';

@Directive({
  selector: 'pw-card-header,[pwPwCardHeader]'
})
export class PwCardHeaderDirective {

  @HostBinding('class') headerClass = 'pw-card-header'
  constructor(@Optional() private parent: CardComponent, private injector: Injector) {
    console.log(injector)
    if(!parent) {
      console.error('pwPwCardHeader można użyć tylko z pw-card')
    }
  }

}
