import React from 'react'
import style from './FirstCard.module.css'
import { MdPlace, MdReadMore, MdRemoveRedEye } from "react-icons/md"
import { IoWater, IoCloud, IoTrash } from "react-icons/io5"
import { GiWindpump } from "react-icons/gi"
import { useSelector } from 'react-redux';

function FirstCard() {

  const firstCity = useSelector(state => state.fisrtCard)

  return (
    <div className={style.container}>
      {firstCity && 
        <div className={style.cardCtn}>
          <div className={style.leftCtn}>
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
          <div className={style.rightCtn}>
            <div className={style.cardSup}>
              <div className={style.block1}>
                <IoWater />
                <div>
                  <p>Humedad</p>
                  <p>{firstCity.main.humidity}%</p>
                </div>
              </div>
              <div className={style.block2}>
                <IoCloud />
                <div>
                  <p>Nubes</p>
                  <p>{firstCity.clouds.all}%</p>
                </div>
              </div>
              <div className={style.block3}>
                <MdRemoveRedEye />
                <div>
                  <p>Visibilidad</p>
                  <p>{firstCity.visibility/1000}km</p>
                </div>
              </div>
            </div>
            <div className={style.cardInf}>
              <div className={style.block4}>
                <GiWindpump />
                <div>
                  <p>Viento</p>
                  <p>{firstCity.wind.speed}km/h</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default FirstCard