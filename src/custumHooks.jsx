import {useState } from "react"

function App(){

    const [name,setName]= useState("");
    const [isDarkMode, toggleDarkMode]= useToggle(false);

    return (
        <div style={
            {
                background: isDarkMode? "#333": "white",
                color: isDarkMode? "white": "#333",
            }
        }
        >
            <label>
                Name: 
                <input value={name} onChange={e=> setName(e.target.value)}>
                </input>
            </label>
            <br></br>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
    )
}
function useToggle(initialValue){
    const [value, setValue]= useState(initialValue);
    function toggle(){
        setValue(current=>!current)
    }
    return [value, toggle]

}

//created custom hook to handle the toggling to light and dark mode\

export default App;