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

  static async queryWeather(city) {
    try {
      const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherFetcher.apiKey}`;
      const response = await fetch(fetchUrl, { mode: 'cors' });
      const data = await response.json();

      const { lon } = data.coord;
      const { lat } = data.coord;

      const exclude = 'minutely';

      const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${WeatherFetcher.apiKey}`;
      const oneCallResponse = await fetch(oneCallUrl, { mode: 'cors' });
      const oneCallData = await oneCallResponse.json();

      return oneCallData;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async getWeather(city) {
    const cityWeatherData = await this.queryWeather(city);
    console.log(cityWeatherData);

    const wdo =
      WeatherFetcher.translateFromJSONtoWeatherDataObject(cityWeatherData);
    return wdo;
  }

  static translateFromJSONtoWeatherDataObject(cityWeatherDataJSON) {
    const wdo = new _weatherDataObject__WEBPACK_IMPORTED_MODULE_0__.default();

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

  console.log(wData);
  console.log('KELVIN');
  console.log(wData.currentTemp);

  wData._temperatureMode = _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.temperatureModes.celsius;
  console.dir('CELSIUS');
  console.log(wData.currentTemp);

  wData._temperatureMode = _conversionUtility__WEBPACK_IMPORTED_MODULE_0__.default.temperatureModes.fahrenheit;
console.dir('FAHRENHEIT');
console.log(wData.currentTemp);

}

form.addEventListener('submit', doSearch);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZiw4QkFBOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWb0Q7O0FBRXJDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEIsK0VBQXlDO0FBQ3JFOztBQUVBO0FBQ0EsV0FBVywwRUFBb0M7QUFDL0M7QUFDQTtBQUNBLE1BQU0sK0VBQXlDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDBFQUFvQztBQUMvQztBQUNBO0FBQ0EsTUFBTSwrRUFBeUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDBFQUFvQztBQUMvQztBQUNBO0FBQ0EsTUFBTSwrRUFBeUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsMEVBQW9DO0FBQy9DO0FBQ0E7QUFDQSxNQUFNLCtFQUF5QztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsMEVBQW9DO0FBQy9DO0FBQ0E7QUFDQSxNQUFNLCtFQUF5QztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsMEVBQW9DO0FBQy9DO0FBQ0E7QUFDQSxNQUFNLCtFQUF5QztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDBFQUFvQztBQUMvQztBQUNBO0FBQ0EsTUFBTSwrRUFBeUM7QUFDL0M7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUtvRDs7QUFFckM7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsMkVBQTJFLEtBQUssU0FBUyxzQkFBc0I7QUFDL0csK0NBQStDLGNBQWM7QUFDN0Q7O0FBRUEsY0FBYyxNQUFNO0FBQ3BCLGNBQWMsTUFBTTs7QUFFcEI7O0FBRUEsZ0ZBQWdGLElBQUksT0FBTyxJQUFJLFdBQVcsUUFBUSxTQUFTLHNCQUFzQjtBQUNqSix3REFBd0QsY0FBYztBQUN0RTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsdURBQWlCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isc0NBQXNDO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzQ0FBc0M7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHNDQUFzQztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isc0NBQXNDO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix1Q0FBdUM7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHVDQUF1QztBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O1VDdkZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vRDtBQUNoQjtBQUNVOztBQUU5Qzs7QUFFQSw4QkFBOEIsNkRBQXVCO0FBQ3JELCtCQUErQiw2REFBdUI7QUFDdEQsZ0NBQWdDLDZEQUF1Qjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0IsK0RBQXlCOztBQUUvQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGdGQUEwQztBQUNyRTtBQUNBOztBQUVBLDJCQUEyQixtRkFBNkM7QUFDeEU7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY29udmVyc2lvblV0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kb21IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy93ZWF0aGVyRGF0YU9iamVjdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3dlYXRoZXJGZXRjaGVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZlcnNpb25VdGlsaXR5IHtcbiAgc3RhdGljIHRlbXBlcmF0dXJlTW9kZXMgPSB7IGtlbHZpbjogMCwgY2Vsc2l1czogMSwgZmFocmVuaGVpdDogMiB9O1xuXG4gIHN0YXRpYyBjb252ZXJ0VGVtcGVyYXR1cmUodGVtcCwgdG8sIGZyb20pIHtcbiAgICBsZXQgcmV0dXJuVGVtcGVyYXR1cmUgPSAwO1xuXG4gICAgaWYgKGZyb20gPT09IHRoaXMudGVtcGVyYXR1cmVNb2Rlcy5rZWx2aW4pIHtcbiAgICAgIHN3aXRjaCAodG8pIHtcbiAgICAgICAgY2FzZSB0aGlzLnRlbXBlcmF0dXJlTW9kZXMuY2Vsc2l1czoge1xuICAgICAgICAgIHJldHVyblRlbXBlcmF0dXJlID0gTnVtYmVyKHRlbXAgLSAyNzMuMTUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdGhpcy50ZW1wZXJhdHVyZU1vZGVzLmZhaHJlbmhlaXQ6IHtcbiAgICAgICAgICByZXR1cm5UZW1wZXJhdHVyZSA9IE51bWJlcigodGVtcCAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdGhpcy50ZW1wZXJhdHVyZU1vZGVzLmtlbHZpbjoge1xuICAgICAgICAgICAgcmV0dXJuVGVtcGVyYXR1cmUgPSBOdW1iZXIodGVtcCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblRlbXBlcmF0dXJlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEb21IZWxwZXIge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChzZWxlY3RvciwgY2xhc3NOYW1lcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHNlbGVjdG9yKTtcbiAgICBpZiAoY2xhc3NOYW1lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IENvbnZlcnNpb25VdGlsaXR5IGZyb20gJy4vY29udmVyc2lvblV0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyRGF0YU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2N1cnJlbnRUZW1wID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX21pblRlbXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbWF4VGVtcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zdW5yaXNlVGltZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zdW5zZXRUaW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3dlYXRoZXJJZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl93ZWF0aGVyTWFpbiA9ICcnO1xuICAgIHRoaXMuX3dlYXRoZXJEZXNjcmlwdGlvbiA9ICcnO1xuICAgIHRoaXMuX2N1cnJlbnRQb3AgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLl9kYXlUZW1wcyA9IFtdO1xuICAgIHRoaXMuX2RheU1pblRlbXBzID0gW107XG4gICAgdGhpcy5fZGF5TWF4VGVtcHMgPSBbXTtcbiAgICB0aGlzLl9kYXlXZWF0aGVySWRzID0gW107XG5cbiAgICB0aGlzLl9ob3VybHlUZW1wcyA9IFtdO1xuICAgIHRoaXMuX2hvdXJseVdlYXRoZXJJZHMgPSBbXTtcblxuICAgIHRoaXMuX3RlbXBlcmF0dXJlTW9kZSA9IENvbnZlcnNpb25VdGlsaXR5LnRlbXBlcmF0dXJlTW9kZXMua2VsdmluO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRUZW1wKCkge1xuICAgIHJldHVybiBDb252ZXJzaW9uVXRpbGl0eS5jb252ZXJ0VGVtcGVyYXR1cmUoXG4gICAgICB0aGlzLl9jdXJyZW50VGVtcCxcbiAgICAgIHRoaXMuX3RlbXBlcmF0dXJlTW9kZSxcbiAgICAgIENvbnZlcnNpb25VdGlsaXR5LnRlbXBlcmF0dXJlTW9kZXMua2VsdmluXG4gICAgKTtcbiAgfVxuXG4gIHNldCBjdXJyZW50VGVtcCh2YWx1ZSkge1xuICAgIHRoaXMuX2N1cnJlbnRUZW1wID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY3VycmVudFBvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFBvcDtcbiAgfVxuXG4gIHNldCBjdXJyZW50UG9wKHZhbHVlKSB7XG4gICAgdGhpcy5fY3VycmVudFBvcCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG1pblRlbXAoKSB7XG4gICAgcmV0dXJuIENvbnZlcnNpb25VdGlsaXR5LmNvbnZlcnRUZW1wZXJhdHVyZShcbiAgICAgIHRoaXMuX21pblRlbXAsXG4gICAgICB0aGlzLl90ZW1wZXJhdHVyZU1vZGUsXG4gICAgICBDb252ZXJzaW9uVXRpbGl0eS50ZW1wZXJhdHVyZU1vZGVzLmtlbHZpblxuICAgICk7XG4gIH1cblxuICBzZXQgbWluVGVtcCh2YWx1ZSkge1xuICAgIHRoaXMuX21pblRlbXAgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBtYXhUZW1wKCkge1xuICAgIHJldHVybiBDb252ZXJzaW9uVXRpbGl0eS5jb252ZXJ0VGVtcGVyYXR1cmUoXG4gICAgICB0aGlzLl9tYXhUZW1wLFxuICAgICAgdGhpcy5fdGVtcGVyYXR1cmVNb2RlLFxuICAgICAgQ29udmVyc2lvblV0aWxpdHkudGVtcGVyYXR1cmVNb2Rlcy5rZWx2aW5cbiAgICApO1xuICB9XG5cbiAgc2V0IG1heFRlbXAodmFsdWUpIHtcbiAgICB0aGlzLl9tYXhUZW1wID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc3VucmlzZVRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1bnJpc2VUaW1lO1xuICB9XG5cbiAgc2V0IHN1bnJpc2VUaW1lKHZhbHVlKSB7XG4gICAgdGhpcy5fc3VucmlzZVRpbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzdW5zZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9zdW5zZXRUaW1lO1xuICB9XG5cbiAgc2V0IHN1bnNldFRpbWUodmFsdWUpIHtcbiAgICB0aGlzLl9zdW5zZXRUaW1lID0gdmFsdWU7XG4gIH1cblxuICBnZXQgd2VhdGhlcklkKCkge1xuICAgIHJldHVybiB0aGlzLl93ZWF0aGVySWQ7XG4gIH1cblxuICBzZXQgd2VhdGhlcklkKHZhbHVlKSB7XG4gICAgdGhpcy5fd2VhdGhlcklkID0gdmFsdWU7XG4gIH1cblxuICBnZXQgd2VhdGhlck1haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYXRoZXJNYWluO1xuICB9XG5cbiAgc2V0IHdlYXRoZXJNYWluKHZhbHVlKSB7XG4gICAgdGhpcy5fd2VhdGhlck1haW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB3ZWF0aGVyRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYXRoZXJEZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCB3ZWF0aGVyRGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLl93ZWF0aGVyRGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHNldERheVRlbXBzKGFyclZhbHVlKSB7XG4gICAgdGhpcy5fZGF5VGVtcHMgPSBhcnJWYWx1ZTtcbiAgfVxuXG4gIGdldERheVRlbXBzKGRheUluZGV4KSB7XG4gICAgcmV0dXJuIENvbnZlcnNpb25VdGlsaXR5LmNvbnZlcnRUZW1wZXJhdHVyZShcbiAgICAgIHRoaXMuX2RheVRlbXBzW2RheUluZGV4XSxcbiAgICAgIHRoaXMuX3RlbXBlcmF0dXJlTW9kZSxcbiAgICAgIENvbnZlcnNpb25VdGlsaXR5LnRlbXBlcmF0dXJlTW9kZXMua2VsdmluXG4gICAgKTtcbiAgfVxuXG4gIHNldERheU1pblRlbXBzKGFyclZhbHVlKSB7XG4gICAgdGhpcy5fZGF5TWluVGVtcHMgPSBhcnJWYWx1ZTtcbiAgfVxuXG4gIGdldERheU1pblRlbXBzKGRheUluZGV4KSB7XG4gICAgcmV0dXJuIENvbnZlcnNpb25VdGlsaXR5LmNvbnZlcnRUZW1wZXJhdHVyZShcbiAgICAgIHRoaXMuX2RheU1pblRlbXBzW2RheUluZGV4XSxcbiAgICAgIHRoaXMuX3RlbXBlcmF0dXJlTW9kZSxcbiAgICAgIENvbnZlcnNpb25VdGlsaXR5LnRlbXBlcmF0dXJlTW9kZXMua2VsdmluXG4gICAgKTtcbiAgfVxuXG4gIHNldERheU1heFRlbXBzKGFyclZhbHVlKSB7XG4gICAgdGhpcy5fZGF5TWF4VGVtcHMgPSBhcnJWYWx1ZTtcbiAgfVxuXG4gIGdldERheU1heFRlbXBzKGRheUluZGV4KSB7XG4gICAgcmV0dXJuIENvbnZlcnNpb25VdGlsaXR5LmNvbnZlcnRUZW1wZXJhdHVyZShcbiAgICAgIHRoaXMuX2RheU1heFRlbXBzW2RheUluZGV4XSxcbiAgICAgIHRoaXMuX3RlbXBlcmF0dXJlTW9kZSxcbiAgICAgIENvbnZlcnNpb25VdGlsaXR5LnRlbXBlcmF0dXJlTW9kZXMua2VsdmluXG4gICAgKTtcbiAgfVxuXG4gIHNldERheVdlYXRoZXJJZHMoYXJyVmFsdWUpIHtcbiAgICB0aGlzLl9kYXlXZWF0aGVySWRzID0gYXJyVmFsdWU7XG4gIH1cblxuICBnZXREYXlXZWF0aGVySWRzKGRheUluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2RheVdlYXRoZXJJZHNbZGF5SW5kZXhdO1xuICB9XG5cbiAgc2V0SG91cmx5V2VhdGhlcklkcyhhcnJWYWx1ZSkge1xuICAgIHRoaXMuX2hvdXJseVdlYXRoZXJJZHMgPSBhcnJWYWx1ZTtcbiAgfVxuXG4gIGdldEhvdXJseVdlYXRoZXJJZHMoaG91ckluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvdXJseVdlYXRoZXJJZHNbaG91ckluZGV4XTtcbiAgfVxuXG4gIHNldEhvdXJseVRlbXBzKGFyclZhbHVlKSB7XG4gICAgdGhpcy5faG91cmx5VGVtcHMgPSBhcnJWYWx1ZTtcbiAgfVxuXG4gIGdldEhvdXJseVRlbXBzKGhvdXJJbmRleCkge1xuICAgIHJldHVybiBDb252ZXJzaW9uVXRpbGl0eS5jb252ZXJ0VGVtcGVyYXR1cmUoXG4gICAgICB0aGlzLl9ob3VybHlUZW1wc1tob3VySW5kZXhdLFxuICAgICAgdGhpcy5fdGVtcGVyYXR1cmVNb2RlLFxuICAgICAgQ29udmVyc2lvblV0aWxpdHkudGVtcGVyYXR1cmVNb2Rlcy5rZWx2aW5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgV2VhdGhlckRhdGFPYmplY3QgZnJvbSAnLi93ZWF0aGVyRGF0YU9iamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXJGZXRjaGVyIHtcbiAgc3RhdGljIGFwaUtleSA9ICc5N2UwZDFlYmQzOTc2ZmY5NWY3ZTA3MDJlNzEwNTgxMCc7XG5cbiAgc3RhdGljIGFzeW5jIHF1ZXJ5V2VhdGhlcihjaXR5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoVXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7V2VhdGhlckZldGNoZXIuYXBpS2V5fWA7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNoVXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGNvbnN0IHsgbG9uIH0gPSBkYXRhLmNvb3JkO1xuICAgICAgY29uc3QgeyBsYXQgfSA9IGRhdGEuY29vcmQ7XG5cbiAgICAgIGNvbnN0IGV4Y2x1ZGUgPSAnbWludXRlbHknO1xuXG4gICAgICBjb25zdCBvbmVDYWxsVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZleGNsdWRlPSR7ZXhjbHVkZX0mYXBwaWQ9JHtXZWF0aGVyRmV0Y2hlci5hcGlLZXl9YDtcbiAgICAgIGNvbnN0IG9uZUNhbGxSZXNwb25zZSA9IGF3YWl0IGZldGNoKG9uZUNhbGxVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgY29uc3Qgb25lQ2FsbERhdGEgPSBhd2FpdCBvbmVDYWxsUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICByZXR1cm4gb25lQ2FsbERhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0V2VhdGhlcihjaXR5KSB7XG4gICAgY29uc3QgY2l0eVdlYXRoZXJEYXRhID0gYXdhaXQgdGhpcy5xdWVyeVdlYXRoZXIoY2l0eSk7XG4gICAgY29uc29sZS5sb2coY2l0eVdlYXRoZXJEYXRhKTtcblxuICAgIGNvbnN0IHdkbyA9XG4gICAgICBXZWF0aGVyRmV0Y2hlci50cmFuc2xhdGVGcm9tSlNPTnRvV2VhdGhlckRhdGFPYmplY3QoY2l0eVdlYXRoZXJEYXRhKTtcbiAgICByZXR1cm4gd2RvO1xuICB9XG5cbiAgc3RhdGljIHRyYW5zbGF0ZUZyb21KU09OdG9XZWF0aGVyRGF0YU9iamVjdChjaXR5V2VhdGhlckRhdGFKU09OKSB7XG4gICAgY29uc3Qgd2RvID0gbmV3IFdlYXRoZXJEYXRhT2JqZWN0KCk7XG5cbiAgICB3ZG8uY3VycmVudFRlbXAgPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQudGVtcDtcbiAgICB3ZG8uY3VycmVudFBvcCA9IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHlbMF0ucG9wO1xuICAgIHdkby5taW5UZW1wID0gY2l0eVdlYXRoZXJEYXRhSlNPTi5kYWlseVswXS50ZW1wLm1pbjtcbiAgICB3ZG8ubWF4VGVtcCA9IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHlbMF0udGVtcC5tYXg7XG4gICAgd2RvLnN1bnJpc2VUaW1lID0gY2l0eVdlYXRoZXJEYXRhSlNPTi5jdXJyZW50LnN1bnJpc2U7XG4gICAgd2RvLnN1bnNldFRpbWUgPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQuc3Vuc2V0O1xuICAgIHdkby53ZWF0aGVySWQgPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQud2VhdGhlclswXS5pZDtcbiAgICB3ZG8ud2VhdGhlck1haW4gPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQud2VhdGhlclswXS5tYWluO1xuICAgIHdkby53ZWF0aGVyRGVzY3JpcHRpb24gPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGRheVRlbXBzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXR5V2VhdGhlckRhdGFKU09OLmRhaWx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXlUZW1wcy5wdXNoKGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHlbaV0udGVtcC5kYXkpO1xuICAgIH1cbiAgICB3ZG8uc2V0RGF5VGVtcHMoZGF5VGVtcHMpO1xuXG4gICAgY29uc3QgZGF5TWluVGVtcHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRheU1pblRlbXBzLnB1c2goY2l0eVdlYXRoZXJEYXRhSlNPTi5kYWlseVtpXS50ZW1wLm1pbik7XG4gICAgfVxuICAgIHdkby5zZXREYXlNaW5UZW1wcyhkYXlNaW5UZW1wcyk7XG5cbiAgICBjb25zdCBkYXlNYXhUZW1wcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2l0eVdlYXRoZXJEYXRhSlNPTi5kYWlseS5sZW5ndGg7IGkrKykge1xuICAgICAgZGF5TWF4VGVtcHMucHVzaChjaXR5V2VhdGhlckRhdGFKU09OLmRhaWx5W2ldLnRlbXAubWF4KTtcbiAgICB9XG4gICAgd2RvLnNldERheU1heFRlbXBzKGRheU1heFRlbXBzKTtcblxuICAgIGNvbnN0IGRheVdlYXRoZXJJZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRheVdlYXRoZXJJZHMucHVzaChjaXR5V2VhdGhlckRhdGFKU09OLmRhaWx5W2ldLndlYXRoZXJbMF0uaWQpO1xuICAgIH1cbiAgICB3ZG8uc2V0RGF5V2VhdGhlcklkcyhkYXlXZWF0aGVySWRzKTtcblxuICAgIGNvbnN0IGhvdXJseVRlbXBzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXR5V2VhdGhlckRhdGFKU09OLmhvdXJseS5sZW5ndGg7IGkrKykge1xuICAgICAgaG91cmx5VGVtcHMucHVzaChjaXR5V2VhdGhlckRhdGFKU09OLmhvdXJseVtpXS50ZW1wKTtcbiAgICB9XG4gICAgd2RvLnNldEhvdXJseVRlbXBzKGhvdXJseVRlbXBzKTtcblxuICAgIGNvbnN0IGhvdXJseVdlYXRoZXJJZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdHlXZWF0aGVyRGF0YUpTT04uaG91cmx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBob3VybHlXZWF0aGVySWRzLnB1c2goY2l0eVdlYXRoZXJEYXRhSlNPTi5ob3VybHlbaV0ud2VhdGhlclswXS5pZCk7XG4gICAgfVxuICAgIHdkby5zZXRIb3VybHlXZWF0aGVySWRzKGhvdXJseVdlYXRoZXJJZHMpO1xuXG4gICAgcmV0dXJuIHdkbztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ29udmVyc2lvblV0aWxpdHkgZnJvbSAnLi9jb252ZXJzaW9uVXRpbGl0eSc7XG5pbXBvcnQgRG9tSGVscGVyIGZyb20gJy4vZG9tSGVscGVyJztcbmltcG9ydCBXZWF0aGVyRmV0Y2hlciBmcm9tICcuL3dlYXRoZXJGZXRjaGVyJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuY29uc3QgZm9ybSA9IGJvZHkuYXBwZW5kQ2hpbGQoRG9tSGVscGVyLmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSk7XG5jb25zdCBpbnB1dCA9IGZvcm0uYXBwZW5kQ2hpbGQoRG9tSGVscGVyLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuY29uc3Qgc3VibWl0ID0gZm9ybS5hcHBlbmRDaGlsZChEb21IZWxwZXIuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpO1xuXG5pbnB1dC50eXBlID0gJ3RleHQnO1xuaW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgQ2l0eSBOYW1lJztcbnN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG5zdWJtaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGRvU2VhcmNoKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHdEYXRhID0gYXdhaXQgV2VhdGhlckZldGNoZXIuZ2V0V2VhdGhlcihpbnB1dC52YWx1ZSk7XG5cbiAgY29uc29sZS5sb2cod0RhdGEpO1xuICBjb25zb2xlLmxvZygnS0VMVklOJyk7XG4gIGNvbnNvbGUubG9nKHdEYXRhLmN1cnJlbnRUZW1wKTtcblxuICB3RGF0YS5fdGVtcGVyYXR1cmVNb2RlID0gQ29udmVyc2lvblV0aWxpdHkudGVtcGVyYXR1cmVNb2Rlcy5jZWxzaXVzO1xuICBjb25zb2xlLmRpcignQ0VMU0lVUycpO1xuICBjb25zb2xlLmxvZyh3RGF0YS5jdXJyZW50VGVtcCk7XG5cbiAgd0RhdGEuX3RlbXBlcmF0dXJlTW9kZSA9IENvbnZlcnNpb25VdGlsaXR5LnRlbXBlcmF0dXJlTW9kZXMuZmFocmVuaGVpdDtcbmNvbnNvbGUuZGlyKCdGQUhSRU5IRUlUJyk7XG5jb25zb2xlLmxvZyh3RGF0YS5jdXJyZW50VGVtcCk7XG5cbn1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBkb1NlYXJjaCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9