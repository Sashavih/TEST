import React, { useState, useEffect } from "react";

interface Todo {
  id: number,
  title: string,
  completed: boolean
}


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState('');
  const [newTodo, setNewTodos] = useState<string>('');
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/10")
      .then((response) => response.json())
      .then((data) => setTodos([data]));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    setTodos([...todos, newTodo]);
    setValue('');
  }

  const handleCheckboxClick = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


  return (
    <div>
      <div>
        <h1>Todos</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxClick(todo.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="Добавьте задачу ..." onChange={(e => setValue(e.target.value))} />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default App;