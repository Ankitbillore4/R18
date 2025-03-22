import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { productContext } from '../utils/Context'
import Loading from './Loading'

const Home = () => {
  const [ products ] = useContext(productContext)
  console.log(products)
  return products ? (  
    <> 
    <Nav/>
    <div className='h-screen w-[80%] p-10 flex gap-5 flex-wrap pt-[5%] overflow-x-hidden overflow-y-auto'>
      {products.map((p,i) =>(
        <Link to={`/details/${p.id}`} className='card h-[35vh] w-[18%] shadow flex flex-col items-center'>
      <div className=' mb-3  h-[70%] w-full bg-contain bg-no-repeat bg-center hover:scale-110 my-5' style={{backgroundImage : `url(${p.image})`}}></div>
      <h1 className='hover:text-blue-200 '>{`${p.title}`}</h1>
    </Link> 
    ))}
    
  </div>
  </>
  ) : (
 <Loading />
  )
}

export default Home
