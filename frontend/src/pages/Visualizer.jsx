import { useParams } from "react-router-dom";

function Visualizer(){

  const { name } = useParams();

  return (
    <div>

      <h1>
        ⚡ {name} Visualizer
      </h1>


      <div className="array">

        <span>5</span>
        <span>2</span>
        <span>8</span>
        <span>1</span>

      </div>


      <h3>
        Time Complexity: O(n²)
      </h3>

    </div>
  );

}

export default Visualizer;