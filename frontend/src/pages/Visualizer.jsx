import { useLocation } from "react-router-dom";
import { useState } from "react";

function Visualizer() {

  const location = useLocation();
  const algorithm = location.state;

  const [array, setArray] = useState([5,2,8,1]);
  const [step, setStep] = useState(0);


  function nextStep(){

    if(step === 0){
      setArray([2,5,8,1]);
      setStep(1);
    }
    else if(step === 1){
      setArray([2,5,1,8]);
      setStep(2);
    }
    else if(step === 2){
      setArray([2,1,5,8]);
      setStep(3);
    }

  }


  return (
    <div>

      <h1>
        ⚡ {algorithm.name}
      </h1>


      <h3>
        Time: {algorithm.timeComplexity}
      </h3>


      <div className="array">

        {array.map((num,index)=>(

          <div className="box" key={index}>
            {num}
          </div>

        ))}

      </div>


      <button onClick={nextStep}>
        Next Step
      </button>


      <p>
        Step: {step}
      </p>


    </div>
  );
}


export default Visualizer;