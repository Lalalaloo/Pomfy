import React, { useState } from 'react';
import { List } from 'lucide-react';
import DraggableCard from '../DraggableCards/DraggableCard.jsx';
import ToDoWrapper from '../To-do-list/TodoWrapper.jsx';

export default function TodoMenu(){
  const [showTodo, setShowTodo] = useState(false);

  const handleTodoClick = () => {
    setShowTodo(!showTodo);
  }

  return(
    <div>
      <button 
        className='menu-todo'
        onClick={handleTodoClick}
        >
        
        <List/>

      </button>

      <div style={{ display: showTodo ? 'block' : 'none' }}>
        <DraggableCard>
          <ToDoWrapper/>
        </DraggableCard>
      </div>
    </div>
  )
}