import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from './map/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // @ViewChild('searchEl') searchRef;
  constructor(private mapService: MapService) {}
  ngOnInit() {
    this.mapService.getMapSubject().subscribe((map) => {});
  }
}
