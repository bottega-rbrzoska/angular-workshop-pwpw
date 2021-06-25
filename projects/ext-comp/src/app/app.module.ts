import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
    const customEl = createCustomElement(AppComponent, { injector: this.injector})
    customElements.define('external-component', customEl);
  }
 }
