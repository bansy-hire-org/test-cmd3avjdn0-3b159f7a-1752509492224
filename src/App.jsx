import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import VueFilter from './components/VueFilter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterPriority, setFilterPriority] = useState('All');

  useEffect(() => {
    // Load tasks from local storage or an API
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = filterPriority === 'All' ? tasks : tasks.filter(task => task.priority === filterPriority);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <VueFilter onFilterChange={setFilterPriority} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;