import { useState,useEffect } from "react";
import "./clock.css";
function Clock()
{
    const [currentTime,setCurrentTime]=useState(new Date());
    useEffect(function()
   {
    const Time=setInterval(function()
    {
    setCurrentTime(new Date());
     },1000);
     return ()=>clearInterval(Time)
     },[])

     function getDate(date)
     {
        const options={weekday:"long",month:"long",day:"numeric",year:"numeric"}
        return date.toLocaleDateString(undefined,options);
     }
     function formatTime(time)
     {
        if(time==0)
        {
            return time+12;
        }
         else if(time>12 )
         {
             return time-12;
         }
         else if(time>12)
         {
             return time;
         }
     }
     function addZero(val)
     {
        if(val>=10)
        {
            return val;
        }
        else{
            return `0${val}`
        }
     }
    return(
        <div>
            <div className="all">
                <div>
                    <h2 style={{color:"orangered"}}>Digital Clock</h2>
                </div>
                <div className="time">
                    <h3>{addZero(formatTime(currentTime.getHours()))} : {addZero((currentTime.getMinutes()))} : {addZero((currentTime.getSeconds()))}
                        {(currentTime.getHours()>=12 ? " PM":" AM" )}
                    </h3>
                </div>
                <div className="date">
                    <h3>{getDate(currentTime)}</h3>
                </div>
            </div>
        </div>
    )
}
export default Clock;