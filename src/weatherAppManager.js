import DomHelper from './domHelper';
import ConversionUtility from './conversionUtility';
import WeatherFetcher from './weatherFetcher';
import WeatherDom from './weatherDom';
import LocalStorageHelper from './localStorageHelper';

export default class WeatherAppManager {
  constructor() {
    this.doSearch = this.doSearch.bind(this);
    this.getFavoriteWeather = this.getFavoriteWeather.bind(this);

    this.body = document.querySelector('body');
    this._content = this.body.appendChild(
      DomHelper.createElement('div', 'content')
    );

    this.localStorageHelper = new LocalStorageHelper();
    this._favoriteCities = [];
    this.loadFavoriteCities();
    // todo remove this
    this.addFavoriteCity('Squamish');
    this.addFavoriteCity('Dubai');
    this.addFavoriteCity('London');

    this.createForm();
    this.createFavorites();

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
      this.clearWeather();
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

  createFavorites() {
    this._favoritesForm = DomHelper.createElement(
      'form',
      'favorite-cities-form'
    );

    for (let i = 0; i < this._favoriteCities.length; i++) {
      const button = this._favoritesForm.appendChild(
        DomHelper.createElement('button', 'favorite-cities-form__city-button')
      );

      button.type = 'submit';
      button.innerText = this._favoriteCities[i];
      button.dataset.city = this._favoriteCities[i];
    }

    this._favoritesForm.addEventListener('submit', this.getFavoriteWeather);
    this._content.appendChild(this._favoritesForm);
  }

  getFavoriteWeather(e) {
    e.preventDefault();

    this.loadWeather(e.submitter.dataset.city);

    console.log(e);
  }

  displayWeatherData() {
    this._currentWeatherData.temperatureMode =
      ConversionUtility.temperatureModes.celsius;

    const wCard = WeatherDom.createBasicCard(this._currentWeatherData);
    this._content.appendChild(wCard);

    const additionalInfo = WeatherDom.createAdditionalInfoCard(
      this._currentWeatherData
    );
    this._content.appendChild(additionalInfo);

    const hourlyCard = WeatherDom.createHourlyCard(this._currentWeatherData);
    this._content.appendChild(hourlyCard);

    const weeklyCard = WeatherDom.createWeeklyCard(this._currentWeatherData);
    this._content.appendChild(weeklyCard);
  }

  clearWeather() {
    const a = this._content.querySelector('.basic-weather-card');
    const b = this._content.querySelector('.additional-info-card');
    const c = this._content.querySelector('.hourly-card');
    const d = this._content.querySelector('.weekly-card');

    if (a != null) {
      this._content.removeChild(a);
    }
    if (b != null) {
      this._content.removeChild(b);
    }
    if (c != null) {
      this._content.removeChild(c);
    }
    if (d != null) {
      this._content.removeChild(d);
    }
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
