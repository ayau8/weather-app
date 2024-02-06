import React, { useState } from 'react'

function TopButtons({ setQuery }) {
  const [activeQuery, setActiveQuery] = useState(1)

  const cities = [
    {
      id: 1,
      title: 'Tokyo'
    },
    {
      id: 2,
      title: 'Hong Kong'
    },
    {
      id: 3,
      title: 'London'
    },
  ]

  const handleCity = (id, value) => {
    setActiveQuery(id)
    setQuery({q: value})
  }

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => ( 
        <button 
          key={city.id} 
          className= {`text-lg font-medium ${activeQuery === city.id ? "text-black" : "text-white"}`}
          onClick={() => {handleCity(city.id, city.title)}}
        >
          {city.title}
        </button>
      ))}
    </div>
  )
}

export default TopButtons
