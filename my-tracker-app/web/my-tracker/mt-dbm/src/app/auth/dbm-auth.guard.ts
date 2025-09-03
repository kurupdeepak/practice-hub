import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../app-constants';
import { DbmAuthService } from '../services/dbm-auth.service';

@Injectable({
  providedIn: 'root'
})

export class DbmAuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const redirectUrl:string = state.url;

      console.log("AuthGuard CanActivate called");

    return this._checkLogin(state.url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  isMock = environment.mockServer;

  mockUserId = environment.mockUserId;

  constructor(private authService:DbmAuthService,private router:Router){}

  private _checkLogin(url){
    if(this.isMock){
        this._initMockDetails();
    }
    //else handle the real login logic or authentication logic
    return true;
  }


  private _initMockDetails(){
    this.authService.sendAuthenticationEvent(true);
    if(sessionStorage.getItem(AppConstants.USER) == null){
        this.authService.userInfo(this.mockUserId).subscribe((data)=>{
          console.log("Mock User loaded " + data);
          console.log("Mock User loaded " + JSON.stringify(data));
              sessionStorage.setItem(AppConstants.USER,JSON.stringify(data));
        },(error)=>{
          console.log("Error retrieving mock user info");
        });
    }
  }
}
