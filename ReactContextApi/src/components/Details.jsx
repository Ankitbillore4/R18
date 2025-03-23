import axios from '../utils/Axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const Details = () => {
const [product, setproduct] = useState(null)

  const {id} = useParams();
  console.log(id);
  
const getsingleproducts = async () =>{
  try {
    const {data} = await axios.get(`/products/${id}`);
   setproduct(data);
    
  } catch (error) {
    console.log(error);
    
  }
};
useEffect(()=>{
getsingleproducts()
},[])



  return ( product ?
    <div className='h-full w-[70%] m-auto p-[10%] flex justify-center items-center gap-10'>
     <img className='w-[30%] h-[80%] object-cover' src={`${product.image}`} alt="" />
        <div className='content w-[50%]'>
            <h1 className='text-4xl'>{product.title}</h1>
            <h2 className='my-2 text-zinc-400'>{product.category}</h2>
            <h3 className='text-red-300'>$ {product.price}</h3>
            <p className='text-sm mb-5'>{product.description}</p>
               <Link className='text-sm mr-5 m-auto hover:scale-110 border border-blue-300 text-center py-1 px-3 shadow'>Edit</Link>
               <Link className='text-sm m-auto hover:scale-110  border border-red-600 text-red-300 text-center py-1 px-4 shadow'>Delete</Link>

        </div>
    </div> : <Loading/>
  )
}

export default Details
