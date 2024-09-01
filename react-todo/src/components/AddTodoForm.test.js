// AddTodoForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddTodoForm from './AddTodoForm';

test('adds a new todo on form submission', () => {
  // Step 1: Mock a function to handle the form submission
  const addTodo = jest.fn();

  // Step 2: Render the AddTodoForm component
  const { getByPlaceholderText, getByText } = render(<AddTodoForm onAddTodo={addTodo} />);

  // Step 3: Simulate user input
  const input = getByPlaceholderText('todo name');
  fireEvent.change(input, { target: { value: 'New Todo' } });

  // Step 4: Simulate form submission
  const button = getByText('Add todo');
  fireEvent.click(button);

  // Step 5: Assert that the addTodo function was called with the correct argument
  expect(addTodo).toHaveBeenCalledTimes(1);
  expect(addTodo).toHaveBeenCalledWith('New Todo');
});
