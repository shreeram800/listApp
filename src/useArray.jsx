import { useCallback, useState } from "react";

export function useArray(iArray){

    const [new_Array, setArray]=useState[iArray];

    const push = useCallback(element=>{
        setArray(a=>[...a,element])},[])


    function replace(index, newElement){
        setArray(a=>{
            return [...a.slice(0,index),newElement,...a.slice(index+1)]
        })
    }

    function filter(value){
        setArray(a=>{
            return a.filter(e=>{
                value
            })
        })
    }
    function remove(index){
        setArray(a=>{
            return [...a.slice(0,index),...a.slice(index+1)]
        })
    }

    function clear(){
        setArray([])
    }
    function reset(){
        setArray(iArray)
    }
    return [new_Array,setArray,push, replace,filter,remove,clear,reset];
}