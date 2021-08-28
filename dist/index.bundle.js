/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/domHelper.js");
/* harmony import */ var _weatherFetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherFetcher */ "./src/weatherFetcher.js");



const body = document.querySelector('body');

const form = body.appendChild(_domHelper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('form'));
const input = form.appendChild(_domHelper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('input'));
const submit = form.appendChild(_domHelper__WEBPACK_IMPORTED_MODULE_0__.default.createElement('button'));

input.type = 'text';
input.placeholder = 'Enter City Name';
submit.type = 'submit';
submit.innerText = 'Submit';

async function doSearch(e) {
  e.preventDefault();

  const wData = await _weatherFetcher__WEBPACK_IMPORTED_MODULE_1__.default.getWeather(input.value);
  

  console.log(wData);
}

form.addEventListener('submit', doSearch);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL2RvbUhlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3dlYXRoZXJEYXRhT2JqZWN0LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvd2VhdGhlckZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tSGVscGVyIHtcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoc2VsZWN0b3IsIGNsYXNzTmFtZXMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxlY3Rvcik7XG4gICAgaWYgKGNsYXNzTmFtZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXJEYXRhT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY3VycmVudFRlbXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbWluVGVtcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9tYXhUZW1wID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3N1bnJpc2VUaW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3N1bnNldFRpbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fd2VhdGhlcklkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3dlYXRoZXJNYWluID0gJyc7XG4gICAgdGhpcy5fd2VhdGhlckRlc2NyaXB0aW9uID0gJyc7XG4gICAgdGhpcy5fY3VycmVudFBvcCA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuX2RheVRlbXBzID0gW107XG4gICAgdGhpcy5fZGF5TWluVGVtcHMgPSBbXTtcbiAgICB0aGlzLl9kYXlNYXhUZW1wcyA9IFtdO1xuICAgIHRoaXMuX2RheVdlYXRoZXJJZHMgPSBbXTtcblxuICAgIHRoaXMuX2hvdXJseVRlbXBzID0gW107XG4gICAgdGhpcy5faG91cmx5V2VhdGhlcklkcyA9IFtdO1xuXG4gICAgdGhpcy5fdGVtcGVyYXR1cmVNb2RlcyA9IFsna2VsdmluJywgJ2NlbHNpdXMnLCAnZmFocmVuaGVpdCddXG5cbiAgICB0aGlzLl90ZW1wZXJhdHVyZU1vZGUgPSB0aGlzLl90ZW1wZXJhdHVyZU1vZGVzWzBdO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRUZW1wKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VGVtcDtcbiAgfVxuXG4gIHNldCBjdXJyZW50VGVtcCh2YWx1ZSkge1xuICAgIHRoaXMuX2N1cnJlbnRUZW1wID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY3VycmVudFBvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFBvcDtcbiAgfVxuXG4gIHNldCBjdXJyZW50UG9wKHZhbHVlKSB7XG4gICAgdGhpcy5fY3VycmVudFBvcCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG1pblRlbXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pblRlbXA7XG4gIH1cblxuICBzZXQgbWluVGVtcCh2YWx1ZSkge1xuICAgIHRoaXMuX21pblRlbXAgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBtYXhUZW1wKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhUZW1wO1xuICB9XG5cbiAgc2V0IG1heFRlbXAodmFsdWUpIHtcbiAgICB0aGlzLl9tYXhUZW1wID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc3VucmlzZVRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1bnJpc2VUaW1lO1xuICB9XG5cbiAgc2V0IHN1bnJpc2VUaW1lKHZhbHVlKSB7XG4gICAgdGhpcy5fc3VucmlzZVRpbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzdW5zZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9zdW5zZXRUaW1lO1xuICB9XG5cbiAgc2V0IHN1bnNldFRpbWUodmFsdWUpIHtcbiAgICB0aGlzLl9zdW5zZXRUaW1lID0gdmFsdWU7XG4gIH1cblxuICBnZXQgd2VhdGhlcklkKCkge1xuICAgIHJldHVybiB0aGlzLl93ZWF0aGVySWQ7XG4gIH1cblxuICBzZXQgd2VhdGhlcklkKHZhbHVlKSB7XG4gICAgdGhpcy5fd2VhdGhlcklkID0gdmFsdWU7XG4gIH1cblxuICBnZXQgd2VhdGhlck1haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYXRoZXJNYWluO1xuICB9XG5cbiAgc2V0IHdlYXRoZXJNYWluKHZhbHVlKSB7XG4gICAgdGhpcy5fd2VhdGhlck1haW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB3ZWF0aGVyRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYXRoZXJEZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCB3ZWF0aGVyRGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLl93ZWF0aGVyRGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHNldERheVRlbXBzKGFyclZhbHVlKSB7XG4gICAgdGhpcy5fZGF5VGVtcHMgPSBhcnJWYWx1ZTtcbiAgfVxuXG4gIGdldERheVRlbXBzKGRheUluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2RheVRlbXBzW2RheUluZGV4XTtcbiAgfVxuXG4gIHNldERheU1pblRlbXBzKGFyclZhbHVlKSB7XG4gICAgdGhpcy5fZGF5TWluVGVtcHMgPSBhcnJWYWx1ZTtcbiAgfVxuXG4gIGdldERheU1pblRlbXBzKGRheUluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2RheU1pblRlbXBzW2RheUluZGV4XTtcbiAgfVxuXG4gIHNldERheU1heFRlbXBzKGFyclZhbHVlKSB7XG4gICAgdGhpcy5fZGF5TWF4VGVtcHMgPSBhcnJWYWx1ZTtcbiAgfVxuXG4gIGdldERheU1heFRlbXBzKGRheUluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2RheU1heFRlbXBzW2RheUluZGV4XTtcbiAgfVxuXG4gIHNldERheVdlYXRoZXJJZHMoYXJyVmFsdWUpIHtcbiAgICB0aGlzLl9kYXlXZWF0aGVySWRzID0gYXJyVmFsdWU7XG4gIH1cblxuICBnZXREYXlXZWF0aGVySWRzKGRheUluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2RheVdlYXRoZXJJZHNbZGF5SW5kZXhdO1xuICB9XG5cbiAgc2V0SG91cmx5V2VhdGhlcklkcyhhcnJWYWx1ZSkge1xuICAgIHRoaXMuX2hvdXJseVdlYXRoZXJJZHMgPSBhcnJWYWx1ZTtcbiAgfVxuXG4gIGdldEhvdXJseVdlYXRoZXJJZHMoaG91ckluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvdXJseVdlYXRoZXJJZHNbaG91ckluZGV4XTtcbiAgfVxuXG4gIHNldEhvdXJseVRlbXBzKGFyclZhbHVlKSB7XG4gICAgdGhpcy5faG91cmx5VGVtcHMgPSBhcnJWYWx1ZTtcbiAgfVxuXG4gIGdldEhvdXJseVRlbXBzKGhvdXJJbmRleCkge1xuICAgIHJldHVybiB0aGlzLl9ob3VybHlUZW1wc1tob3VySW5kZXhdO1xuICB9XG59XG4iLCJpbXBvcnQgV2VhdGhlckRhdGFPYmplY3QgZnJvbSAnLi93ZWF0aGVyRGF0YU9iamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXJGZXRjaGVyIHtcbiAgc3RhdGljIGFwaUtleSA9ICc5N2UwZDFlYmQzOTc2ZmY5NWY3ZTA3MDJlNzEwNTgxMCc7XG5cbiAgc3RhdGljIGFzeW5jIHF1ZXJ5V2VhdGhlcihjaXR5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoVXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7V2VhdGhlckZldGNoZXIuYXBpS2V5fWA7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNoVXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGNvbnN0IHsgbG9uIH0gPSBkYXRhLmNvb3JkO1xuICAgICAgY29uc3QgeyBsYXQgfSA9IGRhdGEuY29vcmQ7XG5cbiAgICAgIGNvbnN0IGV4Y2x1ZGUgPSAnbWludXRlbHknO1xuXG4gICAgICBjb25zdCBvbmVDYWxsVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZleGNsdWRlPSR7ZXhjbHVkZX0mYXBwaWQ9JHtXZWF0aGVyRmV0Y2hlci5hcGlLZXl9YDtcbiAgICAgIGNvbnN0IG9uZUNhbGxSZXNwb25zZSA9IGF3YWl0IGZldGNoKG9uZUNhbGxVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgY29uc3Qgb25lQ2FsbERhdGEgPSBhd2FpdCBvbmVDYWxsUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICByZXR1cm4gb25lQ2FsbERhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0V2VhdGhlcihjaXR5KSB7XG4gICAgY29uc3QgY2l0eVdlYXRoZXJEYXRhID0gYXdhaXQgdGhpcy5xdWVyeVdlYXRoZXIoY2l0eSk7XG4gICAgY29uc29sZS5sb2coY2l0eVdlYXRoZXJEYXRhKTtcblxuICAgIGNvbnN0IHdkbyA9XG4gICAgICBXZWF0aGVyRmV0Y2hlci50cmFuc2xhdGVGcm9tSlNPTnRvV2VhdGhlckRhdGFPYmplY3QoY2l0eVdlYXRoZXJEYXRhKTtcbiAgICByZXR1cm4gd2RvO1xuICB9XG5cbiAgc3RhdGljIHRyYW5zbGF0ZUZyb21KU09OdG9XZWF0aGVyRGF0YU9iamVjdChjaXR5V2VhdGhlckRhdGFKU09OKSB7XG4gICAgY29uc3Qgd2RvID0gbmV3IFdlYXRoZXJEYXRhT2JqZWN0KCk7XG5cbiAgICB3ZG8uY3VycmVudFRlbXAgPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQudGVtcDtcbiAgICB3ZG8uY3VycmVudFBvcCA9IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHlbMF0ucG9wO1xuICAgIHdkby5taW5UZW1wID0gY2l0eVdlYXRoZXJEYXRhSlNPTi5kYWlseVswXS50ZW1wLm1pbjtcbiAgICB3ZG8ubWF4VGVtcCA9IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHlbMF0udGVtcC5tYXg7XG4gICAgd2RvLnN1bnJpc2VUaW1lID0gY2l0eVdlYXRoZXJEYXRhSlNPTi5jdXJyZW50LnN1bnJpc2U7XG4gICAgd2RvLnN1bnNldFRpbWUgPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQuc3Vuc2V0O1xuICAgIHdkby53ZWF0aGVySWQgPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQud2VhdGhlclswXS5pZDtcbiAgICB3ZG8ud2VhdGhlck1haW4gPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQud2VhdGhlclswXS5tYWluO1xuICAgIHdkby53ZWF0aGVyRGVzY3JpcHRpb24gPSBjaXR5V2VhdGhlckRhdGFKU09OLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGRheVRlbXBzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXR5V2VhdGhlckRhdGFKU09OLmRhaWx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXlUZW1wcy5wdXNoKGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHlbaV0udGVtcC5kYXkpO1xuICAgIH1cbiAgICB3ZG8uc2V0RGF5VGVtcHMoZGF5VGVtcHMpO1xuXG4gICAgY29uc3QgZGF5TWluVGVtcHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRheU1pblRlbXBzLnB1c2goY2l0eVdlYXRoZXJEYXRhSlNPTi5kYWlseVtpXS50ZW1wLm1pbik7XG4gICAgfVxuICAgIHdkby5zZXREYXlNaW5UZW1wcyhkYXlNaW5UZW1wcyk7XG5cbiAgICBjb25zdCBkYXlNYXhUZW1wcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2l0eVdlYXRoZXJEYXRhSlNPTi5kYWlseS5sZW5ndGg7IGkrKykge1xuICAgICAgZGF5TWF4VGVtcHMucHVzaChjaXR5V2VhdGhlckRhdGFKU09OLmRhaWx5W2ldLnRlbXAubWF4KTtcbiAgICB9XG4gICAgd2RvLnNldERheU1heFRlbXBzKGRheU1heFRlbXBzKTtcblxuICAgIGNvbnN0IGRheVdlYXRoZXJJZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdHlXZWF0aGVyRGF0YUpTT04uZGFpbHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRheVdlYXRoZXJJZHMucHVzaChjaXR5V2VhdGhlckRhdGFKU09OLmRhaWx5W2ldLndlYXRoZXJbMF0uaWQpO1xuICAgIH1cbiAgICB3ZG8uc2V0RGF5V2VhdGhlcklkcyhkYXlXZWF0aGVySWRzKTtcblxuICAgIGNvbnN0IGhvdXJseVRlbXBzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXR5V2VhdGhlckRhdGFKU09OLmhvdXJseS5sZW5ndGg7IGkrKykge1xuICAgICAgaG91cmx5VGVtcHMucHVzaChjaXR5V2VhdGhlckRhdGFKU09OLmhvdXJseVtpXS50ZW1wKTtcbiAgICB9XG4gICAgd2RvLnNldEhvdXJseVRlbXBzKGhvdXJseVRlbXBzKTtcblxuICAgIGNvbnN0IGhvdXJseVdlYXRoZXJJZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdHlXZWF0aGVyRGF0YUpTT04uaG91cmx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBob3VybHlXZWF0aGVySWRzLnB1c2goY2l0eVdlYXRoZXJEYXRhSlNPTi5ob3VybHlbaV0ud2VhdGhlclswXS5pZCk7XG4gICAgfVxuICAgIHdkby5zZXRIb3VybHlXZWF0aGVySWRzKGhvdXJseVdlYXRoZXJJZHMpO1xuXG4gICAgcmV0dXJuIHdkbztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRG9tSGVscGVyIGZyb20gJy4vZG9tSGVscGVyJztcbmltcG9ydCBXZWF0aGVyRmV0Y2hlciBmcm9tICcuL3dlYXRoZXJGZXRjaGVyJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuY29uc3QgZm9ybSA9IGJvZHkuYXBwZW5kQ2hpbGQoRG9tSGVscGVyLmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSk7XG5jb25zdCBpbnB1dCA9IGZvcm0uYXBwZW5kQ2hpbGQoRG9tSGVscGVyLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuY29uc3Qgc3VibWl0ID0gZm9ybS5hcHBlbmRDaGlsZChEb21IZWxwZXIuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpO1xuXG5pbnB1dC50eXBlID0gJ3RleHQnO1xuaW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgQ2l0eSBOYW1lJztcbnN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG5zdWJtaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGRvU2VhcmNoKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHdEYXRhID0gYXdhaXQgV2VhdGhlckZldGNoZXIuZ2V0V2VhdGhlcihpbnB1dC52YWx1ZSk7XG4gIFxuXG4gIGNvbnNvbGUubG9nKHdEYXRhKTtcbn1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBkb1NlYXJjaCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=