import { NotificationsService } from '../../../projects/my-lib/src/lib/notifications.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ClickerDirective } from './directives/clicker.directive';
import { NgIfDirective } from './directives/ng-if.directive';
import { SelectableDirective } from './directives/selectable.directive';
import { PaginatorDirective } from './directives/paginator.directive';
import { ShowOnlyForRoleDirective } from './directives/show-only-for-role.directive';
import { CardComponent } from './components/card/card.component';
import { PwCardHeaderDirective } from './directives/pw-card-header.directive';

@NgModule({
  declarations: [
    ClickerDirective,
    NgIfDirective,
    SelectableDirective,
    PaginatorDirective,
    ShowOnlyForRoleDirective,
    CardComponent,
    PwCardHeaderDirective,
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
    MatCardModule,
    MatProgressSpinnerModule
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
    MatCardModule,
    SelectableDirective,
    PaginatorDirective,
    ShowOnlyForRoleDirective,
    CardComponent,
    PwCardHeaderDirective,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
