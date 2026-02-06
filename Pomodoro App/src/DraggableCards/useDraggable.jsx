//this file creates a reusable draggable card component.
//the Timer and to-do list will be draggable cards.
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

  //adding a touch for touch devices

const handleTouchStart = (e) => {
    setIsDragging(true);
    setOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
}

 
  //resizing the things
  useEffect( () => {
    const handleResize = (e) => {
      
      if (cardRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const clampedX = Math.max(0, Math.min(newX, window.innerWidth - cardRect.width));
        const clampedY = Math.max(0, Math.min(newY, window.innerHeight - cardRect.height));
        
        if(clampedX !== position.x || clampedY !== position.y) {
          setPosition({ x: clampedX,  y: clampedY });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[position.x, position.y]);

  //drag orboth mouse and touch
  useEffect(() => {
    const handleMove = (e) => {
      if(isDragging && cardRef.current) {
        const clientX = e.clientX ?? e.touches[0].clientX;
        const clientY = e.clientY ?? e.touches[0].clientY;

        if(clientX == undefined || clientY == undefined) return;
      
        const cardRect = cardRef.current.getBoundingClientRect();
        const newX = clientX - offset.x;
        const newY = clientY - offset.y;

        const clampedX = Math.max(0, Math.min(newX, window.innerWidth - cardRect.width));
        const clampedY = Math.max(0, Math.min(newY, window.innerHeight - cardRect.height));

        setPosition({ 
          x: clampedX,  
          y: clampedY });
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, offset]);
  return {
    position,
    handleMouseDown,
    handleTouchStart,
    cardRef
  };
}
