import React, { useState } from 'react'


export default function  TodoForm({addTodo}) {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
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
        Add
      </button>
    </form>

  )
}