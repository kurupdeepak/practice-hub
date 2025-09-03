import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { menus } from './menus';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'mt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
  isCollapsed = true;

  isAuthenticated = false;

  faUser = faUser;

  isTogglerOn = false;

  SMALL_SCREEN = 760;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.authenticationEventQ().subscribe((flag)=>{
      if(flag != null)
        this.isAuthenticated = flag;
      else
      this.isAuthenticated = false;
    })
  }

  logout(){
    this.authService.logout();
  }

  get menus$(){
    return menus;
  }

  ngOnDestroy(): void {
      // this.authService.unsubscribeAuthEventQ();
  }

  @HostListener('window:load', ['$event'])
  onLoad(){
    this.isTogglerOn = window.innerWidth < this.SMALL_SCREEN;
    console.log("window loaded " + this.isTogglerOn);
  }

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.isTogglerOn = window.innerWidth < this.SMALL_SCREEN;
    console.log("window resized " + this.isTogglerOn);
  }
}
