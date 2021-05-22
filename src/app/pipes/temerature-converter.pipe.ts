import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temeratureConverter'
})
export class TemeratureConverterPipe implements PipeTransform {

  transform(value: number, unit: string): unknown {
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        var tempareature = (value - 32) / 1.8;
        return tempareature.toFixed(2);
      }
      if (unit === 'F') {
        return value;
      }
    }
    return;
  }
}