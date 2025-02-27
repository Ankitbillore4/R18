import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='h-20 w-full bg-white flex items-center justify-between px-10'> 
      <div className='text-2xl'>My WebPage </div>
      <div className='text-2xl underline flex gap-5'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
      </div>
    </div>
  )
}

export default Nav
