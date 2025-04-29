import React, { useState } from 'react'

const App = () => {
const [Val, setVal] = useState("")
const Handeler = (e)=>{
  e.preventDefault()
  
} 
  return (
    <div>
      <form className='m-12' onSubmit={(e)=>{
              Handeler(e)
              console.log(Val);
              setVal("")
      }}>
        <input onChange={(e)=>{
        setVal(e.target.value) 
      }}
        value={Val}
          className='border-2'
          type="text"
          placeholder="Enter your name" 
          />
        <button className='bg-blue-400 px-4 ml-4' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
