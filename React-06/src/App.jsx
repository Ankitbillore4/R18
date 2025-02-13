import React from 'react'

const App = () => {
const Handeler = (e)=>{
  console.log("helooo",e);
  e.preventDefault()
  
}

  return (
    <div>
      <form className='m-12' onSubmit={(e)=>{
        Handeler(e);
      }}>
        <input className='border-2' type="text" placeholder="Enter your name" />
        <button className='bg-blue-400 px-4 ml-4' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
