import React from 'react'
import Card from './Card';
function Cards({data ,removecard}) {
  return (
    <div className="box-border p-12 bg-gray-200 grid gap-12 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        {
            data.map((e)=>(<Card name={e.name} info={e.info} img={e.image} price={e.price} id={e.id}  removecard={removecard}/>))
        }
    </div>
  )
}

export default Cards;
