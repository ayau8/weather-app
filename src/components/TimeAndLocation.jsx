import React, { useEffect } from 'react'

function TimeAndLocation({ city }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
      <p className="text-white text-xl font-extralight">
      </p>
    </div>
    
    <div className="flex items-center justify-center my-3">
      <p className="text-white text-3xl font-medium">
        {city}
      </p>
    </div>

    </div>
  )
}

export default TimeAndLocation
