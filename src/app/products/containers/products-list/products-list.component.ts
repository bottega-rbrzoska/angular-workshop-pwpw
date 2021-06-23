import { NotificationsService } from './../../../shared/notifications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pw-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private notifications: NotificationsService) { }

  ngOnInit(): void {
  }

}
