

import { TodoItem } from './TodoItem'

export const TodoList = ({onAddTodo,onDeleteTodo,onHandleTodo}) => {
  return (
    <>
        <ul className="list-group">
            {
                onAddTodo.map(todo=>{
                    return (<TodoItem key={todo.id} todos={todo} onDeleteTodo={onDeleteTodo} onHandleTodo={onHandleTodo}/>)
                })
            }
            
        </ul>
    </>
  )
}
