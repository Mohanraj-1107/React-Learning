import "./BMI.css";
import {useState} from "react"
function BMI()
{
    const [search,setSearch]=useState("");
    const [height,setHeight]=useState();
    const [weight,setWeight]=useState();
    const [BMI,setBMI]=useState();
    const [status,setStatus]=useState();
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    return(
        <div>
          <div className="p1">
            <img src="BMI.jpg"/>
            <div className="content">
              <h4>BMI CALCULATOR</h4>
              {error && <center><p style={{color:"red"}}>Please Enter valid height and weight</p></center>}
            <label htmlFor="height">Height (In meter)</label>
            <input type="text" name="height" id="height" value={height} placeholder="Enter Height" onChange={handleHeight} />
             <label htmlFor="weight">Weight (In kg)</label>
             <input type="text" name="weight" id="height" value={weight} placeholder="Enter Weight" onChange={handleWeight}/>
             <button style={{backgroundColor:"rgb(8, 165, 8)",color:"white",textTransform:"uppercase"}} onClick={calculate}>calculate</button>
             <button style={{backgroundColor:"rgb(230, 5, 5)",color:"white",textTransform:"uppercase"}} onClick={clear}>clear</button>
             {loading && <div className="result">
                 <p>Your BMI is : <b>{BMI}</b></p>
                 <p>Status : <span style={{color:"green"}}>{status}</span> </p>
             </div>}
             </div>
          </div>
        </div>
    )
    function handleHeight(event)
   {
     setHeight(event.target.value);
   }
   function handleWeight(event)
   {
     setWeight(event.target.value);
   }
   function calculate()
   {
       if(!height|| !weight)
       {
           setError(true);
       } 
       else
       {
       setLoading(true);
       setError(false);
       var updated=(height/100);
       var valueset=weight/(updated*updated);
       setBMI(valueset.toFixed(2));
       if(valueset>24)
       {
          setStatus("overweight");
       }
       else if(valueset<=18)
       {
         setStatus("UnderWeight");
       }
       else if(valueset>18 && valueset<=24)
       {
         setStatus("Normal");
       }
       }
   }
  function clear()
  {
    setLoading(false);
    setError(false);
    setHeight("");
    setWeight("");
    setBMI("");
    setStatus("");
  }
}
export default BMI;