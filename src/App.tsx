import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import Lists from './components/Lists'
import Navbar from './components/Navbar'
import Options from './components/Options'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/homes/:id' element={<Details />} />
        <Route path='/' element={<Lists />} />
      </Routes>
    </div>
  )
}

export default App
