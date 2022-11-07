import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
  const[text, setText] = useState("Enter the Addrees");
  const toUpper = ()=>{
    console.log("Hii");
    let newText = text.toUpperCase();
    setText(newText)
    props.showalert( "Convert to UpperCase", "success")
  }

  const toLower = (event)=>{
     
    const txt = text.toLowerCase();
    setText(txt);
    props.showalert( "Convert to LowerCase", "success")
  }
  const toChange = (event)=>{
    setText(event.target.value)
    console.log("onChange")
  }

  const firstLetterCapital = ()=>{
    let lowerCase = text.toLowerCase();
    let words = lowerCase.split(" ");
    let txt = words.map((first)=>{
      return first.charAt(0).toUpperCase() + first.slice(1);
    });
    let txt1 = txt.join(" ")
    setText(txt1)
    props.showalert( "Convert to First Capital Letter", "success")
  }

  let copyText = ()=>{
    let text = document.getElementById("Text");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert( "Copied the to clipboard", "success")
  }

  const clearSpace= ()=>{
    let a = text.split(/[ ]+/);
    let b = a.join(" ");
    setText(b);
    props.showalert( "Successfully remove the extra spaces", "success")
  }
  const toClear = ()=>{
  let ctxt = '';
    setText(ctxt)
    props.showalert( "clear", "success")
  }
  return (
    <>
            <div className="container">
            <h1>{props.heading}</h1>
            <label htmlFor="text">{props.title}</label>
            <textarea className="form-control" id="Text" value = {text} onChange={toChange} rows="np5"></textarea>
            <button className="btn btn-primary my-3" onClick={toUpper} >Convert To UpperCase</button>
            <button className="btn btn-secondary my-3 mx-2" onClick = {toLower}>Convert To Lower Case</button>
            <button className="btn btn-success my-3 mx-2" onClick={firstLetterCapital}>First letter Capital</button>
            <button className="btn btn-info my-3 mx-2" onClick={copyText}>Copy all Text</button>
            <button className="btn btn-warning my-3 my-2" onClick={clearSpace}>Clear Extra Spaces</button>
            <button className="btn btn-danger my-3 mx-2" onClick = {toClear}>Clear</button>
          </div>
    
    <div className="container">
      <h2 style = {{color :props.mode === "dark" ? "white":"black"}}>Text Summary </h2>
      <p  style = {{color :props.mode === "dark" ? "white":"black"}}><b>{text.length}</b> Characters and <b>{text.split(" ").length} </b>Words</p>
      <p  style = {{color :props.mode === "dark" ? "white":"black"}}>Time read to <b>{0.008 * text.split(" ").length} </b> Minutes </p>
      <h2>Preview</h2>
      <p className ="border border-primary" style = {{color : props.mode === "dark" ? "white":"black"}}>{text}</p>
    </div>

    </>
  )
}
