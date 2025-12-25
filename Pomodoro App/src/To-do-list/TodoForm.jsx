import React, { useState } from 'react';
import {Send} from 'lucide-react'
import './todo.css'

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
      <div className = "add-wrapper"> 
      <input className='input-box'
        type="text" 
        value = {value} 
        placeholder="Type Here..." 
        onChange = {(e) => setValue(e.target.value)} />

      <button 
        className='add-btn inside'
        type = 'submit'
        disabled = {!value.trim()}
        >
        <Send size = {15}/>
      </button>
    </div>
    </form>

  )
}