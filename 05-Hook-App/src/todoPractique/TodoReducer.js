

export const TodoReducer = (initialState,action) => {
  switch(action.type){
    case "[Todo] add todo":
        return [...initialState,action.payload];

    case "[Todo] Delete todo":
        return initialState.filter(todo=>{
            console.log(todo)
            return todo.id!==action.payload
        })
    
    case "[Todo] Handle Todo":
        return initialState.map(todo=>{
            if(todo.id==action.payload){
                
                return{
                    ...todo,
                    done:!todo.done
                }
            }
            return todo;
        })

    default:
        return initialState;
  }
}
