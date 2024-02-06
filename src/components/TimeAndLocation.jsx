import React from 'react'
import { dateTimetoLocalTime } from '../services/weatherService'

function TimeAndLocation({weather: { timezone, name, country} }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
      <p className="text-white text-xl font-extralight">
        {dateTimetoLocalTime(timezone)}
      </p>
    </div>
    
    <div className="flex items-center justify-center my-3">
      <p className="text-white text-3xl font-medium">
        {`${name}, ${country}`}
      </p>
    </div>

    </div>
  )
}

export default TimeAndLocation
