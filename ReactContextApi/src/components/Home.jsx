import React, { useContext, useEffect } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { productContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/Axios'

const Home = () => {
  const [ products ] = useContext(productContext);
  const {search} = useLocation()
  const category = decodeURIComponent(search.split("="),[0]);

  let filterProducts = products && products
  
  const getproductcategory = async ()=>{
    try {
      const {data} = await axios.get(`/products/category/${category}`)
      filterProducts = data
    } catch (error) {
      console.log(error);
      
    }
  };

  useEffect(()=>{
    if (category) getproductcategory();
  },[category])

  console.log(filterProducts);
  


  return products ? (  
    <> 
    <Nav/>
    <div className='h-screen w-[80%] p-10 flex gap-5 flex-wrap pt-[5%] overflow-x-hidden overflow-y-auto'>
      {products.map((p,i) =>(
        <Link key={p.id}  
        to={`/details/${p.id}`} className='card h-[35vh] w-[18%] shadow flex flex-col items-center'>
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
