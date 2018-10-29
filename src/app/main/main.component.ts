import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Options, ChangeContext } from 'ng5-slider';
import { WebService } from './../services/web.service';
import { MapService } from './../map/map.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  customGIBSImages = [1, 2, 3].map(() => this.mapService.getCustomGIBSImagesURLs());
  dataLayerSelected = this.mapService.getFrozenAreaLayerTxt();
  distanceInMeters = null;
  hideFilterByYearData = true;
  title = 'cryosphere-frontend';
  // Slider Properties
  sliderValue = 10;
  sliderOptions: Options = {
    floor: 0,
    ceil: 100,
    showTicks: true
  };
  sliderOptionTimer;
  years = [];

  // Chart Properties
  autoScale = true;
  colorScheme = {
    domain: ['#D56F59', '#A5D4FF', '#8F73F1']
  };
  gradient = false;
  multiChart: any[] = [];
  showLegend = false;
  showXAxis = true;
  showXAxisLabel = true;
  showYAxis = true;
  showYAxisLabel = true;
  singleChart: any[];
  viewChart: any[] = [470, 400];
  xAxisLabel = 'Time';
  yAxisLabel = 'Area Percentage';

  constructor(private mapService: MapService, private webService: WebService) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.mapService.onMapLoadEv(() => {
      this.mapService.onMapClickEv((ev) => {
        const lngLat = ev.lngLat;
        this.mapService.clearMapFeatures();
        this.mapService.addMarker([lngLat.lng, lngLat.lat]);
        this.mapService.sendNearestCryosphereData().then((distance) => {
          this.distanceInMeters = distance;
        });
      });
    });
  }

  // PUBLIC METHODS
  saveLayersForAPI() {
    return this.mapService.saveDataLayerForAPI(true);
  }

  sendCryosphereDataByYear() {
    this.webService.sendCryosphereDataByYear().toPromise().then((response) => {
      console.log('Processed successfully');
      const data = response.data;
      this.multiChart = data;
    });
  }

  setSliderValuesByYear() {
    this.years = this.mapService.getYearSet();
    this.sliderValue = this.years[0];
    if (this.sliderOptionTimer) { clearTimeout(this.sliderOptionTimer); }
    this.sliderOptionTimer = setTimeout(() => {
      const newOptions = Object.assign({}, this.sliderOptions);
      newOptions.floor = this.years[0];
      newOptions.ceil = this.years[this.years.length - 1];
      newOptions.maxLimit = newOptions.ceil;
      this.sliderOptions = newOptions;
    });
  }
  // UI Events
  onSelectChart(event) {}

  onSetFilterByYear() {
    this.mapService.getMapSubjectObs().subscribe((mapObj) => {
      if (mapObj) {
        this.distanceInMeters = null;
        this.mapService.clearMapFeatures();
        this.mapService.setImageLayerDataByYears();
        this.setSliderValuesByYear();
        this.saveLayersForAPI().then((data) => {
          if (data) {
            this.sendCryosphereDataByYear();
          }
        });
        this.hideFilterByYearData = false;
      }
    });
  }

  onSliderChange(changeContext: ChangeContext): void {
    const frozenAreaLayersId = this.mapService.getFrozenAreaLayersId();
    frozenAreaLayersId.forEach((val, idx) => {
      if (this.years.indexOf(changeContext.value) === idx) {
        this.mapService.setLayerPaintProperty(val, 'raster-opacity', 0.5);
      } else {
        this.mapService.setLayerPaintProperty(val, 'raster-opacity', 0);
      }
    });
  }
}
