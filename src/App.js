
import './App.css';
import About from './componenets/About';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import Alert from './componenets/Alert';
import React, {useState} from 'react';

{/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; */}
function App() {
  const[mode, setMode] = useState("dark")
   const[cmode, setCmode] = useState("Dark Mode");
  const[alert, setAlert] = useState(null);

    const showAlert = (msg, type)=>{
      setAlert({
        msg : msg,
        type : type
      });
        setTimeout(()=>{
          setAlert(null)
        },2000);
            
    }
   const changeMode = ()=>{
    if(mode === "dark"){
    setMode("light")
    setCmode("Dark Mode")
    document.body.style.backgroundColor = "white";
    showAlert("Light mode is enable", "success")
    document.title  ="Text Analyser - light Mode"
    }
    else {
      setMode("dark")
      setCmode("Light Mode");
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode is enable", "success")
      document.title  ="Text Analyser - Dark Mode"
    }
  }
    
 return(
  <>     {/* */}
  {/* <Router>*/} 
      <Navbar title = "TEXTUTILS" Home= "TextForm" mode = {mode}cmode = {cmode} changeMode= {changeMode} Search = "FIND"/>
      <Alert alert={alert}/>
   
      {/* <Routes>
                <Route exact path="/about" element={ <About />}>                 
                </Route>
              
                <Route exact path="/textform" element = {  <TextForm  showalert = {showAlert} title = "TEXTAREA" heading="Enter your text"/> }>
              
                </Route>
      </Routes>
      
 </Router>*/}
     {/*<About />
*/}      <TextForm  showalert = {showAlert} title = "TEXTAREA" heading="Enter your text"/>
  </>
 );
}

export default App;
