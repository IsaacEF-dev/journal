

export const TodoItem = ({todos,onDeleteTodo,onHandleTodo}) => {

  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
            <p className={`align-self-center ${(todos.done) ? "text-decoration-line-through":""}` }
            onClick={()=>onHandleTodo(todos.id)}>
            {todos.todo}
            </p>
            <button 
            className="btn btn-danger"
            onClick={()=>onDeleteTodo(todos.id)}>
            Borrar
            </button>
        </li>
    </>
  )
}
