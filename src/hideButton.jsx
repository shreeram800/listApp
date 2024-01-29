import { useState } from "react"
import { SomeThing } from "./showHideUseEffect";
import { Child } from "./UseEffectTest";

export function ButtonSpec(){

    const[show, setShow]=useState(true);
    const chidComponent= show ?  <Child></Child> : null;

    return <div>
        <button onClick={()=>setShow(current=>{setShow(!current)})}>show/hide</button>
        {chidComponent}
    </div>
}