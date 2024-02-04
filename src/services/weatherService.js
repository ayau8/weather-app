import { DateTime } from "luxon";

const API_KEY = 'c338eb81fead5a23d8fd7f80814f046f';
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData =  (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({...searchParams, appid: API_KEY});
  return fetch(url).then((res) => res.json())
};

const formatCurrentWeather = (data) => {
  // destructing
  const {
    coord: {lat, lon},
    main: {temp, feels_like, temp_max, temp_min, humidity},
    name,
    dt,
    sys: {country, sunrise, sunset},
    weather,
    wind: {speed}
  } = data

  const {main: details, icon} = weather[0]

  return {lat, lon, temp, feels_like, temp_max, temp_min, humidity, name, dt, country, sunrise, sunset, details, icon, speed}
}

const formatForecastWeather = (data) => {
  let { list } = data;

  list = list.slice(3, 8).map(d => {
    return {
      title: d.dt_txt,
      temp: Math.round(d.main.temp),
      icon: d.weather[0].icon
    }
  });

    return { list };
}

const getFormattedWeatherData = async searchParams => {
  const formattedCurrentWeather = await getWeatherData(
      'weather', 
      searchParams
    ).then(formatCurrentWeather);

    const {lat, lon} = formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData(
      'forecast', {
      lat, 
      lon, 
      units: 'metric',
    }).then(formatForecastWeather)

  return {...formattedCurrentWeather, ...formattedForecastWeather};
};

const iconUrlFromCode = code => `http://openweathermap.org/img/wn/${code}2x.png`


export default getFormattedWeatherData;

export { iconUrlFromCode };

