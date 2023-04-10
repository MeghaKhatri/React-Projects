import React, { useState } from 'react'
import Data from './data';
import Header from './components/Header';
import Cards from './components/Cards';


function App() {
  const [tours,settours]=useState(Data);
  function removecard (id){
    const newtour = tours.filter((e)=>{
      return e.id!==id
    })
    settours(newtour)
  }

  return (
    <div>
      <Header/>
      <Cards data={tours} removecard={removecard}/>
    </div>
  )
}

export default App;
