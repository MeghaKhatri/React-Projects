import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
function Login() {

  const navigate = useNavigate();
  function change (){
    navigate("/");

  }
  return (
    <div className='flex  h-screen items-center justify-center'>
   
    <div className=' w-2/4 flex flex-col bg-gray-200 rounded-lg shadow-lg p-8 space-y-5 '>
        <h1 className='text-4xl font-semibold text-center'>Welcome in F<span className='text-blue-400'>oo</span>die world</h1>
        <input type="text"  className='bg-blue-400 rounded-lg p-2 placeholder:text-slate-500 text-center font-semibold'placeholder='Email' />
        <input type="password" className='bg-blue-400 rounded-lg p-2 placeholder:text-slate-500 text-center font-semibold'placeholder='Password' />
        <button className='bg-black text-white font-semibold text-xl p-2 rounded-lg' onClick={change}>Login</button>
    </div>

    </div>
  )
}

export default Login
