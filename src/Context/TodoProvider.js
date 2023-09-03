import { createContext, useState } from 'react'

const TodoContext = createContext();
const defaultTodos = [
  { text: 'Learn React', completed: false },
  { text: 'Learn Typescript', completed: false },
  { text: 'Learn Redux', completed: true },
  { text: 'Learn testing in js', completed: false },
  { text: 'Practice a lot', completed: true },
]


function TodoProvider({ children }) {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, SetSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false,
    });
    setTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    let currentState = newTodos[todoIndex].completed;
    newTodos[todoIndex].completed = !currentState;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      searchedTodos,
      openModal,
      SetSearchValue,
      addTodo,
      completeTodo,
      deleteTodo,
      setOpenModal
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };