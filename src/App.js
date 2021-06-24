import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get('http://localhost:8000/todos/');
      setTodos(res.data);
    }

    getTodos();
  }, []);

  return (
    <div className="todo-app">
      <TodoList todos = { todos }/>
    </div>
  );
}

export default App;
