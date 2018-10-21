import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';

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
  private layerConf = {
    'SMAP_L4_Snow_Mass': {
      gMapsLevel: 'GoogleMapsCompatible_Level6'
    },
    'MODIS_Terra_NDSI_Snow_Cover': {
      gMapsLevel: 'GoogleMapsCompatible_Level8'
    },
    'SMAP_L4_Frozen_Area': {
      gMapsLevel: 'GoogleMapsCompatible_Level6'
    }
  };

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
      return this.map;
    });
  }

  getMap() {
    return this.map;
  }

  getTileUrl(layerConf, date): (tileCord: google.maps.Point, zoom: Number) => string {
    const type = layerConf.name;
    const gMapsLevel = layerConf.gMapsLevel;
    return (tile, zoom) => {
      return `//gibs.earthdata.nasa.gov/wmts/epsg3857/best/${type}/default/${date}` +
        `/${gMapsLevel}/${zoom}/${tile.y}/${tile.x}.png`;
    };
  }

  setImageLayer(dataLayer): void {
    const layerInfo = {
      name: dataLayer,
      gMapsLevel: this.layerConf[dataLayer].gMapsLevel
    };
    const getTileUrl = this.getTileUrl(layerInfo, '2015-04-13');
    const layerOptions = {
      alt: dataLayer,
      getTileUrl: getTileUrl,
      maxZoom: 10,
      minZoom: 1,
      name: dataLayer,
      tileSize: new google.maps.Size(256, 256),
      opacity: 0.5
    };
    const imageMapType = new google.maps.ImageMapType(layerOptions);
    this.map.overlayMapTypes.clear();
    this.map.overlayMapTypes.push(imageMapType);
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
