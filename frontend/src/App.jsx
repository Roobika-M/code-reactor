import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AlgorithmCard from "./components/AlgorithmCard";
import Visualizer from "./pages/Visualizer";


function Home() {

  const [algorithms, setAlgorithms] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/api/algorithms")
      .then(res => {
        setAlgorithms(res.data);
      });

  }, []);


  return (
    <div>

      <h1>⚡ Code Reactor</h1>

      <div className="container">

        {algorithms.map((algo,index)=>(

          <AlgorithmCard
            key={index}
            algorithm={algo}
          />

        ))}

      </div>

    </div>
  );
}



function App(){

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route 
path="/visualizer"
element={<Visualizer/>}
/>

</Routes>

</BrowserRouter>

)

}


export default App;