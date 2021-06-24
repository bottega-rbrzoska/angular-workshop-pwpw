import { DummyService } from './../../core/services/dummy.service';
import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[pwNgIf]'
})
export class NgIfDirective implements OnInit {

  @Input('pwNgIfFrom') elements!: string[]
  @Input('pwNgIfDupa') dupa: string = '';

  // @Input()
  // set pwNgIf(show: boolean) {
  //   this.vcr.clear();
  //   if (show) {
  //     this.vcr.createEmbeddedView(this.template);
  //   }
  // }

  counter$: Observable<number>
  constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef, private dummy: DummyService) {
    this.counter$ = dummy.getCounter$(5)
  }

  ngOnInit() {
    this.counter$.subscribe(v => {
      this.vcr.createEmbeddedView(this.template, {
        $implicit: this.elements[0].toUpperCase(),
        secondProp: this.dupa
      })
    })
    // this.elements.forEach(el => {
    //   this.vcr.createEmbeddedView(this.template, {
    //     $implicit: el.toUpperCase(),
    //     secondProp: this.dupa
    //   })
    // })

  }

}
