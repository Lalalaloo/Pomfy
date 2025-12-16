import useTimer from "./useTimer"
import usePomodoro from './usePomodoro'
import { useEffect } from "react"

  export default function Timer(){
    const { mode, sessions, duration, cycle, handleTimerComplete } = usePomodoro()
    const timer = useTimer(duration, handleTimerComplete)
   

    useEffect(() => {
      timer.handleReset()
      timer.handleStart()
    }, [mode])
    
    return (
        <div>
          <button onClick = {timer.handleStart}>Start</button>
          <button onClick = {timer.handleStop}>Pause</button>
          <button onClick = {timer.handleReset}>Reset</button>
          <p>
            {timer.minutes}:{timer.seconds.toString().padStart(2, "0")}
          </p>
          <p>Mode: {mode}</p>
          <p>Sessions: {sessions}</p>
          <p>Cycle: {cycle}</p>
        </div>
      )
    }

  
