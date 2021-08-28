export default class ConversionUtility {
  static temperatureModes = { kelvin: 0, celsius: 1, fahrenheit: 2 };

  static convertTemperature(temp, to, from) {
    let returnTemperature = 0;

    if (from === this.temperatureModes.kelvin) {
      switch (to) {
        case this.temperatureModes.celsius: {
          returnTemperature = Number(temp - 273.15);
          break;
        }
        case this.temperatureModes.fahrenheit: {
          returnTemperature = Number((temp - 273.15) * (9 / 5) + 32);
          break;
        }
        case this.temperatureModes.kelvin: {
            returnTemperature = Number(temp);
            break;
          }

        default:
          break;
      }
    }
    return returnTemperature;
  }
}
