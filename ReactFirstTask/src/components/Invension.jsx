import React from 'react'
import SelectWork from './SelectWork'
import Marketing from './Marketing'
import Button from './Button'

const Invension = () => {
  return (
    <div className='h-auto w-full py-10'>
        <h1 className='pb-4 border-b-1 font-light'>Our Work</h1>
      <div className='flex  items-center justify-between  px-10'>
      <SelectWork btn=" us" text="Selected Work"/>
      <Button btn="All Work" style="w-[15vh] h-[6vh] border-1 rounded-full"/>

      </div>
      <Marketing/>
    </div>
  )
}

export default Invension
