import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, multi, hampaturi } from '../data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  single: any[];
  multi: any[];
  hampaturi: any[];

  view: any[] = [550, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#4fcfff', '#ba5706', '#7fd5d2', '#AAAAAA']
  };
  // line, area
  autoScale = true;

  constructor() { Object.assign(this, {single, multi, hampaturi});}

  ngOnInit() {
  }

}
