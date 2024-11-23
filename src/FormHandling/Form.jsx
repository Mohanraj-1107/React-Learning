import { useState } from "react";
import "./form.css";

function Form()
{
    const [user,setUser]=useState({name:"Mohanraj",gender:"Male",status:"no",country:"India",description:"Hello everyone this is mohan"});
  return(
    <>
     <table>
        <tbody>
            <tr>
              <th>Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
               <th>Gender</th>
               <td>{user.gender}</td>
            </tr>
            <tr>
               <th>Status</th>
               <td>{user.status}</td>
            </tr>
            <tr>
                <th>Country</th>
                <td>{user.country}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>{user.description}</td>
            </tr>
        </tbody>
     </table>
     <form >
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter your name" name="name" value={user.name} id="name" onChange={changeHandle}/>
        <br />
          <div style={{display:"flex"}}>
            <label htmlFor="male">
              <input type="radio" name="gender" value="Male" id="male" onChange={changeHandle}/>Male
            </label>
              <label htmlFor="female">
              <input type="radio" name="gender" value="Female" id="female" onChange={changeHandle}/>Female
              </label> 
          </div>
         <br/>
          <div>
             <label htmlFor="status">
            <input type="checkbox" id="status" name="status" onChange={changeHandle}/>isMarried
            </label>
          </div>
         <br/>
          <label htmlFor="county">country</label>
         <select name="country" onChange={changeHandle}>
         <option value="India">India</option>
         <option value="USA">USA</option>
         <option value="UK">UK</option>
         </select>
         <label htmlFor="description" name="description"></label>
         <input type="textarea" id="description" name="description" placeholder="Enter your Description" onChange={changeHandle} value={user.description}/>
     </form>
    </>
  )
  function changeHandle(event)
  {
    const updatedUser={...user,[event.target.name]:event.target.value}
    setUser(updatedUser);
  }
}
export default Form;