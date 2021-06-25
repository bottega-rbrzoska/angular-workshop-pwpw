import { UserStoreService } from './core/stores/user-store.service';
import { User } from './models/User';
import { AuthService } from './core/services/auth.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'pw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$: Observable<User | null>;
  pendingLogin$: Observable<boolean>
  constructor(private auth: AuthService, private userStore: UserStoreService){
    this.user$ = userStore.currentUser$;
    this.pendingLogin$ = userStore.pendingLogin$;
    userStore.usersList$.subscribe()
  }

  login() {
    this.userStore.logIn();
  }

  logout() {
    this.userStore.logout();
  }
}
