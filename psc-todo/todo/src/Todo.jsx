import React, { useState } from 'react'

 function Todo (){
    const[inputValue, setInputValue] = useState(``);
    const[todos, setTodos] = useState([]);

 function handleChange(e){
     setInputValue(e.target.value);
 };

 function handleSubmit(){
   setTodos([...todos,
    {
        id : new Date().getTime(),
        title : inputValue,
        status : Math.random() < 0.5,
    }]
 )};

 function handleToggle(id){
    setTodos(todos.map((todo)=>{
        if(todo.id === id){
            return {...todo, status: !todo.status}
        }else{
           return todo 
        }
    }) )
 };

 function handleDelete(id){
    setTodos(todos.filter((todo)=> todo.id !== id))
 }

  return (
    <div style={{padding: `100px`,}}>
        <div style={{
           
            padding:`30px`,
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
        }}>
             <input type='text' placeholder='Enter Task' onChange={handleChange}/>
          <button style={{
            backgroundColor:`black`,
            color:`aqua`,
            marginLeft:`10px`
            }}
            onClick={handleSubmit}>Add Task</button>
            {todos.map((todo)=>
           (
           <div key={todo.id} style={{
            border:`1px solid black`,   
            margin:'auto',
            width:`30%`,    
            padding: `10px`,
            marginBottom: `20px`,
            marginTop:`20px`,
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            }}>
            <p>{todo.title}-{todo.status? `Completed`: `Not Completed`}</p>
           <button style={{
            backgroundColor:`black`,
            color:`aqua`,
            marginRight:`20px`
            }}
             onClick={()=>handleToggle(todo.id)}>Toggle</button>
           <button style={{
            backgroundColor:`black`,
            color:`aqua`,
            }}
            onClick={()=>handleDelete(todo.id)} >Delete</button>
        </div>
      )
      )}
      </div>
     
    </div>
  )
}

export default Todo
