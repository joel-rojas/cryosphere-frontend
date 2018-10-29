import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public static count: number = 0;

  constructor() { }

  getloaderCount(): number {
    return LoadingService.count;
  }

  showPreloader() {
    LoadingService.count++;
  }

  hidePreloader() {
    LoadingService.count--;
  }
}
