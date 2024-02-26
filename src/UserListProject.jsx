import { useEffect, useState } from "react"
import { Users } from "./userElement";


function App(){
    const [users, setUser]=useState([]);
    const [isLoading, setIsloading]=useState(true);
    useEffect(()=>{
        setIsloading(true)
        const controller= new AbortController();

        fetch("https://jsonplaceholder.typicode.com/users",{signal: controller.signal})
        .then(res=>
            res.json())
        .then(setUser)
        .finally(()=>{
            setIsloading(false)
        })
        return ()=>{
            controller.abort();
        }
},[])
    return <>
    <h1>User List</h1>
    {isLoading ?(<h2>loading...</h2>):(<ul>
        {users.map(user=>{
            return <Users key={crypto.randomUUID()} {...user}></Users>
        })} 
    </ul> 
    )}
   
    </>
}

export  default App