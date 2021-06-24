import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[pwPaginator]'
})
export class PaginatorDirective implements OnInit {

  @Input('pwPaginatorOf') pages = 0;
  constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef) { }

  ngOnInit() {
    for( let i = 1; i <= this.pages; i++) {
      this.vcr.createEmbeddedView(this.template, {
        $implicit: i
      })
    }
  }

}
