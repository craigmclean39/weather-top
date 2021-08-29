/* eslint-disable no-fallthrough */
import ErrorIcon from './icons/main/error.svg';
import StormHero from './icons/main/storm.svg';
import DrizzleHero from './icons/main/drizzle.svg';
import RainingHero from './icons/main/raining.svg';
import SleetHero from './icons/main/sleet.svg';
import SnowingHero from './icons/main/snowing.svg';
import TornadoHero from './icons/main/tornado.svg';
import SunnyHero from './icons/main/sunny.svg';
import CloudsHero from './icons/main/clouds.svg';

import StormSimple from './icons/simple/storm.svg';
// import DrizzleSimple from './icons/simple/raining.svg';
import RainingSimple from './icons/simple/raining.svg';
// import SleetSimple from './icons/simple/snowing.svg';
import SnowingSimple from './icons/simple/snowing.svg';
import TornadoSimple from './icons/simple/tornado.svg';
import SunnySimple from './icons/simple/sunny.svg';
import CloudsSimple from './icons/simple/clouds.svg';

import PopIcon from './icons/simple/raindrops.svg';
import SunriseIcon from './icons/simple/sunrise.svg';
import SunsetIcon from './icons/simple/sunset.svg';

export default class WeatherIcons {
  static getWeatherHeroIcon(weatherId) {
    let returnIcon = ErrorIcon;

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
        returnIcon = StormHero;
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
        returnIcon = DrizzleHero;
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
        returnIcon = RainingHero;
        break;
      }
      case 611: {
        returnIcon = SleetHero;
        break;
      }
      case 615:
      case 616:
      case 620: {
        returnIcon = SleetHero;
        break;
      }
      case 600:
      case 601:
      case 602:
      case 612:
      case 613:
      case 621:
      case 622: {
        returnIcon = SnowingHero;
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
        returnIcon = TornadoHero;
        break;
      }
      // clear
      case 800: {
        returnIcon = SunnyHero;
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
        returnIcon = CloudsHero;
        break;
      }
      default: {
        break;
      }
    }

    return returnIcon;
  }

  static getWeatherSimpleIcon(weatherId) {
    let returnIcon = ErrorIcon;

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
        returnIcon = StormSimple;
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
        returnIcon = RainingSimple;
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
        returnIcon = RainingSimple;
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
        returnIcon = SnowingSimple;
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
        returnIcon = TornadoSimple;
        break;
      }
      // clear
      case 800: {
        returnIcon = SunnySimple;
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
        returnIcon = CloudsSimple;
        break;
      }
      default: {
        break;
      }
    }

    return returnIcon;
  }

  static getPopIcon() {
    return PopIcon;
  }

  static getSunriseIcon() {
    return SunriseIcon;
  }

  static getSunsetIcon() {
    return SunsetIcon;
  }
}
