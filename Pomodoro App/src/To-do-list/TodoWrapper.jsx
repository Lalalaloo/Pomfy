import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import Todo from "./todo";
import EditTodoForm from "./editTodoForm.jsx"
import './todo.css'

export default function ToDoWrapper() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); 
  };

  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing:
    !todo.isEditing} : todo))
  }
  
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  return (
    <div className="todo-wrapper">
      
      <h2>To-Do List</h2>
      <hr class="my-line"/>
      
     

      {/* styling the todos, they need a scrollable area.*/}
      <div className="todo-list">

        {/* im gonna maek this easier by setting it to send all the completed tasks to the bottom*/}

        {todos
          .sort((a,b) => {
            if (a.completed === b.completed)  {
                return 0;
              } else if (a.completed){
                return 1;
              }
              else{
                return -1;
              }
          })
          
          .map((todo) =>
            todo.isEditing ? (
              <EditTodoForm 
                key={todo.id}
                editTodo={editTask}
                task = {todo}/>
            ) : (
              <Todo
                task={todo}
                key={todo.id} 
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            )
        )}
      </div>

       <TodoForm addTodo={addTodo} />
    </div>
  );
}
