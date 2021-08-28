/* eslint-disable no-fallthrough */
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

  static convertWeatherIdToSimpleIcon(weatherId) {
    let returnIcon = 'error';

    switch (weatherId) {
      // Thunderstorms
      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232: {
        returnIcon = 'storm';
        break;
      }
      // Drizzle
      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 321: {
        returnIcon = 'raining';
        break;
      }

      // raining
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 511:
      case 520:
      case 521:
      case 522:
      case 531: {
        returnIcon = 'raining';
        break;
      }
      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 613:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622: {
        returnIcon = 'snowing';
        break;
      }
      // mist
      case 701:
      // smoke
      case 711:
      // haze
      case 721:
      // dust whirls
      case 731:
      // fog
      case 741:
      // sand
      case 751:
      // dust
      case 761:
      // volcanic ash
      case 762:
      // squall
      case 771:
      // tornado
      case 781: {
        returnIcon = 'tornado';
        break;
      }
      // clear
      case 800: {
        returnIcon = 'sunny';
        break;
      }
      // few clouds
      case 801:
      // scattered clouds
      case 802:
      // broken clouds
      case 803:
      // overcase clouds
      case 804: {
        returnIcon = 'clouds';
        break;
      }
      default: {
        break;
      }
    }

    return returnIcon;
  }

  static convertWeatherIdToHeroIcon(weatherId) {
    let returnIcon = 'error';

    switch (weatherId) {
      // Thunderstorms
      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232: {
        returnIcon = 'storm';
        break;
      }
      // Drizzle
      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 321: {
        returnIcon = 'drizzle';
        break;
      }

      // raining
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 511:
      case 520:
      case 521:
      case 522:
      case 531: {
        returnIcon = 'raining';
        break;
      }
      case 611: {
        returnIcon = 'sleet';
        break;
      }
      case 615:
      case 616:
      case 620: {
        returnIcon = 'sleet';
        break;
      }
      case 600:
      case 601:
      case 602:
      case 612:
      case 613:
      case 621:
      case 622: {
        returnIcon = 'snowing';
        break;
      }
      // mist
      case 701:
      // smoke
      case 711:
      // haze
      case 721:
      // dust whirls
      case 731:
      // fog
      case 741:
      // sand
      case 751:
      // dust
      case 761:
      // volcanic ash
      case 762:
      // squall
      case 771:
      // tornado
      case 781: {
        returnIcon = 'tornado';
        break;
      }
      // clear
      case 800: {
        returnIcon = 'sunny';
        break;
      }
      // few clouds
      case 801:
      // scattered clouds
      case 802:
      // broken clouds
      case 803:
      // overcase clouds
      case 804: {
        returnIcon = 'clouds';
        break;
      }
      default: {
        break;
      }
    }

    return returnIcon;
  }
}
