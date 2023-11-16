import React, { useState } from 'react'

function Getdata()  {
 const [data, setData] = useState([]);
 const [loading , setLoading] = useState(false);
console.log(data)

 async function handleGetData(){
    setLoading(true)
    try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const jsonData = await responce.json();
        // console.log(jsonData)
        setData(jsonData);
        setLoading(false)
    } catch (error) {
       console.log(error); 
    }
}
if(loading){
    return <h1>Loding...</h1>
}

  return (
    <div>
        <h1>My Data</h1>
      <button onClick={handleGetData}>Get Data</button>
      {data.map((item)=>(
        <div style={{
            border:'1px solid',
            width:'50%',
            margin:'auto'
            }}>
            <h1>{item.title}</h1>
            
        </div>
      ))}
    </div>
  )
}

export default Getdata
