import { SelectableDirective } from './../../../shared/directives/selectable.directive';
import { ProductItemComponent } from './../../components/product-item/product-item.component';
import { Product } from './../../../models/Product';
import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pw-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  @ViewChildren(ProductItemComponent) productItems!: QueryList<ProductItemComponent>;
  @ViewChildren(SelectableDirective) selectedProducts!: QueryList<SelectableDirective>;
  products: Product[] = [
    { id: '111', name: 'prod1', description: 'super prod', price: 10.99, category: 'electronics'},
    { id: '222', name: 'el prod2', description: 'asdasdasd', price: 20.99, category: 'electronics'},
    { id: '333', name: 'food prod3', description: 'qweqweqwe', price: 30.99, category: 'food'},
    { id: '444', name: 'food super prod4', description: 'zxczxczxc', price: 0.99, category: 'food'}
  ];
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
      this.productItems.forEach(p => p.toggleDescription());
      this.cdr.detectChanges();

      // alternatywne rozwiazanie dla problemu z ExpressionChangedAfterItHasBeenCheckedError
      // setTimeout(() => {
      //   this.productItems.forEach(p => p.toggleDescription());
      // })

  }

  toggleAllDescriptions() {
    this.productItems.forEach(p => p.toggleDescription())
  }

  selectAllProducts() {
    this.selectedProducts.forEach(s => s.select());
  }

}
