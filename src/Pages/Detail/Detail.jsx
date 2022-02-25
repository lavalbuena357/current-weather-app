import React from 'react'
import { useSelector } from 'react-redux'

function Detail() {

  const detail = useSelector(state => state.detail)

  return (
    <div>
      <h1>{detail.name}</h1>
    </div>
  )
}

export default Detail