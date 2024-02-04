import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'

function forecasts( { items } ) {
  return (
    <div>
    <div className="flex items-center justify-start mt-6">
      <p className="text-white font-medium uppercase">3-HOUR FORECAST</p>
    </div>
    <hr className="my-2"></hr>

    <div className="flex flex-row items-center justify-between text-white">

      {items.map((item) => (
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm text-center">{item.title}</p>
          <img 
            src={iconUrlFromCode(item.icon)} 
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">{item.temp.toFixed()}°</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default forecasts
