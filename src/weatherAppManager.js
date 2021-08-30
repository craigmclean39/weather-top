import DomHelper from './domHelper';
import ConversionUtility from './conversionUtility';
import WeatherFetcher from './weatherFetcher';
import WeatherDom from './weatherDom';
import LocalStorageHelper from './localStorageHelper';

export default class WeatherAppManager {
  constructor() {
    this.doSearch = this.doSearch.bind(this);

    this.body = document.querySelector('body');
    this._content = this.body.appendChild(
      DomHelper.createElement('div', 'content')
    );

    this.createForm();

    this.localStorageHelper = new LocalStorageHelper();
    this._favoriteCities = [];
    this.loadFavoriteCities();

    this.addFavoriteCity('Squamish');

    if (this._favoriteCities.length >= 1) {
      this.loadWeather(this._favoriteCities[0]);
    }
  }

  doSearch(e) {
    e.preventDefault();

    this.loadWeather(this.input.value);
  }

  async loadWeather(cityName) {
    try {
      this._currentWeatherData = await WeatherFetcher.getWeather(cityName);
      this.displayWeatherData();
    } catch (error) {
      console.log(error);
    }
  }

  createForm() {
    this.form = this._content.appendChild(DomHelper.createElement('form'));
    this.input = this.form.appendChild(DomHelper.createElement('input'));
    this.submit = this.form.appendChild(DomHelper.createElement('button'));

    this.input.type = 'text';
    this.input.placeholder = 'Enter City Name';
    this.submit.type = 'submit';
    this.submit.innerText = 'Submit';

    this.form.addEventListener('submit', this.doSearch);
  }

  displayWeatherData() {
    this._currentWeatherData.temperatureMode =
      ConversionUtility.temperatureModes.celsius;

    const wCard = WeatherDom.createBasicCard(this._currentWeatherData);
    this.body.appendChild(wCard);

    const additionalInfo = WeatherDom.createAdditionalInfoCard(
      this._currentWeatherData
    );
    this.body.appendChild(additionalInfo);

    const hourlyCard = WeatherDom.createHourlyCard(this._currentWeatherData);
    this.body.appendChild(hourlyCard);

    const weeklyCard = WeatherDom.createWeeklyCard(this._currentWeatherData);
    this.body.appendChild(weeklyCard);
  }

  addFavoriteCity(cityName) {
    if (!this._favoriteCities.includes(cityName)) {
      this._favoriteCities.push(cityName);
      this.localStorageHelper.clearItems('favoriteCities');
      this.localStorageHelper.saveItem('favoriteCities', this._favoriteCities);
    }
  }

  loadFavoriteCities() {
    let returnVal = this.localStorageHelper.retrieveItem('favoriteCities');
    if (returnVal != null && returnVal !== undefined) {
      returnVal = JSON.parse(returnVal);

      this._favoriteCities = returnVal;
    }
  }
}
