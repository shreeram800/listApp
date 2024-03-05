import { useEffect, useRef, useState } from "react"

export default function App(){
    //use ref is used where constant update in the object is not required such as form where change is required at the submit button click
    //const [name, setName]=useState("");
    const name=useRef("");
    function handleSubmit(e){
        e.preventDefault();
        if(name===""){
            return 
        }
        else{
            alert(`Name: ${name}`)
        }
    }
    useEffect(()=>{
        console.log("Render");
    })
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <br></br>
            {//<input type="text" id="name" onChange={e=>setName(e.target.value)} ></input>
            }
            <input type="text" id="name" ref={name}></input>
            <br/>
            <br/>
            <br/>
            <button>Altert Name</button>
        </form>
    ) 
}