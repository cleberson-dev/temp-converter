import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { convert, TemperatureUnit } from './utils/temperature';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'temp-converter';
  
  temperature = new FormControl(0);
  temperature2 = new FormControl(0);

  unitField = new FormControl('celsius');
  unitField2 = new FormControl('fahrenheit');

  units = [
    { value: 'celsius', label: 'Celsius' },
    { value: 'fahrenheit', label: 'Fahrenheit' },
    { value: 'kelvin', label: 'Kelvin' }
  ]

  handleTemperatureChange(side: string) {
    if (side === 'A') {
      const newTemperature2 = convert(
        this.temperature.value,
        this.unitField.value,
        this.unitField2.value
      );
      this.temperature2.setValue(newTemperature2);
    } else if (side === 'B') {
      const newTemperature = convert(
        this.temperature2.value,
        this.unitField2.value,
        this.unitField.value
      );
      this.temperature.setValue(newTemperature);
    }
  }

  handleUnitChange(side: string, newUnit: string) {
    if (side === 'A') {
      const newTemperature = convert(
        this.temperature2.value,
        this.unitField2.value,
        (newUnit as TemperatureUnit)
      );
      this.temperature.setValue(newTemperature);
    } else if (side === 'B') {
      const newTemperature2 = convert(
        this.temperature.value,
        this.unitField.value,
        (newUnit as TemperatureUnit),
      );
      this.temperature2.setValue(newTemperature2);
    }
  }

  isUnitSelected(other: string): boolean {
    return other === this.unitField.value;
  }
  isUnit2Selected(other: string): boolean {
    return other === this.unitField2.value;
  }
}
