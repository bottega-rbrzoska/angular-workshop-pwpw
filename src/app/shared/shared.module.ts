import { NotificationsService } from './notifications.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ClickerDirective } from './directives/clicker.directive';
import { NgIfDirective } from './directives/ng-if.directive';

@NgModule({
  declarations: [
    ClickerDirective,
    NgIfDirective
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ObserversModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ObserversModule,
    MatDividerModule,
    MatToolbarModule,
    ClickerDirective,
    NgIfDirective,
    MatCardModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [NotificationsService]
    }
  }
}
