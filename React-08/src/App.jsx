import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Courses from './pages/Courses'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Courses/>} />
      </Routes>
    </div>
  ) 
}

export default App
 