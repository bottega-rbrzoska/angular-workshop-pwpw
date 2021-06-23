import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
