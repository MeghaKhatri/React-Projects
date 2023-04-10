import React, { useState } from "react";
import Task from "./Task";
function Home() {
  const [tasks, settasks] = useState([]);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  
  const submithandler = (e) => {
    e.preventDefault();
    settasks([
      ...tasks,
      {
        title,
        description,
      },
    ]);
  };

  const delhandler = (index) =>{
    const newdata = tasks.filter((val,i)=>{
        return i !==index;
    })
    settasks(newdata);
  }
  console.log(tasks);

  return (
    <div className="bg-gray-100 h-fit w-2/3 m-auto p-5 shadow-2xl">
      <form className="flex flex-col space-y-2 p-8" onSubmit={submithandler}>
        <input
          type="text"
          placeholder="Title"
          className="p-2 border-2 border-gray-400  rounded placeholder:text-center text-xl"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="p-2 border-2 border-gray-400 rounded placeholder:text-center text-xl "
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="p-3 bg-gray-500 text-white font-semibold hover:bg-gray-600 text-xl rounded"
        >
          ADD
        </button>
      </form>

      {tasks.map((obj, index) => (
        <Task 
        key={index}
        title={obj.title} 
        description={obj.description} 
        delhandler={delhandler}
        index={index}
        />
      ))}
    </div>
  );
}

export default Home;
