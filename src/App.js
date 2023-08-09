import './App.css';
import { useState } from 'react';
import TodoList from './List/TodoList';

function App() {
  const [data,setData] = useState('');
  const [todo,setTodo] = useState([]);

const HandleInput = (e)=>{
setData(e.target.value);
}

const HandleAdd = ()=>{
    setTodo([...todo,{id:todo.length,todo:data}])
    setData('')
}

  return (
    <div className="App">
   <h2>Todo App</h2>
   <input value={data} onChange={HandleInput}/><button onClick={HandleAdd}>Add</button>
{
  todo.map((todo)=>{
return <TodoList todo = {todo}/>
  })
}

    </div>
  );
}

export default App;
