import { NotificationsModule } from '@pw/my-lib';
import { LoggerInterceptorService } from './interceptors/logger-interceptor.service';
import { CONFIG } from './injection-tokens';
import { DummyService } from './services/dummy.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BaseDummyService } from './abstract/BaseDummyService.class';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule.forRoot(),
    NotificationsModule.forRoot({ timeoutDelay: 5000 })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptorService, multi: true },
    { provide: CONFIG, useValue: { apiUrl: 'http://localhost:3000', appLanguage: 'en' }, multi: true },
    { provide: CONFIG, useValue: { apiUrl: 'http://localhost:5000', appLanguage: 'pl'  }, multi: true },
    { provide: 'NowySerwis', useValue: { test: 1}},
    { provide: BaseDummyService, useExisting: DummyService}]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
 }
