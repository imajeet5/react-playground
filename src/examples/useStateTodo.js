import React, { useState } from 'react';

export default function TodoUsingState() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: Date.now(),
        completed: false,
      })
    );

    setInput('');
  };
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Todo Using useState"
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </form>

      {todos.map(({ text, id, completed }) => (
        <div key={id}>
          <span style={{ color: completed ? '#AAA' : '#000' }}>{text}</span>
          <button onClick={() => toggleTodo(id)}>Toggle</button>
          <button onClick={() => removeTodo(id)}>X</button>
        </div>
      ))}
    </div>
  );
}
