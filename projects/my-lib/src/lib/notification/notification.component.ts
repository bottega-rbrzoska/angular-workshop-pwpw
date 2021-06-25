import { Notification } from './../Notification';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pw-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notificationData!: Notification;
  constructor() { }

  ngOnInit(): void {
  }

}
