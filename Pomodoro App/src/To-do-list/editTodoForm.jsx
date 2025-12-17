import React, { useState } from 'react'


export default function  EditTodoForm({editTodo, task}) {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("")
  }

  return(
    <form onSubmit = {handleSubmit}> 
      <input 
        type="text" 
        value = {value} 
        placeholder="Type Here..." 
        onChange = {(e) => setValue(e.target.value)} />

      <button type = 'submit'>
        update
      </button>
    </form>

  )
}