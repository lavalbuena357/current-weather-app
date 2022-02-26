import React from 'react'
import style from './Header.module.css'

function Header() {
  return (
    <div className={style.container}>
      <h1>Clima Mundial</h1>
      <h2>Consulta el clima por ciudades en todo el mundo</h2>
    </div>
  )
}

export default Header