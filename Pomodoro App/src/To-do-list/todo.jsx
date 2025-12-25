import React from 'react';
import { Trash, Pen, Square } from 'lucide-react';
import './todo.css';

export default function Todo({task, toggleComplete, deleteTodo, editTodo}){

  
  return(
    <div className='todo-item'>
      <div className='checkbox-container'>
      <Square 
        onClick={() => toggleComplete(task.id)}
        fill={task.completed ? "pink" : "none"}
        stroke="pink"
        style={{cursor: 'pointer'}}
        size = {15}
      />
      
      <p 
        
        onClick={() => toggleComplete(task.id)}
        className={
        `todo-text ${task.completed ? "completed" : ""}`}>
        
        {task.task}
        
      </p>
      </div>
      

      <div className = 'todo-actions'>
        
        <Pen 
          className='edit'
          onClick={() => {
            editTodo(task.id);
          }}
          size = {15}
          style={{cursor: 'pointer'}}
        />

        <Trash 
          className='delete'
          onClick={() => {
            deleteTodo(task.id);
          }}
          style={{cursor: 'pointer'}}
          size = {15}
        />
        
      </div>
    </div>
  )
}