import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './containers/products-list/products-list.component';

export const factory = () => null;

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProductsRoutingModule
  ],
})
export class ProductsModule { }
