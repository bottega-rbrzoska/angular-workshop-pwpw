import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExtCompComponent } from './ext-comp/ext-comp.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    ExtCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const customEl = createCustomElement(ExtCompComponent, { injector: this.injector });
    customElements.define('external-comp', customEl);
  }
}
