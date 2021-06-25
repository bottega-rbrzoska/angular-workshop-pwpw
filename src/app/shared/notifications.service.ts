import { NotificationComponent } from './components/notification/notification.component';
import { Notification } from './../models/Notification';
import { Injectable, ComponentFactory, ComponentFactoryResolver, Inject, Injector, EmbeddedViewRef, ApplicationRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class NotificationsService {

  private containerElement!: HTMLDivElement;
  private componentFactory: ComponentFactory<NotificationComponent>;
  private notificationsSubj = new Subject<Notification>();
  notifications$ = this.notificationsSubj.asObservable();

  constructor(
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document,
    cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef) {
    this.componentFactory = cfr.resolveComponentFactory(NotificationComponent);
    this.createContainer();

   }

   pushNotification(msg: Notification) {
     this.notificationsSubj.next(msg);
     const compRef = this.componentFactory.create(this.injector);

     this.appRef.attachView(compRef.hostView);
     this.containerElement.appendChild((compRef.hostView as EmbeddedViewRef<any>).rootNodes[0])
     compRef.instance.notificationData = msg;
     setTimeout(() => {
      compRef.destroy();
    }, 3000)
   }

   private createContainer() {
     this.containerElement = this.document.createElement('div');
     this.containerElement.setAttribute('style', 'position: fixed; bottom: 10px; right: 10px; z-index: 1000');
     this.document.body.appendChild(this.containerElement);
   }

}
