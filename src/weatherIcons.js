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
import DrizzleSimple from './icons/simple/raining.svg';
import RainingSimple from './icons/simple/raining.svg';
import SleetSimple from './icons/simple/snowing.svg';
import SnowingSimple from './icons/simple/snowing.svg';
import TornadoSimple from './icons/simple/tornado.svg';
import SunnySimple from './icons/simple/sunny.svg';
import CloudsSimple from './icons/simple/clouds.svg';

export default class WeatherIcons {
  static getWeatherHeroIcon(weatherType) {
    switch (weatherType) {
      case 'error': {
        return ErrorIcon;
      }
      case 'storm': {
        return StormHero;
      }
      case 'drizzle': {
        return DrizzleHero;
      }
      case 'raining': {
        return RainingHero;
      }
      case 'sleet': {
        return SleetHero;
      }
      case 'snowing': {
        return SnowingHero;
      }
      case 'tornado': {
        return TornadoHero;
      }
      case 'sunny': {
        return SunnyHero;
      }
      case 'clouds': {
        return CloudsHero;
      }
      default:
        return ErrorIcon;
    }
  }

  static getWeatherSimpleIcon(weatherType) {
    switch (weatherType) {
      case 'error': {
        return ErrorIcon;
      }
      case 'storm': {
        return StormSimple;
      }
      case 'drizzle': {
        return DrizzleSimple;
      }
      case 'raining': {
        return RainingSimple;
      }
      case 'sleet': {
        return SleetSimple;
      }
      case 'snowing': {
        return SnowingSimple;
      }
      case 'tornado': {
        return TornadoSimple;
      }
      case 'sunny': {
        return SunnySimple;
      }
      case 'clouds': {
        return CloudsSimple;
      }
      default:
        return ErrorIcon;
    }
  }
}
