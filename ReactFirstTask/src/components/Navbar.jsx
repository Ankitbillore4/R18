import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='nav h-20 w-full  flex items-center justify-between px-16 border-b-1'>
      <div className='left flex gap-5'>
        <img src="images/logo.svg" alt="" />
        <h1 className='bg-red-100 px-2 rounded-full text-sm py-1'>We are hiring!</h1>
      </div>
      <div className='right flex gap-10'>
        <ul className='flex items-center gap-7 font-light'>
          <li>Work</li>
          <li>Service</li>
          <li>About</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Cart <span className='bg-red-100 px-2 py-0.5  rounded-full text-center ml-1'>0</span></li>
        </ul>
          <Button text={"Get in touch"} style={"px-7 py-3 bg-black text-white rounded-full my-3"} />
      </div>
    </div>
  )
}

export default Navbar
