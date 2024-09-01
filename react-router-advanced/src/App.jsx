import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import ProfileDetail from './components/ProfileDetails'
import ProfileSetting from './components/ProfileSettings'
import ProtectedRoute from './components/ProtectedRoute'
import { Routes,Route,BrowserRouter } from 'react-router-dom'


function App() {
  const requireAuth = true

  return (
    <BrowserRouter>
      <Routes>
        { requireAuth ? (
          <ProtectedRoute>
            <Route path='profile' element={<Profile />}>
          <Route path='details' element={<ProfileDetail />}/>
          <Route path='settings' element={<ProfileSetting />}/> 
         </Route>
          </ProtectedRoute>
        ):null}
      </Routes>
    </BrowserRouter>
  )
}

export default App
