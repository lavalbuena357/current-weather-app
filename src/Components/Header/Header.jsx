import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'

function Header() {
  return (
    <div className={style.container}>
      <Link to='/'>
        <h1>Clima Mundial</h1>
      </Link>
      <h2>Consulta el clima por ciudades en todo el mundo</h2>
    </div>
  )
}

export default Header