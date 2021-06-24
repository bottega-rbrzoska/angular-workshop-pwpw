import { CONFIG } from './injection-tokens';
import { DummyService } from './services/dummy.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule.forRoot()
  ],
  providers: [
    { provide: CONFIG, useValue: { apiUrl: 'http://localhost:3000', appLanguage: 'en' }, multi: true },
    { provide: CONFIG, useValue: { apiUrl: 'http://localhost:5000', appLanguage: 'pl'  }, multi: true},
    { provide: 'NowySerwis', useValue: { test: 1}}]
})
export class CoreModule { }
