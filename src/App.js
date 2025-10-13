import './App.css';
import image from './photo4.avif';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <h1>Your To Do List App</h1>
      </div>
      <ToDoList />
      <div className='Container'>
        <img src={image} alt='To Do List' width='400px' className='Photo'/>
      </div>
    </div>
  );
}

export default App;
