import React from 'react'
import Card from './components/Card'

const App = () => { // changes
  return (
    <div className='h-screen w-full bg-blue-300 p-8 flex gap-5'>
      <Card name="vivek" details="chandani chouk to chaina" age="221" />
      <Card name="shivam" details="bhopal to hbd" age="261" />
    </div>
  )
}

export default App
