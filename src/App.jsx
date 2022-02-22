import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Detail from './Pages/Detail/Detail'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
