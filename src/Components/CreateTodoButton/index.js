import { useContext } from 'react';
import { TodoContext } from '../../Context/TodoProvider';
import './CreateTodoButton.css';


function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext)
  return (
    <button
      className='CreateTodoButton'
      onClick={() => {
        setOpenModal(openModal => !openModal);
      }}
    >
      +
    </button>
  );
}
export { CreateTodoButton };