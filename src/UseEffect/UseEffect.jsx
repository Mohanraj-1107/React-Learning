//Types of useeffect
//1).without dependency array the use effect is call for every mouent i webpage for every action it will be called.
//2).Empty dependency - it will work only once when the browser is load after once it never called.
//3).With dependency -it will called when the particular changes are made on the elements that present in the dependency array.
const { useEffect, useState } = require("react")
function UseEffect()
{
    const[count,setCount]=useState(0);
    const[Time,setTime]=useState(0);
  useEffect(function()
  {
       console.log("use effect");
  },[count])
    return(
        <div>
           <h3>Count : {count}</h3>
           <h3>Time : {Time}</h3>
           <button onClick={()=>{setCount(count+1)}}>+</button>
           <button onClick={()=>{setCount(count-1)}}>-</button>
           <button onClick={()=>{setTime(Time+1)}}>T</button>
        </div>
    )
}
export default UseEffect;