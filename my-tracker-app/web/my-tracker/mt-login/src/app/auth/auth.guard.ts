import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../app-constants';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const redirectUrl:string = state.url;

      console.log("AuthGuard CanActivate called");

    return this._checkLogin(state.url);
  }


  isMock = environment.mockServer;

  loginUrl = environment.login;

  mockUserId = environment.mockUserId;

  constructor(private authService:AuthService,private router:Router){}

  private _checkLogin(url):true|UrlTree{
    if(this.authService.isSessionValid()){

        if(this.isMock){
            this._initMockDetails();
        }
        return true;
    }
    return this.router.parseUrl(this.loginUrl);
3 }


  private _initMockDetails(){
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
