import { useEffect, useState } from "react"

export function SomeThing(){
    const [name, setName]=useState("");
    const [age, setAge]=useState(0);

    const change=useEffect(()=>{
        console.log("Re-Render");
})
    return<div>
        <input onChange={e=>{setName(e.target.value)}}></input>
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

export default App;