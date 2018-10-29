import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapService} from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() dataLayerSelected;
  @ViewChild('map') mapElement: ElementRef;
  map: mapboxgl.Map;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    const mapEl = this.mapElement.nativeElement;
    this.mapService.initMap(mapEl.id);
  }
  ngAfterViewInit() {
    this.mapService.onMapLoadEv(() => {
      this.map = this.mapService.getMap();
      this.mapService.getMapSubject().next(this.map);
      this.mapService.setImageLayer(this.dataLayerSelected);
    });
  }
}
