import React from 'react'

function Card(props) {

  return (
    <div>
      <div>
        <h3>{props.country}</h3>
        <h2>{props.city}</h2>
        <span onClick={props.handleClose} >x</span>
      </div>
      <div>
        <h2>{props.temp}°</h2>
        <div>
          <span>Min: {props.temp_min}°</span>
          <span>max: {props.temp_max}°</span>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
          <span>{props.weather}</span>
        </div>
      </div>
    </div>
  )
}

export default Card