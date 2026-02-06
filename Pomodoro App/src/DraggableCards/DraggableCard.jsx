import React from 'react'
import useDraggable from './useDraggable'
import './dragCard.css'

export default function DraggableCard({children, style}){

  const {position, handleMouseDown,handleTouchStart, cardRef} = useDraggable(window.innerWidth * 0.1, window.innerHeight * 0.1)


  return(
    <div
      className = "card"
      
      ref={cardRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style = {{
        cursor: 'grab',
        padding: '.4rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        touchAction: 'none',
        width: 'fit-content',
        height: 'fit-content',

        ...style
      }}
      >
      {children}
    </div>
  )

  
}