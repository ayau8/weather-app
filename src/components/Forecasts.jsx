import React from 'react'
import { dateTimeObject, iconUrlFromCode } from '../services/weatherService'


function forecasts( { items } ) {
  return (
    <div>
    <div className="flex items-center justify-start mt-6">
      <p className="text-white font-medium uppercase">3-HOUR FORECAST</p>
    </div>

    <div className="flex flex-row items-center justify-between text-white">
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
    </div>
  </div>
  )
}

export default forecasts
