import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { useTodo } from "./useTodo"


export const TodoApp = () => {

  const {AddTodo,onDeleteTodo,onHandleTodo,todos}=useTodo([]);

  return (
    <>
        <h1>TodoApp</h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                <TodoList onAddTodo={todos} onDeleteTodo={onDeleteTodo} onHandleTodo={onHandleTodo}/>
            </div>

            <div  className="col-5">
                <h4>Agregar Todo</h4>
                <hr/>
                <TodoAdd onNewTodo={AddTodo} />
            </div>
            
        </div>
    </>
  )
}
