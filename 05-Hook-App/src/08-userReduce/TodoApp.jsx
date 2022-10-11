import { useTodo } from "../hooks/useTodo"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"




export const TodoApp = () => {

    const {todos,onDeleteTodo,handleToggleTodo,addTodo,calcPendings}=useTodo([]);
  
  return (
    <>
        <h1>TodoApp: 10 <small>Pendientes: {calcPendings()}</small></h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onToggleTodo={handleToggleTodo}/>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>

                <TodoAdd onNewTodo={addTodo}/>
            </div>
        </div>

        
    </>
  )
}
