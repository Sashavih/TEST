import React, { useState, useEffect } from "react";

interface Todo {
  userid: number,
  id: number,
  title: string,
  completed: boolean
}


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/10")
      .then((response) => response.json())
      .then((data) => setTodos([data]));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    console.log(value);
    setValue('');
  }

  return (
    <div>
      <div>
        <h1>Todos</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="Добавьте задачу..." onChange={(e => setValue(e.target.value))} />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default App;

