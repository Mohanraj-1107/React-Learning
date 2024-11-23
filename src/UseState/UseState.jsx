import { useState } from "react";
function UseState()
{
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Mohanraj");
    const [Age,setAge]=useState(20);
    const [user,setUser]=useState({name:"mohanraj",Age:20})
    const [user2,setUser2]=useState({fname:"mohan",lname:"raj",age:25})
    return(
        <div>
            <div>
             <h4>No of Items in cart : {count}</h4>
             </div>
             <div>
                <button onClick={()=>setCount(count+1)}>{count} Add to cart</button>
             </div>
             <div>
                <h4>{name}</h4>
                <h4>{Age}</h4>
                <br/>
                <button onClick={()=>setName("Mohan")}>Change Name</button>
                <button onClick={()=>setAge(30)}>Change Age</button>
             </div>
             <div>
                <h3>Object Model</h3>
                <h4>{user.name}</h4>
                <h4>{user.Age}</h4>
                <br />
                <button onClick={()=>setUser({...user,name:"raj"})}>Change Name</button>
                <button onClick={()=>setUser({...user,Age:50})}>Change Age</button>
             </div>
             <div>
                <h4>FisrtName : {user2.fname}</h4>
                <h4>LastName : {user2.lname}</h4>
                <h4>Age : {user2.age}</h4>
                <form>
                  <input type="text" name="fname" placeholder="Enter your firstname" onChange={changeHandle} />
                  <br />
                  <input type="text" name="lname" placeholder="Enter your lastname" onChange={changeHandle} />
                  <br />
                  <input type="number" name="age" placeholder="Enter your age"  onChange={changeHandle}/>
                 </form>
             </div>
        </div>

    )
    function changeHandle(event)
    {
       const updatedUser={...user2,[event.target.name]:event.target.value};
       setUser2(updatedUser);
    }
}
export default UseState;