import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

let map;

const getScriptSrc = (callbackName) => {
  return `https://maps.googleapis.com/maps/api/js?key=AIzaSyDx92iaKUnowpTZOLt1FGAJqi98picikH8&callback=${callbackName}`;
};

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map: google.maps.Map;
  private geocoder: google.maps.Geocoder;
  private scriptLoadingPromise: Promise<any>;

  constructor(private http: Http) {
    this.loadScriptLoadingPromise();
    this.onReady().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  onReady(): Promise<any> {
    return this.scriptLoadingPromise;
  }

  initMap(mapHtmlElement: HTMLElement, options: google.maps.MapOptions): Promise<google.maps.Map> {
    return this.onReady().then(() => {
      this.map = new google.maps.Map(mapHtmlElement, options);
      map = this.map;
      return this.map;
    });
  }

  getMap() {
    return this.map;
  }

  getTileUrl(type, date): (tileCord: google.maps.Point, zoom: Number) => string {
    return (tile, zoom) => {
      return `//gibs.earthdata.nasa.gov/wmts/epsg3857/best/${type}/default/${date}` +
        `/GoogleMapsCompatible_Level8/${zoom}/${tile.y}/${tile.x}.png`;
    };
  }

  setImageLayer(): void {
    const typeMap = 'MODIS_Terra_NDSI_Snow_Cover';
    const getTileUrl = this.getTileUrl(typeMap, '2015-04-13');
    const layerOptions = {
      alt: typeMap,
      getTileUrl: getTileUrl,
      maxZoom: 12,
      minZoom: 1,
      name: typeMap,
      tileSize: new google.maps.Size(256, 256),
      opacity: 0.5
    };
    const imageMapType = new google.maps.ImageMapType(layerOptions);
    this.map.overlayMapTypes.insertAt(0, imageMapType);
  }

  setGeoJSONData(geoData): void {
    this.map.data.loadGeoJson(geoData);
  }

  setGeoJSONStylesData(options): void {
    this.map.data.setStyle(options);
  }

  private loadScriptLoadingPromise() {
    const script = window.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    const callbackName = 'initMaps';
    script.src = getScriptSrc(callbackName);
    this.scriptLoadingPromise = new Promise<any>((resolve: Function, reject: Function) => {
      (<any>window)[callbackName] = () => { resolve(); };

      script.onerror = (error: Event) => { reject(error); };
    });
    window.document.body.appendChild(script);
  }

  getData(): Observable<any> {
    const url = 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/' +
      'MODIS_Terra_CorrectedReflectance_TrueColor/default/2012-07-09/250m/6/13/36.jpg';
    return this.http.get(url);
  }

  /** Exemple of wrapped to promise API */
  // geocode(address: string | google.maps.GeocoderRequest): Promise<google.maps.GeocoderResult[]> {
    // return this.onReady().then(() => {
    //   this.geocoder.geocode(typeof address == "google.maps.GeocoderRequest" ? address: {address: address},
    //       (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
    //         if(status == google.maps.GeocoderStatus.OK) {
    //           return results;
    //         } else {
    //           throw new Error(status.toString());
    //         }
    //   });
    // });
  // }
}
