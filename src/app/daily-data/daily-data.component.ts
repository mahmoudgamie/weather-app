import { Component, Input, OnInit } from '@angular/core';
import { IDailyData } from '../data-models/weather-data-model';

@Component({
  selector: 'daily-data',
  templateUrl: './daily-data.component.html',
  styleUrls: ['./daily-data.component.css']
})
export class DailyDataComponent implements OnInit {
  @Input() data: IDailyData[]
  @Input() unit: string;

  constructor() { }

  ngOnInit(): void {
  }

}
