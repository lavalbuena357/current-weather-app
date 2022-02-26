import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { firstCard, getCityByName } from '../../Redux/actions'
import { normalize } from '../../utils/normalize'
import style from './SearchBar.module.css'

function SearchBar() {
  const [repeatedCity, setRepeatedCity] = useState(false)

  //despachar acciones para busqueda
  const dispatch = useDispatch()
  //consultar el estado global
  const cities = useSelector(state => state.cities)
  //hacer referencia a lo que el usuario ingresa en el input
  const cityRef = useRef()

  async function handleAdd(e) {
    e.preventDefault()
    //destructuracion de la referencia
    const { value } = cityRef.current

    //setear ciudad repetida en falso en cada busqueda para evitar que quede activo siempre
    setRepeatedCity(false)
    //filtrado para verificar si la ciudad existe - funcion para poner ambos textos iguales sin tildes ni mayusculas
    const checkExist = cities.filter(el => normalize(el.name) === normalize(value))
    if(checkExist.length === 0) {
      await dispatch(getCityByName(value))
      await dispatch(firstCard())
      cityRef.current.value = ""
    } else {
      //si la ciudad ya existe activar el trigger para mostrar el mensaje
      setRepeatedCity(true)
    }
  }
  
  return (
    <div>
      <div className={style.formCtn}>
        <form onSubmit={handleAdd}>
          <input className={style.inputsearch} ref={cityRef} type="text" placeholder='Buscar ciudad por nombre...' required />
          <input className={style.btnSubmit} type="submit" value='+' />
        </form>
      </div>
      {repeatedCity && <span className={style.alertMsg}>*La ciudad que busca ya ha sido agregada</span>}
    </div>
  )
}

export default SearchBar