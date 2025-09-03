import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbmService } from 'src/app/services/dbm.service';
import { AlertMessage } from 'src/app/utils/message';

@Component({
  selector: 'mt-dbm-dashboard',
  templateUrl: './dbm-dashboard.component.html',
  styleUrls: ['./dbm-dashboard.component.css']
})
export class DbmDashboardComponent implements OnInit,OnDestroy {

  constructor(private dbmService:DbmService) { }

  message:AlertMessage;

  msgAvailable:boolean = false;

  alert_class="";

  ngOnInit(): void {
    this.dbmService.getAlertsQ().subscribe((msg)=> {
      if(msg != null){
        console.log("Message recieved " + JSON.stringify(msg));
        this.message = msg;
        this.msgAvailable  = true;
        if(this.message.isError){
          this.alert_class = "alert-danger";
        }else{
          this.alert_class = "alert-success";
        }
      }
    });
  }

  ngOnDestroy(): void {
    console.log("Destroying dashboard component and all subscriptions");
    // this.dbmService.unsubscribeAlertMessageQ();
  }

}
