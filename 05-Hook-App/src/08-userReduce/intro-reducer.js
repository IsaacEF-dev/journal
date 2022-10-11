const initialTodo=[{
    id:1,
    todo:'Recolectar la piedra del alma',
    done: false
}]

const todoReducer=(state=initialTodo, action={})=>{

    if(action.type==="[TODO] add todo"){
        console.log("entro")
        return [...state,action.payload]
    }

    return state;
}

let todos=todoReducer();

const newTodo={
    id:2,
    todo:'Recolectar la piedra del poder',
    done:false
}

const addActionReduce={
    type:"[TODO] add todo",
    payload:newTodo
}

todos=todoReducer(todos,addActionReduce);
console.log(todos);