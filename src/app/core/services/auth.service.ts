import { map } from 'rxjs/operators';
import { User } from './../../models/User';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authSubj = new BehaviorSubject<User | null>(null);
  auth$ = this.authSubj.asObservable();
  role$ = this.authSubj.pipe(
    map(auth => auth ? auth.role : null )
  )
  constructor() { }

  login() {
    this.authSubj.next({ name: 'Alojzy', role: 'admin'});
  }

  logout() {
    this.authSubj.next(null);
  }
}
