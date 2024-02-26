import { useEffect, useRef, useState } from "react";
// you may think whats the use of useRef we can create a let var variable and change it on click but 
// it will change the variable in the global scope not in the scope of a React component
function App(){
    const[name , setName]= useState("");
    const refName= useRef();
    useEffect(()=>{
        refName.current.focus()
    },[])

    return(
        <>
            <label>
                Name: 
                <input ref={refName} value={name} onChange={e=>setName(e.target.value)}></input>
            </label>   
            <button onClick={()=>(refName.current=Math.random())}>change Ref</button> 
            <button onClick={()=>console.log(refName)}>print ref</button>    
        </>
    )
}
export default App;