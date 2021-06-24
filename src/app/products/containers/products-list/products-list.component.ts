import { Product } from './../../../models/Product';
import { NotificationsService } from './../../../shared/notifications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pw-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [
    { id: '111', name: 'prod1', description: 'super prod', price: 10.99, category: 'electronics'},
    { id: '222', name: 'el prod2', description: 'asdasdasd', price: 20.99, category: 'electronics'},
    { id: '333', name: 'food prod3', description: 'qweqweqwe', price: 30.99, category: 'food'},
    { id: '444', name: 'food super prod4', description: 'zxczxczxc', price: 0.99, category: 'food'}
  ];
  constructor(private notifications: NotificationsService) { }

  ngOnInit(): void {
  }

}
