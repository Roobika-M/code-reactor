import { useLocation } from "react-router-dom";
import { useState } from "react";
import bubbleSort from "../algorithms/bubbleSort";
import mergeSort from "../algorithms/mergeSort";


function Visualizer() {
  const location = useLocation();
  const algorithm = location.state;
  const [steps] = useState(() => {


    if (algorithm.name === "Bubble Sort") {

      return bubbleSort([5,2,8,1]);

    }
    if (algorithm.name === "Merge Sort") {

      return mergeSort([5,2,8,1]);

    }
    return [
      {
        array:[5,2,8,1],
        message:"Starting",
        highlight:[]
      }
    ];

  });

  const [current,setCurrent] = useState(0);
  return (
    <div>
      <h1>
        ⚡ {algorithm.name}
      </h1>
      <div className="array">
        {
          steps[current].array.map((num,index)=>(
            <div
              key={index}
              className={
                steps[current].highlight.includes(index)
                ? "box active"
                : "box"
              }
            >
              {num}
            </div>

          ))

        }
      </div>
      <h3>
        {steps[current].message}
      </h3>
      <button
        onClick={() => {
          if(current < steps.length-1)
            setCurrent(current+1);
        }}
      >
        Next Step
      </button>
      <p>
        Step {current+1} / {steps.length}
      </p>
    </div>
  );
}
export default Visualizer;