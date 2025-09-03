import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BloodGlucoseEntry } from '../data/blood-glucose';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodPressureEntry } from '../data/blood-pressure';
import { DbmAuthService } from './dbm-auth.service';
import { AppConstants } from '../app-constants';
import { User } from '../auth/user';
import { AlertMessage } from '../utils/message';

@Injectable({
  providedIn: 'root'
})

export class DbmService {


  DBM_SERVER_BASE_URL = "";

  private DBM_BG_API= environment.api.dbmBGApiEndpoint;

  private DBM_BP_API= environment.api.dbmBPMApiEndpoint;

  private alertMessageQ = new BehaviorSubject<AlertMessage>(null);

  constructor(private http:HttpClient,private authService:DbmAuthService) { }

  options = "_limit=10&_sort=createdDate&_order=desc";
  // _limit=10&_sort=createdDate&_order=desc
  getUser():User{
    if(sessionStorage.getItem(AppConstants.USER) != null){
      let u = sessionStorage.getItem(AppConstants.USER);
      return JSON.parse(u);
    }
    return null;
  }

  dailyGlucoseEntries():Observable<BloodGlucoseEntry[]>{
    return this.http.get<BloodGlucoseEntry[]>(this.DBM_BG_API + "?" + this.options);
  }

  dailyGlucoseEntry(id:number):Observable<BloodGlucoseEntry>{
    let url = this.DBM_BG_API + "/" + id;
    return this.http.get<BloodGlucoseEntry>(url);
  }

  newGlucoseEntry(entry:BloodGlucoseEntry):Observable<BloodGlucoseEntry>{
    return this.http.post<BloodGlucoseEntry>(this.DBM_BG_API,entry);
  }

  saveGlucoseEntry(entry:BloodGlucoseEntry,id:number):Observable<BloodGlucoseEntry>{
    let url = this.DBM_BG_API + "/" + id;
    return this.http.put<BloodGlucoseEntry>(url,entry);
  }

  deleteBGEntry(id:number):Observable<any>{
    let url = this.DBM_BG_API + "/" + id;
    return this.http.delete(url);
  }

  dailyBPMEntries():Observable<BloodPressureEntry[]>{
    return this.http.get<BloodPressureEntry[]>(this.DBM_BP_API);
  }

  dailyBPMEntry(id:number):Observable<BloodPressureEntry>{
    let url = this.DBM_BG_API + "/" + id;
    return this.http.get<BloodPressureEntry>(url);
  }

  newBPMEntry(entry:BloodGlucoseEntry):Observable<BloodPressureEntry>{
    return this.http.post<BloodPressureEntry>(this.DBM_BP_API,entry);
  }

  saveBPMEntry(entry:BloodGlucoseEntry,id:number):Observable<BloodPressureEntry>{
    let url = this.DBM_BP_API + "/" + id;
    return this.http.put<BloodPressureEntry>(url,entry);
  }

  deleteBPMEntry(id:number):Observable<any>{
    let url = this.DBM_BP_API + "/" + id;
    return this.http.delete(url);
  }

  setAlertMessage(m: AlertMessage) {
    this.alertMessageQ.next(m);
  }

  getAlertsQ():Observable<AlertMessage>{
      return this.alertMessageQ.asObservable();
  }

  unsubscribeAlertMessageQ(){
      this.alertMessageQ.unsubscribe();
  }
}
