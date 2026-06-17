import { useLocation } from "react-router-dom";
import { useState } from "react";
import bubbleSort from "../algorithms/bubbleSort";


function Visualizer(){

const location = useLocation();

const algorithm = location.state;


const [steps] = useState(
  bubbleSort([5,2,8,1])
);


const [current,setCurrent] = useState(0);



return (

<div>


<h1>
⚡ {algorithm.name}
</h1>


<div className="array">


{
steps[current].map((num,index)=>(

<div className="box" key={index}>
{num}
</div>

))
}


</div>


<button
onClick={()=>{

if(current < steps.length-1)
setCurrent(current+1);

}}
>
Next
</button>


<p>
Step {current+1}/{steps.length}
</p>


</div>

)

}


export default Visualizer;