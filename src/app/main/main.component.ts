import { Component, OnInit, EventEmitter } from '@angular/core';
import { Options, LabelType, CustomStepDefinition } from 'ng5-slider';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WebService } from './../services/web.service';
import { MapService } from './../map/map.service';
import { single, multi } from '../data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  dataLayerSelected = 'SMAP_L4_Frozen_Area';
  hideFilterByYearData = true;
  layersByYear = [];
  title = 'cryosphere-frontend';
  value = 10;
  years = [];
  options: Options = {
    floor: 0,
    ceil: 100,
    showTicks: true
  };
  optionTimer;
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

  constructor(private mapService: MapService, private webService: WebService) {
    Object.assign(this, {single, multi});
  }

  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {}

  onSetFilterByYear() {
    this.mapService.getMapSubject().subscribe((map) => {
      if (map) {
        this.mapService.setImageLayerDataByYears();
        this.setSliderValuesByYear();
        this.saveLayersForAPI().then((data) => {
          if (data) {
            this.sendCryosphereDataByYear(data);
          }
        });
        this.hideFilterByYearData = false;
      }
    });
  }
  saveLayersForAPI() {
    return this.mapService.saveDataLayerForAPI();
  }
  sendCryosphereDataByYear(data) {
    this.webService.sendCryosphereDataByYear(data).toPromise().then(() => {
      console.log('Saved successfully');
    });
  }
  setSliderValuesByYear() {
    this.years = this.mapService.getYearSet();
    this.value = this.years[0];
    if (this.optionTimer) { clearTimeout(this.optionTimer); }
    this.optionTimer = setTimeout(() => {
      const newOptions = Object.assign({}, this.options);
      newOptions.floor = this.years[0];
      newOptions.ceil = this.years[this.years.length - 1];
      newOptions.maxLimit = newOptions.ceil;
      this.options = newOptions;
    });
  }
}
