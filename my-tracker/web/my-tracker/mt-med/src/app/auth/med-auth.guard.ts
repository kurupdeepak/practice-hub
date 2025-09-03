import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../app-constants';
import { MedAuthService } from '../services/med-auth.service';

@Injectable({
  providedIn: 'root'
})
export class MedAuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log("AuthGuard CanActivate called");

    return this._checkLogin(state.url);
  }
  isMock = environment.mockServer;

  mockUserId = environment.mockUserId;

  constructor(private authService:MedAuthService,private router:Router){}

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
