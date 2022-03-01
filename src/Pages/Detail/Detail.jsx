import React from 'react'
import { useSelector } from 'react-redux'
import { MdPlace, MdAccessTime, MdRemoveRedEye, MdWater } from "react-icons/md"
import { IoWater, IoCloud, IoSpeedometer, IoArrowUndo } from "react-icons/io5"
import { GiWindpump, GiIsland } from "react-icons/gi"
import { FaTemperatureHigh, FaLocationArrow } from "react-icons/fa"
import style from './Detail.module.css'
import { useNavigate } from 'react-router-dom'

function Detail() {

  const detail = useSelector(state => state.detail)
  const navigate = useNavigate()

  return (
    <div className={style.container}>
      <div className={style.backCtn} onClick={() => navigate('/')}>
        <IoArrowUndo />
      </div>
      <div className={style.cardCtn}>
        <div className={style.infoCtn}>
          <div className={style.leftCtn}>
            <MdPlace />
            <p>{detail.name} - {detail.sys.country}</p>
          </div>

          <div className={style.rightCtn}>
            <div className={style.blockRight}>
              <MdAccessTime />
              <p>GMT:{(detail.timezone/60)/60}</p>
            </div>

            <div className={style.blockRight}>
              <FaLocationArrow />
              <div>
                <p>Lat: {detail.coord.lat}</p>
                <p>Lon: {detail.coord.lon}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.tempCtn}>
          <div className={style.tempInfoCtn}>
            <div className={style.mainTempCtn}>
              <FaTemperatureHigh />
              <p>{Math.round(detail.main.temp)}°</p>
            </div>

            <div className={style.minMaxCtn}>
              <p>Min: {parseInt(detail.main.temp_min)}°</p>
              <p>Max: {parseInt(detail.main.temp_max)}°</p>
            </div>
          </div>

          <div className={style.imageTempCtn}>
            <img src={`http://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`} alt="" />
            <p>{detail.weather[0].description}</p>
          </div>
        </div>      
     
        </div>

        <div className={style.moreInfoCtn}>
          <p><IoWater />Humedad: {detail.main.humidity}%</p>
          <p><IoCloud />Nubes: {detail.clouds.all}%</p>
          <p><MdRemoveRedEye />Visibilidad: {detail.visibility/1000}%</p>
          <p><GiWindpump />Viento: {detail.wind.speed}km/h</p>
          <p><IoSpeedometer />Presión: {detail.main.pressure}hPa</p>
          <p><MdWater />Nivel del mar: {detail.main.sea_level}m</p>
          <p><GiIsland />Nivel del suelo: {detail.main.grnd_level}m</p>
        </div>
    </div>
  )
}

export default Detail