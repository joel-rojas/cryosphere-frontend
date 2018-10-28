import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import mapboxgl from 'mapbox-gl';
import { WebService } from './../services/web.service';


const getMapboxAPIKey = () => {
  return 'pk.eyJ1Ijoiam9lbHJvamFzIiwiYSI6ImNqbnA4aWcxcDAwazYzcHFybXpidGc1cHUifQ.6cIq5oSTL9PvbHaInUG8Gg';
};

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private gibsBaseUrl = `https://gibs.earthdata.nasa.gov/wmts/`;
  private mapSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  private map: mapboxgl.Map;
  private gibsLayers = ['SMAP_L4_Frozen_Area'];
  private layerConf = {};
  private shortestLine;
  private userLocationMarkers: Array<mapboxgl.Marker> = [];
  private frozenAreaLayersIdByYears: Array<any> = [];
  private yearSet = [];
  private layersByYear = [];

  constructor(private webService: WebService, private mapService: MapService) {
    mapboxgl.accessToken = getMapboxAPIKey();
    this.layerConf[this.gibsLayers[0]] = {
      gMapsLevel: 'GoogleMapsCompatible_Level6',
      minDate: '2015/04/13',
      maxDate: '2018/10/07',
      id: 'frozenArea'
    };
  }
  // PUBLIC METHODS
  addMapLayer(source, layer) {
    const id = source.id;
    delete source.id;
    if (!this.map.getSource(id)) {
      this.map.addSource(id, source);
    }
    this.map.addLayer(layer);
  }

  addMarker(userCoordinates: Array<Array<Number>>) {
    const marker = new mapboxgl.Marker()
      .setLngLat(userCoordinates)
      .addTo(this.map);
    this.userLocationMarkers.push(marker);
  }

  centerMap(location: Array<Array<Number>>) {
    this.map.setCenter(location);
  }

  clearMapLayers() {
    const layerKeySet = Object.keys(this.layerConf);
    this.clearFrozenLayersByYears();
    if (layerKeySet.length > 0) {
      for (const key in this.layerConf) {
        if (this.layerConf.hasOwnProperty(key) && this.map.getLayer(this.layerConf[key].id)) {
          this.map.removeLayer(this.layerConf[key].id);
        }
      }
    }
  }

  clearFrozenLayersByYears() {
    const frozenAreaConf = this.getFrozenAreaLayerConf();
    if (this.yearSet.length > 0) {
      this.yearSet.forEach((val) => {
        if (this.map.getLayer(`${frozenAreaConf.id}${val}`)) {
          this.map.removeLayer(`${frozenAreaConf.id}${val}`);
        }
      });
      this.frozenAreaLayersIdByYears = [];
    }
  }

  clearShortestPolylines() {
    if (this.shortestLine) {
      this.shortestLine.setMap(null);
    }
  }

  clearUserLocationMarkers() {
    // Clear out the old markers.
    this.userLocationMarkers.forEach((marker) => {
      marker.remove();
    });
    this.userLocationMarkers = [];
  }
  // drawLineBetweenTwoPoints(p1, p2) {
  //   this.shortestLine = new google.maps.Polyline({
  //     path: [new google.maps.LatLng(p1[0], p1[1]), new google.maps.LatLng(p2[0], p2[1])],
  //     strokeColor: '#000000',
  //     strokeOpacity: 1.0,
  //     strokeWeight: 10,
  //     geodesic: true,
  //     map: this.map
  //   });
  // }
  drawLineBetweenTwoPoints(p1, p2) {
    this.shortestLine = new google.maps.Polyline({
      path: [new google.maps.LatLng(p1[0], p1[1]), new google.maps.LatLng(p2[0], p2[1])],
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 10,
      geodesic: true,
      map: this.map
    });
  }

  // getNearestCryosphreByUserLocation(country) {
  //   const countryData = this.markers.filter(val => val.name === country)[0];
  //   const {mapBBCoor, userCoor, name} = countryData;
  //   const data = {
  //     boundingBox: mapBBCoor,
  //     userLocation: userCoor,
  //     image: { imageName: name}
  //   };
  //   this.clearGeoCodingMarkers();
  //   this.clearShortestPolylines();
  //   this.getMapOverlay().clear();
  //   this.setImageLayer(this.gibsLayers[0]);
  //   const latLng = new google.maps.LatLng(userCoor[0], userCoor[1]);
  //   this.geoCodingMarkers.push(new google.maps.Marker({
  //     position: latLng,
  //     map: this.map
  //   }));
  //   this.map.setCenter(latLng);
  //   return this.webService.sendCryosphereData(data).toPromise().then(response => {
  //     const point = JSON.parse(response['_body']).data;
  //     this.drawLineBetweenTwoPoints(userCoor, point);
  //     return this.getTwoPointsDistanceValue(userCoor, point);
  //   });
  // }
  formatMonthDateValue(date: Date, isMonth: Boolean): String {
    let dateVal;
    if (isMonth) {
      dateVal = date.getMonth() + 1;
    } else {
      dateVal = date.getDate();
    }
    return dateVal < 10 ? `0${dateVal}` : dateVal;
  }

  getCustomGIBSImagesURLs() {
    const MAX_PHOTOS = 40;
    const projection = 'epsg4326';
    const layerType = 'MODIS_Terra_CorrectedReflectance_TrueColor';
    const date = '2018-10-07';
    const randomValue = Math.floor((Math.random() * MAX_PHOTOS) + 1);
    return `${this.gibsBaseUrl}${projection}/best/${layerType}/default/${date}/250m/6/13/${randomValue}.jpg`;
  }

  getFrozenAreaLayerConf() {
    return this.layerConf[this.gibsLayers[0]];
  }

  getFrozenAreaLayersId() {
    if (this.frozenAreaLayersIdByYears.length > 0) {
      return this.frozenAreaLayersIdByYears;
    }
    const frozenAreaConf = this.getFrozenAreaLayerConf();
    if (this.yearSet.length > 0) {
      this.yearSet.forEach((val) => {
        if (this.map.getLayer(`${frozenAreaConf.id}${val}`)) {
          this.frozenAreaLayersIdByYears.push(`${frozenAreaConf.id}${val}`);
        }
      });
      return this.frozenAreaLayersIdByYears;
    }
    return null;
  }

  getFrozenAreaLayerTxt() {
    return this.gibsLayers[0];
  }

  getLatestLayerDateStringFormat() {
    const frozenLayerConf = this.getFrozenAreaLayerConf();
    const maxDate = frozenLayerConf.maxDate;
    const formattedDate = maxDate.split('/').join('-');
    const latestDate = new Date(`${formattedDate}T00:00:00`);
    const monthText = this.formatMonthDateValue(latestDate, true);
    const dateText = this.formatMonthDateValue(latestDate, false);
    return latestDate.getFullYear() + '-' + monthText + '-' + dateText;
  }

  getLayerPaintProperty(layer, paintProp): any {
    return this.map.getPaintProperty(layer, paintProp);
  }

  getMap() {
    return this.map;
  }

  getMapBounds() {
    return this.map.getBounds();
  }

  getMapSubject(): BehaviorSubject<any> {
    return this.mapSubject;
  }

  getMapSubjectObs(): Observable<any> {
    return this.getMapSubject().asObservable();
  }

  getUserMarker() {
    return this.userLocationMarkers.length > 0 ? this.userLocationMarkers[0] : null;
  }

  getTileUrl(layerConf, date) {
    const type = layerConf.name;
    const gMapsLevel = layerConf.gMapsLevel;
    return 'wmts/epsg3857/best/' +
      `${type}/default/` +
      `${date}/${gMapsLevel}/{z}/{y}/{x}.png`;
  }

  getTwoPointsDistanceValue(p1, p2) {
    const R = 6378137; // Earth’s mean radius in meter
    const dLat = this._radians(p2[0] - p1[0]);
    const dLong = this._radians(p2[1] - p1[1]);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this._radians(p1[0])) * Math.cos(this._radians(p2[0])) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return ((R * c) / 1000).toFixed(2);
  }

  getYearSet() {
    return this.yearSet;
  }

  initMap(id) {
    this.map = new mapboxgl.Map({
      container: id,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: {lat: -16.5214, lng: -67.253},
      zoom: 5,
      maxZoom: 10,
      preserveDrawingBuffer: true
    });
  }

  saveDataLayerForAPI(isMultiple) {
    this.layersByYear = [];
    return new Promise((resolve, reject) => {
      const $layerChanged = this._getLayerPropertyChangedObservable(isMultiple);
      $layerChanged.subscribe(obj => {
        const {id} = obj;
        this.onMapStyleLoadEv( () => {
          const mapLayerOpacity = this.getLayerPaintProperty(obj.layer, 'raster-opacity');
          if (mapLayerOpacity > 0) {
            const layerData =  {
              imageName: id,
              encodedImage: this.map.getCanvas().toDataURL('image/png'),
              dateImage: this.yearSet[id]
            };
            this.layersByYear.push(layerData);
          }
          this.setLayerPaintProperty(obj.layer, 'raster-opacity', 0);
          if (id === this.layersByYear.length - 1) {
            if (isMultiple) {
              const frozenLayerConf = this.getFrozenAreaLayerConf();
              const layerId = `${frozenLayerConf.id}${this.yearSet[0]}`;
              this.setLayerPaintProperty(layerId, 'raster-opacity', 0.5);
            }
            resolve(this.layersByYear);
          }
        }, true);
      }, (err) => {
        reject(err);
      });
    });
  }

  sendNearestCryosphereData() {
    const layerId = this.getFrozenAreaLayerConf().id;
    const userLocation = this.getUserMarker().getLngLat();
    const userCoor = [userLocation.lat, userLocation.lng];
    const mapBBox = this.getMapBounds();
    const mapBBoxSW = mapBBox.getSouthWest();
    const mapBBoxNE = mapBBox.getNorthEast();
    const mapBBCoor = [[mapBBoxSW.lat, mapBBoxSW.lng], [mapBBoxNE.lat, mapBBoxNE.lng]];
    this.setImageLayer(this.gibsLayers[0]);
    return this.saveDataLayerForAPI(false).then(data => {
      const {imageName, encodedImage, dateImage} = data[0];
      const bodyData = {
        boundingBox: mapBBCoor,
        userLocation: userCoor,
        image: { imageName, encodedImage, dateImage}
      };
      this.setLayerPaintProperty(layerId, 'raster-opacity', 0.5);
      this.centerMap([userCoor[1], userCoor[0]]);
      return this.webService.sendCryosphereData(bodyData).toPromise().then((res) => {
        console.log('Processed Succesfully');
        const point = JSON.parse(res['_body']).data;
        this.drawLineBetweenTwoPoints(userCoor, point);
        return this.getTwoPointsDistanceValue(userCoor, point);
      });
    });
  }

  setGeoJSONData(geoData): void {
    this.map.data.loadGeoJson(geoData);
  }

  setGeoJSONStylesData(options): void {
    this.map.data.setStyle(options);
  }

  setImageLayer(dataLayer, dateString?, hasMultipleLayers?): void {
    const layerInfo = {
      name: dataLayer,
      gMapsLevel: this.layerConf[dataLayer].gMapsLevel
    };
    dateString = dateString || this.getLatestLayerDateStringFormat();
    const getTileUrl = this.getTileUrl(layerInfo, dateString);
    const id = this.layerConf[dataLayer].id;
    const sourceObj: any = {
      id,
      type: 'raster',
      tiles: [
        '//gibs-a.earthdata.nasa.gov/' + getTileUrl,
        '//gibs-b.earthdata.nasa.gov/' + getTileUrl,
        '//gibs-c.earthdata.nasa.gov/' + getTileUrl
      ],
      tileSize: 256
    };
    const layerObj: any = {
      id,
      type: 'raster',
      source: sourceObj.id,
      minzoom: 1,
      maxzoom: 10,
      paint: {
        'raster-opacity': 0.5
      }
    };
    if (hasMultipleLayers) {
      const yearStr = dateString.split('-')[0];
      sourceObj.id = `${sourceObj.id}${yearStr}`;
      layerObj.id = `${layerObj.id}${yearStr}`;
      layerObj.source = sourceObj.id;
      layerObj.paint['raster-opacity'] = 0;
      if (this.yearSet[0] === parseInt(yearStr, 10)) {
        layerObj.paint['raster-opacity'] = 0.5;
      }
    } else {
      this.clearMapLayers();
    }
    this.addMapLayer(sourceObj, layerObj);
  }

  setImageLayerDataByYears() {
    const layerName = this.gibsLayers[0];
    const minDateStr = this.layerConf[layerName].minDate;
    const maxDateStr = this.layerConf[layerName].maxDate.split('/').join('-');
    const validDateStr = minDateStr.split('/').join('-');
    const minDate = new Date(`${validDateStr}T00:00:00`);
    // Latest layer date available from GIBS API
    const latestDate = new Date(`${maxDateStr}T00:00:00`);
    this.yearSet = [];
    while (minDate < latestDate) {
      const year = minDate.getFullYear();
      this.yearSet.push(year);
      if (year === latestDate.getFullYear()) {
        minDate.setDate(latestDate.getDate());
        minDate.setMonth(latestDate.getMonth());
      }
      const monthText = this.formatMonthDateValue(minDate, true);
      const dateTxt = this.formatMonthDateValue(minDate, false);
      const dateStr = minDate.getFullYear() + '-' + monthText + '-' + dateTxt;
      this.setImageLayer(layerName, dateStr, true);
      minDate.setFullYear(year + 1);
    }
  }

  setLayerPaintProperty(layer, paintProp, value): void {
    this.map.setPaintProperty(layer, paintProp, value);
  }

  // EVENTS
  onMapClickEv(callback: Function, isCalledOnce?: boolean) {
    this.onMapUIEv('click', callback, isCalledOnce);
  }

  onMapLoadEv(callback: Function, isCalledOnce?: boolean) {
    this.onMapUIEv('load', callback, isCalledOnce);
  }

  onMapStyleLoadEv(callback: Function, isCalledOnce?: boolean) {
    this.onMapUIEv('styledata', callback, isCalledOnce);
  }

  onMapUIEv(event: String, callback: Function, isCalledOnce?: boolean): void {
    const listenerFn = isCalledOnce ? 'once' : 'on';
    this.map[listenerFn](event, (...args) => {
      callback(...args);
    });
  }

  // PRIVATE METHODS
  private _getLayerPropertyChangedObservable(isMultiple): Observable<any> {
    return Observable.create((observer) => {
      const frozenLayerConf = this.getFrozenAreaLayerConf();
      const layerId = frozenLayerConf.id;
      if (isMultiple) {
        this.yearSet.forEach((year, idx) => {
          const layer = `${layerId}${year}`;
          this.setLayerPaintProperty(layer, 'raster-opacity', 0.5);
          observer.next({layer: `${layerId}${year}`, id: idx});
        });
      } else {
        this.setLayerPaintProperty(layerId, 'raster-opacity', 0.5);
        observer.next({layer: layerId, id: 0});
      }
    });
  }

  private _radians(x) {
    return x * Math.PI / 180;
  }
}
