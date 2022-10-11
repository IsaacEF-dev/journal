import { useEffect } from "react";
import { useReducer } from "react"
import { TodoReducer } from "./TodoReducer";

const init=()=>{
    return JSON.parse(localStorage.getItem("todos"));
}

export const useTodo = (initialState) => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  
  }, [todos])
  

  const AddTodo=(value)=>{
        const addTodo={
            type:"[Todo] add todo",
            payload:value,
        }

        dispatch(addTodo);
  }

  const onDeleteTodo=(value)=>{

    const onDelete={
        type:"[Todo] Delete todo",
        payload:value
    }

    dispatch(onDelete);
  }

  const onHandleTodo=(value)=>{
    const onHandle={
        type:"[Todo] Handle Todo",
        payload:value,
    }
    console.log(value)
    dispatch(onHandle);
  }

  return{
    AddTodo,
    onDeleteTodo,
    onHandleTodo,
    todos,
  }
}
