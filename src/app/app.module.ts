import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MapComponent } from './map/map.component';
import { Ng5SliderModule } from 'ng5-slider';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DashboardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    NgbModule,
    NgxChartsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
