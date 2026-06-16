import { useEffect, useState } from "react";
import axios from "axios";


function App(){
  const [algorithms,setAlgorithms] = useState([]);
  useEffect(()=>{
    axios.get(
      "http://localhost:8080/api/algorithms"
    )
    .then(res=>{
      setAlgorithms(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[]);

  return (
    <div>
      <h1> Code Reactor</h1>
      {algorithms.map((algo,index)=>(
        <div key={index}>
          <h2>{algo.name}</h2>
          <p>
            Category: {algo.category}
          </p>
          <p>
            Time: {algo.timeComplexity}
          </p>
          <p>
            Space: {algo.spaceComplexity}
          </p>
          <hr/>
        </div>
      ))}
    </div>
  )
}

export default App;