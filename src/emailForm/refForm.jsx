import { useEffect, useRef, useState } from "react";
import { emailCheck, passwordCheck } from "./ErrorCheck";

export function RefForm(){

  const email=useRef("");
  const password=useRef("");

  const [emailErrors, setEmailError]=useState([]);
  const [passwordError, setPasswordError]=useState([]);

  const emailResult=emailCheck(email);
  const passwordResult=passwordCheck(password);
  
  useEffect(()=>{
    console.log("Render");
  })
  function onSubmit(e){
    e.preventDefault()
    setEmailError(emailResult)
    setPasswordError(passwordResult)
    if(emailResult.length===0 && passwordResult.length===0){
      alert("Success")
    }
  }
    return(
    <form onSubmit={onSubmit} className="form">
      <div className={`form-group ${emailErrors.length>0 ? ".error" : ""}`}>
        <label className="label" htmlFor="email">Email</label>
        <input className="input" type="email" id="email" ref={email}/>
        {emailErrors.length> 0 && <div className="msg">{emailErrors.join(",")}</div>}
      </div>
      <div className="form-group">
        <label className="label" htmlFor="password">Password</label>
        <input
          className="input"
          type="password"
          id="password"
          ref={password}
        />
      </div>
      {passwordError.length> 0 && <div className="msg">{passwordError.join(", ")}</div>}
      <button className="btn" type="submit">Submit</button>
    </form>
    )
}