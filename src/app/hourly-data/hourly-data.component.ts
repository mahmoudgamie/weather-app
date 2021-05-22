import { Component, Input, OnInit } from '@angular/core';
import { IHourlyData } from '../data-models/weather-data-model';

@Component({
  selector: 'hourly-data',
  templateUrl: './hourly-data.component.html',
  styleUrls: ['./hourly-data.component.css']
})
export class HourlyDataComponent implements OnInit {
  @Input() data: IHourlyData[]
  @Input() unit: string;

  constructor() { }

  ngOnInit(): void {
  }

}
