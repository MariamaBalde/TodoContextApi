import logo from './logo.svg';
import './App.css';
import TodoProvider from './Providers/Todoprovider';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

const App=() =>{
  return (
    <div className="App">
      <header className="">
       <h1>TODO List</h1>
      </header>
      <TodoProvider>
        <TodoForm/>
        <TodoList/>
      </TodoProvider>
    </div>
  );
}

export default App;
