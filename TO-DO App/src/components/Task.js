import React from 'react'

function Task({title, description,delhandler,index}) {
   
  return (
    <div className='flex bg-white items-center justify-between border-2 border-gray-400 px-2 mx-8  my-2'>
      <div className='w-5/6 '>
        <p className='font-bold text-xl text-gray-700'>{title}</p>
        <span className='font-semibold text-gray-500'>{description} </span>
      </div>
      <button className='rounded-xl bg-gray-600 text-white h-10 w-10 w-1/6' onClick={()=> delhandler(index)}>Del</button>
    </div>
  )
}

export default Task
