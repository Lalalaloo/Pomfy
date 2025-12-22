import "./App.css";
import Timer from "./pomodoroTimer/timer.jsx";
import TodoWrapper from "./To-do-list/TodoWrapper.jsx";
import DraggableCard from "./DraggableCards/DraggableCard.jsx";
import BgStyle from "./bgSwitch/bgStyle.jsx";
import TodoMenu from "./menu/todoMenu.jsx";
import TimerMenu from "./menu/timerMenu.jsx";

export default function Page() {
  return (
    <BgStyle>
      
      <TodoMenu />
      <TimerMenu />
      

     
    </BgStyle>
    
    
  );
}