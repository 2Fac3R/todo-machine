import { FaCheck, FaSkullCrossbones } from 'react-icons/fa'
import './TodoItem.css';


function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}>
        <FaCheck />
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <span
        className='Icon Icon-delete'
        onClick={onDelete}>
        <FaSkullCrossbones />
      </span>
    </li>
  )
}

export { TodoItem };