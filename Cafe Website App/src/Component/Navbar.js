import React from 'react'
import { Link } from 'react-router-dom'


function Navbar({login,setlogin}) {
  return (
    <div className='bg-gray-100 w-full h-20 flex justify-between items-center p-10'>
      <div className='  cursor-pointer'>
         <Link to="/"><h1 className='font-bold text-5xl'>F<span className='text-blue-400'>oo</span>die</h1></Link>
        </div>


      <div className='text-lg font-semibold flex justify-between w-2/5'>
        <Link to="/" className='text-blue-400'>Home</Link>
        <Link to="/snacks">Snacks</Link>
        <Link to="/dessert">Dessert</Link>
        <Link to="/healthy">Healthy</Link>
      </div>

      <div className='flex w-40 font-semibold justify-between'>
        <Link to="/login" className='bg-blue-300 p-2 rounded-xl'>Log In</Link>
      
        <Link to="/" className='bg-blue-300 p-2 rounded-xl'>
        <button onClick={()=>{setlogin(false)}}>LogOut</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
