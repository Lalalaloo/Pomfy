//this file creates a reusable draggable card component.
//the Timer, music player, and to-do list will be draggable cards.
import React, { useEffect, useState } from "react";


export default function useDraggable(initialX, initialY) {
  
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

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
      
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
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
  };
}
