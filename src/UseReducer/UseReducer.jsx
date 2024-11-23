import { useReducer } from "react";
import "./reduce.css";
const initialstate=[];
let count=0;
function UseReducer()
{
    function reducer(state,action)
    {
        switch(action.type)
        {
            case "ADD_TASK":
                console.log(action.id,action.text);
                return [...state,{id:action.id,text:action.text}];
            case "DELETE":
                console.log(action.text);
                return state.filter((item)=>item.text!==action.text);
        }
    }
    function handle(e)
    {
        var current=document.getElementById("input").value;
        dispatch({id:count=count+1,text:current,type:"ADD_TASK"});
    }
    function deleting(item)
    {
        var el=item.target.parentElement;
        console.log(el);
        dispatch({text:el.innerText,type:"DELETE"})
    }
    const[state,dispatch]=useReducer(reducer,initialstate);
    return(
        <div className="c3">
              <input type="text" id="input"/>
              <button onClick={(e)=>handle(e)} >Add Task</button>
              <ul>
                {state.map((item,index)=>(
                     <li key={index}>{item.text}<button onClick={(item)=>deleting(item)}>Delete</button></li>
                ))}
              </ul>
        </div>
    )
}
export default UseReducer;