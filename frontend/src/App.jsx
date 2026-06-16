import { useEffect, useState } from "react";
import axios from "axios";
import AlgorithmCard from "./components/AlgorithmCard";

function App() {
  const [algorithms, setAlgorithms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/algorithms")
      .then((res) => {
        setAlgorithms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1> Code Reactor</h1>

      <div className="container">
        {algorithms.map((algo, index) => (
          <AlgorithmCard
            key={index}
            algorithm={algo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;