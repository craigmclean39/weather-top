import WeatherDataObject from './weatherDataObject';

export default class WeatherFetcher {
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
    const wdo = new WeatherDataObject();

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
