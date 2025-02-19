import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
const [ImageData, setImageData] = useState([])

const Data = async ()=>{
 const Response =  await axios.get("https://api.thecatapi.com/v1/images/search")
 console.log(Response.data);
 setImageData(Response.data)
}
  return (
    <div>
      <button onClick={Data}>Clicked</button>
      <div>
        
        {ImageData.map((item,idx)=>{
     return <img className='h-32' src={item.url} alt="" />
        })}
      </div>
    </div>
  )
}

export default App
