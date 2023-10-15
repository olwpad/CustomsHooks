export const todoReducer=(initialstate=[],action)=>{
    switch (action.type) {
        case "Add Todo":
            return [...initialstate,action.payload];
        case"remove todo":
            return initialstate.filter(todo=>todo.id !==action.payload)
         case "toggle todo":
            return initialstate.map(todo=>{
                if(todo.id===action.payload){
                    return{
                        ...todo,
                        done:!todo.done
                    }
                }
                return todo;
            })
        default:
            return initialstate;
    }
}