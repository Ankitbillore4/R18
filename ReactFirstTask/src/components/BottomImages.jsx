import React from 'react'
import SelectWork from './SelectWork'
import Button from './Button'

const BottomImages = () => {
  const data = [{
    img:"./images/PeopleImg1.webp",
    p:"Annette Black",
    btn:"Branding"
  },
  {
    img:"./images/PeopleImg2.webp",
    p:"Devon Lane",
    btn:"Branding"
  },
  {
    img:"./images/PeopleImg3.webp",
    p:"Chris Watson",
    btn:"Marketing"
  }

]
  return (
    <div className=' py-2'>
      <h1 className='border-b-1 py-4 font-light'>Our Team</h1>
    <div className='flex items-center justify-between px-14'>
      <SelectWork  text="Our Team of Experts"/>
      <Button btn="About Us" style=" w-[15vh] h-[6vh] border-1  rounded-full"/>
    </div>
    <div className='flex gap-10 m-4 justify-center '>
    <div className='h-[70vh] w-72 bg-[#F1F6F5] p-10 '>
      <h1 className='font-light'>Join the Team</h1>
      <h2 className='text-4xl font-light py-3'>Want to shape the future of branding?</h2>
      <p className='text-lg font-light py-5'>Join us and shape the future of branding today!</p>
      <Button btn="Apply Now" style="bg-black text-white py-3 px-7 text-md rounded-full"/>
    </div>

        {data.map((item, index)=>{
          return <div key={index} className='h-[65vh] w-72'>
           <div className='h-[90%] w-full bg-pink-400'>
            <img className='h-full w-full object-cover' src={`${item.img}`} alt="" />
           </div>
           <div className='flex items-center justify-between px-3'>
            <h1 className='text-lg font-light'>{item.p}</h1>
            <button className='px-4 py-1 border-1 rounded-full mt-2'>{item.btn}</button>
           </div>
        </div>
        })}
    
    </div>
    </div>
  )
}

export default BottomImages
