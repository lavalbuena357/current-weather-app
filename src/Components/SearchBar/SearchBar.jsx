import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCityByName } from '../../Redux/actions'
import { normalize } from '../utils/normalize'

function SearchBar() {
  const [repeatedCity, setRepeatedCity] = useState(false)

  //despachar acciones para busqueda
  const dispatch = useDispatch()
  //consultar el estado global
  const cities = useSelector(state => state.cities)
  //hacer referencia a lo que el usuario ingresa en el input
  const cityRef = useRef()

  function handleAdd(e) {
    e.preventDefault()
    //destructuracion de la referencia
    const { value } = cityRef.current

    //setear ciudad repetida en falso en cada busqueda para evitar que quede activo siempre
    setRepeatedCity(false)
    //filtrado para verificar si la ciudad existe - funcion para poner ambos textos iguales sin tildes ni mayusculas
    const checkExist = cities.filter(el => normalize(el.name) === normalize(value))
    if(checkExist.length === 0) {
      dispatch(getCityByName(value))
      cityRef.current.value = ""
    } else {
      //si la ciudad ya existe activar el trigger para mostrar el mensaje
      setRepeatedCity(true)
    }
  }
  
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input ref={cityRef} type="text" placeholder='Buscar ciudad por nombre...' required />
        <input type="submit" value="Agregar" />
      </form>
      {repeatedCity && <span>La ciudad que busca ya ha sido agregada</span>}
    </div>
  )
}

export default SearchBar