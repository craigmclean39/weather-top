import './styles/reset.css';
import './styles/fonts.css';
import './styles/styles.css';

import ConversionUtility from './conversionUtility';
import DomHelper from './domHelper';
import WeatherFetcher from './weatherFetcher';
import WeatherDom from './weatherDom';

const body = document.querySelector('body');

const form = body.appendChild(DomHelper.createElement('form'));
const input = form.appendChild(DomHelper.createElement('input'));
const submit = form.appendChild(DomHelper.createElement('button'));

input.type = 'text';
input.placeholder = 'Enter City Name';
submit.type = 'submit';
submit.innerText = 'Submit';

async function doSearch(e) {
  e.preventDefault();

  try {
    const wData = await WeatherFetcher.getWeather(input.value);
    wData._temperatureMode = ConversionUtility.temperatureModes.celsius;

    const wCard = WeatherDom.createBasicCard(wData);
    body.appendChild(wCard);

    const additionalInfo = WeatherDom.createAdditionalInfoCard(wData);
    body.appendChild(additionalInfo);

    const hourlyCard = WeatherDom.createHourlyCard(wData);
    body.appendChild(hourlyCard);

    const weeklyCard = WeatherDom.createWeeklyCard(wData);
    body.appendChild(weeklyCard);
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener('submit', doSearch);
