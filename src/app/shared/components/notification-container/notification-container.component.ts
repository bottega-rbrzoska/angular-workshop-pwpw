import { NotificationComponent } from './../notification/notification.component';
import { Notification } from './../../../models/Notification';
import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationsService } from '../../notifications.service';

@Component({
  selector: 'pw-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  private notificationComponentFactory: ComponentFactory<NotificationComponent>;
  constructor(private notificationsService: NotificationsService, private cfr: ComponentFactoryResolver) {
    this.notificationComponentFactory = this.cfr.resolveComponentFactory(NotificationComponent);
    notificationsService.notifications$.subscribe(notification => this.displayNotification(notification))
  }

  ngOnInit(): void {
  }

  private displayNotification(notification: Notification) {
    const compRef: ComponentRef<NotificationComponent> = this.vcr.createComponent(this.notificationComponentFactory);
    compRef.instance.notificationData = notification;
    setTimeout(() => {
      compRef.destroy();
    }, 3000)
  }

  ngAfterViewInit(): void {
    console.log(this.vcr);
  }

}
