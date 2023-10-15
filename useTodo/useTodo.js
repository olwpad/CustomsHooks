import {useReducer,useEffect} from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const init=()=>{
    return JSON.parse(localStorage.getItem("todos" )  )|| [] // esto quiere decir que si no encuentra nada en el local storaGE DEVUELVA ARREGLO VACIO
}

export const useTodo = () => {
 
    const [todos, dispatch] = useReducer(todoReducer,[],init)

    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos))
    }, [todos])
    

const hanledNewTODO=(todo)=>{
    const action={
        type:"Add Todo",
        payload:todo
    }
    dispatch(action)
}

const hanledDeleteTODO=(id)=>{
    dispatch({
        type:"remove todo",
        payload:id
    })
}

const ontoggleTodo=(id)=>{
    dispatch({
        type:"toggle todo",
        payload:id
    })
}


  return{ todos,
    hanledDeleteTODO,
    ontoggleTodo,
    hanledNewTODO}
  
}
