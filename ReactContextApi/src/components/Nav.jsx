import React, { useContext } from 'react'
import { productContext } from '../utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {
const [ products ] = useContext(productContext)
let distinct_category = products && products.reduce((acc,cv)=>[...acc,cv.category],[])
distinct_category = [...new Set(distinct_category)]
console.log(distinct_category);

const color = ()=>{
return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed(),0.4})`  
}
console.log(color());


  return (
    <>
       <nav className='h-full w-[20%] bg-zinc-200 '>
        <div className='flex flex-col'>
        <a className='my-8 m-auto hover:scale-110  text-lg border border-blue-300 text-center py-2 px-3 shadow '>Add New Product</a>
          <hr className='w-[80%] text-zinc-400 m-auto '/>
          <h1 className='text-xl text-center py-2 font-semibold'>Category Filter </h1>

        <div className='flex flex-col gap-5 mt-5 pl-9'>

      {distinct_category.map((c,i)=>(
      <Link  key={i} to={`/?category=${c}`} className='flex items-center gap-3 text-lg '><span style={{backgroundColor:color()}} className='h-4 w-4 rounded-full inline-block'></span>{c}</Link>
      ))}
        
        </div>
        </div>
      </nav>
      </>
  )
}

export default Nav
