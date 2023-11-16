import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData]  = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/customers')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }) 
  return (
    <div style ={{padding:"50px"}}>
     <table>
      <thead>
      <th>ID</th>
      <th>NAME</th>
      <th>AGE</th>  
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key ={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.age}</td>
          </tr>
        ))}
      </tbody>
     </table>
    </div>
  );
}

export default App;