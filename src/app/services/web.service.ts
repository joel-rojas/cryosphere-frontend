import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  // baseUrl = 'http://localhost:8080/cryosphere/rest';
  baseUrl = 'https://cryosphere.herokuapp.com/rest';
  constructor(private http: HttpService) { }
  sendCryosphereData(data) {
    const url = `${this.baseUrl}/maps/getNearestCryosphere`;
    return this.http.post(url, data);
  }
  sendCryosphereDataByYear() {
    const url = `${this.baseUrl}/maps/calculatePercentages`;
    return this.http.get(url);
  }
}
