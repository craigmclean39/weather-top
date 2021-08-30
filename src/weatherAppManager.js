import DomHelper from './domHelper';
import ConversionUtility from './conversionUtility';
import WeatherFetcher from './weatherFetcher';
import WeatherDom from './weatherDom';

export default class WeatherAppManager {
  constructor() {
    this.doSearch = this.doSearch.bind(this);

    this.body = document.querySelector('body');

    this.form = this.body.appendChild(DomHelper.createElement('form'));
    this.input = this.form.appendChild(DomHelper.createElement('input'));
    this.submit = this.form.appendChild(DomHelper.createElement('button'));

    this.input.type = 'text';
    this.input.placeholder = 'Enter City Name';
    this.submit.type = 'submit';
    this.submit.innerText = 'Submit';

    this.form.addEventListener('submit', this.doSearch);
  }

  async doSearch(e) {
    e.preventDefault();

    try {
      const wData = await WeatherFetcher.getWeather(this.input.value);
      wData._temperatureMode = ConversionUtility.temperatureModes.celsius;

      const wCard = WeatherDom.createBasicCard(wData);
      this.body.appendChild(wCard);

      const additionalInfo = WeatherDom.createAdditionalInfoCard(wData);
      this.body.appendChild(additionalInfo);

      const hourlyCard = WeatherDom.createHourlyCard(wData);
      this.body.appendChild(hourlyCard);

      const weeklyCard = WeatherDom.createWeeklyCard(wData);
      this.body.appendChild(weeklyCard);
    } catch (error) {
      console.log(error);
    }
  }
}
