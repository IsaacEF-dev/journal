import { useEffect, useReducer } from "react";
import {TodoReducer} from "../08-userReduce/TodoReducer"

const init=()=>{
    return JSON.parse(localStorage.getItem("todos"))||[];
}

export const useTodo = (initialState) => {



    const [todos, dispatch] = useReducer(TodoReducer, initialState,init);

    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos))
        calcPendings();
    }, [todos])
    
    const calcPendings=()=>{
        let cont=0;
        todos.forEach(todo => {
            if(todo.done!==true){
                cont++;
            }
        });
            
        return cont;
    }
    
    const addTodo=(value)=>{
    
        const newAction=
            {
                type:"[TODO] todo app",
                payload:value,
            }
        dispatch(newAction)
    }

    const onDeleteTodo=(id)=>{
        const todoDelete={
            type:"[TODO] Delete Todo",
            payload:id,
        }
            dispatch(todoDelete)
    }

    const handleToggleTodo=(id)=>{
        
        const todoToggle={
            type:"[TODO] Toggle",
            payload:id,
        }
            dispatch(todoToggle)
    }

  return{
    todos,
    addTodo,
    handleToggleTodo,
    onDeleteTodo,
    calcPendings
  }
}
