import React from 'react'

const Card = (props) => {
  return (
    <div className='h-60 w-60 bg-white p-4 rounded-lg'>
      <h1 className='text-2xl py-2'>{props.name}</h1>
      <h1 className='text-sm '>{props.details}</h1>
      <h1 className='text-xs py-2'>{props.age}</h1>
    </div>
  )
}

export default Card
