import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temeratureConverter'
})
export class TemeratureConverterPipe implements PipeTransform {
/**
 * 
 * @param value of tempreture
 * @param unit fahrenheit or celecius
 * toggles temp from fahrenheit to celecius and vice versa
 */
  transform(value: number, unit: string): unknown {
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        const tempareature = (value - 32) / 1.8;
        return tempareature.toFixed(2);
      }
      if (unit === 'F') {
        return value;
      }
    }
    return;
  }
}
