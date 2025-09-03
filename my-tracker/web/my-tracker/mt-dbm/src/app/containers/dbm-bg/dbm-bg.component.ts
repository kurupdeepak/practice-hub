import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbmService } from 'src/app/services/dbm.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodGlucoseEntry } from 'src/app/data/blood-glucose';
import { formatDate } from '@angular/common';
import { User } from 'src/app/auth/user';
import { environment } from 'src/environments/environment';
import { AlertMessage } from 'src/app/utils/message';

@Component({
  selector: 'mt-dbm-bg',
  templateUrl: './dbm-bg.component.html',
  styleUrls: ['./dbm-bg.component.css']
})
export class DbmBGManagerComponent implements OnInit {
  bgForm= this.fb.group({
    id:[],
    userid:[],
    value:['',Validators.required],
    createdDate:[Date.now()],
    riskLevel:[],
    isMeal:[],
    beforeMeal:[],
    afterMeal:[],
    mealTime:[],
    updatedTime:[],
    insulin:[],
    carbs:[],
    calories:[],
    food:[],
    notes:[],
    correction:[]
  });

  title:any = Date.now();

  isMealtime=false;

  isViewMode= false;

  userInfo:User ;

  redirectTo = environment.redirectTo;

  constructor(private fb:FormBuilder,private dbmService:DbmService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.userInfo = this.dbmService.getUser();
    if(this.userInfo != null){
      this.user_id.setValue(this.userInfo.userid);
    }
    this.ar.params.subscribe((params) =>{
      if(params['id']){
        let id = parseInt(params['id']);
        this.loadForm(id);
        this.isViewMode = true;
      }else{
        this.isViewMode = false;
      }
    });
  }

  loadForm(id:number){
      this.dbmService.dailyGlucoseEntry(id).subscribe((data)=>{
          this._setValue(data);
      },(error)=>{
        console.log("Error occured in fetching the entry" + id);
      });
  }

  private _setValue(entry:BloodGlucoseEntry){
    this.bgForm.setValue(entry);
    this.isMealtime = this.meal_time.value == null?false:this.meal_time.value;
    console.log('Meal Time ' + this.meal_time + "=" + this.isMealtime);
  }

  submit(){
      if(!this.bgForm.valid)
      return;
      let m;AlertMessage;
      if(this.entry_id.value === null){
        this.dbmService.newGlucoseEntry(this.bgForm.value).subscribe((data)=>{
             this._setValue(data);
             m = new AlertMessage();
             m.api="newGlucoseEntry";
             m.isError= false;
             m.message= "Successfully created glucose entry" ;
             this.dbmService.setAlertMessage(m);
             this.router.navigate([this.redirectTo]);
        },
         (error)=>{
              console.log("Error creating new glucose entry " );
              m = new AlertMessage();
              m.api="newGlucoseEntry";
              m.isError= true;
              m.message= "Failed to create pressure entry" ;
              m.status=error.status;
              m.statusInfo=error.statusText;
              this.dbmService.setAlertMessage(m);
              this.router.navigate([this.redirectTo]);
        });
      }else{
        this.updated_time.setValue(this.title);
        this.dbmService.saveGlucoseEntry(this.bgForm.value,this.entry_id.value).subscribe((data)=>{
          this._setValue(data);
          m = new AlertMessage();
          m.api="saveGlucoseEntry";
          m.isError= false;
          m.message= "Successfully created glucose entry" ;
          this.dbmService.setAlertMessage(m);
          this.router.navigate([this.redirectTo]);
        },
        (error)=>{
          console.log("Error updating" + this.entry_id.value);
          m = new AlertMessage();
          m.api="newGlucoseEntry";
          m.isError= true;
          m.message= "Failed to create pressure entry" ;
          m.status=error.status;
          m.statusInfo=error.statusText;
          this.dbmService.setAlertMessage(m);
          this.router.navigate([this.redirectTo]);
        });
      }
  }

  get bg_value(){ return this.bgForm.get('value');}
  get entry_id (){return this.bgForm.get('id');}
  get created_date (){return this.bgForm.get('createdDate');}
  get updated_time (){return this.bgForm.get('updatedTime');}
  get meal_time (){return this.bgForm.get('isMeal');}
  get user_id (){return this.bgForm.get('userid');}
}
