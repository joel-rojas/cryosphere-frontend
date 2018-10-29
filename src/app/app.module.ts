import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule, XHRBackend, RequestOptions} from '@angular/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './services/http.service';
import { LoadingService } from './services/loading.service';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { LoadingComponent } from './loading/loading.component';
import { AppComponent } from './app.component';


export function httpServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions, loaderService: LoadingService) {
  return new HttpService(backend, defaultOptions, loaderService);
}

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DashboardComponent,
    MainComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbModule,
    NgxChartsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HttpService,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions, LoadingService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
