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
          console.log(data);
        });
    };
    fetchWeather();
  }, [query, units])

  const formatBackground = () => {
    if (weather?.details === "Clear") return "url('https://24.media.tumblr.com/tumblr_mebcbsOzV01qc66bjo1_500.gif')";
    if (weather?.details === "Clouds") return "url('https://images.genial.ly/5a58ab96bfbfc70f6eb4d2c0/0e784a67-9553-45ad-a639-0f45ef097ce8.gif')";
    if (weather?.details === "Rain") return "url('https://cdn.pixabay.com/animation/2023/06/25/21/55/21-55-38-961_512.gif')";
    if (weather?.details === "Snow") return "url('https://www.animationsoftware7.com/img/agifs/snow02.gif')";
  }

  return (
    <div>
      <div 
        className={`mx-auto h-fit max-w-screen-md mt-12 py-12 px-32 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border-4 border-gray-200 shadow-xl`}
        style={{backgroundImage: formatBackground(), backgroundSize: 'cover'}}
      >
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
