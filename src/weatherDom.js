import format from 'date-fns/format';
import utcToZonedTime from 'date-fns-tz/utcToZonedTime';
import WeatherDataObject from './weatherDataObject';
import WeatherIcons from './weatherIcons';
import DomHelper from './domHelper';
import ConversionUtility from './conversionUtility';

export default class WeatherDom {
  static createBasicCard(wdo) {
    const card = DomHelper.createElement('div', 'basic-weather-card');
    const date = DomHelper.createElement('div', 'basic-weather-card__date');
    const location = DomHelper.createElement(
      'div',
      'basic-weather-card__location'
    );
    const heroIcon = DomHelper.createElement(
      'img',
      'basic-weather-card__hero-icon'
    );
    const currentTemp = DomHelper.createElement(
      'div',
      'basic-weather-card__current-temp'
    );

    const mainWeather = DomHelper.createElement(
      'div',
      'basic-weather-card__mainWeather'
    );
    const minTemp = DomHelper.createElement(
      'div',
      'basic-weather-card__minTemp'
    );
    const maxTemp = DomHelper.createElement(
      'div',
      'basic-weather-card__maxTemp'
    );

    // Grab the current date and format it in this style '4th Aug, 2021 | Wednesday'
    const currentDate = Date.now();
    const zonedDate = utcToZonedTime(currentDate, wdo.timezone);
    const dateString1 = format(zonedDate, 'do LLL');
    const dateString2 = format(zonedDate, 'yyyy');
    const dateString3 = format(zonedDate, 'EEEE');
    const finalDateString = `${dateString1}, ${dateString2} | ${dateString3}`;
    date.innerText = finalDateString;

    const locationString = `${wdo.cityName}, ${wdo.countryName}`;
    location.innerText = locationString;

    heroIcon.src = WeatherIcons.getWeatherHeroIcon(wdo.weatherId);
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
    currentTemp.innerText = `${Math.round(wdo.currentTemp)}° ${tempMode}`;
    minTemp.innerText = `Low: ${Math.round(wdo.minTemp)}° ${tempMode}`;
    maxTemp.innerText = `Hi: ${Math.round(wdo.maxTemp)}° ${tempMode}`;

    mainWeather.innerText = wdo.weatherMain;

    card.appendChild(date);
    card.appendChild(location);

    const heroFlex = DomHelper.createElement(
      'div',
      'basic-weather-card__hero-flex'
    );
    heroFlex.appendChild(heroIcon);
    heroFlex.appendChild(currentTemp);
    heroFlex.appendChild(mainWeather);

    card.appendChild(heroFlex);
    card.appendChild(minTemp);
    card.appendChild(maxTemp);

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
    popText.innerText = `${wdo.currentPop}%`;

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

    for (let i = 0; i < wdo.hourlyTemps.length; i++) {
      const hourDiv = DomHelper.createElement('div', 'hourly-card__hourInfo');
      const hourIcon = DomHelper.createElement(
        'img',
        'hourly-card__hourInfo__icon'
      );
      const hourTemp = DomHelper.createElement(
        'div',
        'hourly-card__hourInfo__temp'
      );

      hourIcon.src = WeatherIcons.getWeatherSimpleIcon(wdo.hourlyWeatherIds[i]);
      hourTemp.innerText = wdo.getHourlyTemp(i).toPrecision(3);

      hourDiv.appendChild(hourIcon);
      hourDiv.appendChild(hourTemp);

      card.appendChild(hourDiv);
    }

    return card;
  }

  static createWeeklyCard(wdo) {
    const card = DomHelper.createElement('div', 'weekly-card');

    //starting at 1 to ignore the current day
    for (let i = 1; i < wdo.dayTemps.length; i++) {
      const dayDiv = DomHelper.createElement('div', 'weekly-card__dayInfo');
      const dayIcon = DomHelper.createElement(
        'img',
        'weekly-card__dayInfo__icon'
      );
      const dayTemp = DomHelper.createElement(
        'div',
        'weekly-card__dayInfo__temp'
      );

      dayIcon.src = WeatherIcons.getWeatherSimpleIcon(wdo.dayWeatherIds[i]);
      dayTemp.innerText = wdo.getDayTemp(i).toPrecision(3);

      dayDiv.appendChild(dayIcon);
      dayDiv.appendChild(dayTemp);

      card.appendChild(dayDiv);
    }

    return card;
  }
}
