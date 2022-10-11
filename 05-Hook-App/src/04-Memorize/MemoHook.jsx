import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff=(value=3000)=>{
  for (let i  = 0; i  <  value; i ++) {
  }

  return value;
}


export const MemoHook = () => {

    const {Counter,increment}=useCounter(4000)
    const [show, setShow] = useState(true)
    
    const memorizedValue=useMemo(() => heavyStuff(Counter), [Counter])

  return (
   <>
    <h1>Counter: <small>{Counter}</small></h1>
    
    <hr/>

    <h4>{memorizedValue}</h4>

    <button className="btn btn-primary"
    onClick={()=>increment()}>+1</button>

    <button className="btn btn-outline-primary"
    onClick={()=>setShow(!show)}>Show/hide {JSON.stringify(show)}</button>
   </>
  )
}
