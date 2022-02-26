import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { firstCard, getCityByName } from '../../Redux/actions'
import style from './SearchBar.module.css'

function SearchBar() {

  //despachar acciones para busqueda
  const dispatch = useDispatch()
  //consultar el estado global
  const repeatedCity = useSelector(state => state.repeatedCity)
  //hacer referencia a lo que el usuario ingresa en el input
  const cityRef = useRef()

  async function handleAdd(e) {
    e.preventDefault()
    //destructuracion de la referencia
    const { value } = cityRef.current
    
    await dispatch(getCityByName(value))
    await dispatch(firstCard())
    cityRef.current.value = ""
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