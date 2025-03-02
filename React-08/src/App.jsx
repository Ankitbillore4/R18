import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Courses from './pages/Courses'
import Nav from './components/Nav'
import Error from './pages/Error'
import HtmlCourse from './pages/HtmlCourse'



const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/htmlCourses" element={<HtmlCourse/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </div>
  ) 
}

export default App
 