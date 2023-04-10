import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

  return (
    <div className='flex flex-col bg-white h-2/5 w-1/3 m-auto mt-10 p-4 rounded-xl space-y-8'>

<div className='bg-white p-4 border-2 border-blue-300 text-center rounded'>{count}</div>


     <div className='flex justify-between'>
     <button
      onClick={() => dispatch(increment())}  
      className='bg-blue-300 text-white font-bold h-fit p-4 rounded'
      >
        Increment
      </button>
      

      <button
      onClick={() => dispatch(decrement())} 
      className='bg-blue-300 text-white font-bold h-fit p-4 rounded'
      >
        Decrement
      </button>
     </div>
    </div>
  )
}

export default Counter
