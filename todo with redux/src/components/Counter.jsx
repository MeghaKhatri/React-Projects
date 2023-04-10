import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,dlt} from '../redux/slices/TodoSlice';

function Counter() {

  const data = useSelector((state)=>state.todo.value);
  const dispatch= useDispatch();

  const [tasks,settasks] = useState("");

  const updatetask = (e)=>{
      settasks(e.target.value);
  }
  return (
    <div className='w-3/4 bg-blue-200 h-96 p-10  space-y-3 overflow-auto '>
      <div className='w-full bg-white p-4 flex justify-between '>
        <input type="text"
        onChange={updatetask}
        placeholder="write Taks's here"
        className='w-4/5 p-4' 
        />

        <button onClick={()=>dispatch(add(tasks))} className='w-1/4 bg-blue-400 text-white p-4 rounded'>ADD</button>
      </div>

      <div className=' flex flex-col gap-y-4'>
        {
          data .map((e)=>(

            <div key={e.id} className='flex w-full p-2 '>
            <p className='w-3/4  p-3'>{e.task}</p>
            <button onClick={()=> dispatch(dlt(e.id))} className='w-1/4 bg-blue-400 p-3 rounded-xl'>Del</button>

          </div> 
          )
          )
        }
      </div>
    </div>
  )
}

export default Counter
