import { Component, OnInit } from '@angular/core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { DbmService } from 'src/app/services/dbm.service';
import { BloodGlucoseEntry } from 'src/app/data/blood-glucose';
@Component({
  selector: 'mt-dbm-bglist',
  templateUrl: './bg-list.component.html',
  styleUrls: ['./bg-list.component.css']
})
export class BgListComponent implements OnInit {
  faInfoIcon = faInfoCircle;

  dailyLogEntries:BloodGlucoseEntry[];

  constructor(private dbmService:DbmService) { }

  ngOnInit(): void {
    this.dbmService.dailyGlucoseEntries()
    .subscribe((data)=> this.dailyLogEntries = data,
    (error)=>{
      console.log("Error occured retrieving entries daily log")
    });
  }
}
