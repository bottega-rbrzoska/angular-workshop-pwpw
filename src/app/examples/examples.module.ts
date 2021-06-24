import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExampleComponent } from './example/example.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomContainerComponent } from './custom-container/custom-container.component';


@NgModule({
  declarations: [
    ExampleComponent,
    CustomInputComponent,
    CustomContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
