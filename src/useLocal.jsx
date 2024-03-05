import { useEffect, useState } from "react";

export function useLocalStorage(key, initial){
    const [value,setValue]=useState(()=>{
        const localValue= localStorage.getItem(key)
        if(localValue==null){
            if(typeof initial==="function"){
                return initial();
            }
            else{
                return initial                
            }
        }
        else{
            return JSON.parse(localValue);
        }
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value]);
    return [value, setValue]

}