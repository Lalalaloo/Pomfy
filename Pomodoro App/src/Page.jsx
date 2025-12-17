import './App.css'
import Timer from './pomodoroTimer/timer.jsx'
import TodoWrapper from './To-do-list/TodoWrapper.jsx'
export default function Page() {
  return(
    <div>
        <Timer />
        <TodoWrapper/>
    </div>
  )
}