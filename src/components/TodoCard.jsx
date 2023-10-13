import React from 'react'

const TodoCard = ({todo}) => {
  return (
    <div className='border shadow-lg p-4 my-5 rounded'>
        <h3> {todo.text}</h3>
        <h6>{todo.isDone ? "Tamamlandı" : "Devam Ediyor"}</h6>
        <p>{todo.date.toLocaleDateString()}</p>
        <div className='btn-group'>
        <button className='btn btn-warning '>{todo.isDone ? "Geri Al" : "Tamamla"}</button>
        <button className='btn btn-danger '>Sil</button>
        </div>
       
    </div>
  )
}

export default TodoCard