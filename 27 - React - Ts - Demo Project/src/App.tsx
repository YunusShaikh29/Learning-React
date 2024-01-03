import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const todos = [
    new Todo('Learn react'),
    new Todo('Learn Typescript'),
    new Todo('Learn NextJS')
  ]


  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
