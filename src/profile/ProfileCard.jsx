import "./main.css";
let items=["HTML","CSS","Javascript","java"]
let items2=["HtML","React","Node js","Express js"]
function ProfileCard()
{
    return(
        <div className="c1">
        <Profile Name="Mohanraj" Location="Tirpur" Role="Fullstack developer" items={items} image={"th.jpg"}/>
        <Profile Name="Sri krishna" Location="Erode" Role="Front-end developer" items={items2} image={"th.jpg"}/>
        <Profile Name="mohanraj" Location="Tirpur" Role="Fullstack developer" items={items} image={"th.jpg"}></Profile>
        <Profile Name="mohanraj" Location="Tirpur" Role="Fullstack developer" items={items} image={"th.jpg"}/>
        </div>

    )
}
function Profile(props)
{
    const items=props.items;
    const image=props.image;
    return(
        <>
          <div className="contain">
              <div>
                 <img src={image} alt="user"/>
              </div>
             <div className="details">
                   <h4>Name : {props.Name}</h4>
                   <h4>Location: {props.Location}</h4>
                   <h4>Role : {props.Role}</h4>
             </div>
             <h4>Skills</h4>
             <div className="skills">
                 <ul>
                    { 
                      items.map((item,index)=>
                          <li>{item}</li>
                    ) 
                    }
                 </ul>
             </div>
             <div className="buttons">
                    <button style={{backgroundColor:"royalblue"}}>Message</button>
                    <button>Following</button>
             </div>
           </div>
          </>
    )
}
export default ProfileCard;