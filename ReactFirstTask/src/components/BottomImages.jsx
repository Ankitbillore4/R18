import React from 'react'
import SelectWork from './SelectWork'
import Button from './Button'

const BottomImages = () => {
  return (
    <div>
      <h1 className='border-b-1 py-4 font-light'>Our Team</h1>
    <div className='flex items-center justify-between px-14'>
      <SelectWork  text="Our Team of Experts"/>
      <Button btn="About Us" style=" w-[15vh] h-[6vh] border-1  rounded-full"/>
    </div>
    </div>
  )
}

export default BottomImages
