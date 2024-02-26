import { useCallback, useEffect, useState } from "react";
function App(){
    const [name, setName]=useState("")

    const[age, setAge]=useState(0);

    const printName= useCallback(()=>{
        console.log(`Name : ${name}`)
    },[name]);
//useCallback hook is used to change the dependency array when ever a specific object is changed.
//we directly pass the function to cover all the changeable values on which your function relies and its much more difficult to manage each and everything individually
    useEffect(()=>{
        console.log("In effect")
        printName()
    },[printName])

    return(
        <>
        <label>
            Name: 
            <input value={name} onChange={e=> setName(e.target.value)}>
            </input>
        </label>
        age: 
        <input type="number" value={age} onChange={e=> setAge(e.target.valueAsNumber)}>
            </input>
        </>
    )
}
export default App;