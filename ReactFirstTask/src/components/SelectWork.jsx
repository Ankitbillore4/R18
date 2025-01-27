import React from 'react'
import Button from './Button'

const SelectWork = () => {
  return (
    <div className='h-20 w-full bg-red-600 flex items-center justify-between px-14 border-t-1'>
      <h1 className='text-6xl font-light'>Selected Work</h1>
      <Button text={'All Work'} style={'px-7 py-2 border-2 border-black rounded-full'} />
    </div>
  )
}

export default SelectWork
