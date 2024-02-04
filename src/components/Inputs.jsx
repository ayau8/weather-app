import React, { useState } from 'react'
import { UilSearch , UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Inputs( { setQuery }) {
  const [text, setText] = useState("")

  const handleText = value => {
    setText(value)
  }

  const handleSearch = () => {
    if (text !== "") setQuery({q: text});
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching users location.')
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Location fetched!');
        let lat = position.coords.latitude
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  }

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-5/6 items-center justify-center space-x-4">
        <input 
          type="text" 
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" 
          placeholder="Search by city name..." 
          onChange={ e => handleText(e.target.value)}
        />
        <UilSearch 
          size={25} 
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearch}
        />
        <UilLocationPoint 
          size={25} 
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>  
    </div>
  )
}

export default Inputs
 