import { useState, useEffect } from 'react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecasts from './components/Forecasts';

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Tokyo")

  const TESTING_KEY = process.env.REACT_APP_TESTING_KEY

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${TESTING_KEY}`)
        if (!response.ok) {
          throw new Error('Network response was not ok.')
        } else {
          const data = await response.json()
          console.log(data)
          setData(data.articles)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [city])

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadown-xl shadow-gray-400">
        <TopButtons city={city} setCity={setCity}/>
        <Inputs city={city} setCity={setCity}/>
        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forecasts title="daily forecast"/>
        <Forecasts title="hourly forecast"/>
    </div>
  );
}

export default App;
