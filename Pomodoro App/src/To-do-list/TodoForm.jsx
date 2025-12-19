import React, { useState } from 'react'


export default function  TodoForm({addTodo}) {
  const [value, setValue] = useState("")
  
      
  

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim())
    {
      addTodo(value);
      setValue("")
    }

  }   
   
  return(
    <form onSubmit = {handleSubmit}> 
      <input 
        type="text" 
        value = {value} 
        placeholder="Type Here..." 
        onChange = {(e) => setValue(e.target.value)} />

      <button 
        type = 'submit'
        disabled = {!value.trim()}
        >
        Add
      </button>
    </form>

  )
}