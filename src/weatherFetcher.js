export default class WeatherFetcher {
  static apiKey = '97e0d1ebd3976ff95f7e0702e7105810';

  static async getWeather(city) {
    try {
      const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherFetcher.apiKey}`;
      const response = await fetch(fetchUrl, { mode: 'cors' });
      const data = await response.json();

      const { lon } = data.coord;
      const { lat } = data.coord;

      const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${WeatherFetcher.apiKey}`;
      const oneCallResponse = await fetch(oneCallUrl, { mode: 'cors' });
      const oneCallData = await oneCallResponse.json();

      return oneCallData;
    } catch (error) {
      console.log(error);
    }
  }
}
