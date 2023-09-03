import React from 'react';
import { TodoContext } from '../../Context/TodoProvider';
import './TodoSearch.css';


function TodoSearch() {
  const { searchValue, SetSearchValue } = React.useContext(TodoContext)
  return (
    <input
      type="text"
      placeholder="Search..."
      className="TodoSearch"
      value={searchValue}
      onChange={
        (event) => {
          SetSearchValue(event.target.value);
        }
      }
    />
  )
}

export { TodoSearch };
