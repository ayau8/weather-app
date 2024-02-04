import React from 'react'
<<<<<<< Updated upstream
import { iconUrlFromCode } from '../services/weatherService'
=======
<<<<<<< Updated upstream
=======
import { dateTimeObject, iconUrlFromCode } from '../services/weatherService'
>>>>>>> Stashed changes
>>>>>>> Stashed changes

function forecasts( { items } ) {
  return (
    <div>
    <div className="flex items-center justify-start mt-6">
      <p className="text-white font-medium uppercase">3-HOUR FORECAST</p>
    </div>

    <div className="flex flex-row items-center justify-between text-white">

<<<<<<< Updated upstream
      {items.map((item, index) => (
        <div key={ index } className="flex flex-col items-center justify-center">
          <p className="font-light text-sm text-center">{item.title}</p>
          <img 
            src={iconUrlFromCode(item.icon)} 
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{item.temp.toFixed()}°</p>
        </div>
      ))}
=======
<<<<<<< Updated upstream
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-sm ">04:30 PM</p>
        <img 
        src="http://openweathermap.org/img/wn/01d@2x.png" 
        alt=""
        className="w-12 my-1"
      />
      <p className="font-medium">22°</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-sm ">04:30 PM</p>
        <img 
        src="http://openweathermap.org/img/wn/01d@2x.png" 
        alt=""
        className="w-12 my-1"
      />
      <p className="font-medium">22°</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-sm ">04:30 PM</p>
        <img 
        src="http://openweathermap.org/img/wn/01d@2x.png" 
        alt=""
        className="w-12 my-1"
      />
      <p className="font-medium">22°</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-sm ">04:30 PM</p>
        <img 
        src="http://openweathermap.org/img/wn/01d@2x.png" 
        alt=""
        className="w-12 my-1"
      />
      <p className="font-medium">22°</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-sm ">04:30 PM</p>
        <img 
        src="http://openweathermap.org/img/wn/01d@2x.png" 
        alt=""
        className="w-12 my-1"
      />
      <p className="font-medium">22°</p>
      </div>

=======
      {items.map((item, index) => (
        <div key={ index } className="flex flex-col items-center justify-center rounded mt-4 px-4 py-4 bg-gray-300/40">
          <p className="font-light text-sm text-center">{dateTimeObject(item.title)}</p>
          <img 
            src={iconUrlFromCode(item.icon)} 
            alt=""
            className="w-14 my-3"
          />
          <p className="font-xl">{item.temp.toFixed()}°</p>
        </div>
      ))}
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    </div>
    </div>
  )
}

export default forecasts
