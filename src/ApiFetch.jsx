import { useEffect, useState } from "react"

export default function Apifetch(){
    
    //https://api.chucknorris.io/jokes/random
    const[users, setUser]=useState();
    const[loading, setLoading]=useState(true);
    const [error,setError]=useState();

    useEffect(()=>{
    setLoading(true);
    setError(undefined);
    setUser(undefined);
    const controller = new AbortController();
    fetch("https://api.chucknorris.io/jokes/random",{signal: controller.signal,})
    .then(res=>{
        if(res.status===200){
            return res.json()
        }
        else{
            return Promise.reject(res)
        }
    })
    .then((data) => {
        console.log("here");
        setUser(data);
        setLoading(false); // Move setLoading inside the successful data retrieval block
      })
      .catch((e) => {
        if (e?.name === "AbortError") return;
        setError(e);
        setLoading(false); // Move setLoading inside the error handling block
      });
    return () => {
        controller.abort();
    };
    
},[])

    let jsx;

    if (loading) {
        jsx = <h1>loading...</h1>;
    } else if (error != null) {
        jsx = <h1>error</h1>;
    } else {
        jsx = JSON.stringify(users.value);
    }
    

    return (
        <div>
            <h1>Users</h1>
            {jsx}     
        </div>
    )
}