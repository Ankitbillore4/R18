import React from 'react'

const Nav = () => {
  return (
    <>
   
       <nav className='h-full w-[20%] bg-zinc-200'>
        <div className='flex flex-col'>
        <a className='my-7 m-auto hover:scale-110 text-lg border border-blue-300 text-center py-2 px-3 shadow '>Add New Product</a>
          <hr className='w-[80%] text-zinc-400 m-auto'/>
          <h1 className='text-xl text-center py-2 font-semibold'>Category Filter </h1>
        <ul className='flex flex-col gap-4 mt-5 pl-10'>
        <li className='flex items-center gap-2 text-xl '><span className='h-4 w-4 bg-green-300 rounded-full inline-block'></span>card 1</li>
        <li className='flex items-center gap-2 text-xl '><span className='h-4 w-4 bg-blue-300 rounded-full inline-block'></span>card 1</li>
        <li className='flex items-center gap-2 text-xl '><span className='h-4 w-4 bg-yellow-300 rounded-full inline-block'></span>card 1</li>
        <li className='flex items-center gap-2 text-xl '><span className='h-4 w-4 bg-red-300 rounded-full inline-block'></span>card 1</li>
        </ul>
        </div>
      </nav>
      </>
  )
}

export default Nav
