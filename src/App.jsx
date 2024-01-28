import { useState } from "react"


export default function App()
{  
  const [array, setArray] = useState(["A", "B","C"])
  function removeFistElement(){
    setArray(current=>{
      return current.slice(1);
    })
  }
  function specificLetter(letter){
    setArray(current=>{
      return current.filter(a=>{
        if(a!=letter){
          return a;
        }
      })
    })
  }
  function AddLetter(letter){
      setArray(current=>{
        return [letter,...current]
      })
  }

  function RemoveAll(){
    setArray(current=>{
      return [];
    })
  }
  function replaceSpecific(letter){
    setArray(
      current=>{ return current.map(a=>{
        if(a===letter){
          return "H";
        }
          return a;
      })
    });
  }
  return <div>

    <button onClick={removeFistElement}> Remove element</button>
    <br></br>
    <button onClick={()=>specificLetter("B")}> Specific Letter</button>
    <br></br>
    <button onClick={()=>AddLetter("Z")}>add element</button>
    <br></br>
    <button onClick={()=>RemoveAll()}>Remove All</button>
    <br></br>
    <button onClick={()=>replaceSpecific("A")}>Replace with H</button>
    {array.join(",")}
  </div>
}  