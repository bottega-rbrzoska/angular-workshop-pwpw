import { NotificationConfig, NOTIFICATION_CONFIG } from './Notification';
import { NotificationsService } from './notifications.service';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { NotificationComponent } from './notification/notification.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NotificationComponent, NotificationContainerComponent],
  imports: [
    CommonModule
  ]
})
export class NotificationsModule {
  static forRoot(config: NotificationConfig): ModuleWithProviders<NotificationsModule> {
    return {
      ngModule: NotificationsModule,
      providers: [config ? { provide: NOTIFICATION_CONFIG, useValue: config} : { provide: NOTIFICATION_CONFIG, useValue: { timeoutDelay: 3000 }}, NotificationsService]
    }
  }
 }
