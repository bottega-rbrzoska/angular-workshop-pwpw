import { Product } from './../../../models/Product';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'pw-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product;
  showDescription = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDescription() {
    this.showDescription =!this.showDescription;
  }

}
