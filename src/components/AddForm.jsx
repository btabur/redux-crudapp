import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { ActionTypes } from '../redux/actionTypes/todoTypes'

const AddForm = () => {

    const dispatch= useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id:v4(),
            text: event.target[0].value,
            isDone:false,
            date: new Date()
        }
        dispatch({
            type:ActionTypes.ADD_TODO,
            payload:newTodo
        }); 
    }
      return (
    <form onSubmit={handleSubmit}
     className='btn-group'>
        <input className='form-control' type="text" />
        <button className='btn btn-primary'>Ekle</button>
    </form>
  )
}

export default AddForm