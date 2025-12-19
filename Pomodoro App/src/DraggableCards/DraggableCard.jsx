import React from 'react'
import useDraggable from './useDraggable'


export default function DraggableCard({children}){

  const {position, handleMouseDown} = useDraggable(50, 50)

  return(
    <div
      className = "card"
      onMouseDown={handleMouseDown}
      style = {{
        cursor: 'grab',
        padding: '5%',
        backgroundColor: 'blue',
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