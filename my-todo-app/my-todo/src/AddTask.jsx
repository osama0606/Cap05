import axios from 'axios';
import React, { useState } from 'react'

const AddTask = ({fetchTask}) => {
    const [inpValue, setInpValue] = useState("");
  
   async function addtask(){
        try {
               await axios.post(`http://localhost:5000/posts`, 
            {
                title : inpValue,
                completed : false,
            });
            fetchTask();
            setInpValue("");
        } catch (error) {
            console.log(err);
        }
    }

  return (
    <div>
      <input type="text" value={inpValue} onChange={(e)=>{setInpValue(e.target.value)}} />
      <button onClick={addtask} >Add Task</button>
    </div>
  )
}

export default AddTask
