import axios from '../utils/Axios'
import React, { createContext, useEffect, useState } from 'react'

export const productContext = createContext();

const Context = (props) => {
    const [products, setproducts] = useState(null)

    
    const getproducts = async ()=>{
        try {
            const {data} = await axios("/products")
            setproducts(data)
            
        } catch (error) {
            console.log(error);
            
        }
    };

    useEffect(()=>{
getproducts();
    },[])




  return (
    <div>
        <productContext.Provider value={[products, setproducts]}>
            {props.children}
        </productContext.Provider>
    </div>
  )
}

export default Context
