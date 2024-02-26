import { useMemo, useState } from "react"

const LIST=Array(1_000_000).fill().map((_,i)=>i+1)
//useMemo have to be used on large data sets to improve performance
//here when ever query changes it runs the UseMemo and store the new value
//else print same value as stored from last useMemo run.
function App(){

    const [query,setQuery]= useState("");
    const [isDarkMode, setIsDarkMode]= useState(false);

    const filteredList = useMemo(()=>{
        return LIST.filter(n=>n.toString().includes(query))
    },[query])
    console.log(filteredList.length);

    return (
        <div style={
            {
                background: isDarkMode? "#333": "white",
                color: isDarkMode? "white": "#333",
            }
        }
        >
            <label>
                Query: 
                <input value={query} onChange={e=> setQuery(e.target.value)}>
                </input>
            </label>
            <br></br>
            <label> 
                <input type="checkbox" onChange={e=>setIsDarkMode(e.target.checked)} checked={isDarkMode}></input>
                Dark Mode
            </label>
        </div>
    )
}
export default App;