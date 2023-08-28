import React from 'react'
import { Components } from './components'
import './App.scss'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Components.NavBar />
      <Components.NavPhone />
      <Routes>
        <Route path='/' element={<Components.Home />}/>
        <Route path='/workers/' element={<Components.Workers />}/>
        {/* <Route path='/about/' element={<Components.About />}/> */}
        <Route path='/technique/' element={<Components.Technique />}/>
        <Route path='/objects/' element={<Components.Objects />}/>
        <Route path='/products/' element={<Components.Products />}/>
        <Route path='/contacts/' element={<Components.Contacts />}/>
        <Route path='/stroy/' element={<Components.Stroy />}/>
     

      </Routes>
      <Components.Footer />
    </div>
  )
}

export default App

