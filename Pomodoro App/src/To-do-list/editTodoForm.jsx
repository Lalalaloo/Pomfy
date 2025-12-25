import React, { useState } from 'react'
import {Send} from 'lucide-react'

export default function  EditTodoForm({editTodo, task}) {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("")

  }

  return(
    <form 
      onSubmit = {handleSubmit}> 
      <div className='edit-form'>
      <input 
        className='edit-box'
        type="text" 
        value = {value} 
        placeholder="Update your task..." 
        onChange = {(e) => setValue(e.target.value)} />

      <button 
        className = 'update-btn inside'
        type = 'submit'>
        <Send size = {18}/>
      </button>
        </div>
    </form>

  )
}