import React from 'react'
import SelectWork from './SelectWork'
import Marketing from './Marketing'

const Invension = () => {
  return (
    <div className='h-[100vh] w-full bg-yellow-300 py-10'>
        <h1 className='pb-4 font-light'>Our Work</h1>
      <SelectWork/>
      <Marketing/>
    </div>
  )
}

export default Invension
