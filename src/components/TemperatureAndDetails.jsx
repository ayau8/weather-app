import React from 'react';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilSun,
  UilSunset, 
} from "@iconscout/react-unicons";


function TemperatureAndDetails({weather: {details, icon, temp, temp_max, temp_min, humidity, sunrise, sunset, speed, feels_like }}) {
  return (
   <div>
    <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
      <p>{details}</p>
    </div>
    
    <div className="text-center text-white pt-5 pb-10">
      <p className="text-6xl">{`${temp.toFixed()}`}°</p>
    </div>

    <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
      <UilTemperature size={18} className="mr-1"/>  
      <p className="font-light">Real feel: <span className="font-medium ml-1">{`${feels_like.toFixed()}`}°</span></p>
      <p className="font-light">|</p>
      
      <UilTear size={18} className="mr-1"/>
      <p className="font-light">Humidity: <span className="font-medium ml-1">{`${humidity}`}%</span></p>
      <p className="font-light">|</p>

      <UilArrowUp />
      <p className="font-light">High: <span className="font-medium ml-1">{`${temp_max.toFixed()}`}°</span></p>
      <p className="font-light">|</p>
      
      <UilArrowDown />
      <p className="font-light">Low: <span className="font-medium ml-1">{`${temp_min.toFixed()}`}°</span></p>
    </div> 
  </div>
  )
}

export default TemperatureAndDetails
