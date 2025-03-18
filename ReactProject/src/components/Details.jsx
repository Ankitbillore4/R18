import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className='h-full w-[70%] m-auto p-[10%] flex justify-center items-center gap-10'>
     <img className='w-[30%] h-[80%] object-cover' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        <div className='content w-[50%]'>
            <h1 className='text-4xl'>Fjallraven-Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <h2 className='my-2 text-zinc-400'>men's clothing</h2>
            <h3 className='text-red-300'>$ 109.95</h3>
            <p className='text-sm mb-5'>Your perfect pack contain everyday use and walks in the forest. 
              Stash your laptop (up to 15 inches) the padded sleeve,
               your everyday</p>
               <Link className='text-sm mr-5 m-auto hover:scale-110 border border-blue-300 text-center py-1 px-3 shadow'>Edit</Link>
               <Link className='text-sm m-auto hover:scale-110  border border-red-600 text-red-300 text-center py-1 px-4 shadow'>Delete</Link>

        </div>
    </div>
  )
}

export default Details
