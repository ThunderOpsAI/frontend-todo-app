import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import type { Todo, FilterType } from './types/todo';
import { loadTodos, saveTodos } from './utils/storage';
import './index.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>TODO</h1>
      </header>
      <main>
        <TodoInput onAdd={addTodo} />
        <div className="controls">
          <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
        </div>
        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
    </div>
  );
}

export default App;
