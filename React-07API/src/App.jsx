import React, { useState } from 'react'
import axios from "axios"

const App = () => {
   const [ProdectData, setProdectData] = useState([])
  const DataCalling = async ()=>{
 const Response = await axios.get("https://fakestoreapi.com/products")
 console.log(Response.data);
 setProdectData(Response.data)
  }
  return (
    <>
      <div className='flex items-center justify-center my-5 '>
        <button onClick={DataCalling} className='text-2xl px-4 py-2 bg-green-400 mt-4 rounded-lg'>Click</button>
        </div>
    <div className='flex flex-wrap gap-5'>
     {ProdectData.map((item,idx)=>{
       return <div key={idx} className='h-[35vw] w-72 rounded-lg bg-gray-100 shadow-xl flex flex-col items-center justify-center gap-5'>
      <div className='Image h-40 w-50 rounded-lg bg-green-300'>
        <img className='h-full w-full rounded overflow-hidden' src={item.image} alt="" />
      </div>
      <div className='py-6 flex flex-col gap-3 px-5'>
        <h1 className='text-sm'>Categeory : {item.category}</h1>
        <h2 className='text-sm'>Price : {item.price} </h2>
        <p className='text-xs'>Discription : {item.description}</p>
      </div>
      <div className='text-xs flex gap-4'>
        
        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg'>Add To Card</button>
        <button className='px-1 py-2 bg-red-500 text-white rounded-lg'>Remove To Card</button>

      </div>
    </div>
     })}
    </div>
     </>
  )
}

export default App
