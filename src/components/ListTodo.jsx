import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import TodoCard from './TodoCard'

const ListTodo = () => {
    const state = useSelector((store)=>store.todoReducer)
  return (
    <div>
        
        {state.isEmpty ?(
             <h5 className='text-center mt-5'>Herhangi Bir kayıt eklenmedi</h5>)
        : (state.todos.map((todo,index) => <TodoCard key={index} todo= {todo}/>))
    }
    </div>
  )
}

export default ListTodo