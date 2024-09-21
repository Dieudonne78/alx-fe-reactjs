import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Application from './components/application'
import Profile from './components/profile'


function App() {

  return (
    <Routes>
      <Route path='/' Component={<Application />}/>
      <Route path='/introduction' Component={<Profile />}/>
    </Routes>
  )
}

export default App
