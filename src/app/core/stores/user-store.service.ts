import { AuthService } from './../services/auth.service';
import { User } from './../../models/User';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface UserState {
  currentUser: User | null,
  pendingLogin: boolean,
  users: User[] | null,
  pendingUsersList: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private userStore = new BehaviorSubject<UserState>({
    currentUser: null,
    pendingLogin: false,
    users: null,
    pendingUsersList: false
  });

  private history: { actionName: string, state: UserState }[] = [{ actionName: 'APP_INIT', state: this.userStore.value}]

  constructor(private http: HttpClient) {}

  logIn() {
    this.setState({ pendingLogin: true }, '[User] LOGIN')
    this.http.get<User>('/api/login').subscribe(user =>  this.setState({ currentUser: user, pendingLogin: false }, '[User] LOGIN_SUCCESS'))
  }

  logout() {
    this.setState({ currentUser: null }, '[User] Logout')
  }


  private setState(state: Partial<UserState>, actionName: string) {
    const currentState = this.userStore.value;
    const newState = {...currentState, ...state  };
    this.userStore.next(newState);
    this.history.push({ actionName, state: newState })
    console.log(this.history)

  }

}
