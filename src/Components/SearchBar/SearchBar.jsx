import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { getCityByName } from '../../Redux/actions'

function SearchBar() {

  const dispatch = useDispatch()
  const cityRef = useRef()

  function handleAdd(e) {
    e.preventDefault()
    dispatch(getCityByName(cityRef.current.value))
  }
  
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input ref={cityRef} type="text" placeholder='Buscar ciudad por nombre...' />
        <input type="submit" value="Agregar" />
      </form>
    </div>
  )
}

export default SearchBar