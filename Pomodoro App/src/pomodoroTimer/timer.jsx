import useTimer from "./useTimer"
import usePomodoro from './usePomodoro'
import { useEffect, useState } from "react"
import { Heart } from "lucide-react"
import './timer.css'
  export default function Timer(){
    const { mode, sessions, duration, cycle, handleTimerComplete } = usePomodoro()
    const timer = useTimer(duration, handleTimerComplete)

    const MODE_LABELS = {
      work: "Work",
      shortBreak: "Short Break",
      longBreak: "Long Break",
    };

    //i realized i have no visuals for the sessions, so im gonna add hearts to represent the sessions

    const hearts = () => {
      return Array.from({ length: 4 }, (_, index) =>{
        const isFilled = index < sessions //this fills the hearts based on the number of sessions

        return(
          <Heart
            key={index}
            fill={isFilled ? "#FF7373" : "none"}
            stroke={isFilled ? "#FF7373" : "white"}
            size={20}
          className={`session-heart ${isFilled ? "filled" : ""}`}
            />
        )
        
      })
    }

    //i want more animation, so im going to add a cool little animation for the mode changes

    const [modeChange, setModeChange] = useState(false);
    const [prevMode, setPrevMode] = useState(mode)

    useEffect(() => {
      if (mode !== prevMode) {
        setModeChange(true);

        //i also want it to play a sound when the mode changes
        const soundFile = mode === 'work' ? 'work.wav' : 'break.mp3'
        const audio = new Audio(soundFile)
        audio.play().catch(e => console.error("Audio playback failed:", e))

        setTimeout(() => {
          setModeChange(false);
        }, 3000)

        setPrevMode(mode);
        
      }
    }, [mode, prevMode]);


//this is to reset the timer when the mode changes
    useEffect(() => {
      timer.handleReset()
      
    }, [mode])
    
   
    
  
    
    
    return (
        <div className="timer">

          {modeChange && (

          <div 
            className="mode-change-overlay"
            onClick ={() => setModeChange(false)}
            >

            <div className="mode-change-text">
              <h2>{mode === 'work' ? "Work Time!" : "Break Time!!"}</h2>
              <p>{mode === 'work' ? "Make sure to focus." : "Take a breather"}</p>
              <p>{mode === 'work' ? "I'm watching you." : "<3"}</p>
            </div>

          </div>



          )}

          
          <div className = {`timer-content ${modeChange ? 'hidden' : ''}`}>
            <div className="smc">

              <p className="sessions">Sessions: {sessions}</p>
              <p className = 'mode'>{MODE_LABELS[mode]}</p>

              <p className="cycle">Cycle: {cycle}</p>
            </div>

            
            <p className = 'minutes'>
              {timer.minutes}:{timer.seconds.toString().padStart(2, "0")}

            </p>

            </div>

            <div className="hearts">
              {hearts()}
            </div>


            <div className="start-reset">
              {timer.isRunning ? (
                <button className = "pause"

                  onClick={timer.handleStop}>Pause</button>

              ) : (

                <button className = "start" onClick={timer.handleStart}>Start</button>

              )}

              <button className = 'reset' onClick = {timer.handleReset}>Reset</button>

            </div>


          
    

        
        
          
          
        </div>
      )
    }

  
