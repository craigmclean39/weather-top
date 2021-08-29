import ConversionUtility from './conversionUtility';
import DomHelper from './domHelper';
import WeatherFetcher from './weatherFetcher';
import WeatherIcons from './weatherIcons';

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
  wData._temperatureMode = ConversionUtility.temperatureModes.celsius;

  const nameDiv = DomHelper.createElement('div');
  nameDiv.innerText = `${wData.cityName}, ${wData.countryName}`;
  body.appendChild(nameDiv);

  const currentTempDiv = DomHelper.createElement('div');
  currentTempDiv.innerText = `Current Temp: ${wData.currentTemp}`;
  body.appendChild(currentTempDiv);

  const heroIcon = WeatherIcons.getWeatherHeroIcon(wData.weatherId);
  const heroImg = DomHelper.createElement('img');
  heroImg.src = heroIcon;
  heroImg.style.width = '64px';
  heroImg.style.height = '64px';
  body.appendChild(heroImg);

  const simpleIcon = WeatherIcons.getWeatherSimpleIcon(wData.weatherId);
  const simpleImg = DomHelper.createElement('img');
  simpleImg.src = simpleIcon;
  simpleImg.style.width = '48px';
  simpleImg.style.height = '48px';
  body.appendChild(simpleImg);
}

form.addEventListener('submit', doSearch);
