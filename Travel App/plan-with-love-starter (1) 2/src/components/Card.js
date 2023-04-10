import React, { useState } from 'react'

function Card({name,info,img,price,id, removecard}) {
    const [wrap, setwrap]=useState("");
    const information = wrap ? info : `${info.substring(0,180)} ...`;

    function readmorehandle(){
        setwrap(!wrap )
    }

  return (
    <div className="bg-white w-6/6 p-2 rounded-md drop-shadow-xl hover:scale-105 hover:shadow-sm duration-300 ">
    <img className="w-full h-72" src={img} alt="" />
    <div className="text-green-600 font-bold text-xl " >Rs. {price}</div>
    <h2 className=" font-bold text-2xl">{name}</h2>
    <div className="w-full">{information} <span onClick={readmorehandle}>{wrap ? 'Show less' : 'Read more'}</span></div>
    <button className="w-2/6 bg-red-400 bg-red-400 text-gray-900 font-bold mt-2 rounded-md" onClick={()=>{removecard(id)}} >Not Interested</button>
    </div>
  )
}

export default Card;
