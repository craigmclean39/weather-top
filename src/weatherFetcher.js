export default class WeatherFetcher {
  static apiKey = '97e0d1ebd3976ff95f7e0702e7105810';

  static async getWeather(city) {
    const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherFetcher.apiKey}`;
    const response = await fetch(fetchUrl, { mode: 'cors' });
    const data = await response.json();
    return data;
  }
}
