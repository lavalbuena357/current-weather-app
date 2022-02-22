import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCityByName } from '../../Redux/actions'

function SearchBar() {

  const dispatch = useDispatch()
  const cities = useSelector(state => state.cities)
  const cityRef = useRef()

  function handleAdd(e) {
    e.preventDefault()
    const { value } = cityRef.current

    const checkExist = cities.filter(el => el.name.toLowerCase() === value.toLowerCase())
    if(checkExist.length === 0) {
      dispatch(getCityByName(value))
      cityRef.current.value = ""
    }
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