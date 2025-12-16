// this file is to keep track of the work sessions.
//theres supposed to be 4 sessions before the long break.
//rigth now, ive just created a function to keep track of the sessions.

import { useEffect, useState } from "react";


export default function usePomodoro(){
  //defines the modes of the pomodoro timer
  //short break, long break, work session
  const [mode, setMode] = useState("work")
  const [sessions, setSessions] = useState(0)
  const [cycle, setCycle] = useState(0)
  
  const MODES = 
    { 
      work : 25 ,
    shortBreak : 5 ,
    longBreak : 15 ,
    }
  

  const duration = MODES[mode]

  
 
  const handleTimerComplete = () =>
    { 
      
      //if the time left is 0, and the mode is work, it changes to the next mode 
      //if the mode is short break, it changes to work
      //if the mode is long break, it changes to worK
      if (mode === 'work'){

        const nextSession = sessions + 1
        setSessions(nextSession)
        
        
        if (nextSession  % 4 === 0){
          setMode('longBreak')
        } else {
          setMode('shortBreak')
        }
      }else{
        setMode('work')
      }

      if (sessions === 4){
        setSessions(0)
        setCycle(cycle + 1)
        console.log("Good Job! You've completed a full cycle of work sessions!")
      }
      

  }
 

  return {
    mode,
    sessions,
    duration,
    cycle,
    handleTimerComplete
  }
}




