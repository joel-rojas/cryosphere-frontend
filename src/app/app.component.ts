import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryosphere-frontend';
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };
  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = [1, 2, 3].map(() => `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/2012-07-09/250m/6/13/36.jpg`);  
}
