import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  // baseUrl = 'http://localhost:8080/cryosphere/rest';
  baseUrl = 'https://cryosphere.herokuapp.com/rest';
  constructor(private http: Http) { }
  sendCryosphereData(data) {
    const url = `${this.baseUrl}/maps/getNearestCryosphere`;
    return this.http.post(url, data);
  }
  sendCryosphereDataByYear() {
    const url = `${this.baseUrl}/maps/calculatePercentages`;
    return this.http.get(url);
  }
}
