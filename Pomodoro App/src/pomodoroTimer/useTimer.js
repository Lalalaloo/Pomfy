import { useState, useEffect, useRef } from 'react'


export default function useTimer(duration, onComplete){

  
  const [timeLeft, setTimeLeft] = useState(duration * 60)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)
 
  useEffect(() => {
    setTimeLeft(duration * 60)
    setIsRunning(false)
  }, [duration])

  // Countdown logic
  useEffect(() => {
    if (!isRunning) return
    if (intervalRef.current) return

    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        // Normal countdown
        if (prev <= 1) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          setIsRunning(false)
          onComplete?.()
          return 0
        }
        return prev - 1
      })
    }, 1000)
                                     

    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
      
    
  }, [isRunning, onComplete])
 // Add minutes to dependency array


  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  // Start, Stop, Reset
  const handleStart = () => setIsRunning(true)
  const handleStop = () => setIsRunning(false)
  const handleReset = () => {   
      setTimeLeft(duration * 60)
      setIsRunning(false) 
      return 
    
  }
  return {
    minutes,
    seconds,
    handleStart,
    handleStop,
    handleReset,
    isRunning,
    timeLeft
  }
}
