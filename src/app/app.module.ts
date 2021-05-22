import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WeatherForecastViewComponent } from './weather-forecast-view/weather-forecast-view.component';
import { TemeratureConverterPipe } from './pipes/temerature-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastViewComponent,
    TemeratureConverterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
