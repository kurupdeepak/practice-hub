import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../app-constants';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MedAuthService {

  DBM_USER_API = environment.api.dbmUserApiEndpoint;

  private isAuthenticated = false;

  redirectUrl: any;

  private authenticationEvent = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {}

  login(loginForm) {
    const httpHeaders = new HttpHeaders({
      Authorization:
        'Basic ' + btoa(loginForm.username + ':' + loginForm.password),
    });
    const type = 'text';
    let url = this.DBM_USER_API + '/1';
    this.isAuthenticated = true;
    return this.httpClient.get(this.DBM_USER_API, {
      headers: httpHeaders,
      responseType: type,
    });
  }

  userInfo(id): Observable<User> {
    let url = this.DBM_USER_API + '/' + id;
    return this.httpClient.get<User>(url);
  }

  logout(): void {
    sessionStorage.removeItem(AppConstants.USER);
    this.sendAuthenticationEvent(false);
  }

  sendAuthenticationEvent(flag){
    this.isAuthenticated = flag;
    this.authenticationEvent.next(flag);
  }

  unsubscribeAuthEventQ(){
    this.authenticationEvent.unsubscribe();
  }

  authenticationEventQ(){
    return this.authenticationEvent.asObservable();
  }
}
