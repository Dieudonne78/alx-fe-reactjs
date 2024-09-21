import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Application from './components/application'
import Profile from './components/profile'
import Search from './components/Search'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Application />}/>
      <Route path='introduction' element={<Profile />}/>
      <Route path='search' element={<Search/>}/>
    </Routes>
  )
}

export default App
