import "./App.css";
import Timer from "./pomodoroTimer/timer.jsx";
import TodoWrapper from "./To-do-list/TodoWrapper.jsx";
import DraggableCard from "./DraggableCards/DraggableCard.jsx";
import BgStyle from "./bgSwitch/bgStyle.jsx";

export default function Page() {
  return (
    <BgStyle>
      <DraggableCard>
        <Timer />
      </DraggableCard>
      <DraggableCard>
        <TodoWrapper />
      </DraggableCard>
    </BgStyle>
  );
}