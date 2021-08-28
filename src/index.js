import ConversionUtility from './conversionUtility';
import DomHelper from './domHelper';
import WeatherFetcher from './weatherFetcher';

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

  const wData = await WeatherFetcher.getWeather(input.value);

  console.log(wData);
  console.log('KELVIN');
  console.log(wData.currentTemp);

  wData._temperatureMode = ConversionUtility.temperatureModes.celsius;
  console.dir('CELSIUS');
  console.log(wData.currentTemp);

  wData._temperatureMode = ConversionUtility.temperatureModes.fahrenheit;
console.dir('FAHRENHEIT');
console.log(wData.currentTemp);

}

form.addEventListener('submit', doSearch);


