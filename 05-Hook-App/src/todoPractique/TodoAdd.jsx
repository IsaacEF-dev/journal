import { useForm } from "../hooks/useForm"


export const TodoAdd = ({onNewTodo}) => {

    const{description,inputChange,onResetForm}=useForm({
        description:""
    })

    const todoSubmit=(event)=>{
        event.preventDefault();

        

        const newTodo={
            id: new Date().getTime()*2,
            todo:description,
            done:false
        }
        onNewTodo(newTodo)
        onResetForm();

    }

  return (
    <>
        <form >
            <input type="text" 
            placeholder="Agregar un nuevo todo"
            name="description"
            className="form-control"
            onChange={inputChange}
            value={description} />

            <button className="btn btn-primary mt-2"
            onClick={todoSubmit}>Agregar</button>
        </form>
    </>
  )
}

