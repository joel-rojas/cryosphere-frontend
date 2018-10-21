import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import html2canvas from 'html2canvas';

import { WebService } from './../services/web.service';

const getScriptSrc = (callbackName) => {
  return `https://maps.googleapis.com/maps/api/js?key=AIzaSyDx92iaKUnowpTZOLt1FGAJqi98picikH8&libraries=places&callback=${callbackName}`;
};

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private mapSubject: BehaviorSubject<any> = new BehaviorSubject(null);
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
      gMapsLevel: 'GoogleMapsCompatible_Level6',
      minDate: '2015/04/13'
    }
  };
  private searchBox;
  private geoCodingMarkers = [];
  private yearSet = [];
  private layersByYear = [];

  constructor(private webService: WebService, private mapService: MapService) {
    this.loadScriptLoadingPromise();
    this.onReady().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  onReady(): Promise<any> {
    return this.scriptLoadingPromise;
  }

  clearGeoCodingMarkers() {
    // Clear out the old markers.
    this.geoCodingMarkers.forEach((marker) => {
      marker.setMap(null);
    });
    this.geoCodingMarkers = [];
  }

  initMap(mapHtmlElement: HTMLElement, options: google.maps.MapOptions): Promise<google.maps.Map> {
    return this.onReady().then(() => {
      this.map = new google.maps.Map(mapHtmlElement, options);
      this.mapSubject.next(this.map);
      return this.map;
    });
  }

  getCurrentDateStringFormat() {
    const currentDate = new Date();
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);
    const monthVal = currentDate.getMonth() + 1;
    const monthText = monthVal < 10 ? `0${monthVal}` : monthVal;
    return currentDate.getFullYear() + '-' + monthText + '-' + '07';
  }

  getMapSubject(): Observable<any> {
    return this.mapSubject.asObservable();
  }

  getMap() {
    return this.map;
  }

  getMapBounds() {
    return this.map.getBounds();
  }

  getMapOverlay() {
    return this.map.overlayMapTypes;
  }

  getUserMarker() {
    return this.geoCodingMarkers.length > 0 ? this.geoCodingMarkers[0] : null;
  }

  getTileUrl(layerConf, date): (tileCord: google.maps.Point, zoom: Number) => string {
    const type = layerConf.name;
    const gMapsLevel = layerConf.gMapsLevel;
    return (tile, zoom) => {
      return `//gibs.earthdata.nasa.gov/wmts/epsg3857/best/${type}/default/${date}` +
        `/${gMapsLevel}/${zoom}/${tile.y}/${tile.x}.png`;
    };
  }

  getYearSet() {
    return this.yearSet;
  }

  sendNearestCryosphereData() {
    const userLocation = this.getUserMarker();
    const userCoor = [userLocation.position.lat(), userLocation.position.lng()];
    const mapBBox = this.getMapBounds();
    const mapBBoxNE = mapBBox.getNorthEast();
    const mapBBoxSW = mapBBox.getSouthWest();
    const mapBBCoor = [[mapBBoxSW.lat(), mapBBoxSW.lng()], [mapBBoxNE.lat(), mapBBoxNE.lng()]];
    this.setImageLayer('SMAP_L4_Frozen_Area');
    // this.saveDataLayerForAPI().then(data => {
      this.webService.sendCryosphereData(userCoor, mapBBCoor).toPromise().then((data) => {
        console.log(data);
        console.log('Processed Succesfully');
      });
    // });
  }

  saveDataLayerForAPI() {
    this.layersByYear = [];
    return new Promise((resolve, reject) => {
      this.getMapOverlay().getArray().forEach((val, idx, arr) => {
        val.setOpacity(1);
        setTimeout(() => {
          html2canvas(document.getElementById('map')).then((canvas) => {
            const layerData =  {
              imageName: idx,
              encodedImage: canvas.toDataURL('image/png'),
              dateImage: this.yearSet[idx]
            };
            this.layersByYear.push(layerData);
            val.setOpacity(0);
            if (idx === arr.length - 1) {
              resolve(this.layersByYear);
            }
          });
        }, 3000);
      });
    });
  }

  setImageLayer(dataLayer, dateString?, isDateRange?): void {
    const layerInfo = {
      name: dataLayer,
      gMapsLevel: this.layerConf[dataLayer].gMapsLevel
    };
    dateString = dateString || this.getCurrentDateStringFormat();
    const getTileUrl = this.getTileUrl(layerInfo, dateString);
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
    if (!isDateRange) {
      this.map.overlayMapTypes.clear();
    } else {
      this.map.overlayMapTypes.getArray().
        forEach((val: google.maps.MapType, idx) => {
        if (idx > 0) {
          val.setOpacity(0);
        } else {
          val.setOpacity(0.5);
        }
      });
    }
    this.map.overlayMapTypes.push(imageMapType);
  }

  setGeoJSONData(geoData): void {
    this.map.data.loadGeoJson(geoData);
  }

  setGeoJSONStylesData(options): void {
    this.map.data.setStyle(options);
  }

  setGeocodingUIConf(inputEl): void {
    this.searchBox = new google.maps.places.SearchBox(inputEl);
    this.map.addListener('bounds_changed', () => {
      this.searchBox.setBounds(this.map.getBounds());
    });
    this.searchBox.addListener('places_changed', () => {
      const places = this.searchBox.getPlaces();
      if (places.length === 0) {
        return;
      }
      this.clearGeoCodingMarkers();

      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry) {
          console.log('Returned place contains no geometry');
          return;
        }

        // Create a marker for each place.
        this.geoCodingMarkers.push(new google.maps.Marker({
          map: this.map,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }

      });
      this.map.fitBounds(bounds);
      this.sendNearestCryosphereData();
    });
  }

  setImageLayerDataByYears() {
    const layerName = 'SMAP_L4_Frozen_Area';
    const minDateStr = this.layerConf[layerName].minDate;
    const validDatStr = minDateStr.split('/').join('-');
    const minDate = new Date(`${validDatStr}T00:00:00`);
    const currentDate = new Date();
    currentDate.setDate(7);
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);
    this.yearSet = [];
    while (minDate < currentDate) {
      const year = minDate.getFullYear();
      this.yearSet.push(year);
      if (year === currentDate.getFullYear()) {
        minDate.setDate(currentDate.getDate());
        minDate.setMonth(currentDate.getMonth());
      }
      const monthVal = minDate.getMonth() + 1;
      const monthText = monthVal < 10 ? `0${monthVal}` : monthVal;
      const dateVal = minDate.getDate();
      const dateTxt = dateVal < 10 ? `0${dateVal}` : dateVal;
      const dateStr = minDate.getFullYear() + '-' + monthText + '-' + dateTxt;
      this.setImageLayer(layerName, dateStr, true);
      minDate.setFullYear(year + 1);
    }
  }

  setMapClickEv() {
    this.map.addListener('click', (ev) => {
      const latLng = ev.latLng;
      this.clearGeoCodingMarkers();
      this.geoCodingMarkers.push(new google.maps.Marker({
        map: this.map,
        position: latLng
      }));
      this.sendNearestCryosphereData();
    });
  }

  private loadScriptLoadingPromise() {
    const script = window.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    const callbackName = 'initMap';
    script.src = getScriptSrc(callbackName);
    this.scriptLoadingPromise = new Promise<any>((resolve: Function, reject: Function) => {
      (<any>window)[callbackName] = () => { resolve(); };

      script.onerror = (error: Event) => { reject(error); };
    });
    window.document.body.appendChild(script);
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
