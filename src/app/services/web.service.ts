import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  baseUrl = 'http://172.26.40.87:8080/cryosphere/rest';
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
