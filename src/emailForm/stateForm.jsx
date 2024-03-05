import { useState } from "react";
import { emailCheck, passwordCheck } from "./ErrorCheck";

export function StateForm(){

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const [emailErrors, setEmailError]=useState([]);
  const [passwordError, setPasswordError]=useState([]);

  const emailResult=emailCheck(email);
  const passwordResult=passwordCheck(password);
  
  
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
        <input className="input" type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        {emailErrors.length> 0 && <div className="msg">{emailErrors.join(",")}</div>}
      </div>
      <div className="form-group">
        <label className="label" htmlFor="password">Password</label>
        <input
          className="input"
          value={password}
          type="password"
          id="password"
          onChange={e=>setPassword(e.target.value)}
        />
      </div>
      {passwordError.length> 0 && <div className="msg">{passwordError.join(", ")}</div>}
      <button className="btn" type="submit">Submit</button>
    </form>
    )
}