import logo from './logo.svg';
import NavBar from './components/NavBar';
import BodyContent from "./components/BodyContent";
import ListItems from './components/ListItems';
import Props from "./components/Props";
import ProfileCard from "./profile/ProfileCard";
import QrCode from "./QrCode/QrCode";
import UseState from './UseState/UseState';
import Form from "./FormHandling/Form";
import Advice from "./AdviceApp/Advice";
import BMI from "./BMI/BMI";
import UseEffect from './UseEffect/UseEffect';
import Clock from "./clock/Clock";
import UseReducer from './UseReducer/UseReducer';
function App() {
  return (
    // <div className="App">
    //    <NavBar/>
    //    <div className="list" style={{display:'flex'}}>
    //    <ListItems/>
    //    <BodyContent/>
    //    </div>
    //    <Props name="mohan" Age={20} mark={70}></Props>
    //    <Props name="Raj" Age={21} mark={40}></Props>
    //    {/* default props */}
    //    <Props ></Props>
    // </div>
    //  <div className="App">
    //    <ProfileCard/>
    //  </div>
    // <QrCode/>
    // <UseState></UseState>
    // <Form/>
     //<Advice/>
     //<BMI/>
     //<UseEffect/>
    //  <Clock/>
    <UseReducer/>
  );
}

export default App;
