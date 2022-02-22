import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'

function Cards() {

  const cities = useSelector(state => state.cities)

  function handleClose(id) {
    console.log(id)
  }

  return (
    <div>
      {
        cities.map((el, i) => (
          <Card 
            key={i} 
            country={el.sys.country} 
            city={el.name} 
            handleClose={() => handleClose(el.sys.id)} 
            temp={el.main.temp}
            temp_min={el.main.temp_min}
            temp_max={el.main.temp_max}
            icon={el.weather[0].icon}
            weather={el.weather[0].main}
          />
        ))
      }
    </div>
  )
}

export default Cards