import './App.css';
import React, { useState } from 'react'

function App() {
  
  const [count,setCount] = useState(0);
  let increase =()=> {
    setCount(count + 1)
  }
  let decrease =()=> {
    setCount(count - 1)
  }

  
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  )
}

export default App;
