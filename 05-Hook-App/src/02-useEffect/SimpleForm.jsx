import { useState, useEffect} from "react";
import { Message } from "./Message";


export const SimpleForm = () => {

    const [Form, setForm] = useState({
        username:"Isaac12",
        email:"IsaacEscutia@gmail.com"
    })

    const {username,email}=Form;

    const inputChange=({target})=>{
        const {name,value}=target
        setForm({
            ...Form,
            [name]:value,
        })
    }

    useEffect(() => {
    //   console.log("Changed form")
    }, [])

    useEffect(() => {
        // console.log("onChange Input")
    }, [Form])

    useEffect(() => {
        // console.log("Changed emial")
    }, [email])
    

  return (
    <>
        <h1>Simple Form</h1>
        <input 
         onChange={inputChange}
         type={"text"}
         className="form-control"
         placeholder="Fernando herrera"
         name="username"
         value={username}
        />

        <input 
         onChange={inputChange}
         type={"email"}
         className="form-control mt-3"
         placeholder="isaac@gmail.com"
         name="email"
         value={email}
        />

        {
            (username==="Isaac123") && <Message/>
        }
    </>
    
  )
}
