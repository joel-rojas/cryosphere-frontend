import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, multi } from '../data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  dataLayerSelected = 'MODIS_Terra_NDSI_Snow_Cover';
  title = 'cryosphere-frontend';
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };
  images = [1, 2, 3].map(() => `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/2012-07-09/250m/6/13/${Math.floor((Math.random()*40)+1)}.jpg`);
  single: any[];
  multi: any[];

  view: any[] = [470, 400];

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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, {single, multi});
  }

  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {}
}
