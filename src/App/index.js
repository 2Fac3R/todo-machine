import { TodoProvider } from '../Context/TodoProvider';
import { AppUI } from './AppUI';


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
