import React from 'react'
import Navbar from './components/Navbar'
import SectionOne from './components/SectionOne'
import Cards from './components/Cards'
import Slider from './components/Slider'
import Invension from './components/Invension'

const App = () => {
  return (
   <div>
      <Navbar />
       <SectionOne />
       <Slider/>
       <Cards/>
       <Invension/>

   </div>
  )
}

export default App
