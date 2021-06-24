import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExampleComponent } from './example/example.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomContainerComponent } from './custom-container/custom-container.component';
import { TwitterComponent } from './twitter/twitter/twitter.component';
import { TwitterImgComponent } from './twitter/twitter-img/twitter-img.component';
import { TwitterVideoComponent } from './twitter/twitter-video/twitter-video.component';


@NgModule({
  declarations: [
    ExampleComponent,
    CustomInputComponent,
    CustomContainerComponent,
    TwitterComponent,
    TwitterImgComponent,
    TwitterVideoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
