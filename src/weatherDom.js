import format from 'date-fns/format';
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

    const pop = DomHelper.createElement('div', 'basic-weather-card__pop');
    const sunrise = DomHelper.createElement(
      'div',
      'basic-weather-card__sunrise'
    );
    const sunset = DomHelper.createElement('div', 'basic-weather-card__sunset');

    // Grab the current date and format it in this style '4th Aug, 2021 | Wednesday'
    const currentDate = Date.now();
    const dateString1 = format(currentDate, 'do LLL');
    const dateString2 = format(currentDate, 'yyyy');
    const dateString3 = format(currentDate, 'EEEE');
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

    pop.innerText = `${wdo.currentPop}% chance of rain`;

    // convert the unix timestamp to a date
    let sunriseTime = new Date(wdo.sunriseTime * 1000);
    let sunsetTime = new Date(wdo.sunsetTime * 1000);
    sunriseTime = format(sunriseTime, 'p');
    sunsetTime = format(sunsetTime, 'p');

    sunrise.innerText = `Sunrise: ${sunriseTime}`;
    sunset.innerText = `Sunset: ${sunsetTime}`;

    card.appendChild(date);
    card.appendChild(location);

    const heroFlex = DomHelper.createElement('div', 'basic-weather-card__hero-flex');
    heroFlex.appendChild(heroIcon);
    heroFlex.appendChild(currentTemp);
    heroFlex.appendChild(mainWeather);
    
    card.appendChild(heroFlex);
    card.appendChild(minTemp);
    card.appendChild(maxTemp);
    card.appendChild(pop);
    card.appendChild(sunrise);
    card.appendChild(sunset);

    return card;
  }
}
