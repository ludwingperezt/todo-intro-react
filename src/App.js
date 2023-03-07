import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";

const defaultTodos = [
  {id: 0, text: 'Tarea 1', completed: false},
  {id: 1, text: 'Tarea 2', completed: true},
  {id: 2, text: 'Tarea 3', completed: false},
  {id: 3, text: 'Tarea 4', completed: false},
  {id: 4, text: 'Tarea 5', completed: false}
]

function App() {
  // Este es un React Hook para usar el estado.
  // Al llamar a React.useState('') estamos creando un estado que por defecto
  // será un string vacío.  La llamada a esa función retorna un array con dos
  // elementos:
  // - El primero es el valor actual de ese estado.
  // - El segundo es una función para cambiar el valor de ese estado.
  const [searchValue, setSearchValue] = React.useState('');

  const [todos, setTodos] = React.useState(defaultTodos);

  // Para el componente de TodoCounter se obtiene la cantidad de TODOs completados
  // y la cantidad total.
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // Para efectuar la búsqueda de TODOs se define una lista vacía que por defecto
  // será la lista de todos los TODOs disponibles y si existe un texto de búsqueda
  // ingresado por el usuario entonces tanto ese texto como el texto de 
  // cada TODO son convertidos a minúsculas (para evitar inconsistencias con la búsqueda
  // en mayusculas o minúsculas) y luego se compara si el texto de un TODO tiene
  // el texto ingresado por el usuario.
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  }
  else {
    //
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map(todoItem => (<TodoItem key={todoItem.id} text={todoItem.text} />))}
      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
    
  );
}

export default App;
