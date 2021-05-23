import { Component, OnInit } from '@angular/core';
import { IWeatherData } from '../data-models/weather-data-model';
import { WeatherService } from '../services/weather.service'

@Component({
  selector: 'weather-forecast-view',
  templateUrl: './weather-forecast-view.component.html',
  styleUrls: ['./weather-forecast-view.component.css']
})
export class WeatherForecastViewComponent implements OnInit {

  dataMode: string = 'daily';
  unit: string = 'F';
  weatherData: IWeatherData;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const long = coords.longitude;
      const lat = coords.latitude;
      /**
       * The API return s CORS Error
       */
      // this.weatherService.fetchWeatherData(long, lat).subscribe(res => {
      //   console.log(res);
      // })
    })
    this.weatherData = this.fetchStaticData();
  }
  /**
   * fetch static data
   */
  fetchStaticData(): IWeatherData {
    return this.weatherService.fetchData()
  }
}
