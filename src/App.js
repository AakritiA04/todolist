import logo from './logo.svg';
import './App.css';
import Todolist from './component/Todolist';

function App() {
  return (
    <div className="App" 
    style={{display:"flex",
    alignItems:"center",
    flexDirection:"column"}}>
      <h1>To-Do-List</h1>
        <Todolist />
    </div>
  );
}

export default App;
