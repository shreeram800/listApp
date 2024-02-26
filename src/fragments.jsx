import { useState } from "react";

export function fragments(){
    const[name, setName]=useState([
        {id:crypto.randomUUID(),name: "shreeram"},
        {id:crypto.randomUUID(),name: "krishna"}
    ])
    function addItems(){
        setName(current=>{
            return[{id: crypto.randomUUID(), name: "sidharth"},...current]
        })
    }
    return(
        <>
        <button onClick={addItems}> Add Items</button>
        <pre>
        {name.map(item=>(
            <div key={item.id}>{item.name} {//used to syncronize the input boxes with the items and here all keys have to be unique
            } 
            <input type="text"></input>
            </div>
        ))}
        </pre>
        </>
        // if we want to specify keys and avoid using div then we can use React.fragment instead of div or some other tag
    )
}//