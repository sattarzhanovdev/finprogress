import React from 'react'
import { Components } from './components'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Pages } from './pages'

function App() {
  return (
    <div>
      <Components.NavBar />
      <Routes>
        <Route path='/about/' element={<Pages.About />}/>
        <Route path='/' element={<Pages.Main />}/>
      </Routes>
      <Components.Footer />
    </div>
  )
}

export default App

