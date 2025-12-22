//this file creates a reusable draggable card component.
//the Timer, music player, and to-do list will be draggable cards.
import { useEffect, useState, useRef } from "react";


export default function useDraggable(initialX, initialY) {
  
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null)
  //this function is to handle the mouse down event
  const handleMouseDown = (e) => {
    
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  //handling mouse in action
  useEffect( () => {
    const handleMouseMove = (e) => {
      
      if (isDragging && cardRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const newX = e.clientX - offset.x;
        const newY = e.clientY - offset.y;

        //this is so it clamps to viewport and doesn't go out of bounds
        const clampedX = Math.max(0, Math.min(newX, window.innerWidth - cardRect.width));
        const clampedY = Math.max(0, Math.min(newY, window.innerHeight - cardRect.height));
        
        setPosition({
          x: clampedX,
          y: clampedY
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }  
  },[isDragging, offset])
  

  return {
    position,
    handleMouseDown,
    cardRef
  };
}
