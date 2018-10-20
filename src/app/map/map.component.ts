import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MapService} from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('map') gmapElement: ElementRef;
  map: google.maps.Map;

  constructor(private gmapService: MapService) { }

  ngOnInit() {
    this.gmapService.initMap(this.gmapElement.nativeElement, {
      center: {lat: 18.5793, lng: 73.8143},
      scrollwheel: true,
      zoom: 8
    });
    // const mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
