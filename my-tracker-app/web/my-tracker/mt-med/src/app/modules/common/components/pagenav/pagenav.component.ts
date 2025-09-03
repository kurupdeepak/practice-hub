import { Component, OnInit } from '@angular/core';
import { appMenus } from './app-menus';

@Component({
  selector: 'mt-pagenav',
  templateUrl: './pagenav.component.html',
  styleUrls: ['./pagenav.component.css']
})
export class PagenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get appMenus$(){
    return appMenus;
  }
}
