import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div className='h-screen w-full flex'>
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
    </div>
  )
}

export default App
