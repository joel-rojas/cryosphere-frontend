import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import {Observable, of, pipe} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {MapService} from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() dataLayerSelected;
  @ViewChild('map') gmapElement: ElementRef;
  map: google.maps.Map;
  mapProm: Promise<any>;

  constructor(private gmapService: MapService) { }

  ngOnInit() {
    this.mapProm = this.gmapService.initMap(this.gmapElement.nativeElement, {
      center: {lat: -16.5214, lng: -67.253},
      scrollwheel: true,
      zoom: 5,
      maxZoom: 10
    });
    this.mapProm.then(() => {
      this.map = this.gmapService.getMap();
      // this.gmapService.setMapClickEv();
      this.gmapService.setImageLayer(this.dataLayerSelected);
    });
  }

}
