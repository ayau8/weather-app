import React from 'react'

function TopButtons() {
  
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

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => ( 
        <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
      ))}
    </div>
  )
}

export default TopButtons
