import React from 'react'
import img from '../Assets/himg.jpg'

function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center space-y-5 m-10'>
        <h1 className='text-5xl '>Welcome to the F<span className='text-blue-400'>oo</span>die World</h1>
        <p className='text-xl text-gray-500 w-4/5 text-center'>A foodie is a person who has an ardent or refined interest in food, and who eats food not only out of hunger but also as a hobby.</p>
      </div>
      <div className='w-10/11 h-60'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Home
