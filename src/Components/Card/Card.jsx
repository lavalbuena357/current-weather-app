import React from 'react'
import { IoWater, IoCloud, IoTrash } from "react-icons/io5"
import { MdReadMore } from "react-icons/md"
import style from './Card.module.css'

function Card(props) {

  return (
    <div className={style.container}>
      <div onClick={props.handleClose} className={style.closeCtn}>
        <IoTrash />
      </div>
      <div className={style.imgCtn}>
        <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='' />
      </div>
      <div className={style.midItemsCtn}>
        <div>
          <span>{props.country} - {props.city}</span>
        </div>
        <div className={style.midItem}>
          <span>{Math.round(props.temp)}°</span>
          <span>{props.weather}</span>
        </div>
      </div>  
      <div className={style.lastItemsCtn}>
        <div className={style.lastItem}>
          <IoWater />
          <span>{props.humidity}%</span>
        </div>
        <div className={style.lastItem}>
          <IoCloud />
          <span>{props.clouds}%</span>
        </div>
      </div>
      <div onClick={props.handleDetail} className={style.detailCtn}>
        <MdReadMore />
      </div>
    </div>
  )
}

export default Card