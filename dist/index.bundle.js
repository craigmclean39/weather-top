/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/conversionUtility.js":
/*!**********************************!*\
  !*** ./src/conversionUtility.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConversionUtility)
/* harmony export */ });
/* eslint-disable no-fallthrough */
class ConversionUtility {
  static temperatureModes = { kelvin: 0, celsius: 1, fahrenheit: 2 };

  static convertTemperature(temp, to, from) {
    let returnTemperature = 0;

    if (from === this.temperatureModes.kelvin) {
      switch (to) {
        case this.temperatureModes.celsius: {
          returnTemperature = Number(temp - 273.15);
          break;
        }
        case this.temperatureModes.fahrenheit: {
          returnTemperature = Number((temp - 273.15) * (9 / 5) + 32);
          break;
        }
        case this.temperatureModes.kelvin: {
          returnTemperature = Number(temp);
          break;
        }

        default:
          break;
      }
    }
    return returnTemperature;
  }
}


/***/ }),

/***/ "./src/domHelper.js":
/*!**************************!*\
  !*** ./src/domHelper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DomHelper)
/* harmony export */ });
class DomHelper {
  static createElement(selector, classNames) {
    const element = document.createElement(selector);
    if (classNames !== undefined) {
      for (let i = 0; i < classNames.length; i++) {
        element.classList.add(classNames[i]);
      }
    }
    return element;
  }
}


/***/ }),

/***/ "./src/weatherDataObject.js":
/*!**********************************!*\
  !*** ./src/weatherDataObject.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherDataObject)
/* harmony export */ });
/* harmony import */ var _conversionUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversionUtility */ "./src/conversionUtility.js");


class WeatherDataObject {
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

    this._temperatureMode = _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.temperatureModes.kelvin;
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
    return _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.convertTemperature(
      this._currentTemp,
      this._temperatureMode,
      _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.temperatureModes.kelvin
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
    return _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.convertTemperature(
      this._minTemp,
      this._temperatureMode,
      _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.temperatureModes.kelvin
    );
  }

  set minTemp(value) {
    this._minTemp = value;
  }

  get maxTemp() {
    return _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.convertTemperature(
      this._maxTemp,
      this._temperatureMode,
      _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.temperatureModes.kelvin
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
    return _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.convertTemperature(
      this._dayTemps[dayIndex],
      this._temperatureMode,
      _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.temperatureModes.kelvin
    );
  }

  setDayMinTemps(arrValue) {
    this._dayMinTemps = arrValue;
  }

  getDayMinTemps(dayIndex) {
    return _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.convertTemperature(
      this._dayMinTemps[dayIndex],
      this._temperatureMode,
      _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.temperatureModes.kelvin
    );
  }

  setDayMaxTemps(arrValue) {
    this._dayMaxTemps = arrValue;
  }

  getDayMaxTemps(dayIndex) {
    return _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.convertTemperature(
      this._dayMaxTemps[dayIndex],
      this._temperatureMode,
      _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.temperatureModes.kelvin
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
    return _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.convertTemperature(
      this._hourlyTemps[hourIndex],
      this._temperatureMode,
      _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.temperatureModes.kelvin
    );
  }
}


/***/ }),

/***/ "./src/weatherFetcher.js":
/*!*******************************!*\
  !*** ./src/weatherFetcher.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherFetcher)
/* harmony export */ });
/* harmony import */ var _weatherDataObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDataObject */ "./src/weatherDataObject.js");


class WeatherFetcher {
  static apiKey = '97e0d1ebd3976ff95f7e0702e7105810';

  static async getWeather(city) {
    const cityWeatherData = await this.queryWeather(city);
    console.log(cityWeatherData);

    const wdo =
      WeatherFetcher.translateFromJSONtoWeatherDataObject(cityWeatherData);
    console.log(wdo);
    return wdo;
  }

  static async queryWeather(city) {
    try {
      // Grab the weather from the API with a city name
      const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherFetcher.apiKey}`;
      const response = await fetch(fetchUrl, { mode: 'cors' });
      const data = await response.json();

      console.log(data);

      const cityName = data.name;
      const countryName = data.sys.country;

      console.log(`${cityName} ${countryName}`);

      // Grab the lat and long
      const { lon } = data.coord;
      const { lat } = data.coord;

      const exclude = 'minutely';

      // Use the lat and lon to get the more detailed weather
      const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${WeatherFetcher.apiKey}`;
      const oneCallResponse = await fetch(oneCallUrl, { mode: 'cors' });
      const oneCallData = await oneCallResponse.json();
      oneCallData.cityName = cityName;
      oneCallData.countryName = countryName;

      return oneCallData;
    } catch (error) {
      console.log('AN ERROR!');
      console.dir(error);
      return error;
    }
  }

  static translateFromJSONtoWeatherDataObject(cityWeatherDataJSON) {
    const wdo = new _weatherDataObject__WEBPACK_IMPORTED_MODULE_0__.default();

    wdo.cityName = cityWeatherDataJSON.cityName;
    wdo.countryName = cityWeatherDataJSON.countryName;
    wdo.currentTemp = cityWeatherDataJSON.current.temp;
    wdo.currentPop = cityWeatherDataJSON.daily[0].pop;
    wdo.minTemp = cityWeatherDataJSON.daily[0].temp.min;
    wdo.maxTemp = cityWeatherDataJSON.daily[0].temp.max;
    wdo.sunriseTime = cityWeatherDataJSON.current.sunrise;
    wdo.sunsetTime = cityWeatherDataJSON.current.sunset;
    wdo.weatherId = cityWeatherDataJSON.current.weather[0].id;
    wdo.weatherMain = cityWeatherDataJSON.current.weather[0].main;
    wdo.weatherDescription = cityWeatherDataJSON.current.weather[0].description;

    const dayTemps = [];
    for (let i = 0; i < cityWeatherDataJSON.daily.length; i++) {
      dayTemps.push(cityWeatherDataJSON.daily[i].temp.day);
    }
    wdo.setDayTemps(dayTemps);

    const dayMinTemps = [];
    for (let i = 0; i < cityWeatherDataJSON.daily.length; i++) {
      dayMinTemps.push(cityWeatherDataJSON.daily[i].temp.min);
    }
    wdo.setDayMinTemps(dayMinTemps);

    const dayMaxTemps = [];
    for (let i = 0; i < cityWeatherDataJSON.daily.length; i++) {
      dayMaxTemps.push(cityWeatherDataJSON.daily[i].temp.max);
    }
    wdo.setDayMaxTemps(dayMaxTemps);

    const dayWeatherIds = [];
    for (let i = 0; i < cityWeatherDataJSON.daily.length; i++) {
      dayWeatherIds.push(cityWeatherDataJSON.daily[i].weather[0].id);
    }
    wdo.setDayWeatherIds(dayWeatherIds);

    const hourlyTemps = [];
    for (let i = 0; i < cityWeatherDataJSON.hourly.length; i++) {
      hourlyTemps.push(cityWeatherDataJSON.hourly[i].temp);
    }
    wdo.setHourlyTemps(hourlyTemps);

    const hourlyWeatherIds = [];
    for (let i = 0; i < cityWeatherDataJSON.hourly.length; i++) {
      hourlyWeatherIds.push(cityWeatherDataJSON.hourly[i].weather[0].id);
    }
    wdo.setHourlyWeatherIds(hourlyWeatherIds);

    return wdo;
  }
}


/***/ }),

/***/ "./src/weatherIcons.js":
/*!*****************************!*\
  !*** ./src/weatherIcons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherIcons)
/* harmony export */ });
/* harmony import */ var _icons_main_error_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/main/error.svg */ "./src/icons/main/error.svg");
/* harmony import */ var _icons_main_storm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/main/storm.svg */ "./src/icons/main/storm.svg");
/* harmony import */ var _icons_main_drizzle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/main/drizzle.svg */ "./src/icons/main/drizzle.svg");
/* harmony import */ var _icons_main_raining_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/main/raining.svg */ "./src/icons/main/raining.svg");
/* harmony import */ var _icons_main_sleet_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/main/sleet.svg */ "./src/icons/main/sleet.svg");
/* harmony import */ var _icons_main_snowing_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/main/snowing.svg */ "./src/icons/main/snowing.svg");
/* harmony import */ var _icons_main_tornado_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/main/tornado.svg */ "./src/icons/main/tornado.svg");
/* harmony import */ var _icons_main_sunny_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/main/sunny.svg */ "./src/icons/main/sunny.svg");
/* harmony import */ var _icons_main_clouds_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/main/clouds.svg */ "./src/icons/main/clouds.svg");
/* harmony import */ var _icons_simple_storm_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/simple/storm.svg */ "./src/icons/simple/storm.svg");
/* harmony import */ var _icons_simple_raining_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/simple/raining.svg */ "./src/icons/simple/raining.svg");
/* harmony import */ var _icons_simple_snowing_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/simple/snowing.svg */ "./src/icons/simple/snowing.svg");
/* harmony import */ var _icons_simple_tornado_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/simple/tornado.svg */ "./src/icons/simple/tornado.svg");
/* harmony import */ var _icons_simple_sunny_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/simple/sunny.svg */ "./src/icons/simple/sunny.svg");
/* harmony import */ var _icons_simple_clouds_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/simple/clouds.svg */ "./src/icons/simple/clouds.svg");
/* eslint-disable no-fallthrough */











//import DrizzleSimple from './icons/simple/raining.svg';

//import SleetSimple from './icons/simple/snowing.svg';





class WeatherIcons {
  static getWeatherHeroIcon(weatherId) {
    let returnIcon = _icons_main_error_svg__WEBPACK_IMPORTED_MODULE_0__;

    switch (weatherId) {
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
        returnIcon = _icons_main_storm_svg__WEBPACK_IMPORTED_MODULE_1__;
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
        returnIcon = _icons_main_drizzle_svg__WEBPACK_IMPORTED_MODULE_2__;
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
        returnIcon = _icons_main_raining_svg__WEBPACK_IMPORTED_MODULE_3__;
        break;
      }
      case 611: {
        returnIcon = _icons_main_sleet_svg__WEBPACK_IMPORTED_MODULE_4__;
        break;
      }
      case 615:
      case 616:
      case 620: {
        returnIcon = _icons_main_sleet_svg__WEBPACK_IMPORTED_MODULE_4__;
        break;
      }
      case 600:
      case 601:
      case 602:
      case 612:
      case 613:
      case 621:
      case 622: {
        returnIcon = _icons_main_snowing_svg__WEBPACK_IMPORTED_MODULE_5__;
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
        returnIcon = _icons_main_tornado_svg__WEBPACK_IMPORTED_MODULE_6__;
        break;
      }
      // clear
      case 800: {
        returnIcon = _icons_main_sunny_svg__WEBPACK_IMPORTED_MODULE_7__;
        break;
      }
      // few clouds
      case 801:
      // scattered clouds
      case 802:
      // broken clouds
      case 803:
      // overcase clouds
      case 804: {
        returnIcon = _icons_main_clouds_svg__WEBPACK_IMPORTED_MODULE_8__;
        break;
      }
      default: {
        break;
      }
    }

    return returnIcon;
  }

  static getWeatherSimpleIcon(weatherId) {
    let returnIcon = _icons_main_error_svg__WEBPACK_IMPORTED_MODULE_0__;

    switch (weatherId) {
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
        returnIcon = _icons_simple_storm_svg__WEBPACK_IMPORTED_MODULE_9__;
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
        returnIcon = _icons_simple_raining_svg__WEBPACK_IMPORTED_MODULE_10__;
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
        returnIcon = _icons_simple_raining_svg__WEBPACK_IMPORTED_MODULE_10__;
        break;
      }
      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 613:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622: {
        returnIcon = _icons_simple_snowing_svg__WEBPACK_IMPORTED_MODULE_11__;
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
        returnIcon = _icons_simple_tornado_svg__WEBPACK_IMPORTED_MODULE_12__;
        break;
      }
      // clear
      case 800: {
        returnIcon = _icons_simple_sunny_svg__WEBPACK_IMPORTED_MODULE_13__;
        break;
      }
      // few clouds
      case 801:
      // scattered clouds
      case 802:
      // broken clouds
      case 803:
      // overcase clouds
      case 804: {
        returnIcon = _icons_simple_clouds_svg__WEBPACK_IMPORTED_MODULE_14__;
        break;
      }
      default: {
        break;
      }
    }

    return returnIcon;
  }
}


/***/ }),

/***/ "./src/icons/main/clouds.svg":
/*!***********************************!*\
  !*** ./src/icons/main/clouds.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac97f3771e972c8683bd.svg";

/***/ }),

/***/ "./src/icons/main/drizzle.svg":
/*!************************************!*\
  !*** ./src/icons/main/drizzle.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d02e2ce48955cbc975a.svg";

/***/ }),

/***/ "./src/icons/main/error.svg":
/*!**********************************!*\
  !*** ./src/icons/main/error.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0d4ab87c9f9b1b346af.svg";

/***/ }),

/***/ "./src/icons/main/raining.svg":
/*!************************************!*\
  !*** ./src/icons/main/raining.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e22906335946d083a20.svg";

/***/ }),

/***/ "./src/icons/main/sleet.svg":
/*!**********************************!*\
  !*** ./src/icons/main/sleet.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d24d6776a74992be3cfe.svg";

/***/ }),

/***/ "./src/icons/main/snowing.svg":
/*!************************************!*\
  !*** ./src/icons/main/snowing.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "790a7333f759bc0f1131.svg";

/***/ }),

/***/ "./src/icons/main/storm.svg":
/*!**********************************!*\
  !*** ./src/icons/main/storm.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4701b2c8528509392485.svg";

/***/ }),

/***/ "./src/icons/main/sunny.svg":
/*!**********************************!*\
  !*** ./src/icons/main/sunny.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cmFkaWFsR3JhZGllbnQgaWQ9ImEiIGN4PSIxODQuNzIxNDQ3MjE1NiIgY3k9IjEzNy41MzcxMTMyMTU2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcj0iMzgwLjQ3ODUwNzAxNjIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmNmUzYSIvPjxzdG9wIG9mZnNldD0iLjIzMzYiIHN0b3AtY29sb3I9IiNmZjZiM2MiLz48c3RvcCBvZmZzZXQ9Ii40MTgiIHN0b3AtY29sb3I9IiNmZjYxNDMiLz48c3RvcCBvZmZzZXQ9Ii41ODU3IiBzdG9wLWNvbG9yPSIjZmY1MDRlIi8+PHN0b3Agb2Zmc2V0PSIuNzQzNCIgc3RvcC1jb2xvcj0iI2ZmMzk1ZSIvPjxzdG9wIG9mZnNldD0iLjg5MjgiIHN0b3AtY29sb3I9IiNmZjFiNzIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjAwODQiLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1MDYuMzExMzk1NTk0OCIgeDI9IjIzNy4zNTMxNjIzNzk4IiB5MT0iNTA2LjMxMTM5NTU5NDgiIHkyPSIyMzcuMzUzMTYyMzc5OCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmYwMDg0IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9Ii4wNzM3IiBzdG9wLWNvbG9yPSIjZjQwODdlIiBzdG9wLW9wYWNpdHk9Ii4wNzQ1MSIvPjxzdG9wIG9mZnNldD0iLjMzNDciIHN0b3AtY29sb3I9IiNkMjIxNmIiIHN0b3Atb3BhY2l0eT0iLjMzMzMzMyIvPjxzdG9wIG9mZnNldD0iLjU4MyIgc3RvcC1jb2xvcj0iI2JhMzM1ZSIgc3RvcC1vcGFjaXR5PSIuNTg0MzE0Ii8+PHN0b3Agb2Zmc2V0PSIuODExMSIgc3RvcC1jb2xvcj0iI2FiM2Q1NiIgc3RvcC1vcGFjaXR5PSIuODExNzY1Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYTY0MTUzIi8+PC9saW5lYXJHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9ImMiIGN4PSIyNTcuNTk1OTQ0NDExMiIgY3k9IjI1Ni4wMDAxMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjI3NS43MDY5OTg0Njc4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmQ0NTkiLz48c3RvcCBvZmZzZXQ9Ii4yNzk0IiBzdG9wLWNvbG9yPSIjZmZkNTViIiBzdG9wLW9wYWNpdHk9Ii43MjE1NjkiLz48c3RvcCBvZmZzZXQ9Ii40MzU0IiBzdG9wLWNvbG9yPSIjZmZkNzYzIiBzdG9wLW9wYWNpdHk9Ii41NjQ3MDYiLz48c3RvcCBvZmZzZXQ9Ii41NjA5IiBzdG9wLWNvbG9yPSIjZmZkYTcxIiBzdG9wLW9wYWNpdHk9Ii40MzkyMTYiLz48c3RvcCBvZmZzZXQ9Ii42NzAyIiBzdG9wLWNvbG9yPSIjZmZkZjg1IiBzdG9wLW9wYWNpdHk9Ii4zMjk0MTIiLz48c3RvcCBvZmZzZXQ9Ii43NjkxIiBzdG9wLWNvbG9yPSIjZmZlNjllIiBzdG9wLW9wYWNpdHk9Ii4yMzEzNzMiLz48c3RvcCBvZmZzZXQ9Ii44NjAzIiBzdG9wLWNvbG9yPSIjZmZlZWJlIiBzdG9wLW9wYWNpdHk9Ii4xNDExNzYiLz48c3RvcCBvZmZzZXQ9Ii45NDQiIHN0b3AtY29sb3I9IiNmZmY4ZTIiIHN0b3Atb3BhY2l0eT0iLjA1NDkwMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9ImQiIGN4PSIyNTYuMDAwMTEiIGN5PSIyNTYuODE1MTk0MjcxOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjE4NS43MjYzNzMxMzc2Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmI0MDAiLz48c3RvcCBvZmZzZXQ9Ii4zNzI2IiBzdG9wLWNvbG9yPSIjZmZiNTAyIiBzdG9wLW9wYWNpdHk9Ii42Mjc0NTEiLz48c3RvcCBvZmZzZXQ9Ii41MDY5IiBzdG9wLWNvbG9yPSIjZmZiNzA5IiBzdG9wLW9wYWNpdHk9Ii40OTQxMTgiLz48c3RvcCBvZmZzZXQ9Ii42MDI2IiBzdG9wLWNvbG9yPSIjZmZiYTE0IiBzdG9wLW9wYWNpdHk9Ii4zOTYwNzgiLz48c3RvcCBvZmZzZXQ9Ii42OCIgc3RvcC1jb2xvcj0iI2ZmYmYyNSIgc3RvcC1vcGFjaXR5PSIuMzIxNTY5Ii8+PHN0b3Agb2Zmc2V0PSIuNzQ2MyIgc3RvcC1jb2xvcj0iI2ZmYzUzYiIgc3RvcC1vcGFjaXR5PSIuMjU0OTAyIi8+PHN0b3Agb2Zmc2V0PSIuODA1IiBzdG9wLWNvbG9yPSIjZmZjZDU3IiBzdG9wLW9wYWNpdHk9Ii4xOTYwNzgiLz48c3RvcCBvZmZzZXQ9Ii44NTgxIiBzdG9wLWNvbG9yPSIjZmZkNzc3IiBzdG9wLW9wYWNpdHk9Ii4xNDExNzYiLz48c3RvcCBvZmZzZXQ9Ii45MDY5IiBzdG9wLWNvbG9yPSIjZmZlMjlkIiBzdG9wLW9wYWNpdHk9Ii4wOTQxMTgiLz48c3RvcCBvZmZzZXQ9Ii45NTIzIiBzdG9wLWNvbG9yPSIjZmZlZmM4IiBzdG9wLW9wYWNpdHk9Ii4wNDcwNTkiLz48c3RvcCBvZmZzZXQ9Ii45OTI2IiBzdG9wLWNvbG9yPSIjZmZmY2Y2IiBzdG9wLW9wYWNpdHk9Ii4wMDc4NDMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJlIiBjeD0iMjE3Ljc4OTAzMTYyMDQiIGN5PSIxOTkuMDA3NTU4NDUyMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjE5My42Nzg0MzkyOTk2Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmQ0NTkiLz48c3RvcCBvZmZzZXQ9Ii4yMjk2IiBzdG9wLWNvbG9yPSIjZmZkMzU1Ii8+PHN0b3Agb2Zmc2V0PSIuNDM2MiIgc3RvcC1jb2xvcj0iI2ZmY2Y0YSIvPjxzdG9wIG9mZnNldD0iLjYzNCIgc3RvcC1jb2xvcj0iI2ZmYzgzOCIvPjxzdG9wIG9mZnNldD0iLjgyNSIgc3RvcC1jb2xvcj0iI2ZmYmYxZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYjQwMCIvPjwvcmFkaWFsR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI3MC43NjYzOTcxMjkyIiB4Mj0iODIuMDI4NjU5NTYwNCIgeTE9IjI3MS41NTE5NjYwOTQyIiB5Mj0iNzIuNzc1MDA4NTI1NCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9Ii45Mjg2IiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii45Mjk0MTIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Im01MTIgMjU2YzAgMTQxLjM4NjcxOS0xMTQuNjEzMjgxIDI1Ni0yNTYgMjU2cy0yNTYtMTE0LjYxMzI4MS0yNTYtMjU2IDExNC42MTMyODEtMjU2IDI1Ni0yNTYgMjU2IDExNC42MTMyODEgMjU2IDI1NnptMCAwIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0ibTM1MS4yODEyNSA3My4yNDIxODhjLTEzLjA1ODU5NCAxMy41LTMwLjY3OTY4OCAxNy44MjQyMTgtNDYuNzM0Mzc1IDE0LjYxMzI4MS0xLjI2MTcxOS0xLjI0NjA5NC0yLjg0Mzc1LTIuMDM5MDYzLTQuNTE1NjI1LTIuMzc4OTA3LS4wMjM0MzgtLjEwMTU2Mi0uMDU0Njg4LS4xOTkyMTgtLjA4MjAzMS0uMzAwNzgxbC0zNS4wMDM5MDctMzQuNzg5MDYyYy0uMDI3MzQzLS4xMDE1NjMtLjA1NDY4Ny0uMTk5MjE5LS4wODIwMzEtLjMwMDc4MS0yLjMwODU5My05LjIyMjY1Ny0xNS40MTc5NjktOS4yMjI2NTctMTcuNzI2NTYyIDAtOS43NDYwOTQgMzguOTQ5MjE4LTU4LjUgNTIuMDExNzE4LTg2LjQxNzk2OSAyMy4xNTYyNS02LjYwOTM3NS02LjgzMjAzMi0xNy45NjQ4NDQtLjI3NzM0NC0xNS4zNTE1NjIgOC44NjMyODEgMTEuMDMxMjUgMzguNjA1NDY5LTI0LjY2MDE1NyA3NC4yOTI5NjktNjMuMjYxNzE5IDYzLjI2MTcxOS05LjE0MDYyNS0yLjYwOTM3Ni0xNS42OTUzMTMgOC43NDIxODctOC44NjMyODEgMTUuMzUxNTYyIDI4Ljg1NTQ2OCAyNy45MTc5NjkgMTUuNzkyOTY4IDc2LjY3MTg3NS0yMy4xNTYyNSA4Ni40MTc5NjktOS4yMjI2NTcgMi4zMTI1LTkuMjIyNjU3IDE1LjQxNzk2OSAwIDE3LjcyNjU2Mi4xMDE1NjIuMDI3MzQ0LjIwMzEyNC4wNTQ2ODguMzAwNzgxLjA4MjAzMWwzNC43ODkwNjIgMzUuMDA3ODEzYy4xMDE1NjMuMDIzNDM3LjE5OTIxOS4wNTQ2ODcuMzAwNzgxLjA3ODEyNS4zMzk4NDQgMS42NzU3ODEgMS4xMzI4MTMgMy4yNTM5MDYgMi4zODI4MTMgNC41MTU2MjUgMy4yMDcwMzEgMTYuMDU0Njg3LTEuMTE3MTg3IDMzLjY3NTc4MS0xNC42MTcxODcgNDYuNzM0Mzc1LTUuNjU2MjUgNS40NzI2NTYtMi4xMzY3MTkgMTQuMTg3NSA0LjQyOTY4NyAxNS41NDY4NzVsMTQwLjc3NzM0NCAxNDIuNDI1NzgxYzEyLjI1NzgxMiAxLjgwMDc4MiAyNC43OTI5NjkgMi43NDYwOTQgMzcuNTUwNzgxIDIuNzQ2MDk0IDE0MS4zODI4MTIgMCAyNTYtMTE0LjYxNzE4OCAyNTYtMjU2IDAtMTIuNTY2NDA2LS45MjE4NzUtMjQuOTE3OTY5LTIuNjcxODc1LTM3bC0xNDIuNS0xNDEuMzI4MTI1Yy0xLjM1OTM3NS02LjU2NjQwNi0xMC4wNzQyMTktMTAuMDg1OTM3LTE1LjU0Njg3NS00LjQyOTY4N3ptMCAwIiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI2NC44NjMyODEgNTAuMDg1OTM4YzkuNzQ2MDk0IDM4Ljk0OTIxOCA1OC41IDUyLjAxMTcxOCA4Ni40MTc5NjkgMjMuMTU2MjUgNi42MDkzNzUtNi44MzIwMzIgMTcuOTY0ODQ0LS4yNzczNDQgMTUuMzUxNTYyIDguODYzMjgxLTExLjAzMTI1IDM4LjYwNTQ2OSAyNC42NjAxNTcgNzQuMjkyOTY5IDYzLjI2MTcxOSA2My4yNjE3MTkgOS4xNDQ1MzEtMi42MDkzNzYgMTUuNjk1MzEzIDguNzQyMTg3IDguODYzMjgxIDE1LjM1MTU2Mi0yOC44NTU0NjggMjcuOTE3OTY5LTE1Ljc5Mjk2OCA3Ni42NzE4NzUgMjMuMTU2MjUgODYuNDE3OTY5IDkuMjIyNjU3IDIuMzEyNSA5LjIyMjY1NyAxNS40MTc5NjkgMCAxNy43MjY1NjItMzguOTQ5MjE4IDkuNzUtNTIuMDExNzE4IDU4LjUwMzkwNy0yMy4xNTYyNSA4Ni40MTc5NjkgNi44MzIwMzIgNi42MTMyODEuMjc3MzQ0IDE3Ljk2NDg0NC04Ljg2MzI4MSAxNS4zNTE1NjItMzguNjAxNTYyLTExLjAzMTI1LTc0LjI5Mjk2OSAyNC42NjAxNTctNjMuMjYxNzE5IDYzLjI2MTcxOSAyLjYxMzI4MiA5LjE0NDUzMS04Ljc0MjE4NyAxNS42OTkyMTktMTUuMzUxNTYyIDguODYzMjgxLTI3LjkxNzk2OS0yOC44NTU0NjgtNzYuNjcxODc1LTE1Ljc4OTA2Mi04Ni40MTc5NjkgMjMuMTU2MjUtMi4zMDg1OTMgOS4yMjY1NjMtMTUuNDE3OTY5IDkuMjI2NTYzLTE3LjcyNjU2MiAwLTkuNzQ2MDk0LTM4Ljk0NTMxMi01OC41LTUyLjAxMTcxOC04Ni40MTc5NjktMjMuMTU2MjUtNi42MDkzNzUgNi44MzU5MzgtMTcuOTY0ODQ0LjI4MTI1LTE1LjM1MTU2Mi04Ljg2MzI4MSAxMS4wMzEyNS0zOC42MDE1NjItMjQuNjYwMTU3LTc0LjI5Mjk2OS02My4yNjE3MTktNjMuMjYxNzE5LTkuMTQwNjI1IDIuNjEzMjgyLTE1LjY5NTMxMy04LjczODI4MS04Ljg2MzI4MS0xNS4zNTE1NjIgMjguODU1NDY4LTI3LjkxNDA2MiAxNS43OTI5NjgtNzYuNjY3OTY5LTIzLjE1NjI1LTg2LjQxNzk2OS05LjIyMjY1Ny0yLjMwODU5My05LjIyMjY1Ny0xNS40MTQwNjIgMC0xNy43MjY1NjIgMzguOTQ5MjE4LTkuNzQ2MDk0IDUyLjAxMTcxOC01OC41IDIzLjE1NjI1LTg2LjQxNzk2OS02LjgzMjAzMi02LjYwOTM3NS0uMjc3MzQ0LTE3Ljk2MDkzOCA4Ljg2MzI4MS0xNS4zNTE1NjIgMzguNjAxNTYyIDExLjAzNTE1NiA3NC4yOTI5NjktMjQuNjU2MjUgNjMuMjYxNzE5LTYzLjI2MTcxOS0yLjYxMzI4Mi05LjE0MDYyNSA4Ljc0MjE4Ny0xNS42OTUzMTMgMTUuMzUxNTYyLTguODYzMjgxIDI3LjkxNzk2OSAyOC44NTU0NjggNzYuNjcxODc1IDE1Ljc5Mjk2OCA4Ni40MTc5NjktMjMuMTU2MjUgMi4zMDg1OTMtOS4yMjI2NTcgMTUuNDE3OTY5LTkuMjIyNjU3IDE3LjcyNjU2MiAwem0wIDAiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMjY0Ljg2MzI4MSA1MC4wODU5MzhjOS43NDYwOTQgMzguOTQ5MjE4IDU4LjUgNTIuMDExNzE4IDg2LjQxNzk2OSAyMy4xNTYyNSA2LjYwOTM3NS02LjgzMjAzMiAxNy45NjQ4NDQtLjI3NzM0NCAxNS4zNTE1NjIgOC44NjMyODEtMTEuMDMxMjUgMzguNjA1NDY5IDI0LjY2MDE1NyA3NC4yOTI5NjkgNjMuMjYxNzE5IDYzLjI2MTcxOSA5LjE0NDUzMS0yLjYwOTM3NiAxNS42OTUzMTMgOC43NDIxODcgOC44NjMyODEgMTUuMzUxNTYyLTI4Ljg1NTQ2OCAyNy45MTc5NjktMTUuNzkyOTY4IDc2LjY3MTg3NSAyMy4xNTYyNSA4Ni40MTc5NjkgOS4yMjI2NTcgMi4zMTI1IDkuMjIyNjU3IDE1LjQxNzk2OSAwIDE3LjcyNjU2Mi0zOC45NDkyMTggOS43NS01Mi4wMTE3MTggNTguNTAzOTA3LTIzLjE1NjI1IDg2LjQxNzk2OSA2LjgzMjAzMiA2LjYxMzI4MS4yNzczNDQgMTcuOTY0ODQ0LTguODYzMjgxIDE1LjM1MTU2Mi0zOC42MDE1NjItMTEuMDMxMjUtNzQuMjkyOTY5IDI0LjY2MDE1Ny02My4yNjE3MTkgNjMuMjYxNzE5IDIuNjEzMjgyIDkuMTQ0NTMxLTguNzQyMTg3IDE1LjY5OTIxOS0xNS4zNTE1NjIgOC44NjMyODEtMjcuOTE3OTY5LTI4Ljg1NTQ2OC03Ni42NzE4NzUtMTUuNzg5MDYyLTg2LjQxNzk2OSAyMy4xNTYyNS0yLjMwODU5MyA5LjIyNjU2My0xNS40MTc5NjkgOS4yMjY1NjMtMTcuNzI2NTYyIDAtOS43NDYwOTQtMzguOTQ1MzEyLTU4LjUtNTIuMDExNzE4LTg2LjQxNzk2OS0yMy4xNTYyNS02LjYwOTM3NSA2LjgzNTkzOC0xNy45NjQ4NDQuMjgxMjUtMTUuMzUxNTYyLTguODYzMjgxIDExLjAzMTI1LTM4LjYwMTU2Mi0yNC42NjAxNTctNzQuMjkyOTY5LTYzLjI2MTcxOS02My4yNjE3MTktOS4xNDA2MjUgMi42MTMyODItMTUuNjk1MzEzLTguNzM4MjgxLTguODYzMjgxLTE1LjM1MTU2MiAyOC44NTU0NjgtMjcuOTE0MDYyIDE1Ljc5Mjk2OC03Ni42Njc5NjktMjMuMTU2MjUtODYuNDE3OTY5LTkuMjIyNjU3LTIuMzA4NTkzLTkuMjIyNjU3LTE1LjQxNDA2MiAwLTE3LjcyNjU2MiAzOC45NDkyMTgtOS43NDYwOTQgNTIuMDExNzE4LTU4LjUgMjMuMTU2MjUtODYuNDE3OTY5LTYuODMyMDMyLTYuNjA5Mzc1LS4yNzczNDQtMTcuOTYwOTM4IDguODYzMjgxLTE1LjM1MTU2MiAzOC42MDE1NjIgMTEuMDM1MTU2IDc0LjI5Mjk2OS0yNC42NTYyNSA2My4yNjE3MTktNjMuMjYxNzE5LTIuNjEzMjgyLTkuMTQwNjI1IDguNzQyMTg3LTE1LjY5NTMxMyAxNS4zNTE1NjItOC44NjMyODEgMjcuOTE3OTY5IDI4Ljg1NTQ2OCA3Ni42NzE4NzUgMTUuNzkyOTY4IDg2LjQxNzk2OS0yMy4xNTYyNSAyLjMwODU5My05LjIyMjY1NyAxNS40MTc5NjktOS4yMjI2NTcgMTcuNzI2NTYyIDB6bTAgMCIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGQ9Im00MjkuNTYyNSAyNTZjMCA5NS44NTU0NjktNzcuNzA3MDMxIDE3My41NjI1LTE3My41NjI1IDE3My41NjI1cy0xNzMuNTYyNS03Ny43MDcwMzEtMTczLjU2MjUtMTczLjU2MjUgNzcuNzA3MDMxLTE3My41NjI1IDE3My41NjI1LTE3My41NjI1IDE3My41NjI1IDc3LjcwNzAzMSAxNzMuNTYyNSAxNzMuNTYyNXptMCAwIiBmaWxsPSJ1cmwoI2QpIi8+PHBhdGggZD0ibTM5OS41ODk4NDQgMjU2YzAgNzkuMzAwNzgxLTY0LjI4OTA2MyAxNDMuNTg5ODQ0LTE0My41ODk4NDQgMTQzLjU4OTg0NHMtMTQzLjU4OTg0NC02NC4yODkwNjMtMTQzLjU4OTg0NC0xNDMuNTg5ODQ0IDY0LjI4OTA2My0xNDMuNTg5ODQ0IDE0My41ODk4NDQtMTQzLjU4OTg0NCAxNDMuNTg5ODQ0IDY0LjI4OTA2MyAxNDMuNTg5ODQ0IDE0My41ODk4NDR6bTAgMCIgZmlsbD0idXJsKCNlKSIvPjxwYXRoIGQ9Im0zODUuOTQ1MzEyIDI1NmMwIDcxLjc2NTYyNS01OC4xNzk2ODcgMTI5Ljk0NTMxMi0xMjkuOTQ1MzEyIDEyOS45NDUzMTJzLTEyOS45NDUzMTItNTguMTc5Njg3LTEyOS45NDUzMTItMTI5Ljk0NTMxMiA1OC4xNzk2ODctMTI5Ljk0NTMxMiAxMjkuOTQ1MzEyLTEyOS45NDUzMTIgMTI5Ljk0NTMxMiA1OC4xNzk2ODcgMTI5Ljk0NTMxMiAxMjkuOTQ1MzEyem0wIDAiIGZpbGw9InVybCgjZikiLz48L3N2Zz4=";

/***/ }),

/***/ "./src/icons/main/tornado.svg":
/*!************************************!*\
  !*** ./src/icons/main/tornado.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dfb286c896318805e61.svg";

/***/ }),

/***/ "./src/icons/simple/clouds.svg":
/*!*************************************!*\
  !*** ./src/icons/simple/clouds.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAuMDAzIDYwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAuMDAzIDYwLjAwMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0FCQ0FERDsiIGQ9Ik01Mi45MzYsMTcuNTNjLTAuMjMxLTYuMTM5LTUuMjg0LTExLjA2Ni0xMS40NzgtMTEuMDY2Yy02LjE0MiwwLTExLjE2LDQuODQ0LTExLjQ3LDEwLjkxDQoJYy0wLjU1OCwwLjAxMi0xLjExOSwwLjA3OC0xLjY3NiwwLjIwOWMtMi4zMzYsMC41NS00LjE4NSwyLjA4Mi01LjIyOSw0LjA1MmMtMi44ODItMC41ODUtNS44NDgsMC40MzMtNy43NSwyLjc0Mg0KCWMtMS4yNTEsMS41Mi0xLjg3OSwzLjQwOC0xLjgxLDUuMzU5Yy00LjYzLTAuODM0LTkuMzQsMS4yMjQtMTEuODQ0LDUuMzQ0Yy0xLjU5NiwyLjYyNS0yLjA3Myw1LjcxNC0xLjM0NSw4LjY5OA0KCXMyLjU3NSw1LjUwNiw1LjIsNy4xMDJjMC4xNjIsMC4wOTksMC4zNDIsMC4xNDYsMC41MTksMC4xNDZjMC4zMzgsMCwwLjY2Ny0wLjE3MSwwLjg1NS0wLjQ4YzAuMjg3LTAuNDczLDAuMTM3LTEuMDg3LTAuMzM1LTEuMzc0DQoJYy0yLjE2OS0xLjMxOC0zLjY5NC0zLjQwMS00LjI5Ni01Ljg2N2MtMC42MDItMi40NjUtMC4yMDctNS4wMTcsMS4xMS03LjE4NWMyLjE5Ni0zLjYxNCw2LjQ0Ny01LjMxNSwxMC40OS00LjI2Mg0KCWMwLjQ1OCwxLjQ3MSwxLjMzLDIuNzc5LDIuNTQ2LDMuNzgxYzAuMTg3LDAuMTUzLDAuNDExLDAuMjI4LDAuNjM1LDAuMjI4YzAuMjg5LDAsMC41NzUtMC4xMjQsMC43NzMtMC4zNjQNCgljMC4zNTEtMC40MjcsMC4yODktMS4wNTctMC4xMzctMS40MDhjLTEuMDE2LTAuODM2LTEuNjc5LTEuOTQxLTEuOTg1LTMuMTI3Yy0wLjAwMS0wLjAxMi0wLjAwNy0wLjAyMi0wLjAwOC0wLjAzNA0KCWMtMC40NS0xLjc4Ny0wLjA4My0zLjc1NiwxLjE3NS01LjI4NWMxLjM1Ni0xLjY0NiwzLjQzNS0yLjQyMyw1LjQ5My0yLjEyMmMtMC4yOCwxLjE3My0wLjMwNywyLjQyMy0wLjAxMiwzLjY3NA0KCWMwLjEwOCwwLjQ2MSwwLjUyLDAuNzcxLDAuOTczLDAuNzcxYzAuMDc2LDAsMC4xNTMtMC4wMDksMC4yMjktMC4wMjZjMC41MzgtMC4xMjcsMC44NzEtMC42NjUsMC43NDUtMS4yMDINCgljLTAuNzU4LTMuMjIxLDEuMjQ2LTYuNDU3LDQuNDY3LTcuMjE1YzMuMjE1LTAuNzU5LDYuNDU2LDEuMjQ1LDcuMjE0LDQuNDY3YzAuMTI3LDAuNTM3LDAuNjY1LDAuODY1LDEuMjAzLDAuNzQ0DQoJYzAuNTM3LTAuMTI3LDAuODctMC42NjUsMC43NDQtMS4yMDNjLTAuNDktMi4wOC0xLjc2LTMuODQ1LTMuNTc2LTQuOTdjLTAuNzQ2LTAuNDYyLTEuNTQ5LTAuNzg1LTIuMzc4LTAuOTgxDQoJYzAuMi01LjA2Myw0LjM3LTkuMTIzLDkuNDgxLTkuMTIzYzUuMDk0LDAsOS4yNTMsNC4wMzMsOS40NzgsOS4wNzNjLTMuOTI5LDAuNTA0LTYuOTc4LDMuODYzLTYuOTc4LDcuOTI3YzAsMC41NTMsMC40NDcsMSwxLDENCglzMS0wLjQ0NywxLTFjMC0zLjMwOSwyLjY5MS02LDYtNnM2LDIuNjkxLDYsNmMwLDAuNTUzLDAuNDQ3LDEsMSwxczEtMC40NDcsMS0xQzU5Ljk1OCwyMS4zODUsNTYuODg2LDE4LjAxNSw1Mi45MzYsMTcuNTN6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDBFOEY5OyIgZD0iTTU5Ljk3OSwyNC41MzloLTAuMDgxYzAuMDM1LDAuMzA0LDAuMDU5LDAuNjExLDAuMDU5LDAuOTI1YzAsMC41NTMtMC40NDcsMS0xLDFzLTEtMC40NDctMS0xDQoJCWMwLTMuMzA5LTIuNjkxLTYtNi02cy02LDIuNjkxLTYsNmMwLDAuNTUzLTAuNDQ3LDEtMSwxcy0xLTAuNDQ3LTEtMWMwLTQuMDY0LDMuMDQ5LTcuNDIzLDYuOTc4LTcuOTI3DQoJCWMtMC4yMjYtNS4wMzktNC4zODQtOS4wNzMtOS40NzgtOS4wNzNjLTUuMTExLDAtOS4yODEsNC4wNi05LjQ4MSw5LjEyM2MwLjgyOSwwLjE5NiwxLjYzMiwwLjUyLDIuMzc4LDAuOTgxDQoJCWMxLjgxNiwxLjEyNSwzLjA4NiwyLjg5LDMuNTc2LDQuOTdjMC4xMjYsMC41MzgtMC4yMDcsMS4wNzYtMC43NDQsMS4yMDNjLTAuNTM4LDAuMTIxLTEuMDc2LTAuMjA3LTEuMjAzLTAuNzQ0DQoJCWMtMC43NTgtMy4yMjItMy45OTktNS4yMjYtNy4yMTQtNC40NjdjLTMuMjIxLDAuNzU4LTUuMjI1LDMuOTk0LTQuNDY3LDcuMjE1YzAuMTI2LDAuNTM3LTAuMjA3LDEuMDc1LTAuNzQ1LDEuMjAyDQoJCWMtMC4wNzYsMC4wMTgtMC4xNTMsMC4wMjYtMC4yMjksMC4wMjZjLTAuNDUzLDAtMC44NjQtMC4zMTEtMC45NzMtMC43NzFjLTAuMjk0LTEuMjUxLTAuMjY4LTIuNTAyLDAuMDEyLTMuNjc0DQoJCWMtMi4wNTgtMC4zMDEtNC4xMzcsMC40NzYtNS40OTMsMi4xMjJjLTEuMjU4LDEuNTI5LTEuNjI1LDMuNDk4LTEuMTc1LDUuMjg1YzAuMDAxLDAuMDEyLDAuMDA3LDAuMDIyLDAuMDA4LDAuMDM0DQoJCWMwLjMwNiwxLjE4NiwwLjk3LDIuMjksMS45ODUsMy4xMjdjMC40MjYsMC4zNTIsMC40ODcsMC45ODEsMC4xMzcsMS40MDhjLTAuMTk4LDAuMjQtMC40ODQsMC4zNjQtMC43NzMsMC4zNjQNCgkJYy0wLjIyNCwwLTAuNDQ4LTAuMDc0LTAuNjM1LTAuMjI4Yy0xLjIxNy0xLjAwMi0yLjA4OC0yLjMxMS0yLjU0Ni0zLjc4MWMtNC4wNDMtMS4wNTQtOC4yOTQsMC42NDctMTAuNDksNC4yNjINCgkJYy0xLjMxNywyLjE2OC0xLjcxMiw0LjcyLTEuMTEsNy4xODVjMC42MDIsMi40NjYsMi4xMjcsNC41NDksNC4yOTYsNS44NjdjMC40NzIsMC4yODcsMC42MjIsMC45MDEsMC4zMzUsMS4zNzQNCgkJYy0wLjE4OCwwLjMxLTAuNTE4LDAuNDgtMC44NTUsMC40OGMtMC4xMzMsMC0wLjI2NS0wLjAzNi0wLjM5Mi0wLjA5MWMxLjU4LDAuOTM2LDMuMzk5LDEuNTA5LDUuMzQ0LDEuNTkzbDMyLDAuMDExDQoJCWM5LjM3NCwwLDE3LTcuNjI2LDE3LTE3di0xMEw1OS45NzksMjQuNTM5eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0JGRERFRjsiIGQ9Ik01NC4wMDMsNDMuNTM5YzAtMy44NjYtMy4xMzQtNy03LTdzLTcsMy4xMzQtNyw3YzAsMy44NjYsMy4xMzQsNyw3LDdjMC44MDMsMCwxLjU3LTAuMTQyLDIuMjg4LTAuMzkNCgljMC42NzMsMS45NjcsMi41MTcsMy4zOSw0LjcxMiwzLjM5YzIuNzYxLDAsNS0yLjIzOSw1LTVTNTYuNzY1LDQzLjUzOSw1NC4wMDMsNDMuNTM5eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0FCQ0FERDsiIGQ9Ik01NC45NDYsNDIuNjIxYy0wLjQ1OC0zLjk3OS0zLjg0My03LjA4Mi03Ljk0My03LjA4MmMtNC40MTEsMC04LDMuNTg5LTgsOGMwLDAuNTUyLDAuNDQ4LDEsMSwxDQoJczEtMC40NDgsMS0xYzAtMy4zMDksMi42OTEtNiw2LTZjMy4wMDMsMCw1LjQ5LDIuMjE5LDUuOTI1LDUuMTAyYy0yLjc5NywwLjUwOS00LjkyNSwyLjk1Ny00LjkyNSw1Ljg5OGMwLDAuNTUyLDAuNDQ4LDEsMSwxDQoJczEtMC40NDgsMS0xYzAtMi4yMDYsMS43OTQtNCw0LTRzNCwxLjc5NCw0LDRjMCwwLjU1MiwwLjQ0OCwxLDEsMXMxLTAuNDQ4LDEtMUM2MC4wMDMsNDUuNTUyLDU3LjgwNyw0My4wNzYsNTQuOTQ2LDQyLjYyMXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./src/icons/simple/raining.svg":
/*!**************************************!*\
  !*** ./src/icons/simple/raining.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEuMTk0IDUxLjE5NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEuMTk0IDUxLjE5NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik0yNC4zNjcsMzAuNzY2Yy0wLjQ4MS0wLjI2OS0xLjA5Mi0wLjA5My0xLjM1OSwwLjM5bC0yLjA1NywzLjcxMQ0KCQljLTAuMjY4LDAuNDgzLTAuMDkzLDEuMDkyLDAuMzkxLDEuMzU5YzAuMTUzLDAuMDg1LDAuMzE5LDAuMTI1LDAuNDgzLDAuMTI1YzAuMzUyLDAsMC42OTMtMC4xODYsMC44NzYtMC41MTVsMi4wNTctMy43MTENCgkJQzI1LjAyNSwzMS42NDIsMjQuODUsMzEuMDMzLDI0LjM2NywzMC43NjZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik0yNy4xMjIsMjMuNzM0bC0yLjA1OCwzLjcxMWMtMC4yNjgsMC40ODMtMC4wOTMsMS4wOTIsMC4zOSwxLjM1OQ0KCQljMC4xNTQsMC4wODUsMC4zMiwwLjEyNSwwLjQ4NCwwLjEyNWMwLjM1MiwwLDAuNjkzLTAuMTg2LDAuODc2LTAuNTE1bDIuMDU4LTMuNzExYzAuMjY4LTAuNDgzLDAuMDkzLTEuMDkyLTAuMzktMS4zNTkNCgkJQzI3Ljk5NywyMy4wNzYsMjcuMzg5LDIzLjI1MSwyNy4xMjIsMjMuNzM0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMjcuODEsMzkuMTQyYy0wLjQ4NC0wLjI2OS0xLjA5MS0wLjA5NC0xLjM2LDAuMzlsLTIuMDU4LDMuNzFjLTAuMjY4LDAuNDgzLTAuMDkzLDEuMDkyLDAuMzksMS4zNTkNCgkJYzAuMTU0LDAuMDg1LDAuMzIsMC4xMjUsMC40ODQsMC4xMjVjMC4zNTIsMCwwLjY5Mi0wLjE4NiwwLjg3Ni0wLjUxNWwyLjA1OC0zLjcxQzI4LjQ2OCw0MC4wMTgsMjguMjkzLDM5LjQwOSwyNy44MSwzOS4xNDJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik0zMS45MjMsMzEuNzJjLTAuNDgyLTAuMjY5LTEuMDkxLTAuMDk0LTEuMzU5LDAuMzlsLTIuMDU3LDMuNzENCgkJYy0wLjI2OCwwLjQ4My0wLjA5MywxLjA5MiwwLjM5MSwxLjM1OWMwLjE1MywwLjA4NSwwLjMxOSwwLjEyNSwwLjQ4MywwLjEyNWMwLjM1MiwwLDAuNjkzLTAuMTg2LDAuODc2LTAuNTE1bDIuMDU3LTMuNzENCgkJQzMyLjU4MSwzMi41OTcsMzIuNDA2LDMxLjk4OCwzMS45MjMsMzEuNzJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik0xNi44MTEsMjkuODEyYy0wLjQ4Mi0wLjI2OS0xLjA5Mi0wLjA5NC0xLjM1OSwwLjM5bC0yLjA1NywzLjcxDQoJCWMtMC4yNjgsMC40ODMtMC4wOTMsMS4wOTIsMC4zOTEsMS4zNTljMC4xNTMsMC4wODUsMC4zMTksMC4xMjUsMC40ODMsMC4xMjVjMC4zNTIsMCwwLjY5My0wLjE4NiwwLjg3Ni0wLjUxNWwyLjA1Ny0zLjcxDQoJCUMxNy40NjksMzAuNjg4LDE3LjI5NSwzMC4wNzksMTYuODExLDI5LjgxMnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDBFOEY5OyIgZD0iTTEyLjY5OSwzNy4yMzNjLTAuNDg1LTAuMjY5LTEuMDkxLTAuMDk0LTEuMzYsMC4zOWwtMi4wNTgsMy43MQ0KCQljLTAuMjY4LDAuNDgzLTAuMDkzLDEuMDkyLDAuMzksMS4zNTljMC4xNTQsMC4wODUsMC4zMiwwLjEyNSwwLjQ4NCwwLjEyNWMwLjM1MiwwLDAuNjkyLTAuMTg2LDAuODc2LTAuNTE1bDIuMDU4LTMuNzENCgkJQzEzLjM1NiwzOC4xMDksMTMuMTgxLDM3LjUwMSwxMi42OTksMzcuMjMzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMjAuMjU1LDM4LjE4N2MtMC40ODUtMC4yNjktMS4wOTItMC4wOTQtMS4zNiwwLjM5bC0yLjA1OCwzLjcxMQ0KCQljLTAuMjY4LDAuNDgzLTAuMDkzLDEuMDkyLDAuMzksMS4zNTljMC4xNTQsMC4wODUsMC4zMiwwLjEyNSwwLjQ4NCwwLjEyNWMwLjM1MiwwLDAuNjkzLTAuMTg2LDAuODc2LTAuNTE1bDIuMDU4LTMuNzExDQoJCUMyMC45MTIsMzkuMDY0LDIwLjczNywzOC40NTUsMjAuMjU1LDM4LjE4N3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDBFOEY5OyIgZD0iTTE2LjEzOSw0NS42MDhjLTAuNDgyLTAuMjY5LTEuMDkyLTAuMDkzLTEuMzU5LDAuMzlsLTIuMDU3LDMuNzExDQoJCWMtMC4yNjgsMC40ODMtMC4wOTMsMS4wOTIsMC4zOTEsMS4zNTljMC4xNTMsMC4wODUsMC4zMTksMC4xMjUsMC40ODMsMC4xMjVjMC4zNTIsMCwwLjY5My0wLjE4NiwwLjg3Ni0wLjUxNWwyLjA1Ny0zLjcxMQ0KCQlDMTYuNzk4LDQ2LjQ4NCwxNi42MjMsNDUuODc2LDE2LjEzOSw0NS42MDh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik0yMC45MjUsMjIuMzljLTAuNDgxLTAuMjY5LTEuMDkyLTAuMDk0LTEuMzU5LDAuMzlsLTIuMDU3LDMuNzENCgkJYy0wLjI2OCwwLjQ4My0wLjA5MywxLjA5MiwwLjM5MSwxLjM1OWMwLjE1MywwLjA4NSwwLjMxOSwwLjEyNSwwLjQ4MywwLjEyNWMwLjM1MiwwLDAuNjkzLTAuMTg2LDAuODc2LTAuNTE1bDIuMDU3LTMuNzENCgkJQzIxLjU4MywyMy4yNjcsMjEuNDA4LDIyLjY1OCwyMC45MjUsMjIuMzl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik0zOS40NzgsMzIuNjc0Yy0wLjQ4MS0wLjI2OC0xLjA5Mi0wLjA5My0xLjM1OSwwLjM5bC0yLjA1NywzLjcxMQ0KCQljLTAuMjY4LDAuNDgzLTAuMDkzLDEuMDkyLDAuMzkxLDEuMzU5YzAuMTUzLDAuMDg1LDAuMzE5LDAuMTI1LDAuNDgzLDAuMTI1YzAuMzUyLDAsMC42OTMtMC4xODYsMC44NzYtMC41MTVsMi4wNTctMy43MTENCgkJQzQwLjEzNiwzMy41NSwzOS45NjIsMzIuOTQyLDM5LjQ3OCwzMi42NzR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik00My41OTQsMjUuMjUzYy0wLjQ4NS0wLjI2OC0xLjA5My0wLjA5My0xLjM2LDAuMzlsLTIuMDU4LDMuNzExDQoJCWMtMC4yNjgsMC40ODMtMC4wOTMsMS4wOTIsMC4zOSwxLjM1OWMwLjE1NCwwLjA4NSwwLjMyLDAuMTI1LDAuNDg0LDAuMTI1YzAuMzUyLDAsMC42OTMtMC4xODYsMC44NzYtMC41MTVsMi4wNTgtMy43MTENCgkJQzQ0LjI1MSwyNi4xMjksNDQuMDc2LDI1LjUyMSw0My41OTQsMjUuMjUzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMzMuNjgxLDEzLjk2MWMwLjE1NCwwLjA4NSwwLjMyLDAuMTI1LDAuNDg0LDAuMTI1YzAuMzUyLDAsMC42OTMtMC4xODYsMC44NzYtMC41MTVsMi4wNTgtMy43MTENCgkJYzAuMjY4LTAuNDgzLDAuMDkzLTEuMDkyLTAuMzktMS4zNTljLTAuNDg0LTAuMjY4LTEuMDkzLTAuMDk0LTEuMzYsMC4zOWwtMi4wNTgsMy43MTFDMzMuMDI0LDEzLjA4NSwzMy4xOTksMTMuNjk0LDMzLjY4MSwxMy45NjF6DQoJCSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMzcuNzk3LDYuNTRjMC4xNTMsMC4wODUsMC4zMTksMC4xMjUsMC40ODMsMC4xMjVjMC4zNTIsMCwwLjY5My0wLjE4NiwwLjg3Ni0wLjUxNWwyLjA1Ny0zLjcxMQ0KCQljMC4yNjgtMC40ODMsMC4wOTMtMS4wOTItMC4zOTEtMS4zNTljLTAuNDgyLTAuMjY4LTEuMDkyLTAuMDkzLTEuMzU5LDAuMzlsLTIuMDU3LDMuNzExQzM3LjEzOCw1LjY2NCwzNy4zMTMsNi4yNzMsMzcuNzk3LDYuNTR6Ig0KCQkvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMzYuMDM4LDI0LjI5OWMtMC40ODQtMC4yNjktMS4wOTItMC4wOTQtMS4zNiwwLjM5bC0yLjA1OCwzLjcxDQoJCWMtMC4yNjgsMC40ODMtMC4wOTMsMS4wOTIsMC4zOSwxLjM1OWMwLjE1NCwwLjA4NSwwLjMyLDAuMTI1LDAuNDg0LDAuMTI1YzAuMzUyLDAsMC42OTItMC4xODYsMC44NzYtMC41MTVsMi4wNTgtMy43MQ0KCQlDMzYuNjk1LDI1LjE3NSwzNi41MiwyNC41NjYsMzYuMDM4LDI0LjI5OXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDBFOEY5OyIgZD0iTTM4Ljc5MSwxNy4yNjdsLTIuMDU3LDMuNzFjLTAuMjY4LDAuNDgzLTAuMDkzLDEuMDkyLDAuMzkxLDEuMzU5DQoJCWMwLjE1MywwLjA4NSwwLjMxOSwwLjEyNSwwLjQ4MywwLjEyNWMwLjM1MiwwLDAuNjkzLTAuMTg2LDAuODc2LTAuNTE1bDIuMDU3LTMuNzFjMC4yNjgtMC40ODMsMC4wOTMtMS4wOTItMC4zOTEtMS4zNTkNCgkJQzM5LjY2OSwxNi42MDksMzkuMDU4LDE2Ljc4NCwzOC43OTEsMTcuMjY3eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMjYuMTI3LDEzLjAwN2MwLjE1MywwLjA4NSwwLjMxOSwwLjEyNSwwLjQ4MywwLjEyNWMwLjM1MiwwLDAuNjkzLTAuMTg2LDAuODc2LTAuNTE1bDIuMDU3LTMuNzENCgkJYzAuMjY4LTAuNDgzLDAuMDkzLTEuMDkyLTAuMzkxLTEuMzU5Yy0wLjQ4MS0wLjI2OS0xLjA5Mi0wLjA5NC0xLjM1OSwwLjM5bC0yLjA1NywzLjcxQzI1LjQ2OSwxMi4xMywyNS42NDMsMTIuNzM5LDI2LjEyNywxMy4wMDd6DQoJCSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMjIuMDEzLDIwLjQyOGMwLjE1MywwLjA4NSwwLjMxOSwwLjEyNSwwLjQ4MywwLjEyNWMwLjM1MiwwLDAuNjkzLTAuMTg2LDAuODc2LTAuNTE1bDIuMDU3LTMuNzENCgkJYzAuMjY4LTAuNDgzLDAuMDkzLTEuMDkyLTAuMzkxLTEuMzU5Yy0wLjQ4MS0wLjI2OS0xLjA5MS0wLjA5NC0xLjM1OSwwLjM5bC0yLjA1NywzLjcxQzIxLjM1NSwxOS41NTIsMjEuNTMsMjAuMTYxLDIyLjAxMywyMC40Mjh6DQoJCSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMTAuNjI3LDI2LjM4M2MtMC40ODItMC4yNjktMS4wOTItMC4wOTMtMS4zNTksMC4zOWwtMi4wNTcsMy43MTENCgkJYy0wLjI2OCwwLjQ4My0wLjA5MywxLjA5MiwwLjM5MSwxLjM1OWMwLjE1MywwLjA4NSwwLjMxOSwwLjEyNSwwLjQ4MywwLjEyNWMwLjM1MiwwLDAuNjkzLTAuMTg2LDAuODc2LTAuNTE1bDIuMDU3LTMuNzExDQoJCUMxMS4yODUsMjcuMjU5LDExLjExLDI2LjY1MSwxMC42MjcsMjYuMzgzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMTEuNzE0LDI0LjQyMmMwLjE1NCwwLjA4NSwwLjMyLDAuMTI1LDAuNDg0LDAuMTI1YzAuMzUyLDAsMC42OTMtMC4xODYsMC44NzYtMC41MTVsMi4wNTgtMy43MTENCgkJYzAuMjY4LTAuNDgzLDAuMDkzLTEuMDkyLTAuMzktMS4zNTljLTAuNDg0LTAuMjY5LTEuMDkzLTAuMDk0LTEuMzYsMC4zOWwtMi4wNTgsMy43MTFDMTEuMDU2LDIzLjU0NSwxMS4yMzEsMjQuMTU0LDExLjcxNCwyNC40MjJ6DQoJCSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMTkuOTQxLDkuNTc5YzAuMTU0LDAuMDg1LDAuMzIsMC4xMjUsMC40ODQsMC4xMjVjMC4zNTIsMCwwLjY5My0wLjE4NiwwLjg3Ni0wLjUxNWwyLjA1OC0zLjcxMQ0KCQljMC4yNjgtMC40ODMsMC4wOTMtMS4wOTItMC4zOS0xLjM1OWMtMC40ODUtMC4yNjktMS4wOTMtMC4wOTQtMS4zNiwwLjM5TDE5LjU1Miw4LjIyQzE5LjI4NCw4LjcwMywxOS40NTksOS4zMTIsMTkuOTQxLDkuNTc5eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMTUuODI5LDE3LjAwMWMwLjE1MywwLjA4NSwwLjMxOSwwLjEyNSwwLjQ4MywwLjEyNWMwLjM1MiwwLDAuNjkzLTAuMTg2LDAuODc2LTAuNTE1bDIuMDU3LTMuNzExDQoJCWMwLjI2OC0wLjQ4MywwLjA5My0xLjA5Mi0wLjM5MS0xLjM1OWMtMC40ODItMC4yNjktMS4wOTEtMC4wOTMtMS4zNTksMC4zOWwtMi4wNTcsMy43MTENCgkJQzE1LjE3MSwxNi4xMjUsMTUuMzQ1LDE2LjczMywxNS44MjksMTcuMDAxeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMzEuMjM1LDE2LjMxM2wtMi4wNTcsMy43MTFjLTAuMjY4LDAuNDgzLTAuMDkzLDEuMDkyLDAuMzkxLDEuMzU5DQoJCWMwLjE1MywwLjA4NSwwLjMxOSwwLjEyNSwwLjQ4MywwLjEyNWMwLjM1MiwwLDAuNjkzLTAuMTg2LDAuODc2LTAuNTE1bDIuMDU3LTMuNzExYzAuMjY4LTAuNDgzLDAuMDkzLTEuMDkyLTAuMzkxLTEuMzU5DQoJCUMzMi4xMTIsMTUuNjU1LDMxLjUwMywxNS44MywzMS4yMzUsMTYuMzEzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMzAuMjQxLDUuNTg2YzAuMTUzLDAuMDg1LDAuMzE5LDAuMTI1LDAuNDgzLDAuMTI1YzAuMzUyLDAsMC42OTMtMC4xODYsMC44NzYtMC41MTVsMi4wNTctMy43MQ0KCQljMC4yNjgtMC40ODMsMC4wOTMtMS4wOTItMC4zOTEtMS4zNTljLTAuNDgxLTAuMjY5LTEuMDkyLTAuMDk0LTEuMzU5LDAuMzlsLTIuMDU3LDMuNzFDMjkuNTgzLDQuNzA5LDI5Ljc1OCw1LjMxOCwzMC4yNDEsNS41ODZ6Ig0KCQkvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./src/icons/simple/snowing.svg":
/*!**************************************!*\
  !*** ./src/icons/simple/snowing.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTIuNjYxIDUyLjY2MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTIuNjYxIDUyLjY2MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0U2RTdFODsiIGQ9Ik00MS41MjcsMjkuODE1Yy0wLjI3Ny0wLjQ3OS0wLjg5LTAuNjQzLTEuMzY2LTAuMzY2bC0yLjgzLDEuNjM0di0zLjI2OGMwLTAuNTUyLTAuNDQ3LTEtMS0xDQoJCXMtMSwwLjQ0OC0xLDF2My4yNjhsLTIuODMtMS42MzRjLTAuNDc4LTAuMjc2LTEuMDktMC4xMTMtMS4zNjYsMC4zNjZjLTAuMjc2LDAuNDc5LTAuMTEyLDEuMDksMC4zNjYsMS4zNjZsMi44MywxLjYzNGwtMi44MywxLjYzNA0KCQljLTAuNDc5LDAuMjc2LTAuNjQzLDAuODg4LTAuMzY2LDEuMzY2YzAuMTg2LDAuMzIxLDAuNTIxLDAuNSwwLjg2NywwLjVjMC4xNywwLDAuMzQyLTAuMDQzLDAuNDk5LTAuMTM0bDIuODMtMS42MzR2My4yNjgNCgkJYzAsMC41NTIsMC40NDcsMSwxLDFzMS0wLjQ0OCwxLTF2LTMuMjY4bDIuODMsMS42MzRjMC4xNTcsMC4wOTEsMC4zMjksMC4xMzQsMC40OTksMC4xMzRjMC4zNDYsMCwwLjY4Mi0wLjE3OSwwLjg2Ny0wLjUNCgkJYzAuMjc2LTAuNDc5LDAuMTEyLTEuMDktMC4zNjYtMS4zNjZsLTIuODMtMS42MzRsMi44My0xLjYzNEM0MS42MzksMzAuOTA1LDQxLjgwMywzMC4yOTMsNDEuNTI3LDI5LjgxNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRTZFN0U4OyIgZD0iTTIwLjUyNywyOS44MTVjLTAuMjc3LTAuNDc5LTAuODktMC42NDMtMS4zNjYtMC4zNjZsLTIuODMsMS42MzR2LTMuMjY4YzAtMC41NTItMC40NDctMS0xLTENCgkJcy0xLDAuNDQ4LTEsMXYzLjI2OGwtMi44My0xLjYzNGMtMC40NzgtMC4yNzYtMS4wOS0wLjExMy0xLjM2NiwwLjM2NmMtMC4yNzYsMC40NzktMC4xMTIsMS4wOSwwLjM2NiwxLjM2NmwyLjgzLDEuNjM0bC0yLjgzLDEuNjM0DQoJCWMtMC40NzksMC4yNzYtMC42NDMsMC44ODgtMC4zNjYsMS4zNjZjMC4xODYsMC4zMjEsMC41MjEsMC41LDAuODY3LDAuNWMwLjE3LDAsMC4zNDItMC4wNDMsMC40OTktMC4xMzRsMi44My0xLjYzNHYzLjI2OA0KCQljMCwwLjU1MiwwLjQ0NywxLDEsMXMxLTAuNDQ4LDEtMXYtMy4yNjhsMi44MywxLjYzNGMwLjE1NywwLjA5MSwwLjMyOSwwLjEzNCwwLjQ5OSwwLjEzNGMwLjM0NiwwLDAuNjgyLTAuMTc5LDAuODY3LTAuNQ0KCQljMC4yNzYtMC40NzksMC4xMTItMS4wOS0wLjM2Ni0xLjM2NmwtMi44My0xLjYzNGwyLjgzLTEuNjM0QzIwLjYzOSwzMC45MDUsMjAuODAzLDMwLjI5MywyMC41MjcsMjkuODE1eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFNkU3RTg7IiBkPSJNNDEuNTI3LDMuODE1Yy0wLjI3Ny0wLjQ3OS0wLjg5LTAuNjQzLTEuMzY2LTAuMzY2bC0yLjgzLDEuNjM0VjEuODE1YzAtMC41NTItMC40NDctMS0xLTENCgkJcy0xLDAuNDQ4LTEsMXYzLjI2OEwzMi41LDMuNDQ5Yy0wLjQ3OC0wLjI3Ny0xLjA5LTAuMTEyLTEuMzY2LDAuMzY2cy0wLjExMiwxLjA5LDAuMzY2LDEuMzY2bDIuODMsMS42MzRMMzEuNSw4LjQ0OQ0KCQljLTAuNDc5LDAuMjc2LTAuNjQzLDAuODg4LTAuMzY2LDEuMzY2YzAuMTg2LDAuMzIxLDAuNTIxLDAuNSwwLjg2NywwLjVjMC4xNywwLDAuMzQyLTAuMDQzLDAuNDk5LTAuMTM0bDIuODMtMS42MzR2My4yNjgNCgkJYzAsMC41NTIsMC40NDcsMSwxLDFzMS0wLjQ0OCwxLTFWOC41NDdsMi44MywxLjYzNGMwLjE1NywwLjA5MSwwLjMyOSwwLjEzNCwwLjQ5OSwwLjEzNGMwLjM0NiwwLDAuNjgyLTAuMTc5LDAuODY3LTAuNQ0KCQljMC4yNzYtMC40NzksMC4xMTItMS4wOS0wLjM2Ni0xLjM2NmwtMi44My0xLjYzNGwyLjgzLTEuNjM0QzQxLjYzOSw0LjkwNSw0MS44MDMsNC4yOTMsNDEuNTI3LDMuODE1eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFNkU3RTg7IiBkPSJNMjAuNTI3LDMuODE1Yy0wLjI3Ny0wLjQ3OS0wLjg5LTAuNjQzLTEuMzY2LTAuMzY2bC0yLjgzLDEuNjM0VjEuODE1YzAtMC41NTItMC40NDctMS0xLTENCgkJcy0xLDAuNDQ4LTEsMXYzLjI2OEwxMS41LDMuNDQ5Yy0wLjQ3OC0wLjI3Ny0xLjA5LTAuMTEyLTEuMzY2LDAuMzY2cy0wLjExMiwxLjA5LDAuMzY2LDEuMzY2bDIuODMsMS42MzRMMTAuNSw4LjQ0OQ0KCQljLTAuNDc5LDAuMjc2LTAuNjQzLDAuODg4LTAuMzY2LDEuMzY2YzAuMTg2LDAuMzIxLDAuNTIxLDAuNSwwLjg2NywwLjVjMC4xNywwLDAuMzQyLTAuMDQzLDAuNDk5LTAuMTM0bDIuODMtMS42MzR2My4yNjgNCgkJYzAsMC41NTIsMC40NDcsMSwxLDFzMS0wLjQ0OCwxLTFWOC41NDdsMi44MywxLjYzNGMwLjE1NywwLjA5MSwwLjMyOSwwLjEzNCwwLjQ5OSwwLjEzNGMwLjM0NiwwLDAuNjgyLTAuMTc5LDAuODY3LTAuNQ0KCQljMC4yNzYtMC40NzksMC4xMTItMS4wOS0wLjM2Ni0xLjM2NmwtMi44My0xLjYzNGwyLjgzLTEuNjM0QzIwLjYzOSw0LjkwNSwyMC44MDMsNC4yOTMsMjAuNTI3LDMuODE1eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFNkU3RTg7IiBkPSJNMzEuNTI3LDQyLjg0NmMtMC4yNzctMC40NzktMC44OS0wLjY0My0xLjM2Ni0wLjM2NmwtMi44MywxLjYzNHYtMy4yNjhjMC0wLjU1Mi0wLjQ0Ny0xLTEtMQ0KCQlzLTEsMC40NDgtMSwxdjMuMjY4TDIyLjUsNDIuNDhjLTAuNDc4LTAuMjc2LTEuMDktMC4xMTItMS4zNjYsMC4zNjZzLTAuMTEyLDEuMDksMC4zNjYsMS4zNjZsMi44MywxLjYzNEwyMS41LDQ3LjQ4DQoJCWMtMC40NzksMC4yNzYtMC42NDMsMC44ODgtMC4zNjYsMS4zNjZjMC4xODYsMC4zMjEsMC41MjEsMC41LDAuODY3LDAuNWMwLjE3LDAsMC4zNDItMC4wNDMsMC40OTktMC4xMzRsMi44My0xLjYzNHYzLjI2OA0KCQljMCwwLjU1MiwwLjQ0NywxLDEsMXMxLTAuNDQ4LDEtMXYtMy4yNjhsMi44MywxLjYzNGMwLjE1NywwLjA5MSwwLjMyOSwwLjEzNCwwLjQ5OSwwLjEzNGMwLjM0NiwwLDAuNjgyLTAuMTc5LDAuODY3LTAuNQ0KCQljMC4yNzYtMC40NzksMC4xMTItMS4wOS0wLjM2Ni0xLjM2NmwtMi44My0xLjYzNGwyLjgzLTEuNjM0QzMxLjYzOSw0My45MzYsMzEuODAzLDQzLjMyNSwzMS41MjcsNDIuODQ2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFNkU3RTg7IiBkPSJNMTAuNTI3LDQyLjg0NmMtMC4yNzctMC40NzktMC44OS0wLjY0My0xLjM2Ni0wLjM2NmwtMi44MywxLjYzNHYtMy4yNjhjMC0wLjU1Mi0wLjQ0Ny0xLTEtMQ0KCQlzLTEsMC40NDgtMSwxdjMuMjY4TDEuNSw0Mi40OGMtMC40NzgtMC4yNzYtMS4wOS0wLjExMi0xLjM2NiwwLjM2NnMtMC4xMTIsMS4wOSwwLjM2NiwxLjM2NmwyLjgzLDEuNjM0TDAuNSw0Ny40OA0KCQljLTAuNDc5LDAuMjc2LTAuNjQzLDAuODg4LTAuMzY2LDEuMzY2YzAuMTg2LDAuMzIxLDAuNTIxLDAuNSwwLjg2NywwLjVjMC4xNywwLDAuMzQyLTAuMDQzLDAuNDk5LTAuMTM0bDIuODMtMS42MzR2My4yNjgNCgkJYzAsMC41NTIsMC40NDcsMSwxLDFzMS0wLjQ0OCwxLTF2LTMuMjY4bDIuODMsMS42MzRjMC4xNTcsMC4wOTEsMC4zMjksMC4xMzQsMC40OTksMC4xMzRjMC4zNDYsMCwwLjY4Mi0wLjE3OSwwLjg2Ny0wLjUNCgkJYzAuMjc2LTAuNDc5LDAuMTEyLTEuMDktMC4zNjYtMS4zNjZsLTIuODMtMS42MzRsMi44My0xLjYzNEMxMC42MzksNDMuOTM2LDEwLjgwMyw0My4zMjUsMTAuNTI3LDQyLjg0NnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRTZFN0U4OyIgZD0iTTUyLjUyNyw0Mi44NDZjLTAuMjc3LTAuNDc5LTAuODktMC42NDMtMS4zNjYtMC4zNjZsLTIuODMsMS42MzR2LTMuMjY4YzAtMC41NTItMC40NDctMS0xLTENCgkJcy0xLDAuNDQ4LTEsMXYzLjI2OEw0My41LDQyLjQ4Yy0wLjQ3OC0wLjI3Ni0xLjA5LTAuMTEyLTEuMzY2LDAuMzY2cy0wLjExMiwxLjA5LDAuMzY2LDEuMzY2bDIuODMsMS42MzRMNDIuNSw0Ny40OA0KCQljLTAuNDc5LDAuMjc2LTAuNjQzLDAuODg4LTAuMzY2LDEuMzY2YzAuMTg2LDAuMzIxLDAuNTIxLDAuNSwwLjg2NywwLjVjMC4xNywwLDAuMzQyLTAuMDQzLDAuNDk5LTAuMTM0bDIuODMtMS42MzR2My4yNjgNCgkJYzAsMC41NTIsMC40NDcsMSwxLDFzMS0wLjQ0OCwxLTF2LTMuMjY4bDIuODMsMS42MzRjMC4xNTcsMC4wOTEsMC4zMjksMC4xMzQsMC40OTksMC4xMzRjMC4zNDYsMCwwLjY4Mi0wLjE3OSwwLjg2Ny0wLjUNCgkJYzAuMjc2LTAuNDc5LDAuMTEyLTEuMDktMC4zNjYtMS4zNjZsLTIuODMtMS42MzRsMi44My0xLjYzNEM1Mi42MzksNDMuOTM2LDUyLjgwMyw0My4zMjUsNTIuNTI3LDQyLjg0NnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRTZFN0U4OyIgZD0iTTIxLjEzNCwyMi44NDZjMC4xODYsMC4zMjEsMC41MjEsMC41LDAuODY3LDAuNWMwLjE3LDAsMC4zNDItMC4wNDMsMC40OTktMC4xMzRsMi44My0xLjYzNHYzLjI2OA0KCQljMCwwLjU1MiwwLjQ0NywxLDEsMXMxLTAuNDQ4LDEtMXYtMy4yNjhsMi44MywxLjYzNGMwLjE1NywwLjA5MSwwLjMyOSwwLjEzNCwwLjQ5OSwwLjEzNGMwLjM0NiwwLDAuNjgyLTAuMTc5LDAuODY3LTAuNQ0KCQljMC4yNzYtMC40NzksMC4xMTItMS4wOS0wLjM2Ni0xLjM2NmwtMi44My0xLjYzNGwyLjgzLTEuNjM0YzAuNDc5LTAuMjc2LDAuNjQzLTAuODg4LDAuMzY2LTEuMzY2DQoJCWMtMC4yNzctMC40NzktMC44OS0wLjY0My0xLjM2Ni0wLjM2NmwtMi44MywxLjYzNHYtMy4yNjhjMC0wLjU1Mi0wLjQ0Ny0xLTEtMXMtMSwwLjQ0OC0xLDF2My4yNjhMMjIuNSwxNi40OA0KCQljLTAuNDc4LTAuMjc3LTEuMDktMC4xMTMtMS4zNjYsMC4zNjZjLTAuMjc2LDAuNDc5LTAuMTEyLDEuMDksMC4zNjYsMS4zNjZsMi44MywxLjYzNEwyMS41LDIxLjQ4DQoJCUMyMS4wMjIsMjEuNzU2LDIwLjg1OCwyMi4zNjgsMjEuMTM0LDIyLjg0NnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRTZFN0U4OyIgZD0iTTAuMTM0LDIyLjg0NmMwLjE4NiwwLjMyMSwwLjUyMSwwLjUsMC44NjcsMC41YzAuMTcsMCwwLjM0Mi0wLjA0MywwLjQ5OS0wLjEzNGwyLjgzLTEuNjM0djMuMjY4DQoJCWMwLDAuNTUyLDAuNDQ3LDEsMSwxczEtMC40NDgsMS0xdi0zLjI2OGwyLjgzLDEuNjM0YzAuMTU3LDAuMDkxLDAuMzI5LDAuMTM0LDAuNDk5LDAuMTM0YzAuMzQ2LDAsMC42ODItMC4xNzksMC44NjctMC41DQoJCWMwLjI3Ni0wLjQ3OSwwLjExMi0xLjA5LTAuMzY2LTEuMzY2bC0yLjgzLTEuNjM0bDIuODMtMS42MzRjMC40NzktMC4yNzYsMC42NDMtMC44ODgsMC4zNjYtMS4zNjYNCgkJYy0wLjI3Ny0wLjQ3OS0wLjg5LTAuNjQzLTEuMzY2LTAuMzY2bC0yLjgzLDEuNjM0di0zLjI2OGMwLTAuNTUyLTAuNDQ3LTEtMS0xcy0xLDAuNDQ4LTEsMXYzLjI2OEwxLjUsMTYuNDgNCgkJYy0wLjQ3OC0wLjI3Ny0xLjA5LTAuMTEzLTEuMzY2LDAuMzY2Yy0wLjI3NiwwLjQ3OS0wLjExMiwxLjA5LDAuMzY2LDEuMzY2bDIuODMsMS42MzRMMC41LDIxLjQ4DQoJCUMwLjAyMiwyMS43NTYtMC4xNDIsMjIuMzY4LDAuMTM0LDIyLjg0NnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRTZFN0U4OyIgZD0iTTUyLjE2MSwyMS40OGwtMi44My0xLjYzNGwyLjgzLTEuNjM0YzAuNDc5LTAuMjc2LDAuNjQzLTAuODg4LDAuMzY2LTEuMzY2DQoJCWMtMC4yNzctMC40NzktMC44OS0wLjY0My0xLjM2Ni0wLjM2NmwtMi44MywxLjYzNHYtMy4yNjhjMC0wLjU1Mi0wLjQ0Ny0xLTEtMXMtMSwwLjQ0OC0xLDF2My4yNjhMNDMuNSwxNi40OA0KCQljLTAuNDc4LTAuMjc3LTEuMDktMC4xMTMtMS4zNjYsMC4zNjZjLTAuMjc2LDAuNDc5LTAuMTEyLDEuMDksMC4zNjYsMS4zNjZsMi44MywxLjYzNEw0Mi41LDIxLjQ4DQoJCWMtMC40NzksMC4yNzYtMC42NDMsMC44ODgtMC4zNjYsMS4zNjZjMC4xODYsMC4zMjEsMC41MjEsMC41LDAuODY3LDAuNWMwLjE3LDAsMC4zNDItMC4wNDMsMC40OTktMC4xMzRsMi44My0xLjYzNHYzLjI2OA0KCQljMCwwLjU1MiwwLjQ0NywxLDEsMXMxLTAuNDQ4LDEtMXYtMy4yNjhsMi44MywxLjYzNGMwLjE1NywwLjA5MSwwLjMyOSwwLjEzNCwwLjQ5OSwwLjEzNGMwLjM0NiwwLDAuNjgyLTAuMTc5LDAuODY3LTAuNQ0KCQlDNTIuODAzLDIyLjM2OCw1Mi42MzksMjEuNzU2LDUyLjE2MSwyMS40OHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./src/icons/simple/storm.svg":
/*!************************************!*\
  !*** ./src/icons/simple/storm.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAuMDAzIDYwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAuMDAzIDYwLjAwMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0YwQzQxOTsiIGQ9Ik0zNi4xMTYsMTAuNzI4TDM1LjE1OCw5LjE0Yy0zLjA3NC01LjA5Ni04LjQ0Ny04LjEzOS0xNC4zNzMtOC4xMzkNCgljLTkuMjYsMC0xNi43OTMsNy41MzMtMTYuNzkzLDE2Ljc5M2MwLDUuMjg0LDIuNTQ3LDEwLjMyNCw2LjgxNSwxMy40ODFsMC42NTEsMC40ODFsMC44MDUsMC4wODkNCgljMC41MjksMC4wNTgsMS4wMzMsMC4xNjMsMS40OTcsMC4zMTJsNC45NywxLjU5N2wtMS4xMjMtNS4wOThjLTAuMjY3LTEuMjE0LDAuMDI5LTIuNDU0LDAuODEzLTMuNDA2DQoJYzAuNzYzLTAuOTI2LDEuODg5LTEuNDU3LDMuMDkxLTEuNDU3YzAuNDEyLDAsMC44MTgsMC4wNjMsMS4xNzcsMC4xNzdsMi42OSwwLjg5N2wxLjA0Ny0yLjYzNmMwLjQ4NS0xLjIyLDEuNTMyLTIuMTI3LDIuNzk5LTIuNDI1DQoJYzAuNDUtMC4xMDUsMC45MzMtMC4xMjgsMS4zOTYtMC4wNzFsMy41LDAuNDIybC0wLjE0NC0zLjUyM2wtMC4wMjEtMC4zNDFjMC0xLjQxMSwwLjQwMy0yLjc5NSwxLjE2Ny0zLjk5OUwzNi4xMTYsMTAuNzI4eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik01OS45NzksMjMuMDAyaC0wLjA4MWMwLjAzNSwwLjMwNCwwLjA1OSwwLjYxMSwwLjA1OSwwLjkyNWMwLDAuNTUzLTAuNDQ3LDEtMSwxcy0xLTAuNDQ3LTEtMQ0KCWMwLTMuMzA5LTIuNjkxLTYtNi02cy02LDIuNjkxLTYsNmMwLDAuNTUzLTAuNDQ3LDEtMSwxcy0xLTAuNDQ3LTEtMWMwLTQuMDY0LDMuMDQ5LTcuNDIzLDYuOTc4LTcuOTI3DQoJYy0wLjIyNi01LjAzOS00LjM4NC05LjA3My05LjQ3OC05LjA3M2MtNS4xMTEsMC05LjI4MSw0LjA2LTkuNDgxLDkuMTIzYzAuODI5LDAuMTk2LDEuNjMyLDAuNTIsMi4zNzgsMC45ODENCgljMS44MTYsMS4xMjUsMy4wODYsMi44OSwzLjU3Niw0Ljk3YzAuMTI2LDAuNTM4LTAuMjA3LDEuMDc2LTAuNzQ0LDEuMjAzYy0wLjUzOCwwLjEyMS0xLjA3Ni0wLjIwNy0xLjIwMy0wLjc0NA0KCWMtMC43NTgtMy4yMjItMy45OTktNS4yMjYtNy4yMTQtNC40NjdjLTMuMjIxLDAuNzU4LTUuMjI1LDMuOTk0LTQuNDY3LDcuMjE1YzAuMTI2LDAuNTM3LTAuMjA3LDEuMDc1LTAuNzQ1LDEuMjAyDQoJYy0wLjA3NiwwLjAxOC0wLjE1MywwLjAyNi0wLjIyOSwwLjAyNmMtMC40NTMsMC0wLjg2NC0wLjMxMS0wLjk3My0wLjc3MWMtMC4yOTQtMS4yNTEtMC4yNjgtMi41MDIsMC4wMTItMy42NzQNCgljLTIuMDU4LTAuMzAxLTQuMTM3LDAuNDc2LTUuNDkzLDIuMTIyYy0xLjI1OCwxLjUyOS0xLjYyNSwzLjQ5OC0xLjE3NSw1LjI4NWMwLjAwMSwwLjAxMiwwLjAwNywwLjAyMiwwLjAwOCwwLjAzNA0KCWMwLjMwNiwxLjE4NiwwLjk3LDIuMjksMS45ODUsMy4xMjdjMC40MjYsMC4zNTIsMC40ODcsMC45ODEsMC4xMzcsMS40MDhjLTAuMTk4LDAuMjQtMC40ODQsMC4zNjQtMC43NzMsMC4zNjQNCgljLTAuMjI0LDAtMC40NDgtMC4wNzQtMC42MzUtMC4yMjhjLTEuMjE3LTEuMDAyLTIuMDg4LTIuMzExLTIuNTQ2LTMuNzgxYy00LjA0My0xLjA1NC04LjI5NCwwLjY0Ny0xMC40OSw0LjI2Mg0KCWMtMS4zMTcsMi4xNjgtMS43MTIsNC43Mi0xLjExLDcuMTg1YzAuNjAyLDIuNDY2LDIuMTI3LDQuNTQ5LDQuMjk2LDUuODY3YzAuNDcyLDAuMjg3LDAuNjIyLDAuOTAxLDAuMzM1LDEuMzc0DQoJYy0wLjE4OCwwLjMxLTAuNTE4LDAuNDgtMC44NTUsMC40OGMtMC4xMzMsMC0wLjI2NS0wLjAzNi0wLjM5Mi0wLjA5MWMxLjU4LDAuOTM2LDMuMzk5LDEuNTA5LDUuMzQ0LDEuNTkzbDguMjA5LDAuMDAzDQoJYzUuMzA3LTAuMDg1LDkuODUzLTMuMzYsMTEuNzkxLTcuOTkyYzEuOTYzLDQuNjkzLDYuNjAzLDgsMTIsOGM5LjM3NCwwLDE3LTcuNjI2LDE3LTE3di0xMEw1OS45NzksMjMuMDAyeiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0FCQ0FERDsiIGQ9Ik01Mi45MzYsMTYuMDY4QzUyLjcwNSw5LjkyOSw0Ny42NTIsNS4wMDIsNDEuNDU4LDUuMDAyYy02LjE0MiwwLTExLjE2LDQuODQ0LTExLjQ3LDEwLjkxDQoJCWMtMC41NTgsMC4wMTItMS4xMTksMC4wNzgtMS42NzYsMC4yMDljLTIuMzM2LDAuNTUtNC4xODUsMi4wODItNS4yMjksNC4wNTJjLTIuODgyLTAuNTg1LTUuODQ4LDAuNDMzLTcuNzUsMi43NDINCgkJYy0xLjI1MSwxLjUyLTEuODc5LDMuNDA4LTEuODEsNS4zNTljLTQuNjMtMC44MzQtOS4zNCwxLjIyNC0xMS44NDQsNS4zNDRjLTEuNTk2LDIuNjI1LTIuMDczLDUuNzE0LTEuMzQ1LDguNjk4DQoJCXMyLjU3NSw1LjUwNiw1LjIsNy4xMDJjMC4xNjIsMC4wOTksMC4zNDIsMC4xNDYsMC41MTksMC4xNDZjMC4zMzgsMCwwLjY2Ny0wLjE3MSwwLjg1NS0wLjQ4YzAuMjg3LTAuNDczLDAuMTM3LTEuMDg3LTAuMzM1LTEuMzc0DQoJCWMtMi4xNjktMS4zMTgtMy42OTQtMy40MDEtNC4yOTYtNS44NjdjLTAuNjAyLTIuNDY1LTAuMjA3LTUuMDE3LDEuMTEtNy4xODVjMi4xOTYtMy42MTQsNi40NDctNS4zMTUsMTAuNDktNC4yNjINCgkJYzAuNDU4LDEuNDcxLDEuMzMsMi43NzksMi41NDYsMy43ODFjMC4xODcsMC4xNTMsMC40MTEsMC4yMjgsMC42MzUsMC4yMjhjMC4yODksMCwwLjU3NS0wLjEyNCwwLjc3My0wLjM2NA0KCQljMC4zNTEtMC40MjcsMC4yODktMS4wNTctMC4xMzctMS40MDhjLTEuMDE2LTAuODM2LTEuNjc5LTEuOTQxLTEuOTg1LTMuMTI3Yy0wLjAwMS0wLjAxMi0wLjAwNy0wLjAyMi0wLjAwOC0wLjAzNA0KCQljLTAuNDUtMS43ODctMC4wODMtMy43NTYsMS4xNzUtNS4yODVjMS4zNTYtMS42NDYsMy40MzUtMi40MjMsNS40OTMtMi4xMjJjLTAuMjgsMS4xNzMtMC4zMDcsMi40MjMtMC4wMTIsMy42NzQNCgkJYzAuMTA4LDAuNDYxLDAuNTIsMC43NzEsMC45NzMsMC43NzFjMC4wNzYsMCwwLjE1My0wLjAwOSwwLjIyOS0wLjAyNmMwLjUzOC0wLjEyNywwLjg3MS0wLjY2NSwwLjc0NS0xLjIwMg0KCQljLTAuNzU4LTMuMjIxLDEuMjQ2LTYuNDU3LDQuNDY3LTcuMjE1YzMuMjE1LTAuNzU5LDYuNDU2LDEuMjQ1LDcuMjE0LDQuNDY3YzAuMTI3LDAuNTM3LDAuNjY1LDAuODY1LDEuMjAzLDAuNzQ0DQoJCWMwLjUzNy0wLjEyNywwLjg3LTAuNjY1LDAuNzQ0LTEuMjAzYy0wLjQ5LTIuMDgtMS43Ni0zLjg0NS0zLjU3Ni00Ljk3Yy0wLjc0Ni0wLjQ2Mi0xLjU0OS0wLjc4NS0yLjM3OC0wLjk4MQ0KCQljMC4yLTUuMDYzLDQuMzctOS4xMjMsOS40ODEtOS4xMjNjNS4wOTQsMCw5LjI1Myw0LjAzMyw5LjQ3OCw5LjA3M2MtMy45MjksMC41MDQtNi45NzgsMy44NjMtNi45NzgsNy45MjdjMCwwLjU1MywwLjQ0NywxLDEsMQ0KCQlzMS0wLjQ0NywxLTFjMC0zLjMwOSwyLjY5MS02LDYtNnM2LjA0NiwyLjY5MSw2LjA0Niw2YzAsMC4wMjgsMCwxLjMyNywwLDNjMCwwLjU1MiwwLjQ0OCwxLDEsMXMxLTAuNDQ4LDEtMXYtMw0KCQlDNjAuMDAzLDE5LjkyMiw1Ni44ODYsMTYuNTUyLDUyLjkzNiwxNi4wNjh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0FCQ0FERDsiIGQ9Ik00OC4wMDMsMzcuMDAyYzAuNTUyLDAsMS0wLjQ0OCwxLTFjMC0xLjQ0MiwwLTAuNSwwLTAuNWMwLTIuNDgxLDIuMDE5LTQuNSw0LjUtNC41DQoJCXM0LjUsMi4wMTksNC41LDQuNWMwLDAuNTUzLDAuNDQ4LDEsMSwxczEtMC40NDcsMS0xYzAtMy41ODQtMi45MTYtNi41LTYuNS02LjVjLTMuNDE1LDAtNi4yNDMsMi42NDktNi41LDZ2MQ0KCQlDNDcuMDAzLDM2LjU1NCw0Ny40NTEsMzcuMDAyLDQ4LjAwMywzNy4wMDJ6Ii8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojQUJDNUQzOyIgZD0iTTI2LjkyNiw1MC42MmMtMC4xMDEtMC4yNDUtMC4yOTYtMC40NC0wLjU0MS0wLjU0MWMtMC4xMjItMC4wNS0wLjI1Mi0wLjA3Ny0wLjM4Mi0wLjA3N2gtMy41ODYNCgkJbDguMjkzLTguMjkzYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRzLTEuMDIzLTAuMzkxLTEuNDE0LDBsLTkuOTk5LDkuOTk5Yy0wLjA5MywwLjA5Mi0wLjE2NiwwLjIwMy0wLjIxNywwLjMyNg0KCQljLTAuMTAxLDAuMjQ0LTAuMTAxLDAuNTIsMCwwLjc2NGMwLjEwMSwwLjI0NSwwLjI5NiwwLjQ0LDAuNTQxLDAuNTQxYzAuMTIyLDAuMDUxLDAuMjUyLDAuMDc3LDAuMzgyLDAuMDc3aDMuNTg2bC01LjI5Myw1LjI5Mw0KCQljLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNsNi45OTktNi45OTkNCgkJYzAuMDkzLTAuMDkyLDAuMTY2LTAuMjAzLDAuMjE3LTAuMzI2QzI3LjAyNyw1MS4xMzksMjcuMDI3LDUwLjg2NCwyNi45MjYsNTAuNjJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0FCQzVEMzsiIGQ9Ik00Mi43MSwzNi4yOTVjLTAuMzkxLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0LDBsLTkuOTk5LDkuOTk5Yy0wLjA5MywwLjA5Mi0wLjE2NiwwLjIwMy0wLjIxNywwLjMyNg0KCQljLTAuMTAxLDAuMjQ0LTAuMTAxLDAuNTIsMCwwLjc2NGMwLjEwMSwwLjI0NSwwLjI5NiwwLjQ0LDAuNTQxLDAuNTQxYzAuMTIyLDAuMDUxLDAuMjUyLDAuMDc3LDAuMzgyLDAuMDc3aDMuNTg2bC01LjI5Myw1LjI5Mw0KCQljLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNsNi45OTktNi45OTkNCgkJYzAuMDkzLTAuMDkyLDAuMTY2LTAuMjAzLDAuMjE3LTAuMzI2YzAuMTAxLTAuMjQ0LDAuMTAxLTAuNTE5LDAtMC43NjRjLTAuMTAxLTAuMjQ1LTAuMjk2LTAuNDQtMC41NDEtMC41NDENCgkJYy0wLjEyMi0wLjA1LTAuMjUyLTAuMDc3LTAuMzgyLTAuMDc3aC0zLjU4Nmw4LjI5My04LjI5M0M0My4xMDEsMzcuMzE4LDQzLjEwMSwzNi42ODUsNDIuNzEsMzYuMjk1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./src/icons/simple/sunny.svg":
/*!************************************!*\
  !*** ./src/icons/simple/sunny.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjBDNDE5OyIgZD0iTTMwLDBjLTAuNTUyLDAtMSwwLjQ0OC0xLDF2NmMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xVjFDMzEsMC40NDgsMzAuNTUyLDAsMzAsMHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjBDNDE5OyIgZD0iTTMwLDUyYy0wLjU1MiwwLTEsMC40NDgtMSwxdjZjMCwwLjU1MiwwLjQ0OCwxLDEsMXMxLTAuNDQ4LDEtMXYtNkMzMSw1Mi40NDgsMzAuNTUyLDUyLDMwLDUyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMEM0MTk7IiBkPSJNNTksMjloLTZjLTAuNTUyLDAtMSwwLjQ0OC0xLDFzMC40NDgsMSwxLDFoNmMwLjU1MiwwLDEtMC40NDgsMS0xUzU5LjU1MiwyOSw1OSwyOXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjBDNDE5OyIgZD0iTTgsMzBjMC0wLjU1Mi0wLjQ0OC0xLTEtMUgxYy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDZDNy41NTIsMzEsOCwzMC41NTIsOCwzMHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjBDNDE5OyIgZD0iTTQ2LjI2NCwxNC43MzZjMC4yNTYsMCwwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2w1LjczNi01LjczNmMwLjM5MS0wLjM5MSwwLjM5MS0xLjAyMywwLTEuNDE0DQoJCXMtMS4wMjMtMC4zOTEtMS40MTQsMGwtNS43MzYsNS43MzZjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTRDNDUuNzUyLDE0LjYzOSw0Ni4wMDgsMTQuNzM2LDQ2LjI2NCwxNC43MzZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0YwQzQxOTsiIGQ9Ik0xMy4wMjksNDUuNTU3bC01LjczNiw1LjczNmMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEM3LjQ4OCw1Mi45MDIsNy43NDQsNTMsOCw1Mw0KCQlzMC41MTItMC4wOTgsMC43MDctMC4yOTNsNS43MzYtNS43MzZjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFMxMy40Miw0NS4xNjYsMTMuMDI5LDQ1LjU1N3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjBDNDE5OyIgZD0iTTQ2Ljk3MSw0NS41NTdjLTAuMzkxLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0LDBzLTAuMzkxLDEuMDIzLDAsMS40MTRsNS43MzYsNS43MzYNCgkJQzUxLjQ4OCw1Mi45MDIsNTEuNzQ0LDUzLDUyLDUzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMNDYuOTcxLDQ1LjU1N3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjBDNDE5OyIgZD0iTTguNzA3LDcuMjkzYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0bDUuNzM2LDUuNzM2DQoJCWMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2MwLjM5MS0wLjM5MSwwLjM5MS0xLjAyMywwLTEuNDE0TDguNzA3LDcuMjkzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMEM0MTk7IiBkPSJNNTAuMjUxLDIxLjQwNGMwLjE2MiwwLjM4MSwwLjUzMiwwLjYxLDAuOTIxLDAuNjFjMC4xMywwLDAuMjYzLTAuMDI2LDAuMzktMC4wOGwyLjc2Mi0xLjE3Mg0KCQljMC41MDgtMC4yMTYsMC43NDYtMC44MDMsMC41My0xLjMxMXMtMC44MDQtMC43NDYtMS4zMTEtMC41M2wtMi43NjIsMS4xNzJDNTAuMjcyLDIwLjMwOSw1MC4wMzUsMjAuODk2LDUwLjI1MSwyMS40MDR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0YwQzQxOTsiIGQ9Ik05Ljc0OSwzOC41OTZjLTAuMjE2LTAuNTA4LTAuODAzLTAuNzQ2LTEuMzExLTAuNTNsLTIuNzYyLDEuMTcyDQoJCWMtMC41MDgsMC4yMTYtMC43NDYsMC44MDMtMC41MywxLjMxMWMwLjE2MiwwLjM4MSwwLjUzMiwwLjYxLDAuOTIxLDAuNjFjMC4xMywwLDAuMjYzLTAuMDI2LDAuMzktMC4wOGwyLjc2Mi0xLjE3Mg0KCQlDOS43MjgsMzkuNjkxLDkuOTY1LDM5LjEwNCw5Ljc0OSwzOC41OTZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0YwQzQxOTsiIGQ9Ik01NC40ODEsMzguODEzTDUxLjcsMzcuNjg4Yy0wLjUxMS0wLjIwNy0xLjA5NSwwLjA0MS0xLjMwMiwwLjU1Mw0KCQljLTAuMjA3LDAuNTEyLDAuMDQxLDEuMDk1LDAuNTUzLDEuMzAybDIuNzgyLDEuMTI0YzAuMTIzLDAuMDQ5LDAuMjUsMC4wNzMsMC4zNzQsMC4wNzNjMC4zOTYsMCwwLjc3MS0wLjIzNiwwLjkyOC0wLjYyNg0KCQlDNTUuMjQxLDM5LjYwMyw1NC45OTQsMzkuMDIsNTQuNDgxLDM4LjgxM3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjBDNDE5OyIgZD0iTTUuNTE5LDIxLjE4OEw4LjMsMjIuMzEyYzAuMTIzLDAuMDQ5LDAuMjUsMC4wNzMsMC4zNzQsMC4wNzNjMC4zOTYsMCwwLjc3MS0wLjIzNiwwLjkyOC0wLjYyNg0KCQljMC4yMDctMC41MTItMC4wNDEtMS4wOTUtMC41NTMtMS4zMDJsLTIuNzgyLTEuMTI0Yy0wLjUxMy0wLjIwNy0xLjA5NSwwLjA0LTEuMzAyLDAuNTUzQzQuNzU5LDIwLjM5Nyw1LjAwNiwyMC45OCw1LjUxOSwyMS4xODh6Ig0KCQkvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMEM0MTk7IiBkPSJNMzkuOTA3LDUwLjc4MWMtMC4yMTYtMC41MDgtMC44MDMtMC43NDUtMS4zMTEtMC41M2MtMC41MDgsMC4yMTYtMC43NDYsMC44MDMtMC41MywxLjMxMQ0KCQlsMS4xNzIsMi43NjJjMC4xNjIsMC4zODEsMC41MzIsMC42MSwwLjkyMSwwLjYxYzAuMTMsMCwwLjI2My0wLjAyNiwwLjM5LTAuMDhjMC41MDgtMC4yMTYsMC43NDYtMC44MDMsMC41My0xLjMxMUwzOS45MDcsNTAuNzgxeiINCgkJLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjBDNDE5OyIgZD0iTTIxLjAxNCw5LjgyOWMwLjEzLDAsMC4yNjMtMC4wMjYsMC4zOS0wLjA4YzAuNTA4LTAuMjE2LDAuNzQ2LTAuODAzLDAuNTMtMS4zMTFsLTEuMTcyLTIuNzYyDQoJCWMtMC4yMTUtMC41MDktMC44MDItMC43NDctMS4zMTEtMC41M2MtMC41MDgsMC4yMTYtMC43NDYsMC44MDMtMC41MywxLjMxMWwxLjE3MiwyLjc2MkMyMC4yNTQsOS42LDIwLjYyNSw5LjgyOSwyMS4wMTQsOS44Mjl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0YwQzQxOTsiIGQ9Ik0yMS43NTksNTAuMzk4Yy0wLjUxMS0wLjIwNS0xLjA5NSwwLjA0LTEuMzAyLDAuNTUzbC0xLjEyNCwyLjc4Mg0KCQljLTAuMjA3LDAuNTEyLDAuMDQxLDEuMDk1LDAuNTUzLDEuMzAyYzAuMTIzLDAuMDQ5LDAuMjUsMC4wNzMsMC4zNzQsMC4wNzNjMC4zOTYsMCwwLjc3MS0wLjIzNiwwLjkyOC0wLjYyNmwxLjEyNC0yLjc4Mg0KCQlDMjIuNTE5LDUxLjE4OCwyMi4yNzEsNTAuNjA1LDIxLjc1OSw1MC4zOTh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0YwQzQxOTsiIGQ9Ik0zOC42MTUsOS42NzVjMC4zOTYsMCwwLjc3MS0wLjIzNiwwLjkyOC0wLjYyNmwxLjEyNC0yLjc4MmMwLjIwNy0wLjUxMi0wLjA0MS0xLjA5NS0wLjU1My0xLjMwMg0KCQljLTAuNTExLTAuMjA3LTEuMDk1LDAuMDQxLTEuMzAyLDAuNTUzTDM3LjY4OCw4LjNjLTAuMjA3LDAuNTEyLDAuMDQxLDEuMDk1LDAuNTUzLDEuMzAyQzM4LjM2NCw5LjY1MSwzOC40OTEsOS42NzUsMzguNjE1LDkuNjc1eiINCgkJLz4NCjwvZz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwQzQxOTsiIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRURFMjFCOyIgY3g9IjMwIiBjeT0iMzAiIHI9IjE1Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./src/icons/simple/tornado.svg":
/*!**************************************!*\
  !*** ./src/icons/simple/tornado.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76d54b02dee00c77a913.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conversionUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversionUtility */ "./src/conversionUtility.js");
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHelper */ "./src/domHelper.js");
/* harmony import */ var _weatherFetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherFetcher */ "./src/weatherFetcher.js");
/* harmony import */ var _weatherIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherIcons */ "./src/weatherIcons.js");





const body = document.querySelector('body');

const form = body.appendChild(_domHelper__WEBPACK_IMPORTED_MODULE_1__.default.createElement('form'));
const input = form.appendChild(_domHelper__WEBPACK_IMPORTED_MODULE_1__.default.createElement('input'));
const submit = form.appendChild(_domHelper__WEBPACK_IMPORTED_MODULE_1__.default.createElement('button'));

input.type = 'text';
input.placeholder = 'Enter City Name';
submit.type = 'submit';
submit.innerText = 'Submit';

async function doSearch(e) {
  e.preventDefault();

  const wData = await _weatherFetcher__WEBPACK_IMPORTED_MODULE_2__.default.getWeather(input.value);
  wData._temperatureMode = _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.temperatureModes.celsius;

  const nameDiv = _domHelper__WEBPACK_IMPORTED_MODULE_1__.default.createElement('div');
  nameDiv.innerText = `${wData.cityName}, ${wData.countryName}`;
  body.appendChild(nameDiv);

  const currentTempDiv = _domHelper__WEBPACK_IMPORTED_MODULE_1__.default.createElement('div');
  currentTempDiv.innerText = `Current Temp: ${wData.currentTemp}`;
  body.appendChild(currentTempDiv);

  const heroIcon = _weatherIcons__WEBPACK_IMPORTED_MODULE_3__.default.getWeatherHeroIcon(wData.weatherId);
  const heroImg = _domHelper__WEBPACK_IMPORTED_MODULE_1__.default.createElement('img');
  heroImg.src = heroIcon;
  heroImg.style.width = '64px';
  heroImg.style.height = '64px';
  body.appendChild(heroImg);

  const simpleIcon = _weatherIcons__WEBPACK_IMPORTED_MODULE_3__.default.getWeatherSimpleIcon(wData.weatherId);
  const simpleImg = _domHelper__WEBPACK_IMPORTED_MODULE_1__.default.createElement('img');
  simpleImg.src = simpleIcon;
  simpleImg.style.width = '48px';
  simpleImg.style.height = '48px';
  body.appendChild(simpleImg);
}

form.addEventListener('submit', doSearch);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZTtBQUNmLDhCQUE4Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZvRDs7QUFFckM7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUE0QiwrRUFBeUM7QUFDckU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVywwRUFBb0M7QUFDL0M7QUFDQTtBQUNBLE1BQU0sK0VBQXlDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDBFQUFvQztBQUMvQztBQUNBO0FBQ0EsTUFBTSwrRUFBeUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDBFQUFvQztBQUMvQztBQUNBO0FBQ0EsTUFBTSwrRUFBeUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsMEVBQW9DO0FBQy9DO0FBQ0E7QUFDQSxNQUFNLCtFQUF5QztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsMEVBQW9DO0FBQy9DO0FBQ0E7QUFDQSxNQUFNLCtFQUF5QztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsMEVBQW9DO0FBQy9DO0FBQ0E7QUFDQSxNQUFNLCtFQUF5QztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDBFQUFvQztBQUMvQztBQUNBO0FBQ0EsTUFBTSwrRUFBeUM7QUFDL0M7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaE1vRDs7QUFFckM7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsS0FBSyxTQUFTLHNCQUFzQjtBQUMvRywrQ0FBK0MsY0FBYztBQUM3RDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixVQUFVLEVBQUUsWUFBWTs7QUFFN0M7QUFDQSxjQUFjLE1BQU07QUFDcEIsY0FBYyxNQUFNOztBQUVwQjs7QUFFQTtBQUNBLGdGQUFnRixJQUFJLE9BQU8sSUFBSSxXQUFXLFFBQVEsU0FBUyxzQkFBc0I7QUFDakosd0RBQXdELGNBQWM7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsdURBQWlCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHNDQUFzQztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isc0NBQXNDO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzQ0FBc0M7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHNDQUFzQztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsdUNBQXVDO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix1Q0FBdUM7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQytDO0FBQ0E7QUFDSTtBQUNBO0FBQ0o7QUFDSTtBQUNBO0FBQ0o7QUFDRTs7QUFFRTtBQUNuRDtBQUN1RDtBQUN2RDtBQUN1RDtBQUNBO0FBQ0o7QUFDRTs7QUFFdEM7QUFDZjtBQUNBLHFCQUFxQixrREFBUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQVc7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrREFBUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdURBQWE7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5T0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvRDtBQUNoQjtBQUNVO0FBQ0o7O0FBRTFDOztBQUVBLDhCQUE4Qiw2REFBdUI7QUFDckQsK0JBQStCLDZEQUF1QjtBQUN0RCxnQ0FBZ0MsNkRBQXVCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQiwrREFBeUI7QUFDL0MsMkJBQTJCLGdGQUEwQzs7QUFFckUsa0JBQWtCLDZEQUF1QjtBQUN6Qyx5QkFBeUIsZUFBZSxJQUFJLGtCQUFrQjtBQUM5RDs7QUFFQSx5QkFBeUIsNkRBQXVCO0FBQ2hELDhDQUE4QyxrQkFBa0I7QUFDaEU7O0FBRUEsbUJBQW1CLHFFQUErQjtBQUNsRCxrQkFBa0IsNkRBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQix1RUFBaUM7QUFDdEQsb0JBQW9CLDZEQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jb252ZXJzaW9uVXRpbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2RvbUhlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3dlYXRoZXJEYXRhT2JqZWN0LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvd2VhdGhlckZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy93ZWF0aGVySWNvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tZmFsbHRocm91Z2ggKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZlcnNpb25VdGlsaXR5IHtcbiAgc3RhdGljIHRlbXBlcmF0dXJlTW9kZXMgPSB7IGtlbHZpbjogMCwgY2Vsc2l1czogMSwgZmFocmVuaGVpdDogMiB9O1xuXG4gIHN0YXRpYyBjb252ZXJ0VGVtcGVyYXR1cmUodGVtcCwgdG8sIGZyb20pIHtcbiAgICBsZXQgcmV0dXJuVGVtcGVyYXR1cmUgPSAwO1xuXG4gICAgaWYgKGZyb20gPT09IHRoaXMudGVtcGVyYXR1cmVNb2Rlcy5rZWx2aW4pIHtcbiAgICAgIHN3aXRjaCAodG8pIHtcbiAgICAgICAgY2FzZSB0aGlzLnRlbXBlcmF0dXJlTW9kZXMuY2Vsc2l1czoge1xuICAgICAgICAgIHJldHVyblRlbXBlcmF0dXJlID0gTnVtYmVyKHRlbXAgLSAyNzMuMTUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdGhpcy50ZW1wZXJhdHVyZU1vZGVzLmZhaHJlbmhlaXQ6IHtcbiAgICAgICAgICByZXR1cm5UZW1wZXJhdHVyZSA9IE51bWJlcigodGVtcCAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdGhpcy50ZW1wZXJhdHVyZU1vZGVzLmtlbHZpbjoge1xuICAgICAgICAgIHJldHVyblRlbXBlcmF0dXJlID0gTnVtYmVyKHRlbXApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblRlbXBlcmF0dXJlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEb21IZWxwZXIge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChzZWxlY3RvciwgY2xhc3NOYW1lcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHNlbGVjdG9yKTtcbiAgICBpZiAoY2xhc3NOYW1lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IENvbnZlcnNpb25VdGlsaXR5IGZyb20gJy4vY29udmVyc2lvblV0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyRGF0YU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5fY2l0eU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fY291bnRyeU5hbWUgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLl9jdXJyZW50VGVtcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9taW5UZW1wID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX21heFRlbXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc3VucmlzZVRpbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc3Vuc2V0VGltZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl93ZWF0aGVySWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fd2VhdGhlck1haW4gPSAnJztcbiAgICB0aGlzLl93ZWF0aGVyRGVzY3JpcHRpb24gPSAnJztcbiAgICB0aGlzLl9jdXJyZW50UG9wID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5fZGF5VGVtcHMgPSBbXTtcbiAgICB0aGlzLl9kYXlNaW5UZW1wcyA9IFtdO1xuICAgIHRoaXMuX2RheU1heFRlbXBzID0gW107XG4gICAgdGhpcy5fZGF5V2VhdGhlcklkcyA9IFtdO1xuXG4gICAgdGhpcy5faG91cmx5VGVtcHMgPSBbXTtcbiAgICB0aGlzLl9ob3VybHlXZWF0aGVySWRzID0gW107XG5cbiAgICB0aGlzLl90ZW1wZXJhdHVyZU1vZGUgPSBDb252ZXJzaW9uVXRpbGl0eS50ZW1wZXJhdHVyZU1vZGVzLmtlbHZpbjtcbiAgfVxuXG4gIGdldCBjb3VudHJ5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnRyeU5hbWU7XG4gIH1cblxuICBzZXQgY291bnRyeU5hbWUodmFsdWUpIHtcbiAgICB0aGlzLl9jb3VudHJ5TmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGNpdHlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9jaXR5TmFtZTtcbiAgfVxuXG4gIHNldCBjaXR5TmFtZSh2YWx1ZSkge1xuICAgIHRoaXMuX2NpdHlOYW1lID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY3VycmVudFRlbXAoKSB7XG4gICAgcmV0dXJuIENvbnZlcnNpb25VdGlsaXR5LmNvbnZlcnRUZW1wZXJhdHVyZShcbiAgICAgIHRoaXMuX2N1cnJlbnRUZW1wLFxuICAgICAgdGhpcy5fdGVtcGVyYXR1cmVNb2RlLFxuICAgICAgQ29udmVyc2lvblV0aWxpdHkudGVtcGVyYXR1cmVNb2Rlcy5rZWx2aW5cbiAgICApO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRUZW1wKHZhbHVlKSB7XG4gICAgdGhpcy5fY3VycmVudFRlbXAgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBjdXJyZW50UG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UG9wO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRQb3AodmFsdWUpIHtcbiAgICB0aGlzLl9jdXJyZW50UG9wID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbWluVGVtcCgpIHtcbiAgICByZXR1cm4gQ29udmVyc2lvblV0aWxpdHkuY29udmVydFRlbXBlcmF0dXJlKFxuICAgICAgdGhpcy5fbWluVGVtcCxcbiAgICAgIHRoaXMuX3RlbXBlcmF0dXJlTW9kZSxcbiAgICAgIENvbnZlcnNpb25VdGlsaXR5LnRlbXBlcmF0dXJlTW9kZXMua2VsdmluXG4gICAgKTtcbiAgfVxuXG4gIHNldCBtaW5UZW1wKHZhbHVlKSB7XG4gICAgdGhpcy5fbWluVGVtcCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG1heFRlbXAoKSB7XG4gICAgcmV0dXJuIENvbnZlcnNpb25VdGlsaXR5LmNvbnZlcnRUZW1wZXJhdHVyZShcbiAgICAgIHRoaXMuX21heFRlbXAsXG4gICAgICB0aGlzLl90ZW1wZXJhdHVyZU1vZGUsXG4gICAgICBDb252ZXJzaW9uVXRpbGl0eS50ZW1wZXJhdHVyZU1vZGVzLmtlbHZpblxuICAgICk7XG4gIH1cblxuICBzZXQgbWF4VGVtcCh2YWx1ZSkge1xuICAgIHRoaXMuX21heFRlbXAgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzdW5yaXNlVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VucmlzZVRpbWU7XG4gIH1cblxuICBzZXQgc3VucmlzZVRpbWUodmFsdWUpIHtcbiAgICB0aGlzLl9zdW5yaXNlVGltZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHN1bnNldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1bnNldFRpbWU7XG4gIH1cblxuICBzZXQgc3Vuc2V0VGltZSh2YWx1ZSkge1xuICAgIHRoaXMuX3N1bnNldFRpbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB3ZWF0aGVySWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYXRoZXJJZDtcbiAgfVxuXG4gIHNldCB3ZWF0aGVySWQodmFsdWUpIHtcbiAgICB0aGlzLl93ZWF0aGVySWQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB3ZWF0aGVyTWFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2VhdGhlck1haW47XG4gIH1cblxuICBzZXQgd2VhdGhlck1haW4odmFsdWUpIHtcbiAgICB0aGlzLl93ZWF0aGVyTWFpbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHdlYXRoZXJEZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2VhdGhlckRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IHdlYXRoZXJEZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX3dlYXRoZXJEZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgc2V0RGF5VGVtcHMoYXJyVmFsdWUpIHtcbiAgICB0aGlzLl9kYXlUZW1wcyA9IGFyclZhbHVlO1xuICB9XG5cbiAgZ2V0RGF5VGVtcHMoZGF5SW5kZXgpIHtcbiAgICByZXR1cm4gQ29udmVyc2lvblV0aWxpdHkuY29udmVydFRlbXBlcmF0dXJlKFxuICAgICAgdGhpcy5fZGF5VGVtcHNbZGF5SW5kZXhdLFxuICAgICAgdGhpcy5fdGVtcGVyYXR1cmVNb2RlLFxuICAgICAgQ29udmVyc2lvblV0aWxpdHkudGVtcGVyYXR1cmVNb2Rlcy5rZWx2aW5cbiAgICApO1xuICB9XG5cbiAgc2V0RGF5TWluVGVtcHMoYXJyVmFsdWUpIHtcbiAgICB0aGlzLl9kYXlNaW5UZW1wcyA9IGFyclZhbHVlO1xuICB9XG5cbiAgZ2V0RGF5TWluVGVtcHMoZGF5SW5kZXgpIHtcbiAgICByZXR1cm4gQ29udmVyc2lvblV0aWxpdHkuY29udmVydFRlbXBlcmF0dXJlKFxuICAgICAgdGhpcy5fZGF5TWluVGVtcHNbZGF5SW5kZXhdLFxuICAgICAgdGhpcy5fdGVtcGVyYXR1cmVNb2RlLFxuICAgICAgQ29udmVyc2lvblV0aWxpdHkudGVtcGVyYXR1cmVNb2Rlcy5rZWx2aW5cbiAgICApO1xuICB9XG5cbiAgc2V0RGF5TWF4VGVtcHMoYXJyVmFsdWUpIHtcbiAgICB0aGlzLl9kYXlNYXhUZW1wcyA9IGFyclZhbHVlO1xuICB9XG5cbiAgZ2V0RGF5TWF4VGVtcHMoZGF5SW5kZXgpIHtcbiAgICByZXR1cm4gQ29udmVyc2lvblV0aWxpdHkuY29udmVydFRlbXBlcmF0dXJlKFxuICAgICAgdGhpcy5fZGF5TWF4VGVtcHNbZGF5SW5kZXhdLFxuICAgICAgdGhpcy5fdGVtcGVyYXR1cmVNb2RlLFxuICAgICAgQ29udmVyc2lvblV0aWxpdHkudGVtcGVyYXR1cmVNb2Rlcy5rZWx2aW5cbiAgICApO1xuICB9XG5cbiAgc2V0RGF5V2VhdGhlcklkcyhhcnJWYWx1ZSkge1xuICAgIHRoaXMuX2RheVdlYXRoZXJJZHMgPSBhcnJWYWx1ZTtcbiAgfVxuXG4gIGdldERheVdlYXRoZXJJZHMoZGF5SW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF5V2VhdGhlcklkc1tkYXlJbmRleF07XG4gIH1cblxuICBzZXRIb3VybHlXZWF0aGVySWRzKGFyclZhbHVlKSB7XG4gICAgdGhpcy5faG91cmx5V2VhdGhlcklkcyA9IGFyclZhbHVlO1xuICB9XG5cbiAgZ2V0SG91cmx5V2VhdGhlcklkcyhob3VySW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5faG91cmx5V2VhdGhlcklkc1tob3VySW5kZXhdO1xuICB9XG5cbiAgc2V0SG91cmx5VGVtcHMoYXJyVmFsdWUpIHtcbiAgICB0aGlzLl9ob3VybHlUZW1wcyA9IGFyclZhbHVlO1xuICB9XG5cbiAgZ2V0SG91cmx5VGVtcHMoaG91ckluZGV4KSB7XG4gICAgcmV0dXJuIENvbnZlcnNpb25VdGlsaXR5LmNvbnZlcnRUZW1wZXJhdHVyZShcbiAgICAgIHRoaXMuX2hvdXJseVRlbXBzW2hvdXJJbmRleF0sXG4gICAgICB0aGlzLl90ZW1wZXJhdHVyZU1vZGUsXG4gICAgICBDb252ZXJzaW9uVXRpbGl0eS50ZW1wZXJhdHVyZU1vZGVzLmtlbHZpblxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBXZWF0aGVyRGF0YU9iamVjdCBmcm9tICcuL3dlYXRoZXJEYXRhT2JqZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlckZldGNoZXIge1xuICBzdGF0aWMgYXBpS2V5ID0gJzk3ZTBkMWViZDM5NzZmZjk1ZjdlMDcwMmU3MTA1ODEwJztcblxuICBzdGF0aWMgYXN5bmMgZ2V0V2VhdGhlcihjaXR5KSB7XG4gICAgY29uc3QgY2l0eVdlYXRoZXJEYXRhID0gYXdhaXQgdGhpcy5xdWVyeVdlYXRoZXIoY2l0eSk7XG4gICAgY29uc29sZS5sb2coY2l0eVdlYXRoZXJEYXRhKTtcblxuICAgIGNvbnN0IHdkbyA9XG4gICAgICBXZWF0aGVyRmV0Y2hlci50cmFuc2xhdGVGcm9tSlNPTnRvV2VhdGhlckRhdGFPYmplY3QoY2l0eVdlYXRoZXJEYXRhKTtcbiAgICBjb25zb2xlLmxvZyh3ZG8pO1xuICAgIHJldHVybiB3ZG87XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgcXVlcnlXZWF0aGVyKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgLy8gR3JhYiB0aGUgd2VhdGhlciBmcm9tIHRoZSBBUEkgd2l0aCBhIGNpdHkgbmFtZVxuICAgICAgY29uc3QgZmV0Y2hVcmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtXZWF0aGVyRmV0Y2hlci5hcGlLZXl9YDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmV0Y2hVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgIGNvbnN0IGNpdHlOYW1lID0gZGF0YS5uYW1lO1xuICAgICAgY29uc3QgY291bnRyeU5hbWUgPSBkYXRhLnN5cy5jb3VudHJ5O1xuXG4gICAgICBjb25zb2xlLmxvZyhgJHtjaXR5TmFtZX0gJHtjb3VudHJ5TmFtZX1gKTtcblxuICAgICAgLy8gR3JhYiB0aGUgbGF0IGFuZCBsb25nXG4gICAgICBjb25zdCB7IGxvbiB9ID0gZGF0YS5jb29yZDtcbiAgICAgIGNvbnN0IHsgbGF0IH0gPSBkYXRhLmNvb3JkO1xuXG4gICAgICBjb25zdCBleGNsdWRlID0gJ21pbnV0ZWx5JztcblxuICAgICAgLy8gVXNlIHRoZSBsYXQgYW5kIGxvbiB0byBnZXQgdGhlIG1vcmUgZGV0YWlsZWQgd2VhdGhlclxuICAgICAgY29uc3Qgb25lQ2FsbFVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mZXhjbHVkZT0ke2V4Y2x1ZGV9JmFwcGlkPSR7V2VhdGhlckZldGNoZXIuYXBpS2V5fWA7XG4gICAgICBjb25zdCBvbmVDYWxsUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChvbmVDYWxsVXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIGNvbnN0IG9uZUNhbGxEYXRhID0gYXdhaXQgb25lQ2FsbFJlc3BvbnNlLmpzb24oKTtcbiAgICAgIG9uZUNhbGxEYXRhLmNpdHlOYW1lID0gY2l0eU5hbWU7XG4gICAgICBvbmVDYWxsRGF0YS5jb3VudHJ5TmFtZSA9IGNvdW50cnlOYW1lO1xuXG4gICAgICByZXR1cm4gb25lQ2FsbERhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBTiBFUlJPUiEnKTtcbiAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdHJhbnNsYXRlRnJvbUpTT050b1dlYXRoZXJEYXRhT2JqZWN0KGNpdHlXZWF0aGVyRGF0YUpTT04pIHtcbiAgICBjb25zdCB3ZG8gPSBuZXcgV2VhdGhlckRhdGFPYmplY3QoKTtcblxuICAgIHdkby5jaXR5TmFtZSA9IGNpdHlXZWF0aGVyRGF0YUpTT04uY2l0eU5hbWU7XG4gICAgd2RvLmNvdW50cnlOYW1lID0gY2l0eVdlYXRoZXJEYXRhSlNPTi5jb3VudHJ5TmFtZTtcbiAgICB3ZG8uY3VycmVudFRlbXAgPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQudGVtcDtcbiAgICB3ZG8uY3VycmVudFBvcCA9IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHlbMF0ucG9wO1xuICAgIHdkby5taW5UZW1wID0gY2l0eVdlYXRoZXJEYXRhSlNPTi5kYWlseVswXS50ZW1wLm1pbjtcbiAgICB3ZG8ubWF4VGVtcCA9IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHlbMF0udGVtcC5tYXg7XG4gICAgd2RvLnN1bnJpc2VUaW1lID0gY2l0eVdlYXRoZXJEYXRhSlNPTi5jdXJyZW50LnN1bnJpc2U7XG4gICAgd2RvLnN1bnNldFRpbWUgPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQuc3Vuc2V0O1xuICAgIHdkby53ZWF0aGVySWQgPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQud2VhdGhlclswXS5pZDtcbiAgICB3ZG8ud2VhdGhlck1haW4gPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQud2VhdGhlclswXS5tYWluO1xuICAgIHdkby53ZWF0aGVyRGVzY3JpcHRpb24gPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGRheVRlbXBzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXR5V2VhdGhlckRhdGFKU09OLmRhaWx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXlUZW1wcy5wdXNoKGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHlbaV0udGVtcC5kYXkpO1xuICAgIH1cbiAgICB3ZG8uc2V0RGF5VGVtcHMoZGF5VGVtcHMpO1xuXG4gICAgY29uc3QgZGF5TWluVGVtcHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRheU1pblRlbXBzLnB1c2goY2l0eVdlYXRoZXJEYXRhSlNPTi5kYWlseVtpXS50ZW1wLm1pbik7XG4gICAgfVxuICAgIHdkby5zZXREYXlNaW5UZW1wcyhkYXlNaW5UZW1wcyk7XG5cbiAgICBjb25zdCBkYXlNYXhUZW1wcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2l0eVdlYXRoZXJEYXRhSlNPTi5kYWlseS5sZW5ndGg7IGkrKykge1xuICAgICAgZGF5TWF4VGVtcHMucHVzaChjaXR5V2VhdGhlckRhdGFKU09OLmRhaWx5W2ldLnRlbXAubWF4KTtcbiAgICB9XG4gICAgd2RvLnNldERheU1heFRlbXBzKGRheU1heFRlbXBzKTtcblxuICAgIGNvbnN0IGRheVdlYXRoZXJJZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRheVdlYXRoZXJJZHMucHVzaChjaXR5V2VhdGhlckRhdGFKU09OLmRhaWx5W2ldLndlYXRoZXJbMF0uaWQpO1xuICAgIH1cbiAgICB3ZG8uc2V0RGF5V2VhdGhlcklkcyhkYXlXZWF0aGVySWRzKTtcblxuICAgIGNvbnN0IGhvdXJseVRlbXBzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXR5V2VhdGhlckRhdGFKU09OLmhvdXJseS5sZW5ndGg7IGkrKykge1xuICAgICAgaG91cmx5VGVtcHMucHVzaChjaXR5V2VhdGhlckRhdGFKU09OLmhvdXJseVtpXS50ZW1wKTtcbiAgICB9XG4gICAgd2RvLnNldEhvdXJseVRlbXBzKGhvdXJseVRlbXBzKTtcblxuICAgIGNvbnN0IGhvdXJseVdlYXRoZXJJZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdHlXZWF0aGVyRGF0YUpTT04uaG91cmx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBob3VybHlXZWF0aGVySWRzLnB1c2goY2l0eVdlYXRoZXJEYXRhSlNPTi5ob3VybHlbaV0ud2VhdGhlclswXS5pZCk7XG4gICAgfVxuICAgIHdkby5zZXRIb3VybHlXZWF0aGVySWRzKGhvdXJseVdlYXRoZXJJZHMpO1xuXG4gICAgcmV0dXJuIHdkbztcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tZmFsbHRocm91Z2ggKi9cbmltcG9ydCBFcnJvckljb24gZnJvbSAnLi9pY29ucy9tYWluL2Vycm9yLnN2Zyc7XG5pbXBvcnQgU3Rvcm1IZXJvIGZyb20gJy4vaWNvbnMvbWFpbi9zdG9ybS5zdmcnO1xuaW1wb3J0IERyaXp6bGVIZXJvIGZyb20gJy4vaWNvbnMvbWFpbi9kcml6emxlLnN2Zyc7XG5pbXBvcnQgUmFpbmluZ0hlcm8gZnJvbSAnLi9pY29ucy9tYWluL3JhaW5pbmcuc3ZnJztcbmltcG9ydCBTbGVldEhlcm8gZnJvbSAnLi9pY29ucy9tYWluL3NsZWV0LnN2Zyc7XG5pbXBvcnQgU25vd2luZ0hlcm8gZnJvbSAnLi9pY29ucy9tYWluL3Nub3dpbmcuc3ZnJztcbmltcG9ydCBUb3JuYWRvSGVybyBmcm9tICcuL2ljb25zL21haW4vdG9ybmFkby5zdmcnO1xuaW1wb3J0IFN1bm55SGVybyBmcm9tICcuL2ljb25zL21haW4vc3Vubnkuc3ZnJztcbmltcG9ydCBDbG91ZHNIZXJvIGZyb20gJy4vaWNvbnMvbWFpbi9jbG91ZHMuc3ZnJztcblxuaW1wb3J0IFN0b3JtU2ltcGxlIGZyb20gJy4vaWNvbnMvc2ltcGxlL3N0b3JtLnN2Zyc7XG4vL2ltcG9ydCBEcml6emxlU2ltcGxlIGZyb20gJy4vaWNvbnMvc2ltcGxlL3JhaW5pbmcuc3ZnJztcbmltcG9ydCBSYWluaW5nU2ltcGxlIGZyb20gJy4vaWNvbnMvc2ltcGxlL3JhaW5pbmcuc3ZnJztcbi8vaW1wb3J0IFNsZWV0U2ltcGxlIGZyb20gJy4vaWNvbnMvc2ltcGxlL3Nub3dpbmcuc3ZnJztcbmltcG9ydCBTbm93aW5nU2ltcGxlIGZyb20gJy4vaWNvbnMvc2ltcGxlL3Nub3dpbmcuc3ZnJztcbmltcG9ydCBUb3JuYWRvU2ltcGxlIGZyb20gJy4vaWNvbnMvc2ltcGxlL3Rvcm5hZG8uc3ZnJztcbmltcG9ydCBTdW5ueVNpbXBsZSBmcm9tICcuL2ljb25zL3NpbXBsZS9zdW5ueS5zdmcnO1xuaW1wb3J0IENsb3Vkc1NpbXBsZSBmcm9tICcuL2ljb25zL3NpbXBsZS9jbG91ZHMuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlckljb25zIHtcbiAgc3RhdGljIGdldFdlYXRoZXJIZXJvSWNvbih3ZWF0aGVySWQpIHtcbiAgICBsZXQgcmV0dXJuSWNvbiA9IEVycm9ySWNvbjtcblxuICAgIHN3aXRjaCAod2VhdGhlcklkKSB7XG4gICAgICAvLyBUaHVuZGVyc3Rvcm1zXG4gICAgICBjYXNlIDIwMDpcbiAgICAgIGNhc2UgMjAxOlxuICAgICAgY2FzZSAyMDI6XG4gICAgICBjYXNlIDIxMDpcbiAgICAgIGNhc2UgMjExOlxuICAgICAgY2FzZSAyMTI6XG4gICAgICBjYXNlIDIyMTpcbiAgICAgIGNhc2UgMjMwOlxuICAgICAgY2FzZSAyMzE6XG4gICAgICBjYXNlIDIzMjoge1xuICAgICAgICByZXR1cm5JY29uID0gU3Rvcm1IZXJvO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIERyaXp6bGVcbiAgICAgIGNhc2UgMzAwOlxuICAgICAgY2FzZSAzMDE6XG4gICAgICBjYXNlIDMwMjpcbiAgICAgIGNhc2UgMzEwOlxuICAgICAgY2FzZSAzMTE6XG4gICAgICBjYXNlIDMxMjpcbiAgICAgIGNhc2UgMzEzOlxuICAgICAgY2FzZSAzMjE6IHtcbiAgICAgICAgcmV0dXJuSWNvbiA9IERyaXp6bGVIZXJvO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gcmFpbmluZ1xuICAgICAgY2FzZSA1MDA6XG4gICAgICBjYXNlIDUwMTpcbiAgICAgIGNhc2UgNTAyOlxuICAgICAgY2FzZSA1MDM6XG4gICAgICBjYXNlIDUwNDpcbiAgICAgIGNhc2UgNTExOlxuICAgICAgY2FzZSA1MjA6XG4gICAgICBjYXNlIDUyMTpcbiAgICAgIGNhc2UgNTIyOlxuICAgICAgY2FzZSA1MzE6IHtcbiAgICAgICAgcmV0dXJuSWNvbiA9IFJhaW5pbmdIZXJvO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgNjExOiB7XG4gICAgICAgIHJldHVybkljb24gPSBTbGVldEhlcm87XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSA2MTU6XG4gICAgICBjYXNlIDYxNjpcbiAgICAgIGNhc2UgNjIwOiB7XG4gICAgICAgIHJldHVybkljb24gPSBTbGVldEhlcm87XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSA2MDA6XG4gICAgICBjYXNlIDYwMTpcbiAgICAgIGNhc2UgNjAyOlxuICAgICAgY2FzZSA2MTI6XG4gICAgICBjYXNlIDYxMzpcbiAgICAgIGNhc2UgNjIxOlxuICAgICAgY2FzZSA2MjI6IHtcbiAgICAgICAgcmV0dXJuSWNvbiA9IFNub3dpbmdIZXJvO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIG1pc3RcbiAgICAgIGNhc2UgNzAxOlxuICAgICAgLy8gc21va2VcbiAgICAgIGNhc2UgNzExOlxuICAgICAgLy8gaGF6ZVxuICAgICAgY2FzZSA3MjE6XG4gICAgICAvLyBkdXN0IHdoaXJsc1xuICAgICAgY2FzZSA3MzE6XG4gICAgICAvLyBmb2dcbiAgICAgIGNhc2UgNzQxOlxuICAgICAgLy8gc2FuZFxuICAgICAgY2FzZSA3NTE6XG4gICAgICAvLyBkdXN0XG4gICAgICBjYXNlIDc2MTpcbiAgICAgIC8vIHZvbGNhbmljIGFzaFxuICAgICAgY2FzZSA3NjI6XG4gICAgICAvLyBzcXVhbGxcbiAgICAgIGNhc2UgNzcxOlxuICAgICAgLy8gdG9ybmFkb1xuICAgICAgY2FzZSA3ODE6IHtcbiAgICAgICAgcmV0dXJuSWNvbiA9IFRvcm5hZG9IZXJvO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIGNsZWFyXG4gICAgICBjYXNlIDgwMDoge1xuICAgICAgICByZXR1cm5JY29uID0gU3VubnlIZXJvO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIGZldyBjbG91ZHNcbiAgICAgIGNhc2UgODAxOlxuICAgICAgLy8gc2NhdHRlcmVkIGNsb3Vkc1xuICAgICAgY2FzZSA4MDI6XG4gICAgICAvLyBicm9rZW4gY2xvdWRzXG4gICAgICBjYXNlIDgwMzpcbiAgICAgIC8vIG92ZXJjYXNlIGNsb3Vkc1xuICAgICAgY2FzZSA4MDQ6IHtcbiAgICAgICAgcmV0dXJuSWNvbiA9IENsb3Vkc0hlcm87XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuSWNvbjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRXZWF0aGVyU2ltcGxlSWNvbih3ZWF0aGVySWQpIHtcbiAgICBsZXQgcmV0dXJuSWNvbiA9IEVycm9ySWNvbjtcblxuICAgIHN3aXRjaCAod2VhdGhlcklkKSB7XG4gICAgICAvLyBUaHVuZGVyc3Rvcm1zXG4gICAgICBjYXNlIDIwMDpcbiAgICAgIGNhc2UgMjAxOlxuICAgICAgY2FzZSAyMDI6XG4gICAgICBjYXNlIDIxMDpcbiAgICAgIGNhc2UgMjExOlxuICAgICAgY2FzZSAyMTI6XG4gICAgICBjYXNlIDIyMTpcbiAgICAgIGNhc2UgMjMwOlxuICAgICAgY2FzZSAyMzE6XG4gICAgICBjYXNlIDIzMjoge1xuICAgICAgICByZXR1cm5JY29uID0gU3Rvcm1TaW1wbGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gRHJpenpsZVxuICAgICAgY2FzZSAzMDA6XG4gICAgICBjYXNlIDMwMTpcbiAgICAgIGNhc2UgMzAyOlxuICAgICAgY2FzZSAzMTA6XG4gICAgICBjYXNlIDMxMTpcbiAgICAgIGNhc2UgMzEyOlxuICAgICAgY2FzZSAzMTM6XG4gICAgICBjYXNlIDMyMToge1xuICAgICAgICByZXR1cm5JY29uID0gUmFpbmluZ1NpbXBsZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIHJhaW5pbmdcbiAgICAgIGNhc2UgNTAwOlxuICAgICAgY2FzZSA1MDE6XG4gICAgICBjYXNlIDUwMjpcbiAgICAgIGNhc2UgNTAzOlxuICAgICAgY2FzZSA1MDQ6XG4gICAgICBjYXNlIDUxMTpcbiAgICAgIGNhc2UgNTIwOlxuICAgICAgY2FzZSA1MjE6XG4gICAgICBjYXNlIDUyMjpcbiAgICAgIGNhc2UgNTMxOiB7XG4gICAgICAgIHJldHVybkljb24gPSBSYWluaW5nU2ltcGxlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgNjAwOlxuICAgICAgY2FzZSA2MDE6XG4gICAgICBjYXNlIDYwMjpcbiAgICAgIGNhc2UgNjExOlxuICAgICAgY2FzZSA2MTI6XG4gICAgICBjYXNlIDYxMzpcbiAgICAgIGNhc2UgNjE1OlxuICAgICAgY2FzZSA2MTY6XG4gICAgICBjYXNlIDYyMDpcbiAgICAgIGNhc2UgNjIxOlxuICAgICAgY2FzZSA2MjI6IHtcbiAgICAgICAgcmV0dXJuSWNvbiA9IFNub3dpbmdTaW1wbGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gbWlzdFxuICAgICAgY2FzZSA3MDE6XG4gICAgICAvLyBzbW9rZVxuICAgICAgY2FzZSA3MTE6XG4gICAgICAvLyBoYXplXG4gICAgICBjYXNlIDcyMTpcbiAgICAgIC8vIGR1c3Qgd2hpcmxzXG4gICAgICBjYXNlIDczMTpcbiAgICAgIC8vIGZvZ1xuICAgICAgY2FzZSA3NDE6XG4gICAgICAvLyBzYW5kXG4gICAgICBjYXNlIDc1MTpcbiAgICAgIC8vIGR1c3RcbiAgICAgIGNhc2UgNzYxOlxuICAgICAgLy8gdm9sY2FuaWMgYXNoXG4gICAgICBjYXNlIDc2MjpcbiAgICAgIC8vIHNxdWFsbFxuICAgICAgY2FzZSA3NzE6XG4gICAgICAvLyB0b3JuYWRvXG4gICAgICBjYXNlIDc4MToge1xuICAgICAgICByZXR1cm5JY29uID0gVG9ybmFkb1NpbXBsZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBjbGVhclxuICAgICAgY2FzZSA4MDA6IHtcbiAgICAgICAgcmV0dXJuSWNvbiA9IFN1bm55U2ltcGxlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIGZldyBjbG91ZHNcbiAgICAgIGNhc2UgODAxOlxuICAgICAgLy8gc2NhdHRlcmVkIGNsb3Vkc1xuICAgICAgY2FzZSA4MDI6XG4gICAgICAvLyBicm9rZW4gY2xvdWRzXG4gICAgICBjYXNlIDgwMzpcbiAgICAgIC8vIG92ZXJjYXNlIGNsb3Vkc1xuICAgICAgY2FzZSA4MDQ6IHtcbiAgICAgICAgcmV0dXJuSWNvbiA9IENsb3Vkc1NpbXBsZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5JY29uO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgQ29udmVyc2lvblV0aWxpdHkgZnJvbSAnLi9jb252ZXJzaW9uVXRpbGl0eSc7XG5pbXBvcnQgRG9tSGVscGVyIGZyb20gJy4vZG9tSGVscGVyJztcbmltcG9ydCBXZWF0aGVyRmV0Y2hlciBmcm9tICcuL3dlYXRoZXJGZXRjaGVyJztcbmltcG9ydCBXZWF0aGVySWNvbnMgZnJvbSAnLi93ZWF0aGVySWNvbnMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBmb3JtID0gYm9keS5hcHBlbmRDaGlsZChEb21IZWxwZXIuY3JlYXRlRWxlbWVudCgnZm9ybScpKTtcbmNvbnN0IGlucHV0ID0gZm9ybS5hcHBlbmRDaGlsZChEb21IZWxwZXIuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5jb25zdCBzdWJtaXQgPSBmb3JtLmFwcGVuZENoaWxkKERvbUhlbHBlci5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XG5cbmlucHV0LnR5cGUgPSAndGV4dCc7XG5pbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBDaXR5IE5hbWUnO1xuc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbnN1Ym1pdC5pbm5lclRleHQgPSAnU3VibWl0JztcblxuYXN5bmMgZnVuY3Rpb24gZG9TZWFyY2goZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3Qgd0RhdGEgPSBhd2FpdCBXZWF0aGVyRmV0Y2hlci5nZXRXZWF0aGVyKGlucHV0LnZhbHVlKTtcbiAgd0RhdGEuX3RlbXBlcmF0dXJlTW9kZSA9IENvbnZlcnNpb25VdGlsaXR5LnRlbXBlcmF0dXJlTW9kZXMuY2Vsc2l1cztcblxuICBjb25zdCBuYW1lRGl2ID0gRG9tSGVscGVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYW1lRGl2LmlubmVyVGV4dCA9IGAke3dEYXRhLmNpdHlOYW1lfSwgJHt3RGF0YS5jb3VudHJ5TmFtZX1gO1xuICBib2R5LmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gIGNvbnN0IGN1cnJlbnRUZW1wRGl2ID0gRG9tSGVscGVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjdXJyZW50VGVtcERpdi5pbm5lclRleHQgPSBgQ3VycmVudCBUZW1wOiAke3dEYXRhLmN1cnJlbnRUZW1wfWA7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBEaXYpO1xuXG4gIGNvbnN0IGhlcm9JY29uID0gV2VhdGhlckljb25zLmdldFdlYXRoZXJIZXJvSWNvbih3RGF0YS53ZWF0aGVySWQpO1xuICBjb25zdCBoZXJvSW1nID0gRG9tSGVscGVyLmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBoZXJvSW1nLnNyYyA9IGhlcm9JY29uO1xuICBoZXJvSW1nLnN0eWxlLndpZHRoID0gJzY0cHgnO1xuICBoZXJvSW1nLnN0eWxlLmhlaWdodCA9ICc2NHB4JztcbiAgYm9keS5hcHBlbmRDaGlsZChoZXJvSW1nKTtcblxuICBjb25zdCBzaW1wbGVJY29uID0gV2VhdGhlckljb25zLmdldFdlYXRoZXJTaW1wbGVJY29uKHdEYXRhLndlYXRoZXJJZCk7XG4gIGNvbnN0IHNpbXBsZUltZyA9IERvbUhlbHBlci5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2ltcGxlSW1nLnNyYyA9IHNpbXBsZUljb247XG4gIHNpbXBsZUltZy5zdHlsZS53aWR0aCA9ICc0OHB4JztcbiAgc2ltcGxlSW1nLnN0eWxlLmhlaWdodCA9ICc0OHB4JztcbiAgYm9keS5hcHBlbmRDaGlsZChzaW1wbGVJbWcpO1xufVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGRvU2VhcmNoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==