import React from 'react'
import style from './FirstCard.module.css'
import { MdPlace } from "react-icons/md";
import { useSelector } from 'react-redux';

function FirstCard() {

  const firstCity = useSelector(state => state.fisrtCard)

  return (
    <div className={style.container}>
      {firstCity && 
        <div>
          <div className={style.nameCtn}>
            <MdPlace />
            <h3>{firstCity.name} - {firstCity.sys.country}</h3>
          </div>
          <div className={style.tempCtn}>
            <p>{Math.round(firstCity.main.temp)}°</p>
            <img src={`http://openweathermap.org/img/wn/${firstCity.weather[0].icon}@2x.png`} alt="" />
          </div>
          <div className={style.descripCtn}>
            <p>{firstCity.weather[0].description}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default FirstCard