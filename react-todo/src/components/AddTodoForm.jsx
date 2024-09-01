// AddTodoForm.js
import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
  const [todoName, setTodoName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(todoName);
    setTodoName(''); // Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="todo name"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}

export default AddTodoForm;
