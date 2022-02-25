import React from 'react'
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cityDetail, updateCities } from '../../Redux/actions'

function Cards() {

  const cities = useSelector(state => state.cities)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleClose(id) {
    dispatch(updateCities(id))
  }

  async function handleDetail(id) {
    await dispatch(cityDetail(id))
    navigate(`/${id}`)
  }

  return (
    <div>
      {
        cities.map((el, i) => (
          <Card 
            key={i} 
            country={el.sys.country} 
            city={el.name} 
            handleClose={() => handleClose(el.id)} 
            handleDetail={() => handleDetail(el.id)}
            temp={el.main.temp}
            temp_min={el.main.temp_min}
            temp_max={el.main.temp_max}
            icon={el.weather[0].icon}
            weather={el.weather[0].description}
          />
        ))
      }
    </div>
  )
}

export default Cards