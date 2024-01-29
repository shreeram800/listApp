import { useState } from "react";


 export default function Counter(){
    const [name, setName]=useState("Shreeram");
    const [age, setAge]=useState(27);
    return <div>
        <input value={name} onChange={e=>setName(e.target.value)}></input>
        <br></br>
        <br></br>
        <button onClick={()=>setAge(current=>current-1)}>-</button>
        {age}
        <button onClick={()=>setAge(current=>current+1)}>+</button>
        <br></br>
        <br></br>
         My name is {name} and my age is {age}
    </div>
 }