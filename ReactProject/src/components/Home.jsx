import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (
    <>
    <Nav/>
    <div className='h-screen w-[80%] p-10 flex gap-5 flex-wrap pt-[5%] overflow-x-hidden overflow-y-auto'>
    <div className='card h-[35vh] w-[18%] shadow flex flex-col items-center'>
      <div className=' mb-3 h-[70%] w-full bg-contain bg-no-repeat bg-center hover:scale-110 my-5' style={{backgroundImage : "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}></div>
      <h1 className=''>Lorem ipsum dolor sit amet,</h1>
    </div>
  </div>
  </>
  )
}

export default Home
