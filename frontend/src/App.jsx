import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Course from './pages/Course'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
function App() {

  return (
  <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
  </>
  )
}

export default App
