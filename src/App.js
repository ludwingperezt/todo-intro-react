import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";

const todos = [
  {id: 0, text: 'Tarea 1', completed: false},
  {id: 1, text: 'Tarea 2', completed: false},
  {id: 2, text: 'Tarea 3', completed: false},
  {id: 3, text: 'Tarea 4', completed: false},
  {id: 4, text: 'Tarea 5', completed: false}
]

function App() {
  return (
    <React.Fragment>
      
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todoItem => (<TodoItem key={todoItem.id} text={todoItem.text} />))}
      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
    
  );
}

export default App;
