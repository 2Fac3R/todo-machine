import React from 'react';
import { TodoContext } from '../../Context/TodoProvider';
import './TodoCounter.css';


function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext)
  return (
    <h1 className='TodoCounter'>
      You have completed <span>{completedTodos}</span> out of <span>{totalTodos}</span> todos
    </h1>
  )
}

export { TodoCounter };
