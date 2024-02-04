import { useState, useEffect } from 'react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecasts from './components/Forecasts';
import getFormattedWeatherData from './services/weatherService';

function App() {
  const [query, setQuery] = useState( {q: 'tokyo'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      getFormattedWeatherData({...query, units}).then(
        (data) => {
          console.log(data)
          setWeather(data);
        });
    };
    fetchWeather();
  }, [query, units])

  return (
    <div className="mx-auto max-w-screen-md mt-12 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadown-xl shadow-gray-400">
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery}/>

      { weather && (
      <div>
        <TimeAndLocation weather={weather}/>
        <TemperatureAndDetails weather={weather} />
        <Forecasts title="3-hour forecast" items={weather.list}/>
      </div>
      )}
    </div>
  );
}

export default App;
