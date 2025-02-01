import React from 'react'
import Navbar from './components/Navbar'
import SectionOne from './components/SectionOne'
import Cards from './components/Cards'
import Slider from './components/Slider'
import Invension from './components/Invension'
import BottomCards from './components/BottomCards'
import Details from './components/Details'
import BottomImages from './components/BottomImages'
import BottomDetail from './components/BottomDetail'
import Page5 from './components/Page5'
import Page6 from './components/Page6'



const App = () => {
  return (
   <div>
      
      <Navbar />
       <SectionOne />
       <Slider/>
       <Cards/>
       <Invension/>
       <BottomCards/>
      <Details/>
      <BottomImages/>
      <BottomDetail/>
      <Page5/>
      <Page6/>
   </div>
  )
}

export default App
