import React from 'react'
import useDraggable from './useDraggable'
import './dragCard.css'

export default function DraggableCard({children}){

  const {position, handleMouseDown, cardRef} = useDraggable(window.innerWidth * 0.1, window.innerHeight * 0.1)

  return(
    <div
      className = "card"
      ref={cardRef}
      onMouseDown={handleMouseDown}
      style = {{
        cursor: 'grab',
        padding: '.8rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: 'fit-content',
        height: 'fit-content',
      }}
      >
      {children}
    </div>
  )

  
}