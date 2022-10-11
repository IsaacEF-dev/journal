import { useState } from "react"


export const App=({value})=>{
    const [counter,setCounter]=useState(value)

    const aumentarCounter=()=>{
        setCounter(counter+1);
    }
    const resetCounter=()=>{
        setCounter(value);
    }

    return(
        <>
            <h1 className="title">Counter App</h1>
            <p className="contador">{counter}</p>
            <button onClick={aumentarCounter}>Agregar</button>
            <button onClick={resetCounter}>Reset</button>
        </>
    )
}