import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import DraggableCard from '../DraggableCards/DraggableCard.jsx';
import Timer from '../pomodoroTimer/timer.jsx'

export default function TimerMenu(){
  const [showTimer, setShowTimer] = useState(false);

  const handleTimerClick = () => {
    setShowTimer(!showTimer);
  }

  return(
    <div>
      <button 
        className='menu-timer'
        onClick={handleTimerClick}>
        <Clock/>
      </button>

      <div style={{ display: showTimer ? 'block' : 'none' }}>
        <DraggableCard>
          <Timer/>
        </DraggableCard>
      </div>
    </div>
  )
}