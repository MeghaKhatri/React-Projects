import React from 'react'

function Cover({heading,img1,img2,img3}) {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-semibold m-10 '>{heading}</h1>

      <div className='flex space-x-8 mt-10 '>
        <img src={img1} alt=""  className='w-80 cursor-pointer'/>
        <img src={img2} alt=""  className='w-80 cursor-pointer'/>
        <img src={img3} alt=""  className='w-80 cursor-pointer'/>
      </div>

      <div className=' bg-blue-400 rounded-full p-2 px-10 m-10 text-center font-semibold text-md cursor-pointer'>
        Show More
      </div>
    </div>
  )
}

export default Cover
