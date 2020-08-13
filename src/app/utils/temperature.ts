export enum TemperatureUnit {
  Celsius = 'celsius',
  Fahrenheit = 'fahrenheit',
  Kelvin = 'kelvin'
}

export function convert(temperature: number, fromUnit: TemperatureUnit, toUnit: TemperatureUnit) {
  const celsiusTo = {
    [TemperatureUnit.Celsius]: (celsius: number) => celsius,
    [TemperatureUnit.Kelvin]: (celsius: number) => celsius + 273.15,
    [TemperatureUnit.Fahrenheit]: (celsius: number) => celsius * 9/5 + 32
  }
  const fahrenheitTo = {
    [TemperatureUnit.Fahrenheit]: (fahr: number) => fahr,
    [TemperatureUnit.Celsius]: (fahr: number) => (fahr - 32) * 5/9,
    [TemperatureUnit.Kelvin]: (fahr: number) => (fahr + 459.67) * 5/9
  }
  const kelvinTo = {
    [TemperatureUnit.Kelvin]: (kelvin: number) => kelvin,
    [TemperatureUnit.Celsius]: (kelvin: number) => kelvin - 273.15,
    [TemperatureUnit.Fahrenheit]: (kelvin: number) => kelvin * 9/5 - 459.67
  }

  const ops = {
    [TemperatureUnit.Celsius]: celsiusTo,
    [TemperatureUnit.Kelvin]: kelvinTo,
    [TemperatureUnit.Fahrenheit]: fahrenheitTo
  }

  return ops[fromUnit][toUnit](temperature);
}