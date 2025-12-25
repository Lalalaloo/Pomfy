import React, { useState } from 'react';
import { List, Clock } from 'lucide-react';
import DraggableCard from '../DraggableCards/DraggableCard.jsx';
import ToDoWrapper from '../To-do-list/TodoWrapper.jsx';
import Timer from '../pomodoroTimer/timer.jsx';
import './menu.css';

export default function Menu(){
  const [showTimer, setShowTimer] = useState(false);
  const [showTodo, setShowTodo] = useState(false);

  return(
    <>
      <div className='container'>
        <button 
          className={`menu-btn ${showTodo ? 'active' : ''}`}
          onClick={() => setShowTodo(!showTodo)}
        >
          <List size={28} />
        </button>

        <button 
          className={`menu-btn ${showTimer ? 'active' : ''}`}
          onClick={() => setShowTimer(!showTimer)}
        >
          <Clock size={28} />
        </button>
      </div>

      <DraggableCard style={{ display: showTodo ? 'block' : 'none' }}>
        <ToDoWrapper/>
      </DraggableCard>

      <DraggableCard style={{ display: showTimer ? 'block' : 'none' }}>
        <Timer/>
      </DraggableCard>
    </>
  )
}