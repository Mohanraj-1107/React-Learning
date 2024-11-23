import { useState } from "react";
import "./Advice.css";
function Advice()
{
    const[advice,setAdvice]=useState("Please click the button");
    const[count,setCount]=useState(0);
    return (
        <div className="advice">
           <h3>{advice}</h3>
           <div>
              <button onClick={handleEvent}>Get Advice</button>
              <h3>Your advice count : {count} </h3>
           </div>
        </div>
    )
    function handleEvent()
    {
        fetch("https://api.adviceslip.com/advice").then((response)=>response.json()).then((advices)=>setAdvice(advices.slip.advice));
        setCount(count+1);
    }
}
export default Advice;