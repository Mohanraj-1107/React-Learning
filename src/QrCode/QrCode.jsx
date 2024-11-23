import { useState } from 'react';
import './QrCode.css';
function QrCode()
{
    const [image,setImage]=useState("");
    const [loading,setLoading]=useState(false);
    const [urls,setUrls]=useState("");
    const [sizes,setSizes]=useState();
    return(
       <div className="total">
          <h4>QR CODE GENERATOR</h4>
          { image && <img src={image} className="images"/>}
         {loading && <center><p>Please wait...</p></center>}
         <div className="qrcontain">
           <label htmlFor="data">Data for QR</label>
            <input type="text" id="data" onChange={(e)=>setUrls(e.target.value)} value={urls}></input>
            <label htmlFor="size">Enter size</label>
              <input type="number" id="size" onChange={(e)=>setSizes(e.target.value)} value={sizes}/>
         </div>
         <div className="buttons">
            <button onClick={()=>clicked()} disabled={loading}>Generate QR</button>
            <button onClick={()=>download()}>Download QR</button>
         </div>
       </div>
    )
    function download()
    {
       fetch(image).then((response)=>response.blob()).then((blob) =>{
         const link=document.createElement("a");
         link.href=URL.createObjectURL(blob);
         link.download="Qr.png";
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
       }).catch((error)=>
       {
         console.log(error);
       })
    }
    async function clicked()
    {
        setLoading(true);
        try
        {
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${sizes}×${sizes}&data=${encodeURIComponent(urls)}`;
        setImage(url);
        }
        catch(error)
        {
            console.log(error);
        }
        finally
        {
         setLoading(false);
        }
    }
}
export default QrCode;
