export default class WeatherDataObject {
  constructor() {
    this._currentTemp = undefined;
    this._minTemp = undefined;
    this._maxTemp = undefined;
    this._sunriseTime = undefined;
    this._sunsetTime = undefined;
    this._weatherId = undefined;
    this._weatherMain = '';
    this._weatherDescription = '';
    this._currentPop = undefined;

    this._dayTemps = [];
    this._dayMinTemps = [];
    this._dayMaxTemps = [];
    this._dayWeatherIds = [];

    this._hourlyTemps = [];
    this._hourlyWeatherIds = [];

    this._temperatureModes = ['kelvin', 'celsius', 'fahrenheit']

    this._temperatureMode = this._temperatureModes[0];
  }

  get currentTemp() {
    return this._currentTemp;
  }

  set currentTemp(value) {
    this._currentTemp = value;
  }

  get currentPop() {
    return this._currentPop;
  }

  set currentPop(value) {
    this._currentPop = value;
  }

  get minTemp() {
    return this._minTemp;
  }

  set minTemp(value) {
    this._minTemp = value;
  }

  get maxTemp() {
    return this._maxTemp;
  }

  set maxTemp(value) {
    this._maxTemp = value;
  }

  get sunriseTime() {
    return this._sunriseTime;
  }

  set sunriseTime(value) {
    this._sunriseTime = value;
  }

  get sunsetTime() {
    return this._sunsetTime;
  }

  set sunsetTime(value) {
    this._sunsetTime = value;
  }

  get weatherId() {
    return this._weatherId;
  }

  set weatherId(value) {
    this._weatherId = value;
  }

  get weatherMain() {
    return this._weatherMain;
  }

  set weatherMain(value) {
    this._weatherMain = value;
  }

  get weatherDescription() {
    return this._weatherDescription;
  }

  set weatherDescription(value) {
    this._weatherDescription = value;
  }

  setDayTemps(arrValue) {
    this._dayTemps = arrValue;
  }

  getDayTemps(dayIndex) {
    return this._dayTemps[dayIndex];
  }

  setDayMinTemps(arrValue) {
    this._dayMinTemps = arrValue;
  }

  getDayMinTemps(dayIndex) {
    return this._dayMinTemps[dayIndex];
  }

  setDayMaxTemps(arrValue) {
    this._dayMaxTemps = arrValue;
  }

  getDayMaxTemps(dayIndex) {
    return this._dayMaxTemps[dayIndex];
  }

  setDayWeatherIds(arrValue) {
    this._dayWeatherIds = arrValue;
  }

  getDayWeatherIds(dayIndex) {
    return this._dayWeatherIds[dayIndex];
  }

  setHourlyWeatherIds(arrValue) {
    this._hourlyWeatherIds = arrValue;
  }

  getHourlyWeatherIds(hourIndex) {
    return this._hourlyWeatherIds[hourIndex];
  }

  setHourlyTemps(arrValue) {
    this._hourlyTemps = arrValue;
  }

  getHourlyTemps(hourIndex) {
    return this._hourlyTemps[hourIndex];
  }
}
