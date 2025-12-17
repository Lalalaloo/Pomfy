import React from 'react'
import { Trash, Pen, Circle } from 'lucide-react'

export default function Todo({task, toggleComplete, deleteTodo, editTodo}){
  return(
    <div>
      
      <Circle 
        onClick={() => toggleComplete(task.id)}
        fill={task.completed ? "pink" : "none"}
        stroke="pink"
        style={{cursor: 'pointer'}}
      />
      
      <p 
        
        onClick={() => toggleComplete(task.id)}
        className={
        `${task.completed ? "completed" : ""}`}>
        {task.task}
        
      </p>

      <div>
        
        <Trash 
          onClick={() => {
            deleteTodo(task.id);
          }}
          style={{cursor: 'pointer'}}
        />
        
        <Pen 
          onClick={() => {
            editTodo(task.id);
          }}
          style={{cursor: 'pointer'}}
        />
        
      </div>
    </div>
  )
}