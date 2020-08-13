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

  unit = new FormControl('celsius');
  unit2 = new FormControl('fahrenheit');

  handleTemperatureChange(side: string) {
    if (side === 'A') {
      const newTemperature2 = convert(
        this.temperature.value,
        this.unit.value,
        this.unit2.value
      );
      this.temperature2.setValue(newTemperature2);
    } else if (side === 'B') {
      const newTemperature = convert(
        this.temperature2.value,
        this.unit2.value,
        this.unit.value
      );
      this.temperature.setValue(newTemperature);
    }
  }

  handleUnitChange(side: string, newUnit: TemperatureUnit) {
    if (side === 'A') {
      const newTemperature2 = convert(
        this.temperature.value,
        newUnit,
        this.unit2.value
      );
      this.temperature2.setValue(newTemperature2);
    } else if (side === 'B') {
      const newTemperature = convert(
        this.temperature2.value,
        newUnit,
        this.unit.value
      );
      this.temperature.setValue(newTemperature);
    }
  }
}
