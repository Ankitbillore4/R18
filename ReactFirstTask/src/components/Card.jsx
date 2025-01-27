import React from 'react'

const Card = () => {
  const data = [
    {heading:"Brand Strategy",description:"We help businesses define their unique brand message and branding positioning.",conclusion:"About Strategy"},
    {heading:"Visual Identity",description:"We create visual elements such as logos, packaging, and marketing materials for your brand.",conclusion:"About Identity"},
    {heading:"Digital Marketing",description:"We help businesses to promote their brand online and create engaging digital experiences",conclusion:"About Marketing"},
    {heading:"Brand Manage­ment",description:"We help businesses to implement their brand across all touchpoints and ensure consistency",conclusion:"About Management"},
  ]


  return (
    <>
    {data.map((item,index)=>{
       return  <div key={index} className='h-[22vw] w-[18vw] bg-[#F8F8F8]  flex flex-col items-start justify-center pl-8'>
        <h1 className='text-4xl font-light'>{item.heading}</h1>
        <p className='text-start font-extralight w-4/5 py-5 text-xl text-black/60'>{item.description}</p>
        <a href="#" className='font-light '>{item.conclusion}</a>
        </div>
      })}
      </>
  )
}

export default Card
