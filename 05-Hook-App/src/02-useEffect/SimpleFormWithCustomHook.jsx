import { useState, useEffect} from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const SimpleFormCustomHook = () => {

    const{formState, inputChange,username,password,email,onResetForm} = useForm({
        username:"",
        email:"",
        password:""
    })

    // const {username,password,email}=formState;
    

  return (
    <>
        <h1>Form With Custom Hook</h1>
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

        <input 
         onChange={inputChange}
         type={"password"}
         className="form-control mt-3"
         placeholder="Jua123"
         name="password"
         value={password}
        />

        <button className="btn btn-primary mt-3 px-3 py-2" onClick={onResetForm}>Reset</button>

    </>
    
  )
}
