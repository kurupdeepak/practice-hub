import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Label, Color } from 'ng2-charts';

@Component({
  selector: 'mt-dbm-bpchart',
  templateUrl: './bp-chart.component.html',
  styleUrls: ['./bp-chart.component.css'],
})
export class BpChartComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  barChartLabels: Label[] = [];

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  dt = Date.now();
  barChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
          // stacked: true
      ],
      yAxes: [{
          // stacked: true
      }]
    }
  };
  barChartData: ChartDataSets[] = [
    {
      data: [
        { y: 80, x: new Date(this.dt) },
        { y: 78, x: new Date(this.dt) },
      ],
      label: 'Series A',
      stack:"a",
      // barPercentage: 0.5,
      barThickness: 50,
      maxBarThickness: 100,
      minBarLength: 2,
    },
    {
      data: [
        { y: 100, x: new Date(this.dt) },
        { y: 110, x: new Date(this.dt) },
      ],
      label: 'Series B',
      stack:"b",
      // barPercentage: 0.5,
      barThickness: 50,
      maxBarThickness: 90,
      minBarLength: 2,
    },
  ];

  constructor() {}

  ngOnInit(): void {
      // this.dbmService.dailyGlucoseEntries().subscribe(data=>{
      //   data.forEach((item)=>{
      //     // let d = new Date(formatDate(item.createdDate,'yyyy-MMM-dd hh:mm a',"en-US"));
      //     let d = formatDate(item.createdDate,'yyyy-MMM-dd hh:mm a',"en-US");
      //     this.dataset.push({x:d,y:item.value});
      //   })
      //     this.lineChartData = [{data:this.dataset,label:'Daily Log'}];
      // },error=>{
      //     console.log("Error loading bg chart data ");
      // })
  }
}
