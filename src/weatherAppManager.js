import DomHelper from './domHelper';
import ConversionUtility from './conversionUtility';
import WeatherFetcher from './weatherFetcher';
import WeatherDom from './weatherDom';
import LocalStorageHelper from './localStorageHelper';
import SearchIcon from './icons/search.svg';

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

    this.createHeader();
    this.createForm();
    this.createFavorites();

    this._weatherGrid = this._content.appendChild(
      DomHelper.createElement('div', 'weather-grid')
    );

    if (this._favoriteCities.length >= 1) {
      this.loadWeather(this._favoriteCities[0], true);
    }
  }

  doSearch(e) {
    e.preventDefault();

    this.loadWeather(this.input.value, false);
    this.input.value = '';
  }

  async loadWeather(cityName, isFavorite) {
    try {
      this._currentWeatherData = await WeatherFetcher.getWeather(cityName);
      this.clearWeather();
      this.displayWeatherData(isFavorite);
    } catch (error) {
      console.log(error);
    }
  }

  createHeader() {
    this._header = this._content.appendChild(
      DomHelper.createElement('div', 'header')
    );
  }

  createForm() {
    this.form = this._content.appendChild(
      DomHelper.createElement('form', 'search-form')
    );

    const searchBar = DomHelper.createElement('div', 'search-form__search-bar');

    const searchIcon = DomHelper.createElement(
      'img',
      'search-form__search-bar__icon'
    );
    searchIcon.src = SearchIcon;

    this.input = DomHelper.createElement(
      'input',
      'search-form__search-bar__text-input'
    );

    searchBar.appendChild(searchIcon);
    searchBar.appendChild(this.input);
    this.form.appendChild(searchBar);
    this.submit = this.form.appendChild(
      DomHelper.createElement('button', 'search-form__submit_button')
    );

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

    this.loadWeather(e.submitter.dataset.city, true);
  }

  toggleFavorite(e) {
    console.log('Something');
  }

  displayWeatherData(isFavorite) {
    this._currentWeatherData.temperatureMode =
      ConversionUtility.temperatureModes.celsius;

    const wCard = WeatherDom.createBasicCard(
      this._currentWeatherData,
      isFavorite,
      this.toggleFavorite
    );
    this._weatherGrid.appendChild(wCard);

    const hourlyCard = WeatherDom.createHourlyCard(this._currentWeatherData);
    this._weatherGrid.appendChild(hourlyCard);

    const weeklyCard = WeatherDom.createWeeklyCard(this._currentWeatherData);
    this._weatherGrid.appendChild(weeklyCard);
  }

  clearWeather() {
    while (this._weatherGrid.firstChild) {
      this._weatherGrid.removeChild(this._weatherGrid.lastChild);
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
