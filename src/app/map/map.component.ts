import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Observable, of, pipe} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {MapService} from './map.service';
//const hampaturiData = require('../../assets/geodata/hampaturi.json');

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('map') gmapElement: ElementRef;
  map: google.maps.Map;
  mapProm: Promise<any>;

  constructor(private gmapService: MapService) { }

  ngOnInit() {
    this.mapProm = this.gmapService.initMap(this.gmapElement.nativeElement, {
      center: {lat: 18.5793, lng: 73.8143},
      scrollwheel: true,
      zoom: 3,
    });
    this.mapProm.then(() => {
      this.map = this.gmapService.getMap();
      this.gmapService.setImageLayer();
    //  console.log(hampaturiData);
      // this.gmapService.setGeoJSONData(hampaturiData);
      // this.gmapService.getData().pipe(map((res) => res._body),
      //   catchError(error => Observable.of(null))).subscribe(data => {
      //   console.log(data);
      // });
    });
  }

}
