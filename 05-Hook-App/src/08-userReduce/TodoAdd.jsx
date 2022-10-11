import { useState } from "react";
import { useForm } from "../hooks/useForm";


export const TodoAdd = ({onNewTodo}) => {
    const {inputChange,onResetForm,description}=useForm({
        description:""
    })


    const todoSumbit=(event)=>{
        event.preventDefault()

        if(description.length<1)return;

        const newTodo={
            id:new Date().getTime()*2,
            todo:description,
            done:false,
        }
        onNewTodo(newTodo)
        onResetForm();
    }


  return (
    <>
        <form>
            <input 
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={inputChange}
            />

            <button 
                onClick={todoSumbit}
                className="btn btn-primary mt-2"
                type="submit">Agregar
            </button>
        </form>
    </>
  )
}
