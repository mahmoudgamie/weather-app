import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WeatherForecastViewComponent } from './weather-forecast-view/weather-forecast-view.component';
import { TemeratureConverterPipe } from './pipes/temerature-converter.pipe';
import { DailyDataComponent } from './daily-data/daily-data.component';
import { HourlyDataComponent } from './hourly-data/hourly-data.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastViewComponent,
    TemeratureConverterPipe,
    DailyDataComponent,
    HourlyDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
