import { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import TodoItem from "./TodoItem";
import AddTask from "./AddTask";



function App() {
 
     const [err, setErr] = useState(null);
     const [todos, setTodos] = useState([]);
     const [loading, setLoading] = useState(false);
     const [page, setPage] = useState(1); 
     
    

const fetchTask = async (page) => {
      setLoading(true);
         try {
           const responce = await axios(`http://localhost:5000/posts?_limit=3&_page=${page}`);
           setTodos(responce.data);
           setLoading(false);
            
         } catch (error) {
          setErr(true);
          setLoading(false);
         }
    
      };

 useEffect(()=>{
            fetchTask(page);
          },[page]);    


  return (
    <div className="App">

     {err && (<div>something went wrong... please refresh</div>)}
     {loading? (<div>Loading...</div>) : (<TodoItem fetchTask={fetchTask} todos={todos} />)}

     <AddTask fetchTask={fetchTask} />

      <button disabled={page===1} onClick={() => setPage((prev) => prev - 1)}>Previous</button>
         <p>{page}</p>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>

    
    </div>
  );
}

export default App;
