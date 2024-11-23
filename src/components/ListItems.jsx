import './style.css';
var classname="items";
function ListItems()
{
  function clicked()
  {
    alert("button clicked");
    classname="items2";
  }
    return(
        <>
        <div className="List-items">
          <ul>
            <li className={classname} onClick={clicked}>Home</li>
            <li className={classname}>About</li>
            <li className={classname}>Services</li>
          </ul>
        </div>
        </>
    )
    
}
export default ListItems;