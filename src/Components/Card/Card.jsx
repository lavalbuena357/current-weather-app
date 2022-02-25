import React from 'react'
import { IoWater, IoCloud } from "react-icons/io5";

function Card(props) {

  return (
    <div>
      <div onClick={props.handleClose}>
          x
      </div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='' />
      </div>
      <div>
        <div>
          <span>{props.country} - {props.city}</span>
        </div>
        <div>
          <span>{Math.round(props.temp)}°</span>
          <span>{props.weather}</span>
        </div>
      </div>  
      <div>
        <div>
          <IoWater />
          <span>{props.humidity}%</span>
        </div>
        <div>
          <IoCloud />
          <span>{props.clouds}%</span>
        </div>
      </div>
      <div onClick={props.handleDetail}>det</div>
    
    </div>
  )
}

export default Card