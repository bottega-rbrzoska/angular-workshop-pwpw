import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NotificationsService } from '@pw/my-lib';

@Component({
  selector: 'pw-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AboutComponent implements OnInit {

  constructor(private notifications: NotificationsService) {
    import(/* webpackPrefetch: true */ '../../lazy-components/lazy-dynamic-example/lazy-dynamic-example.component').then(
      ({ LazyDynamicExampleComponent }) => LazyDynamicExampleComponent
    )
   }

  ngOnInit(): void {
  }

  showNotification() {
    this.notifications.pushNotification({
      title: 'Hello',
      message: ' I am test message!'
    })
  }

}
