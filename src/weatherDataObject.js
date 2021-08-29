import ConversionUtility from './conversionUtility';

export default class WeatherDataObject {
  constructor() {
    this._cityName = undefined;
    this._countryName = undefined;

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

    this._temperatureMode = ConversionUtility.temperatureModes.kelvin;
  }

  get temperatureMode() {
    return this._temperatureMode;
  }

  set temperatureMode(value) {
    this._temperatureMode = value;
  }

  get countryName() {
    return this._countryName;
  }

  set countryName(value) {
    this._countryName = value;
  }

  get cityName() {
    return this._cityName;
  }

  set cityName(value) {
    this._cityName = value;
  }

  get currentTemp() {
    return ConversionUtility.convertTemperature(
      this._currentTemp,
      this._temperatureMode,
      ConversionUtility.temperatureModes.kelvin
    );
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
    return ConversionUtility.convertTemperature(
      this._minTemp,
      this._temperatureMode,
      ConversionUtility.temperatureModes.kelvin
    );
  }

  set minTemp(value) {
    this._minTemp = value;
  }

  get maxTemp() {
    return ConversionUtility.convertTemperature(
      this._maxTemp,
      this._temperatureMode,
      ConversionUtility.temperatureModes.kelvin
    );
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
    return ConversionUtility.convertTemperature(
      this._dayTemps[dayIndex],
      this._temperatureMode,
      ConversionUtility.temperatureModes.kelvin
    );
  }

  setDayMinTemps(arrValue) {
    this._dayMinTemps = arrValue;
  }

  getDayMinTemps(dayIndex) {
    return ConversionUtility.convertTemperature(
      this._dayMinTemps[dayIndex],
      this._temperatureMode,
      ConversionUtility.temperatureModes.kelvin
    );
  }

  setDayMaxTemps(arrValue) {
    this._dayMaxTemps = arrValue;
  }

  getDayMaxTemps(dayIndex) {
    return ConversionUtility.convertTemperature(
      this._dayMaxTemps[dayIndex],
      this._temperatureMode,
      ConversionUtility.temperatureModes.kelvin
    );
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
    return ConversionUtility.convertTemperature(
      this._hourlyTemps[hourIndex],
      this._temperatureMode,
      ConversionUtility.temperatureModes.kelvin
    );
  }
}
