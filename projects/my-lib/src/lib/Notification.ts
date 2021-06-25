import { InjectionToken } from '@angular/core';
export interface Notification {
  title: string;
  message: string;
}

export interface NotificationConfig {
  timeoutDelay: number
}
export const NOTIFICATION_CONFIG = new InjectionToken<NotificationConfig>('notificationConfig')
