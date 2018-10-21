import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  baseUrl = 'http://172.26.40.87:8080/cryosphere/rest';
  constructor(private http: Http) { }
  sendCryosphereData(user, bb, data) {
    const url = `${this.baseUrl}/maps/getNearestCryosphere`;
    return this.http.post(url, {
      boundingBox: bb,
      userLocation: user,
      image: data
    });
  }
  sendCryosphereDataByYear(data) {
    const url = `${this.baseUrl}/maps/calculatePercentages`;
    return this.http.post(url, {
      images: data
    });
  }
}
