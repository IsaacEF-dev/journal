import { useState } from "react"

export const useCounter = (value=10) => {
    const [Counter, setCounter] = useState(value)
    
    const increment=(val=1)=>{
        
        setCounter(Counter+val);
    }

    const decrement=(val=1)=>{
        setCounter(Counter-val);
    }

    const reset=()=>{
        setCounter(value);
    }

    return{
        Counter,
        increment,
        decrement,
        reset,
    }
}
