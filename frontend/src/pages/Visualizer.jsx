import { useState } from "react";

function Visualizer() {

  const [array, setArray] = useState([5, 2, 8, 1]);
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async function startSort() {

    setRunning(true);

    let arr = [...array];

    for(let i = 0; i < arr.length; i++) {

      for(let j = 0; j < arr.length - i - 1; j++) {

        setStep(
          `Comparing ${arr[j]} and ${arr[j+1]}`
        );

        await sleep(1000);


        if(arr[j] > arr[j+1]) {

          setStep(
            `Swapping ${arr[j]} and ${arr[j+1]}`
          );


          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;


          setArray([...arr]);

          await sleep(1000);
        }
      }
    }


    setStep("Completed ⚡");
    setRunning(false);
  }


  return (
    <div>

      <h1>
        ⚡ Bubble Sort Visualizer
      </h1>


      <div className="array">

        {array.map((num,index)=>(

          <span key={index}>
            {num}
          </span>

        ))}

      </div>


      <h3>
        {step}
      </h3>


      <button
        onClick={startSort}
        disabled={running}
      >
        Start
      </button>


      <p>
        Time Complexity: O(n²)
      </p>

      <p>
        Space Complexity: O(1)
      </p>


    </div>
  );
}


export default Visualizer;