import { Product } from './../../../models/Product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pw-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
