
import './App.css'
import TaskInput from './component/TaskInput';
import { useState } from 'react';
import TaskList from './component/TaskList';

function App() {
  const [tasks,setTasks] = useState([]);

  function addTask(text){
    const newTask = {id: Date.now(),text};

    setTasks((prev) =>[newTask,...prev]);
  }
  function deleteTask(id){
    setTasks(prev => prev.filter(t => t.id !== id));
  }
  return(
    <div classname = 'task'>
      <h1>Task Manager</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks ={tasks} onDelete={deleteTask} />
    </div>
  );

}

export default App;
