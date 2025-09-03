import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { DbmAuthService } from 'src/app/services/dbm-auth.service';
import { DbmService } from 'src/app/services/dbm.service';

@Component({
  selector: 'mt-dbm-bgchart',
  templateUrl: './bg-chart.component.html',
  styleUrls: ['./bg-chart.component.css'],
})
export class BgChartComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  dt = '2020-Sep-02';
  lineChartData: ChartDataSets[] =[{data:[],label:'Daily Log'}];
  // lineChartData: ChartDataSets[] ;= [
  //   // { data: [85, 72, 78, 75, 77, 75], label: 'Daily Log' },
  //   {
  //     type:'line',
  //     data: [
  //       { y: 5, x: new Date(this.dt + ' 7:00') },
  //       { y: 8, x: new Date(this.dt + ' 10:00') },
  //       { y: 7.4, x: new Date(this.dt + ' 11:00') },
  //       { y: 4.5, x: new Date(this.dt + ' 13:00') },
  //       { y: 9.5, x: new Date(this.dt + ' 15:00') },
  //       { y: 8.2, x: new Date(this.dt + ' 19:00') },
  //       { y: 9.5, x: new Date(this.dt + ' 21:00') },
  //       { y: 9.0, x: new Date(this.dt + ' 22:00') },
  //       { y: 8.0, x: new Date(this.dt + ' 23:00') },
  //     ],
  //     label: 'Daily Log'
  //   },
  // ];

  lineChartOptions = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          type: 'time',
          distribution: 'series',
          time: {
            unit: 'hour',
            displayFormats: {
              day: 'HH:MM', // This is the default
            },
          },
          ticks: {
            // max:24,
            min:0,
          }
        },
      ],
      yAxes: [{
        ticks: {
          max:30,
          min:0,
        },
        weight:5
      }]
    },
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: '#a399b9',
    },
  ];

  dataset = [];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private dbmService:DbmService) {}

  ngOnInit(): void {
    this.dbmService.dailyGlucoseEntries().subscribe(data=>{
      data.forEach((item)=>{
        // let d = new Date(formatDate(item.createdDate,'yyyy-MMM-dd hh:mm a',"en-US"));
        let d = formatDate(item.createdDate,'yyyy-MMM-dd hh:mm a',"en-US");
        this.dataset.push({x:d,y:item.value});
      })
        this.lineChartData = [{data:this.dataset,label:'Daily Log'}];
    },error=>{
        console.log("Error loading bg chart data ");
    })
  }


}
