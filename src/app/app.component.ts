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
  auth$: Observable<User | null>
  constructor(private auth: AuthService){
    this.auth$ = auth.auth$;
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
