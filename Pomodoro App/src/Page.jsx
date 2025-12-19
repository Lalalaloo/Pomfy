import "./App.css";
import Timer from "./pomodoroTimer/timer.jsx";
import TodoWrapper from "./To-do-list/TodoWrapper.jsx";
import DraggableCard from "./DraggableCards/DraggableCard.jsx";
export default function Page() {
  return (
    <div>
      <DraggableCard >
        <Timer />
      </DraggableCard>

      <DraggableCard>
        <TodoWrapper />
      </DraggableCard>
      
    </div>
  );
}
