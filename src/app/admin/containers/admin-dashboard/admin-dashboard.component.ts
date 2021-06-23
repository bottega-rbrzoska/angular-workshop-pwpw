import { NotificationsService } from './../../../shared/notifications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pw-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor( private notifications: NotificationsService) { }

  ngOnInit(): void {
  }

}
