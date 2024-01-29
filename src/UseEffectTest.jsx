import { useEffect, useState } from "react";

export function Child(){

    const [name, setName]=useState("")
    const [age, setAge]=useState(0);

    useEffect(()=>{
        console.log("Name was changed", name)
    }, [name]);
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            console.log("Re render")
        }, 1000);
        return ()=>{
            clearTimeout(timeout)
        }
    } , [name])

    // useEffect will run when the passed variable in an array will change 
    return (<div>
        <input value={name} onChange={e=> setName(e.target.value)}></input>
        <br/>
        <button onClick={()=>setAge(current=>current-1)}>-</button>
        {age}
        <button onClick={()=>setAge(current=>current+1)}>+</button>
        <br></br>
        <br></br>
         My name is {name} and my age is {age}
    </div>)
}