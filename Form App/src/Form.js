import React, { useState } from "react";


function Form() {
    const [data,setdata] = useState({FirstName:"", LastName:"",RollNo:"", checkbox: false });

    function changeState (event){
        setdata((prevdata)=>({
                ...prevdata,
                [event.target.name]:event.target.type === "checkbox" ? event.target.checked : event.target.value
        }));
        console.log(data);
    }
  return (
    <>
    <div>
      <input type="text" placeholder="FirstName" name="FirstName" value={data.FirstName} onChange={changeState}/>

      <input type="text" placeholder="LastName" name="LastName" value={data.LastName} onChange={changeState}/>

      <input type="number" placeholder="RollNo" name="RollNo" value={data.RollNo} onChange={changeState}/>      

      <input type="checkbox" name="checkbox" value={data.checkbox} onChange={changeState}/>

    

    </div>
    
    <div className="bg-gray-100 h-60 w-60">
    <p>First Name : {data.FirstName}</p>
    <p>Last Name : {data.LastName}</p>
    <p>Roll No : {data.RollNo}</p>
    </div>
    </>
  );
}

export default Form;
