/* eslint-disable no-fallthrough */
import format from 'date-fns/format';
import add from 'date-fns/add';
import utcToZonedTime from 'date-fns-tz/utcToZonedTime';
import WeatherIcons from './weatherIcons';
import DomHelper from './domHelper';
import ConversionUtility from './conversionUtility';
import FavoriteIconFilled from './icons/starFilled.svg';
import FavoriteIconUnfilled from './icons/star.svg';

export default class WeatherDom {
  static createBasicCard(wdo, isFavorite, favoriteCallback) {
    const card = DomHelper.createElement('div', 'basic-weather-card');
    const date = DomHelper.createElement('div', 'basic-weather-card__date');
    const location = DomHelper.createElement(
      'div',
      'basic-weather-card__location'
    );

    const favorite = DomHelper.createElement(
      'img',
      'basic-weather-card__favorite'
    );

    const time = DomHelper.createElement('div', 'basic-weather-card__time');

    const heroIcon = DomHelper.createElement(
      'img',
      'basic-weather-card__hero-icon'
    );
    const currentTemp = DomHelper.createElement(
      'div',
      'basic-weather-card__temps__current-temp'
    );

    const mainWeather = DomHelper.createElement(
      'div',
      'basic-weather-card__mainWeather'
    );
    const minTemp = DomHelper.createElement(
      'div',
      'basic-weather-card__temps__minTemp'
    );
    const maxTemp = DomHelper.createElement(
      'div',
      'basic-weather-card__temps__maxTemp'
    );

    const allTemps = DomHelper.createElement(
      'div',
      'basic-weather-card__temps'
    );

    const minMaxTemps = DomHelper.createElement(
      'div',
      'basic-weather-card__temps__minMax'
    );

    if (isFavorite) {
      favorite.src = FavoriteIconFilled;
      favorite.dataset.isFavorite = true;
    } else {
      favorite.src = FavoriteIconUnfilled;
      favorite.dataset.isFavorite = false;
    }

    favorite.addEventListener('click', favoriteCallback);

    // Grab the current date and format it in this style '4th Aug, 2021 | Wednesday'
    const currentDate = Date.now();
    const zonedDate = utcToZonedTime(currentDate, wdo.timezone);
    const dateString1 = format(zonedDate, 'do LLL');
    const dateString2 = format(zonedDate, 'yyyy');
    const dateString3 = format(zonedDate, 'EEEE');
    const finalDateString = `${dateString1}, ${dateString2} | ${dateString3}`;
    date.innerText = finalDateString;

    time.innerText = format(zonedDate, 'p');

    const locationString = `${wdo.cityName}, ${wdo.countryName}`;
    location.innerText = locationString;

    // check if it's after sunset or before sunrise, if so, use night icons
    let sunriseTime = new Date(wdo.sunriseTime * 1000);
    let sunsetTime = new Date(wdo.sunsetTime * 1000);

    sunriseTime = utcToZonedTime(sunriseTime, wdo.timezone);
    sunsetTime = utcToZonedTime(sunsetTime, wdo.timezone);

    let nightIcon = false;
    if (zonedDate < sunriseTime || zonedDate > sunsetTime) {
      nightIcon = true;
    }

    heroIcon.src = WeatherIcons.getWeatherHeroIcon(wdo.weatherId, nightIcon);
    heroIcon.alt = wdo.weatherMain;

    let tempMode = '';
    if (wdo.temperatureMode === ConversionUtility.temperatureModes.celsius) {
      tempMode = 'C';
    } else if (
      wdo.temperatureMode === ConversionUtility.temperatureModes.fahrenheit
    ) {
      tempMode = 'F';
    } else {
      tempMode = 'K';
    }
    currentTemp.innerText = `${Math.round(wdo.currentTemp)}??`;

    const mode = DomHelper.createElement('span');
    mode.innerText = tempMode;
    currentTemp.appendChild(mode);

    minTemp.innerText = 'Low: ';
    maxTemp.innerText = 'Hi: ';

    const lo = DomHelper.createElement('span');
    lo.innerText = `${Math.round(wdo.minTemp)}??`;
    const hi = DomHelper.createElement('span');
    hi.innerText = `${Math.round(wdo.maxTemp)}??`;

    minTemp.appendChild(lo);
    maxTemp.appendChild(hi);

    mainWeather.innerText = wdo.weatherMain;

    card.appendChild(favorite);
    card.appendChild(date);
    card.appendChild(location);

    const heroFlex = DomHelper.createElement(
      'div',
      'basic-weather-card__hero-flex'
    );

    heroFlex.appendChild(time);
    heroFlex.appendChild(heroIcon);

    allTemps.appendChild(currentTemp);
    minMaxTemps.appendChild(minTemp);
    minMaxTemps.appendChild(maxTemp);
    allTemps.appendChild(minMaxTemps);

    heroFlex.appendChild(allTemps);
    heroFlex.appendChild(mainWeather);

    card.appendChild(heroFlex);

    card.appendChild(this.createAdditionalInfoCard(wdo));

    return card;
  }

  static createAdditionalInfoCard(wdo) {
    const card = DomHelper.createElement('div', 'additional-info-card');

    const pop = DomHelper.createElement('div', 'additional-info-card__pop');
    const sunrise = DomHelper.createElement(
      'div',
      'additional-info-card__sunrise'
    );
    const sunset = DomHelper.createElement(
      'div',
      'additional-info-card__sunset'
    );

    const popIcon = DomHelper.createElement(
      'img',
      'additional-info-card__pop__icon'
    );
    const popText = DomHelper.createElement(
      'div',
      'additional-info-card__pop__text'
    );
    popIcon.src = WeatherIcons.getPopIcon();
    popText.innerText = `${Math.round(wdo.currentPop * 100)}%`;

    pop.appendChild(popIcon);
    pop.appendChild(popText);

    // convert the unix timestamp to a date
    let sunriseTime = new Date(wdo.sunriseTime * 1000);
    let sunsetTime = new Date(wdo.sunsetTime * 1000);

    sunriseTime = utcToZonedTime(sunriseTime, wdo.timezone);
    sunsetTime = utcToZonedTime(sunsetTime, wdo.timezone);

    sunriseTime = format(sunriseTime, 'p');
    sunsetTime = format(sunsetTime, 'p');

    const sunriseIcon = DomHelper.createElement(
      'img',
      'additional-info-card__sunrise__icon'
    );
    const sunriseText = DomHelper.createElement(
      'div',
      'additional-info-card__sunrise__text'
    );
    sunriseIcon.src = WeatherIcons.getSunriseIcon();
    sunriseText.innerText = `${sunriseTime}`;

    const sunsetIcon = DomHelper.createElement(
      'img',
      'additional-info-card__sunset__icon'
    );
    const sunsetText = DomHelper.createElement(
      'div',
      'additional-info-card__sunset__text'
    );
    sunsetIcon.src = WeatherIcons.getSunsetIcon();
    sunsetText.innerText = `${sunsetTime}`;

    sunrise.appendChild(sunriseIcon);
    sunrise.appendChild(sunriseText);
    sunset.appendChild(sunsetIcon);
    sunset.appendChild(sunsetText);

    card.appendChild(pop);
    card.appendChild(sunrise);
    card.appendChild(sunset);

    return card;
  }

  static createHourlyCard(wdo) {
    const card = DomHelper.createElement('div', 'hourly-card');

    const currentDate = Date.now();
    for (let i = 1; i < wdo.hourlyTemps.length; i++) {
      const hourDiv = DomHelper.createElement('div', 'hourly-card__hourInfo');
      const hourIcon = DomHelper.createElement(
        'img',
        'hourly-card__hourInfo__icon'
      );
      const hourTemp = DomHelper.createElement(
        'div',
        'hourly-card__hourInfo__temp'
      );
      const hourHour = DomHelper.createElement(
        'div',
        'hourly-card__hourInfo__hourHour'
      );

      const hourOfDay = add(currentDate, { hours: i });
      const zonedDate = utcToZonedTime(hourOfDay, wdo.timezone);
      const formattedHourOfDay = format(zonedDate, 'h aa');

      hourHour.innerText = formattedHourOfDay;

      hourIcon.src = WeatherIcons.getWeatherSimpleIcon(wdo.hourlyWeatherIds[i]);
      hourTemp.innerText = `${Math.round(wdo.getHourlyTemp(i) * 10) / 10}??`;

      hourDiv.appendChild(hourHour);
      hourDiv.appendChild(hourIcon);
      hourDiv.appendChild(hourTemp);

      card.appendChild(hourDiv);

      // I just want 1 days worth or info
      if (i === 24) {
        break;
      }
    }

    return card;
  }

  static createWeeklyCard(wdo) {
    const card = DomHelper.createElement('div', 'weekly-card');

    const currentDate = Date.now();

    // starting at 1 to ignore the current day
    for (let i = 1; i < wdo.dayTemps.length; i++) {
      const dayDiv = DomHelper.createElement('div', 'weekly-card__dayInfo');

      const dayIconTemp = DomHelper.createElement(
        'div',
        'weekly-card__dayInfo__day-temp'
      );

      const dayIcon = DomHelper.createElement(
        'img',
        'weekly-card__dayInfo__day-temp__icon'
      );
      const dayTemp = DomHelper.createElement(
        'div',
        'weekly-card__dayInfo__day-temp__temp'
      );
      const dayDay = DomHelper.createElement(
        'div',
        'weekly-card__dayInfo__day'
      );

      const dayOfWeek = add(currentDate, { days: i });
      const zonedDate = utcToZonedTime(dayOfWeek, wdo.timezone);
      const formattedDayOfWeek = format(zonedDate, 'EEEE');

      dayDay.innerText = formattedDayOfWeek;

      dayIcon.src = WeatherIcons.getWeatherSimpleIcon(wdo.dayWeatherIds[i]);
      dayTemp.innerText = `${wdo.getDayTemp(i).toPrecision(3)}??`;

      dayDiv.appendChild(dayDay);
      dayIconTemp.appendChild(dayIcon);
      dayIconTemp.appendChild(dayTemp);
      dayDiv.appendChild(dayIconTemp);

      card.appendChild(dayDiv);
    }

    return card;
  }

  static toggleFavoriteIcon(element) {
    let favElement = null;
    if (!element.classList.contains('basic-weather-card__favorite')) {
      favElement = element.querySelector('basic-weather-card__favorite');
    } else {
      favElement = element;
    }

    let retVal = false;
    if (favElement.dataset.isFavorite === 'true') {
      favElement.dataset.isFavorite = false;
      favElement.src = FavoriteIconUnfilled;
      retVal = false;
    } else {
      favElement.dataset.isFavorite = true;
      favElement.src = FavoriteIconFilled;
      retVal = true;
    }
    return retVal;
  }

  static setBackground(element, wdo) {
    // remove all previous gradient classes

    for (let i = 0; i < element.classList.length; i++) {
      const className = element.classList[i];
      if (className.startsWith('weather-grid--gradient')) {
        element.classList.remove(className);
      }
    }

    const { isNight } = wdo;

    switch (wdo.weatherId) {
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
        // returnIcon = StormHero;
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
        if (isNight) {
          element.classList.add('weather-grid--gradient--rainy--night');
        } else {
          element.classList.add('weather-grid--gradient--rainy');
        }
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
        if (isNight) {
          element.classList.add('weather-grid--gradient--rainy--night');
        } else {
          element.classList.add('weather-grid--gradient--rainy');
        }

        break;
      }
      case 611: {
        if (isNight) {
          element.classList.add('weather-grid--gradient--rainy--night');
        } else {
          element.classList.add('weather-grid--gradient--rainy');
        }
        break;
      }
      case 615:
      case 616:
      case 620: {
        if (isNight) {
          element.classList.add('weather-grid--gradient--rainy--night');
        } else {
          element.classList.add('weather-grid--gradient--rainy');
        }
        break;
      }
      case 600:
      case 601:
      case 602:
      case 612:
      case 613:
      case 621:
      case 622: {
        if (isNight) {
          element.classList.add('weather-grid--gradient--snowing--night');
        } else {
          element.classList.add('weather-grid--gradient--snowing');
        }
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
        // returnIcon = TornadoHero;
        break;
      }
      // clear
      case 800: {
        if (isNight) {
          element.classList.add('weather-grid--gradient--clear--night');
        } else {
          element.classList.add('weather-grid--gradient--clear');
        }
        break;
      }
      // cloudy
      case 801:
      case 802:
      case 803:
      case 804: {
        if (isNight) {
          element.classList.add('weather-grid--gradient--cloudy--night');
        } else {
          element.classList.add('weather-grid--gradient--cloudy');
        }
        break;
      }
      default: {
        if (isNight) {
          element.classList.add('weather-grid--gradient--cloudy--night');
        } else {
          element.classList.add('weather-grid--gradient--cloudy');
        }
        break;
      }
    }
  }
}
