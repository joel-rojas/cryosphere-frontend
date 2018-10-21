import { Component, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Options, LabelType, CustomStepDefinition, ChangeContext } from 'ng5-slider';
import { WebService } from './../services/web.service';
import { MapService } from './../map/map.service';
// import { single, multi } from '../data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
  countrySelected = '';
  dataLayerSelected = 'SMAP_L4_Frozen_Area';
  distanceInMeters = null;
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
  images = [1, 2, 3].map(() => `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/2018-07-09/250m/6/13/${Math.floor((Math.random()*40)+1)}.jpg`);
  single: any[];
  multi: any[] = [];

  view: any[] = [470, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Area Percentage';

  colorScheme = {
    domain: ['#8F73F1', '#D56F59', '#A5D4FF']
  };

  // line, area
  autoScale = true;

  constructor(private mapService: MapService, private webService: WebService) {}

  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}
  onChangeCountry($event) {
    this.mapService.getNearestCryosphreByUserLocation($event).then((data) => {
      this.distanceInMeters = data;
    });
  }

  onSetFilterByYear() {
    this.mapService.getMapSubject().subscribe((mapObj) => {
      if (mapObj) {
        this.mapService.getMapOverlay().clear();
        this.mapService.clearGeoCodingMarkers();
        this.mapService.clearShortestPolylines();
        this.mapService.setImageLayerDataByYears();
        this.setSliderValuesByYear();
        // this.saveLayersForAPI().then((data) => {
          // if (data) {
        this.sendCryosphereDataByYear();
          // }
        // });
        this.hideFilterByYearData = false;
      }
    });
  }
  onSliderChange(changeContext: ChangeContext): void {
    const overlays = this.mapService.getMapOverlay().getArray() as google.maps.ImageMapType[];
    overlays.forEach((val, idx) => {
      if (this.years.indexOf(changeContext.value) === idx) {
        val.setOpacity(0.5);
      } else {
        val.setOpacity(0);
      }
    });
  }
  saveLayersForAPI() {
    return this.mapService.saveDataLayerForAPI();
  }
  sendCryosphereDataByYear() {
    this.webService.sendCryosphereDataByYear().toPromise().then((response) => {
      console.log('Processed successfully');
      const data = JSON.parse(response['_body']).data;
      this.multi = data;
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
