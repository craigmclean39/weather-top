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

    this._timezone = '';
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

  getDayTemp(dayIndex) {
    return ConversionUtility.convertTemperature(
      this._dayTemps[dayIndex],
      this._temperatureMode,
      ConversionUtility.temperatureModes.kelvin
    );
  }

  get dayTemps() {
    return this._dayTemps;
  }

  setDayMinTemps(arrValue) {
    this._dayMinTemps = arrValue;
  }

  getDayMinTemp(dayIndex) {
    return ConversionUtility.convertTemperature(
      this._dayMinTemps[dayIndex],
      this._temperatureMode,
      ConversionUtility.temperatureModes.kelvin
    );
  }

  get dayMinTemps() {
    return this._dayMinTemps;
  }

  setDayMaxTemps(arrValue) {
    this._dayMaxTemps = arrValue;
  }

  getDayMaxTemp(dayIndex) {
    return ConversionUtility.convertTemperature(
      this._dayMaxTemps[dayIndex],
      this._temperatureMode,
      ConversionUtility.temperatureModes.kelvin
    );
  }

  get dayMaxTemps() {
    return this._dayMaxTemps;
  }

  setDayWeatherIds(arrValue) {
    this._dayWeatherIds = arrValue;
  }

  getDayWeatherId(dayIndex) {
    return this._dayWeatherIds[dayIndex];
  }

  get dayWeatherIds() {
    return this._dayWeatherIds;
  }

  setHourlyWeatherIds(arrValue) {
    this._hourlyWeatherIds = arrValue;
  }

  getHourlyWeatherId(hourIndex) {
    return this._hourlyWeatherIds[hourIndex];
  }

  get hourlyWeatherIds() {
    return this._hourlyWeatherIds;
  }

  setHourlyTemps(arrValue) {
    this._hourlyTemps = arrValue;
  }

  getHourlyTemp(hourIndex) {
    return ConversionUtility.convertTemperature(
      this._hourlyTemps[hourIndex],
      this._temperatureMode,
      ConversionUtility.temperatureModes.kelvin
    );
  }

  get hourlyTemps() {
    return this._hourlyTemps;
  }

  get timezone() {
    return this._timezone;
  }

  set timezone(value) {
    this._timezone = value;
  }
}
