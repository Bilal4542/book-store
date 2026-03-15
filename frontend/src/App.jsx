import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Course from './pages/Course'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
  <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
    </Routes>
    <Footer/>
  </>
  )
}

export default App
