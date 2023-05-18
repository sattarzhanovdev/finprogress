import React from 'react'
import { Components } from './components'
import './App.scss'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Components.NavBar />
      <Routes>
        <Route path='/' element={<Components.Banner />}/>
        <Route path='/workers/' element={<Components.Workers />}/>
        <Route path='/about/' element={<Components.About />}/>
        <Route path='/technique/' element={<Components.Technique />}/>
        <Route path='/objects/' element={<Components.Objects />}/>
      </Routes>
      <Components.Footer />
    </div>
  )
}

export default App

