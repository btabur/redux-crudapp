import React from 'react'
import { useDispatch } from 'react-redux'
import { ActionTypes } from '../redux/actionTypes/todoTypes';

const TodoCard = ({todo}) => {
    const dispatch= useDispatch();

    const handleDelete = ()=> {
        dispatch({
            type:ActionTypes.DELETE_TODO,
            payload:todo.id
        })

    }
    const handleEdit = () => {
        //yapıldı değerini tersine çevirir
        const updated = { ...todo,isDone:!todo.isDone}
        console.log(updated)
        dispatch({
            type:ActionTypes.UPDATE_TODO,
            payload:updated
        })
    }
  return (
    <div className='border shadow-lg p-4 my-5 rounded'>
        <div className='d-flex justify-content-between'>
        <h3> {todo.text}</h3>
        <p>{todo.date.toLocaleDateString()}</p>
        </div>
      
        <h6>{todo.isDone ? "Tamamlandı" : "Devam Ediyor"}</h6>
     
        <div className='btn-group mt-3'>
        <button onClick={handleEdit} className='btn btn-warning '>{todo.isDone ? "Geri Al" : "Tamamla"}</button>
        <button onClick={handleDelete} className='btn btn-danger '>Sil</button>
        </div>
       
    </div>
  )
}

export default TodoCard