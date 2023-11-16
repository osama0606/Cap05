import axios from 'axios'
import React from 'react'


const TodoItem = ({fetchTask, todos}) => {

async function toggleStatus(id){
  const todo = todos.find((ele)=>{ele.id===id});
  try {
    await axios.patch(`http://localhost:5000/posts/${id}`,{
      completed: !todo.completed,
    });
    fetchTask();
  } catch (error) {
    console.log(error);
  }
}


async function deleteTodo(id){
        try {
            await axios.delete(`http://localhost:5000/posts/${id}`);
            fetchTask();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      {todos.map((todo)=>(
        <div key={todo.id}>
            <span   style={{ textDecoration: todo.completed ? "line-through" : "none" }} onCanPlay={()=>toggleStatus(todo.id)}>{todo.title}</span>
            <button onClick={()=>deleteTodo(todo.id)} >Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TodoItem
