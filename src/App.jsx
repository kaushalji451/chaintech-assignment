import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
const App = () => {
  return (
    <div>
       <Routes>
              <Route path="/" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/EditProfile" element={<EditProfile />}></Route>
              <Route path="*" element={<Signup />}></Route>
            </Routes>
    </div>
  )
}

export default App
