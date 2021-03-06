import React from 'react'
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cityDetail, updateCities } from '../../Redux/actions'
import style from './Cards.module.css'
import FirstCard from '../FirstCard/FirstCard'

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
    <div className={style.container}>
      <FirstCard />
      <div className={style.cards}>
      {
        cities.map((el, i) => (
          i > 0 &&
          <Card 
            key={i} 
            country={el.sys.country} 
            city={el.name} 
            handleClose={() => handleClose(el.id)} 
            handleDetail={() => handleDetail(el.id)}
            temp={el.main.temp}
            icon={el.weather[0].icon}
            weather={el.weather[0].description}
            humidity={el.main.humidity}
            clouds={el.clouds.all}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Cards