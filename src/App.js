import { useState, useEffect } from 'react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecasts from './components/Forecasts';
import getFormattedWeatherData from './services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState( {q: 'tokyo'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location.'
      toast.info('Fetching weather for ' + message);
      getFormattedWeatherData({...query, units}).then(
        (data) => {
          toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)
          setWeather(data);
        });
    };
    fetchWeather();
  }, [query, units])

  return (
    // <div className="mx-auto max-w-screen-md mt-12 py-5 px-32 bg-gradient-to-br border-cyan-700 border-8 rounded-3xl from-cyan-700 to-blue-700 h-fit shadown-xl shadow-gray-400">
    <div>
    <div className="mx-auto h-fit max-w-screen-md mt-12 py-12 px-32 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border-4 border-gray-200">
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
     <ToastContainer autoClose={5000} theme="colored" newestOnTop={true}/>
  </div>
  );
}

export default App;
