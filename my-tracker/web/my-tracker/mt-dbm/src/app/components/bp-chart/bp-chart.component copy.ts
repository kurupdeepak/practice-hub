import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Label, Color } from 'ng2-charts';

@Component({
  selector: 'mt-dbm-bpchart',
  templateUrl: './bp-chart.component.html',
  styleUrls: ['./bp-chart.component.css']
})
export class BpChartComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  dt = '2020-Sep-02';
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
				{
          type: 'time',
          distribution:'series',
					time: {
						unit: 'hour',
						displayFormats: {
							// day: 'HH:MM', // This is the default
            },
          },

				}],
      yAxes: [{}]
     }
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    // { data: [45, 37, 60, 70, 46, 33], label: 'Blood Pressure' ,backgroundColor:'#a399b9'}
      {data: [ {y:80,x:new Date(this.dt + ' 7:00')} , {y:78,x:new Date(this.dt + ' 10:00')} ],label: 'distolic'},
      {data: [{y:100,x:new Date(this.dt + ' 7:00')},{y:110,x:new Date(this.dt + ' 10:00')}],label: 'systolic'}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
