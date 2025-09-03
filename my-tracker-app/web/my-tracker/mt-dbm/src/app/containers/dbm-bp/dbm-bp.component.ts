import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/user';
import { DbmService } from 'src/app/services/dbm.service';
import { AlertMessage } from 'src/app/utils/message';

@Component({
  selector: 'mt-dbm-bp',
  templateUrl: './dbm-bp.component.html',
  styleUrls: ['./dbm-bp.component.css']
})
export class DbmBPManagerComponent implements OnInit {
  bpmForm = this.fb.group(
    { id:[],
      userid:[],
      createdDate:[],
      createdTime:[],
      updatedTime:[],
      systolic:[],
      distolic:[],
      pulse:[],
      notes:[],
      user:[]
    }
  );

  today= Date.now();

  userInfo:User;

  redirectTo='/dbm';

  constructor(private fb:FormBuilder,private dbmService:DbmService,private router:Router) { }

  ngOnInit(): void {
    this.userInfo = this.dbmService.getUser();
    if(this.userInfo != null){
      this.user_id.setValue(this.userInfo.userid);
    }
    //else handle error invalid user or user not authorized
  }

  submit(){
    if(!this.bpmForm.valid)
    return;
    let m:AlertMessage ;
    this.created_date.setValue(Date.now());
    this.dbmService.newBPMEntry(this.bpmForm.value).subscribe((data) =>{
      m = new AlertMessage();
      m.api="newBPMEntry";
      m.isError= false;
      m.message= "Successfully created pressure entry" ;
      this.dbmService.setAlertMessage(m);
      this.router.navigate([this.redirectTo]);
    },(error)=>{
      console.log("Error creating bpm entry");
      m = new AlertMessage();
      m.api="newBPMEntry";
      m.isError= true;
      m.message= "Failed to create pressure entry" ;
      m.status=error.status;
      m.statusInfo=error.statusText;
      this.dbmService.setAlertMessage(m);
      this.router.navigate([this.redirectTo]);
    })

  }

  get created_date(){
    return this.bpmForm.get('createdDate');
  }

  get user_id(){
    return this.bpmForm.get('userid');
  }
}
